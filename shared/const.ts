export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

/* JK Electricals - Business Data */

export const COMPANY_INFO = {
  name: "JK Electricals",
  tagline: "Powering Industrial Excellence",
  description: "Authorized distributor of industrial electrical goods",
  contact: {
    primary: "+91 73830 95063",
    secondary: "+91 73590 69763",
    email: "jkelectricals93@gmail.com",
    website: "jkelectricalsvapi.in",
  },
  address: {
    street: "B-5, City Centre, Opp. Hanuman Temple",
    area: "Bhadakmora, Silvassa Road",
    city: "Vapi",
    state: "Gujarat",
    zip: "396195",
    country: "India",
  },
  gstin: "24GAFPS3208P1Z9",
  contactPerson: "JAYESH SUTHAR",
};

export const PARTNER_BRANDS = [
  "POLYCAB",
  "CROMPTON",
  "MITSUBISHI",
  "SCHNEIDER",
  "PHILIPS",
  "INVT",
  "L&T",
  "SIEMENS",
  "OMRON",
  "ABB",
  "LEGRAND",
  "KEI",
];

export const PRODUCT_CATEGORIES = [
  {
    id: 1,
    name: "Industrial Cables",
    description: "Armoured Alum/Copper, HT Cables, Multi-Core Flex, Solar & Thermocouple",
    brands: ["Polycab", "RR", "KEI"],
  },
  {
    id: 2,
    name: "Distribution Boards",
    description: "MCB Boxes, Double Door MCCB Boxes, Weather Proof Enclosures",
    brands: ["Schneider", "Siemens", "L&T", "Legrand"],
  },
  {
    id: 3,
    name: "Switchgear Protection",
    description: "MCB, RCCB, MCCB, MPCB, Power Contactors, Thermal Overload Relays",
    brands: ["Siemens", "Schneider", "L&T", "Chint", "ABB"],
  },
  {
    id: 4,
    name: "Panel Accessories",
    description: "Control Panels, Relays, Bases & Lugs, Switches & Push Buttons, SMPS & Fuses",
    brands: ["Premium Industrial Grade"],
  },
  {
    id: 5,
    name: "Automation Systems",
    description: "VFD Drives, HMI Interfaces, SCADA Systems, PLC Systems",
    brands: ["Siemens", "Delta", "INVT", "Mitsubishi"],
  },
  {
    id: 6,
    name: "Process Controllers",
    description: "PID/Temp Controllers, Humidity/Cooling Control, Indicators & Timers",
    brands: ["Selec", "Multispan", "Autonics", "Omron"],
  },
  {
    id: 7,
    name: "Industrial Sensors",
    description: "Proximity & Capacitive, Photoelectric, Thermocouple & Water Level",
    brands: ["Omron", "Autonics", "Pepperl+Fuchs"],
  },
  {
    id: 8,
    name: "Heavy-Duty Motors",
    description: "Induction Motors, Servo Motors, Gear Motors",
    brands: ["Crompton", "Hindustan", "Siemens"],
  },
  {
    id: 9,
    name: "Electrical Measurement",
    description: "Multi-Function Meters, Energy Meters, Current Transformers",
    brands: ["Selec", "Multispan", "Secure", "Elmex"],
  },
  {
    id: 10,
    name: "Industrial Lighting",
    description: "Highbay Lights, Flood & Street Lights, Poles & High Mast",
    brands: ["Philips", "Wipro", "Bajaj", "Havells"],
  },
  {
    id: 11,
    name: "Industrial Fans",
    description: "Heavy Duty Pedestal, Centrifugal Blowers, Axial & Panel Fans",
    brands: ["Almonard", "Crompton", "RR", "Rexnol"],
  },
  {
    id: 12,
    name: "Industrial Heaters",
    description: "Infrared Heaters, Tubular Heaters, Oil & Water Heaters",
    brands: ["Custom Heavy Duty"],
  },
];

export const getInquiryLinks = (categoryName: string) => {
  const encodedCategory = encodeURIComponent(categoryName);
  return {
    whatsapp: `https://wa.me/917383095063?text=Hi JK Electricals, I want to inquire about ${encodedCategory} from your catalog.`,
    email: `mailto:jkelectricals93@gmail.com?subject=Product Inquiry: ${encodedCategory}&body=Hi JK Electricals, I am interested in procuring ${encodedCategory}. Please contact me with more details and pricing.`,
  };
};

export const MESSAGING_PILLARS = [
  {
    title: "Zero Downtime",
    description: "Solving the customer's biggest pain point with reliable, immediate solutions",
  },
  {
    title: "Ready Stock",
    description: "Local inventory in Vapi for fast dispatch and immediate availability",
  },
  {
    title: "Genuine Parts",
    description: "Authorized distributors of global brands ensuring authenticity and quality",
  },
];

