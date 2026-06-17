export const SITE_NAME = "JK Electricals Vapi";
export const SITE_DOMAIN = "jkelectricalsvapi.in";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_DESCRIPTION =
  "Authorized industrial electrical distributor in Vapi, Gujarat. Premium switchgear, cables, automation, lighting, and MEP solutions for industrial buyers.";
export const SITE_TITLE = "JK Electricals Vapi | Authorized Industrial Electrical Distributor Gujarat";
export const SITE_KEYWORDS = [
  "JK Electricals Vapi",
  "authorized electrical dealer Vapi",
  "authorized brand supplier Vapi",
  "industrial electrical seller Vapi",
  "industrial electrical distributor Vapi",
  "switchgear supplier Gujarat",
  "switchgear dealer Vapi",
  "industrial cables Vapi",
  "industrial cable supplier Gujarat",
  "automation solutions Vapi",
  "authorized electrical dealer",
  "industrial lighting Gujarat",
  "Vapi GIDC electrical supplier",
];
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.svg`;
export const SITE_FAVICON = "/src/assets/logo.png";

export const SERVICE_AREAS = [
  "Vapi GIDC",
  "Sarigam",
  "Umbergaon",
  "Silvassa",
  "Daman",
  "Valsad",
  "South Gujarat",
];

export const ROUTES = [
  {
    path: "/",
    title: "Industrial Electrical Distributor in Vapi | JK Electricals",
    description:
      "Source genuine switchgear, industrial cables, automation products, lighting, motors, and electrical components from an authorized dealer and supplier in Vapi.",
    priority: "1.0",
  },
  {
    path: "/about",
    title: "About JK Electricals Vapi | Industrial Distribution Experts",
    description:
      "Learn about JK Electricals, an authorized industrial electrical distributor in Vapi serving GIDC and nearby industrial hubs with genuine components and fast support.",
    priority: "0.8",
  },
  {
    path: "/products",
    title: "Industrial Electrical Products in Vapi | JK Electricals",
    description:
      "Find authorized industrial electrical dealers, suppliers, and sellers for switchgear, cables, automation systems, sensors, motors, lighting, and listed brands in Vapi.",
    priority: "0.9",
  },
  {
    path: "/contact",
    title: "Contact JK Electricals Vapi | Industrial Supply Support",
    description:
      "Contact JK Electricals Vapi for industrial electrical products, quotations, bulk inquiries, and quick procurement support across Gujarat industrial hubs.",
    priority: "0.8",
  },
] as const;
