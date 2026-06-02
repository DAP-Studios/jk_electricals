export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

import automationImage from "./assets/catagory/automation.png";
import boxImage from "./assets/catagory/box.png";
import controllerImage from "./assets/catagory/controller.png";
import fanImage from "./assets/catagory/fan.png";
import heaterImage from "./assets/catagory/heater.png";
import lightsImage from "./assets/catagory/lights.png";
import meterImage from "./assets/catagory/meter.png";
import motorImage from "./assets/catagory/motor.png";
import panelImage from "./assets/catagory/panel.png";
import sensorImage from "./assets/catagory/sensor.png";
import switchgearImage from "./assets/catagory/switchgear.png";
import wiresImage from "./assets/catagory/wires.png";

/* JK Electricals - Business Data */

export type ProductCategory = {
  id: number;
  name: string;
  slug: string;
  description: string;
  brands: string[];
  image: string;
};

export const COMPANY_INFO = {
  name: "JK Electricals",
  tagline: "Powering Industrial Excellence",
  description: "Authorized distributor of industrial electrical goods",
  contact: {
    primary: "+91 73830 95063",
    secondary: "+91 73590 69763",
    email: "jkelectricals93@gmail.com",
    website: "https://jkelectricalsvapi.in",
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

// Added proper 'categories' export for Home carousel
export const categories = [
  {
    id: 1,
    slug: "industrial-cables",
    title: "Industrial Cables",
    description: "Armoured Alum/Copper, HT Cables, Multi-Core Flex, Solar & Thermocouple",
    icon: "Zap",
    image: wiresImage
  },
  {
    id: 2,
    slug: "switchgear-protection",
    title: "Switchgear Protection",
    description: "MCB, RCCB, MCCB, MPCB, Power Contactors, Thermal Overload Relays",
    icon: "Shield",
    image: switchgearImage
  },
  {
    id: 3,
    slug: "automation-systems",
    title: "Automation Systems",
    description: "VFD Drives, HMI Interfaces, SCADA Systems, PLC Systems",
    icon: "Activity",
    image: automationImage
  },
  {
    id: 4,
    slug: "industrial-lighting",
    title: "Industrial Lighting",
    description: "Highbay Lights, Flood & Street Lights, Poles & High Mast",
    icon: "Home",
    image: lightsImage
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 1,
    name: "Industrial Cables",
    slug: "industrial-cables",
    description: "Armoured Alum/Copper, HT Cables, Multi-Core Flex, Solar & Thermocouple",
    brands: ["Polycab", "RR", "KEI"],
    image: wiresImage,
  },
  {
    id: 2,
    name: "Distribution Boards",
    slug: "distribution-boards",
    description: "MCB Boxes, Double Door MCCB Boxes, Weather Proof Enclosures",
    brands: ["Schneider", "Siemens", "L&T", "Legrand"],
    image: boxImage,
  },
  {
    id: 3,
    name: "Switchgear Protection",
    slug: "switchgear-protection",
    description: "MCB, RCCB, MCCB, MPCB, Power Contactors, Thermal Overload Relays",
    brands: ["Siemens", "Schneider", "L&T", "Chint", "ABB"],
    image: switchgearImage,
  },
  {
    id: 4,
    name: "Panel Accessories",
    slug: "panel-accessories",
    description: "Control Panels, Relays, Bases & Lugs, Switches & Push Buttons, SMPS & Fuses",
    brands: ["Premium Industrial Grade"],
    image: panelImage,
  },
  {
    id: 5,
    name: "Automation Systems",
    slug: "automation-systems",
    description: "VFD Drives, HMI Interfaces, SCADA Systems, PLC Systems",
    brands: ["Siemens", "Delta", "INVT", "Mitsubishi"],
    image: automationImage,
  },
  {
    id: 6,
    name: "Process Controllers",
    slug: "process-controllers",
    description: "PID/Temp Controllers, Humidity/Cooling Control, Indicators & Timers",
    brands: ["Selec", "Multispan", "Autonics", "Omron"],
    image: controllerImage,
  },
  {
    id: 7,
    name: "Industrial Sensors",
    slug: "industrial-sensors",
    description: "Proximity & Capacitive, Photoelectric, Thermocouple & Water Level",
    brands: ["Omron", "Autonics", "Pepperl+Fuchs"],
    image: sensorImage,
  },
  {
    id: 8,
    name: "Heavy-Duty Motors",
    slug: "heavy-duty-motors",
    description: "Induction Motors, Servo Motors, Gear Motors",
    brands: ["Crompton", "Hindustan", "Siemens"],
    image: motorImage,
  },
  {
    id: 9,
    name: "Electrical Measurement",
    slug: "electrical-measurement",
    description: "Multi-Function Meters, Energy Meters, Current Transformers",
    brands: ["Selec", "Multispan", "Secure", "Elmex"],
    image: meterImage,
  },
  {
    id: 10,
    name: "Industrial Lighting",
    slug: "industrial-lighting",
    description: "Highbay Lights, Flood & Street Lights, Poles & High Mast",
    brands: ["Philips", "Wipro", "Bajaj", "Havells"],
    image: lightsImage,
  },
  {
    id: 11,
    name: "Industrial Fans",
    slug: "industrial-fans",
    description: "Heavy Duty Pedestal, Centrifugal Blowers, Axial & Panel Fans",
    brands: ["Almonard", "Crompton", "RR", "Rexnol"],
    image: fanImage,
  },
  {
    id: 12,
    name: "Industrial Heaters",
    slug: "industrial-heaters",
    description: "Infrared Heaters, Tubular Heaters, Oil & Water Heaters",
    brands: ["Custom Heavy Duty"],
    image: heaterImage,
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

export const stats = [
  { label: "Products", value: "1200+" },
  { label: "Clients", value: "500+" },
  { label: "Brands", value: "25+" },
  { label: "Support", value: "24/7" }
];
