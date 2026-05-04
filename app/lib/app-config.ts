export const APP_CONFIG = {
  name: "Ship Rules Lite",
  shortName: "Ship Rules",
  slug: "ship-rules-lite",
  tagline: "Conservative shipping restrictions for PO boxes, pickup-only products and regional rules.",
  problem: "Merchants need simple checkout-safe shipping rules without manually maintaining brittle scripts or theme logic.",
  persona: "Operations manager shipping fragile, regulated, pickup-only, or region-restricted items.",
  value: "A small rule workbench that prepares delivery customization and checkout validation logic around the most common restrictions.",
  primaryFlow: "Create a rule, preview affected delivery options, activate only after validation, and monitor recent rule decisions.",
  color: "#0f766e",
  mainObject: "Shipping rule",
  workspaceLabel: "Rule simulator",
  settingsLabel: "Restrictions",
  requiredScopes: ["read_products","read_delivery_customizations","write_delivery_customizations","read_validations","write_validations"],
  doNotRequestScopes: ["read_orders","read_customers","write_shipping"],
  integrations: [
  "Delivery Customization Function for hiding, renaming or sorting delivery options.",
  "Cart and Checkout Validation Function for blocking unsupported carts or addresses.",
  "Admin GraphQL deliveryCustomizationCreate/update and validationCreate/update after function IDs exist."
],
  mvpFeatures: [
  "Visual rule builder for PO box, pickup-only, blocked regions and product tag rules.",
  "Simulator table for delivery methods and expected action.",
  "Activation checklist for required functions and scopes.",
  "Validation states for missing rule name, invalid country/state and conflicting rules."
],
  outOfScope: [
  "Network calls from Functions.",
  "Carrier-rate calculations.",
  "Checkout UI extensions in v1."
],
  futureFeatures: [
  "Generated delivery customization function extension.",
  "Generated cart/checkout validation function extension.",
  "Address validation provider integration.",
  "Rule analytics by blocked attempt."
],
  screens: [
  "Dashboard: active rules, function readiness and blocked attempts.",
  "Rule simulator: delivery option preview and rule decisions.",
  "Restrictions: rule form and activation checklist.",
  "Help/QA: function constraints and manual checkout tests."
],
  sampleRows: [
  [
    "No PO boxes",
    "Address contains PO Box",
    "High",
    "Block checkout"
  ],
  [
    "Pickup-only tags",
    "Product tag pickup-only",
    "High",
    "Hide shipping"
  ],
  [
    "No AK/HI",
    "Shipping region is AK or HI",
    "Medium",
    "Show message"
  ]
],
  metrics: [
  [
    "Rules drafted",
    "4"
  ],
  [
    "Ready to activate",
    "2"
  ],
  [
    "Blocked simulations",
    "31"
  ]
],
  settingsFields: {
  "workflowName": "PO box guard",
  "thresholdLabel": "Max active rules",
  "thresholdDefault": "5",
  "ownerEmail": "shipping-ops@example.com"
},
  risks: [
  "Function extensions must be scaffolded and built before real activation.",
  "Checkout behavior needs dev-store validation with shipping profiles and accelerated checkout."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
