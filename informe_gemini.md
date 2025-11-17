# 📝 Informe Consolidado del Diseño de Lógica de Negocio y Seguridad en PostgreSQL

Este informe detalla la evolución del diseño del sistema de gestión de condominios, cubriendo la seguridad de accesos, la automatización transaccional y las mejores prácticas de arquitectura en la base de datos.

---

## 1. Contexto y Tecnología Base

| Aspecto | Tecnología/Detalle |
| :--- | :--- |
| **Plataforma Base** | PostgreSQL (Supabase) |
| **Lógica de Negocio** | PL/pgSQL (Funciones RPC, Triggers) |
| **Seguridad y Permisos**| Row Level Security (RLS) y Roles personalizados |
| **Automatización** | `pg_cron` (Para tareas de mantenimiento recurrentes) |

---

## 2. Módulo de Creación de Invitados (`create_guest_record`)

### A. Validación y Buenas Prácticas

| Problema/Requisito | Solución Implementada | Código Clave (PL/pgSQL) |
| :--- | :--- | :--- |
| **Validar Expiración** | Se verifica que la fecha `expires_at` no sea pasada ni presente. | `IF expires_at <= now() THEN RAISE EXCEPTION ...` |
| **Integración de Solicitud (Atomicidad)** | La solicitud pendiente (`pending_guest_approvals`) se crea inmediatamente después del `INSERT` del invitado, garantizando atomicidad. | `IF v_new_guest.requires_approval = TRUE THEN INSERT INTO pending_guest_approvals ...` |
| **Configuración Flexible** | El valor por defecto de `expires_at` se basa en la configuración del condominio (`condo_settings.max_qr_validity_days`). | Obtener `v_max_qr_days` de `condo_settings`. |

---

## 3. Módulo de Seguridad y Control de Acceso (Guardias)

### A. Control de Acceso y Visibilidad (RLS)

| Requisito de RLS | Estrategia de Implementación |
| :--- | :--- |
| **Visibilidad de Registros** | Las políticas RLS (`SELECT`) se basan en: 1. Ser el usuario asignado (`assigned_to_user_id = auth.uid()`). 2. Tener el permiso de gestión (`guest:manage:condo`) o escaneo (`guest:scan:qr`) y pertenecer al mismo condominio. |
| **Restricción de Columna** | Se usa un **`BEFORE UPDATE` Trigger** (`restrict_guardian_update`) para impedir que los Guardias modifiquen campos sensibles (nombre, asignación, expiración), permitiendo solo `qr_status_id` y `used_at`. |

### B. Flujo de Check-In del Guardia (`guard_check_in_guest`)

| Flujo de Negocio | Detalle de la Implementación PL/pgSQL | Buena Práctica / Resolución |
| :--- | :--- | :--- |
| **Permiso/Validación** | Se verifica `user_has_permission('guest:scan:qr')` y que el QR esté `'active'` y **no expirado**. | Bloqueo estricto al inicio de la función. |
| **Aprobación Requerida** | Si `requires_approval = TRUE`, se intenta insertar la solicitud pendiente. | Se elimina la verificación `IF NOT EXISTS` a favor de un bloque `BEGIN/EXCEPTION WHEN unique_violation THEN NULL`. |
| **Concurrencia** | El **Índice Único Parcial** (`idx_unique_pending_approval WHERE status = 'PENDING'`) maneja la concurrencia, previniendo duplicados de solicitudes. | Confiabilidad en el índice para la integridad de datos. |
| **Cambio de Flujo** | Después de insertar/verificar la solicitud, el estado del invitado cambia a `'pending_approval'`. | Se lanza una excepción específica (`ERRCODE = 'P9999'`) para señalizar al cliente que el *check-in* debe detenerse y pasar a la pantalla de aprobación. |

---

## 4. Automatización y Mantenimiento

| Tarea de Mantenimiento | Solución Técnica | Detalle y Seguridad |
| :--- | :--- | :--- |
| **Expiración de QRs** | Función `public.expire_qr_codes()` | Ejecutada por un `pg_cron job` (ej: cada hora). |
| **Ejecución Segura** | | La función utiliza `SECURITY DEFINER` para asegurarse de que tiene permisos para actualizar todas las filas de `guests`, ignorando el RLS. |

---

## 5. Diseño del QR (Edge Function)

| Aspecto | Implementación en la Edge Function | Propósito de Seguridad |
| :--- | :--- | :--- |
| **Contenido del QR** | Solo el *endpoint* de *check-in* y el `qr_token` (e.g., `.../v1/guard-check-in?token=UUID`). | **2FA Implícito:** El QR es un token (algo que tienes). El Guardia autenticado es el segundo factor (quién eres). |
| **Branding** | Consulta la tabla `condominium_branding` (e.g., `primary_color`) usando el `condominium_id` del invitado. | Mejora la experiencia visual y la identificación del condominio. |

---

## 6. Visión Global del Proyecto (Módulos y Estrategia)

La arquitectura del proyecto está diseñada como un ecosistema integral, donde la **Seguridad (RLS/PLpgSQL)** es la base para los siguientes módulos:

* **Seguridad:** Acceso QR 2FA, `guests`, `pending_guest_approvals`.
* **Finanzas:** `payments`, `payments_history`, control de morosidad (`condo_settings.max_months_delinquency_for_privilege_revocation`).
* **Gestión de Áreas:** `common_areas`, `reservations` (con costos y límites de uso).
* **Comunicación:** `announcements`, `votations` (con ponderación de voto).
* **Futuro (V2):** Integración de `surveillance_cameras`.