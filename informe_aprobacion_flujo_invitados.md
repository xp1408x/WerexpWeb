Informe de Arquitectura: Sistema de Aprobación de Invitados (QR Check-in)

Este documento resume la arquitectura implementada y planificada para gestionar el check-in de invitados mediante códigos QR, incluyendo la lógica de bifurcación de flujos para la aprobación del residente cuando es requerida.

1. Tecnologías Centrales Utilizadas

Componente

Tecnología

Propósito

Base de Datos

PostgreSQL (Supabase)

Almacenamiento de datos, RLS, Vistas, y funciones PL/pgSQL.

Lógica de Check-in/API

Deno Edge Functions (TypeScript)

Lógica de autenticación, validación de QR y manejo de flujos.

Disparador de Eventos

Supabase Webhooks

Enlace asíncrono entre la base de datos y el servicio de notificaciones.

Notificaciones

Firebase Cloud Messaging (FCM)

Backend seguro para el envío de notificaciones push al residente.

2. Modelado de Datos (Input del Usuario)

El usuario proporcionó la definición crítica de la tabla que gestiona el estado de aprobación temporal:

Tabla: public.pending_guest_approvals

Columna Clave

Propósito

Observación

guest_id

Enlace al invitado.



assigned_to_user_id

CRUCIAL. Residente/propietario responsable de la aprobación.

El destinatario final de la notificación.

status

PENDING, APPROVED, DENIED, EXPIRED.



guardian_user_id

CRUCIAL. Identifica al guardia que escaneó el QR.

Utilizado como filtro para disparar el Webhook.

created_by

Quién creó la solicitud inicial (ej. Property Manager o el Residente).



Índice Único Parcial: Se definió un índice único en (guest_id) donde status = 'PENDING', asegurando que solo pueda existir una solicitud activa por invitado.

3. Flujo de Creación de Invitados (Función PL/pgSQL)

El usuario proporcionó la función public.create_guest_record.

Problema Identificado por el Usuario (Punto de inflexión): La función ya inserta el registro en pending_guest_approvals con status='PENDING' al momento de la creación del invitado, no al momento del escaneo.

Resolución Arquitectónica: Esto llevó a la decisión de no usar el evento INSERT para disparar la notificación. En su lugar, se usa el evento UPDATE activado por el guardia, garantizando que el residente solo sea notificado cuando el invitado está físicamente presente.

4. Flujo de Escaneo de QR (Deno Edge Function scan-qr-check-status-v3.ts)

Esta es la función llamada por el dispositivo del guardia.

Lógica Clave:

Autenticación y Permiso: Verifica el token de autenticación del guardia y utiliza la RPC userHasPermission('guest:scan:qr') como mecanismo de "Fail Fast" para la autorización.

Validación de QR/Invitado: Busca el invitado por qr_token, valida expires_at y checked_in_at.

Bifurcación del Flujo:

Acceso Directo (requires_approval = FALSE): Realiza un UPDATE directo a guests.checked_in_at y responde con status: 'CHECKED_IN'.

Requiere Aprobación (requires_approval = TRUE):

Busca el estado en pending_guest_approvals.

Si status='PENDING' y guardian_user_id IS NULL, realiza un UPDATE para establecer guardian_user_id = guardUserId.

Este UPDATE es el DISPARADOR DEL WEBHOOK hacia Firebase.

Responde con status: 'PENDING_CREATED' (código 202) y approval_id.

Buena Práctica: Se aseguró que la función utiliza el campo assigned_to_user_id obtenido del registro del invitado, tal como fue solicitado por el usuario, para la trazabilidad.

5. Flujo de Resolución de Aprobación (Deno Edge Function resolve-guest-approval.ts)

Esta función es el endpoint que la aplicación móvil del residente llama al presionar "Aceptar" o "Denegar" en la notificación.

Lógica Clave:

Validación de Permiso: Verifica que el usuario que llama (auth.uid()) sea idéntico al assigned_to_user_id de la solicitud pendiente, impidiendo que terceros aprueben o rechacen.

Actualización de Estado: Actualiza pending_guest_approvals.status a APPROVED o DENIED.

Check-in Final: Si la acción es ACCEPT, realiza el UPDATE a guests.checked_in_at para registrar la entrada efectiva.

6. Arquitectura de Notificación (Supabase Webhooks)

Problema Resuelto: Se evitó la exposición de credenciales sensibles (FCM) al delegar el envío de notificaciones a un backend seguro.

Resolución y Configuración: Se estableció el siguiente protocolo de Webhook:

Propiedad

Configuración Final

Razón de la Elección

Tabla

pending_guest_approvals



Evento

UPDATE

CRUCIAL: Permite notificar solo tras la llegada física.

Columna Monitoreada

guardian_user_id



Condición de Filtro

IS NOT NULL

El webhook se dispara la primera vez que la Edge Function del guardia establece este campo, activando el proceso de notificación Push al assigned_to_user_id.