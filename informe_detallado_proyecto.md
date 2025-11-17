# INFORME DETALLADO DEL PROYECTO

Este documento detalla varios aspectos técnicos y decisiones arquitectónicas tomadas durante el desarrollo del proyecto.

1.  🔔 **Push Notifications iOS y Android**
    Se generó una guía detallada para activar Push en:
    *   **iOS:**
        *   Certificates
        *   Keys
        *   APNs
        *   Capabilities
        *   URL de Apple Developer
        *   Configuración Supabase
    *   **Android:**
        *   Firebase
        *   API Keys
        *   Token handling
        *   Integración con Supabase

2.  🖼️ **Manejo de imágenes base64, PNG binario y despliegue en iOS y Web**
    *   Observaste que ya no necesitabas SVG, sino PNG binario.
    *   Se explicó:
        *   cómo servirse como `image/png` desde Edge,
        *   cómo mostrarla en iOS,
        *   cómo mostrarla en Web,
        *   por qué a veces aparece incompleta (headers, encoding, mime-type).

3.  🔐 **Error con Supabase Auth Session en Swift**
    Se corrigió:
    ```swift
    guard let session = try? await supabaseClient.auth.session,
          let accessToken = session.accessToken else {
    ```
    También se abordó el error `Initializer for conditional binding must….`

4.  🔒 **Problemas con RLS y 2FA**
    Te ayudé a:
    *   refactorizar tu Edge Function que genera el QR,
    *   incluir branding desde tabla `condominium_branding`,
    *   aplicar fallback si no existe branding,
    *   decidir usar base64 para facilitar compartir por WhatsApp / IG.

5.  🎨 **Branding dinámico para condominios**
    Creamos el esquema:
    `public.condominium_branding`
    *   `id`
    *   `condominium_id`
    *   `primary_color`
    *   `secondary_color`
    *   `logo_url / base64`
    Y soporte adecuado desde Edge Functions.

6.  🧪 **Truncado de tablas, carga inicial y Postman**
    Creamos:
    *   SQL para `TRUNCATE` seguro.
    *   Funciones para `seed` automático de condominios y departamentos.
    *   Colección Postman sugerida:
        *   Crear condominio
        *   Crear pisos
        *   Crear departamentos
        *   Obtener condominio y su estructura
        *   Probar RLS

7.  🔐 **Decisiones de arquitectura para funciones SQL**
    Se discutieron dos funciones:
    1.  `seed_condo_simple()` → Retorna sólo `condo_id`.
    2.  `seed_condo_full()` → Retorna estructura JSON completa.
    Decidimos:
    *   Durante desarrollo: usar la versión JSON completa.
    *   En producción realista: retornar `condo_id` es más estándar.
    *   Sin embargo, tu caso de uso amerita JSON estructurado para post-seeding, así que mantuvimos ambas.

8.  🔒 **Seguridad: SECURITY INVOKER vs DEFINER**
    Decisión tomada:
    *   `SECURITY INVOKER`
        *   recomendado para funciones con autenticación vía Supabase Auth
        *   evita que un usuario sin permisos cree/edite condominios
    *   `VOLATILE`
        *   correcto porque la función modifica tablas.

9.  🔐 **RLS completo para Condominiums, Apartments y Branding**
    Creamos políticas con nombres consistentes tipo:
    *   `condominiums_select_policy`
    *   `condominiums_insert_admin_policy`
    *   `condominium_branding_select_policy`
    *   `apartments_select_policy`
    Con esta regla común:
    `user_has_permission('condominium:admin:condo')`
    Buenas prácticas aplicadas:
    *   Permisos centralizados por función
    *   RLS mínimo necesario
    *   Evitar políticas implícitas permisivas
    *   Política SELECT separada de INSERT/UPDATE/DELETE

10. 🏢 **Error: La función no llenaba el piso**
    Descubrimos que la tabla `apartments` no tenía columna `floor`.
    Solución:
    *   Agregar columna `floor INTEGER NOT NULL`
    *   Modificar función para llamar:
        ```sql
        INSERT INTO public.apartments (number, floor, condominium_id)
        VALUES (unit_number, f, condo_id);
        ```

11. 📝 **Revisión total y mejora del flujo de seeding**
    Se creó:
    *   función simple
    *   función extendida
    *   ambas con permisos, RLS y logging
    *   se generó JSON final:
        ```json
        {
          "condominium": {...},
          "branding": {...},
          "floors": [...],
          "apartments": [...],
        }
        ```

12. 📄 **Documento final (este informe)**
    Generado en `.md` para servir como:
    *   documentación técnica del proyecto,
    *   historial de cambios,
    *   guía de buenas prácticas,
    *   referencia para onboarding.

✔️ **Buenas prácticas aplicadas en todo el proyecto**
**Seguridad:**
*   RLS estricto
*   Políticas separadas por tipo de acción
*   Funciones con `SECURITY INVOKER`
*   Validaciones de permisos por función
*   Evitar exponer información sensible en `SELECT`s
**Escalabilidad:**
*   Identificadores UUID
*   Funciones preparadas para multi-condominio
*   Semillas iniciales automatizadas
*   Branding por condominio
*   Retornos JSON para microservicios
**Desarrollo API realista:**
*   Endpoints consistentes
*   Nombres de políticas estandarizadas
*   Estructura clara para Postman
*   Funciones reutilizables
