export const SITE_NAME = "JK Electricals Vapi";
export const SITE_DOMAIN = "jkelectricalsvapi.in";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_DESCRIPTION =
  "Industrial electrical and automation solutions supplier in Vapi, Gujarat. Switchgear, PLC, VFD, sensors, process controllers, cables, motors, lighting, and electrical distribution products.";
export const SITE_TITLE = "JK Electricals Vapi | Industrial Electrical & Automation Supplier Gujarat";
export const SITE_KEYWORDS = [
  "JK Electricals Vapi",
  "electrical supplier Vapi",
  "industrial electrical supplier Vapi",
  "industrial automation supplier Vapi",
  "electrical dealer Vapi",
  "PLC supplier Vapi",
  "VFD supplier Vapi",
  "industrial sensor supplier Vapi",
  "process controller supplier Vapi",
  "Siemens dealer Vapi",
  "Schneider dealer Vapi",
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
  "Vapi",
  "Vapi GIDC",
  "Silvassa",
  "Daman",
  "Sarigam",
  "Umbergaon",
  "Valsad",
  "Ankleshwar",
  "Bharuch",
  "Surat",
  "Dahej",
];

export const ROUTES = [
  {
    path: "/",
    title: "Industrial Electrical & Automation Supplier in Vapi | JK Electricals",
    description:
      "Source switchgear, PLC, VFD, sensors, process controllers, cables, motors, lighting, and industrial automation products from JK Electricals Vapi.",
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
    title: "Industrial Electrical Products & Automation Systems in Vapi | JK Electricals",
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
  {
    path: "/blog",
    title: "Industrial Electrical & Automation Blog | JK Electricals",
    description:
      "Read buying guides and topic resources for PLC, VFD, sensors, automation, switchgear, industrial safety, and maintenance procurement.",
    priority: "0.7",
  },
] as const;
