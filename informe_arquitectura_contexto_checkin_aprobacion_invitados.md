INFORME DE ARQUITECTURA Y CONTEXTO: SISTEMA DE CHECK-IN Y APROBACIÓN DE INVITADOS (QR)

Este documento resume la discusión, las decisiones arquitectónicas, las tecnologías implementadas y los mecanismos de resolución de problemas para el sistema de control de acceso y aprobación de invitados basado en códigos QR, utilizando Supabase y Deno Edge Functions.

=======================================================

ALCANCE Y OBJETIVO PRINCIPAL
=======================================================

El objetivo central era diseñar un flujo de trabajo que permitiera a un guardia escanear un código QR de un invitado y, si el invitado requería aprobación de un residente, disparar una notificación push solo cuando el invitado estuviera físicamente en la puerta, evitando notificaciones prematuras.

=======================================================
2. TECNOLOGÍAS Y COMPONENTES DE ARQUITECTURA

Base de Datos: PostgreSQL (Supabase)

Uso: Almacenamiento de invitados, residentes, y tabla de estados temporales (pending_guest_approvals).

Práctica Usada: RLS, Funciones PL/pgSQL, Índices Parciales.

Lógica de Acceso/Check-in: Deno Edge Functions (TypeScript)

Uso: Lógica de validación de QR, autenticación de guardias y bifurcación de flujos.

Práctica Usada: Uso de RPCs de Supabase, tipado fuerte.

Disparador de Eventos: Supabase Webhooks

Uso: Mecanismo asíncrono para notificar el evento de escaneo.

Práctica Usada: Uso del evento UPDATE con filtro de columna específico.

Notificaciones Push: Firebase Cloud Messaging (FCM)

Uso: Envío de la notificación de "Invitado en puerta" al residente.

Práctica Usada: Backend dedicado y seguro para manejar las credenciales de FCM.

Seguridad/Autorización: Supabase Auth/JWT

Uso: Autenticación del guardia (scan-qr-check-status-v3.ts) y del residente (resolve-guest-approval.ts).

Práctica Usada: Uso de auth.uid() y funciones RPC con permisos (ej. userHasPermission).

=======================================================
3. ESTRUCTURA DE DATOS CLAVE

Tabla: public.pending_guest_approvals

| Columna | Significado/Propósito | Rol en la Arquitectura |
| :------ | :-------------------- | :--------------------- |
| guest_id | Invitado al que se refiere la solicitud. | |
| assigned_to_user_id | Destinatario de la aprobación (el residente). | Clave para enviar la notificación push. |
| status | PENDING, APPROVED, DENIED, etc. | Estado actual de la solicitud. |
| guardian_user_id | Identificador del guardia que escanea. | El disparador CRÍTICO del Webhook. Su transición de NULL a un valor dispara el proceso de notificación. |

Buena Práctica Implementada: Se sugirió y confirmó la necesidad de un Índice Único Parcial sobre (guest_id) filtrando por status = 'PENDING', para evitar que un invitado tenga múltiples solicitudes activas de aprobación al mismo tiempo.

=======================================================
4. RESOLUCIÓN DE PROBLEMAS Y FLUJOS CRÍTICOS

El principal desafío fue cómo distinguir entre la creación del registro de aprobación y el escaneo físico del invitado.

A. Flujo de Creación de Invitados (Problema y Solución)

Problema: La función public.create_guest_record ya inserta el registro en pending_guest_approvals con status='PENDING' en el momento de la planificación, no de la llegada.

Decisión: Se descartó usar el Webhook INSERT en la tabla pending_guest_approvals. Esto garantiza que la notificación no se envíe al residente hasta que el guardia lo escanee.

B. Flujo de Escaneo de QR (Implementación scan-qr-check-status-v3.ts)

Esta Deno Edge Function es el corazón del control de acceso:

Condición

Acción de la Edge Function

Resultado y Consecuencia

requires_approval = FALSE

UPDATE guests (checked_in_at = NOW())

Acceso directo concedido (flujo rápido).

requires_approval = TRUE

1. Busca la aprobación pendiente (por guest_id). 2. Si guardian_user_id IS NULL, realiza un UPDATE para establecer guardian_user_id = auth.uid().

ESTE UPDATE DISPARA EL WEBHOOK. El guardia espera. El residente recibe la notificación.

C. Configuración del Webhook (El Disparador Físico)

Se definió la configuración exacta para el Webhook en Supabase para lograr el objetivo:

Tabla Monitoreada: pending_guest_approvals

Evento Disparador: UPDATE

Filtro de Columna (CRUCIAL): guardian_user_id IS NOT NULL

Motivo: Este filtro asegura que el webhook se ejecute solo una vez cuando el registro es actualizado por la Deno Edge Function del guardia (la transición de NULL a un valor).

=======================================================
5. FLUJO DE NOTIFICACIÓN Y APROBACIÓN FINAL

Disparo: El UPDATE del guardia activa el Webhook.

Recepción: El Webhook POSTea un payload minimalista (assigned_to_user_id, guest_id, approval_id) al backend de FCM (por ejemplo, una Cloud Function).

Push: El backend de FCM envía la notificación push al dispositivo del residente.

Resolución (resolve-guest-approval.ts): El residente hace clic en Aceptar/Denegar en su app. La Edge Function actualiza el status del registro y, si es APPROVED, finalmente actualiza la tabla guests.checked_in_at para completar la entrada.

=======================================================
RESUMEN FINAL

La arquitectura propuesta es robusta, segura (gracias a RLS y Deno Edge Functions) y cumple con el requisito más complejo: utilizar el registro del guardia (guardian_user_id) como un mecanismo de señalización de presencia física y único disparador de la notificación al residente.
