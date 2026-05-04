# Shopify integration

## Confirmado con Shopify Dev MCP
- React Router apps usan `@shopify/shopify-app-react-router`, `authenticate.admin`, App Bridge y rutas `app.*`.
- App Home recomienda Polaris web components para UI dentro del iframe de Shopify Admin.
- Delivery Customization Function puede ocultar/renombrar/ordenar delivery options.
- Cart and Checkout Validation usa validations y `write_validations` cuando aplica.
- TranslatableResource requiere `read_translations`; `translationsRegister` requiere `write_translations`.
- `publishablePublish` requiere `write_publications` para publicaciones futuras.

## Integraciones de Ship Rules Lite
- Delivery Customization Function for hiding, renaming or sorting delivery options.
- Cart and Checkout Validation Function for blocking unsupported carts or addresses.
- Admin GraphQL deliveryCustomizationCreate/update and validationCreate/update after function IDs exist.

## Scopes
- Required: read_products, read_delivery_customizations, write_delivery_customizations, read_validations, write_validations
- Explicitly not requested: read_orders, read_customers, write_shipping

## Webhooks
- app/uninstalled
- app/scopes_update

## Credenciales faltantes
- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_APP_URL`
- `DATABASE_URL`

## No validado todavia
- Config remota de Partner Dashboard.
- Instalacion real en dev store.
- API calls reales contra Admin GraphQL.
