# Requirements

## Functional requirements
- FR-001: La app debe renderizarse como embedded app dentro de Shopify Admin usando React Router, App Bridge y Polaris web components.
- FR-002: El dashboard debe mostrar estado general, metricas y cola principal de shipping rule.
- FR-003: La pantalla Rule simulator debe mostrar datos de ejemplo, prioridades, acciones visuales y limites del MVP.
- FR-004: La pantalla Restrictions debe validar server-side workflowName, ownerEmail y threshold.
- FR-005: La app debe mostrar estados loading, empty, success, error, validation error y permission error.
- FR-006: La integracion Shopify debe usar loaders/actions autenticados con authenticate.admin para rutas /app.
- FR-007: La app debe documentar y comprobar scopes requeridos: read_products, read_delivery_customizations, write_delivery_customizations, read_validations, write_validations.
- FR-008: Las respuestas GraphQL futuras deben manejar errors top-level y userErrors sin marcar exito falso.
- FR-009: La app debe incluir fixtures, mocks MSW, tests unitarios, componentes, E2E y accesibilidad.

## Pantallas necesarias
- Dashboard: active rules, function readiness and blocked attempts.
- Rule simulator: delivery option preview and rule decisions.
- Restrictions: rule form and activation checklist.
- Help/QA: function constraints and manual checkout tests.

## Acciones del merchant
- Abrir dashboard.
- Revisar cola operativa.
- Cambiar escenario visual en workspace.
- Validar settings.
- Revisar QA y limites.

## Datos creados/leidos/actualizados/eliminados
- Lee datos mockeados en MVP visual.
- Persiste solo sesiones OAuth via Prisma.
- Define AppSetting y AppAuditEvent para la siguiente iteracion.
- No borra datos merchant.

## Shopify Admin API
- Delivery Customization Function for hiding, renaming or sorting delivery options.
- Cart and Checkout Validation Function for blocking unsupported carts or addresses.
- Admin GraphQL deliveryCustomizationCreate/update and validationCreate/update after function IDs exist.

## Scopes requeridos
- Pedir: read_products, read_delivery_customizations, write_delivery_customizations, read_validations, write_validations
- No pedir: read_orders, read_customers, write_shipping

## Webhooks
- app/uninstalled
- app/scopes_update

## Billing
- No requerido para MVP visual. Futuro: plan mensual simple despues de validar funcionalidad real.

## AI
- No se usa IA en MVP. No se requieren API keys ni prompts.

## Non-functional requirements
- Seguridad: tokens solo server-side, secrets solo env vars.
- Privacidad: no customer/order data salvo que sea imprescindible en futuras versiones.
- Performance: paginacion cursor-based para listados reales.
- Accesibilidad: labels, foco visible, axe en preview.
- Resiliencia: estados recuperables para errores API, scopes y sesion.
- Mantenibilidad: config centralizada por app y tests trazables.
- Observabilidad: AppAuditEvent sin PII para acciones futuras.
- Localizacion: UI en ingles inicial, copy aislado para futura i18n.
