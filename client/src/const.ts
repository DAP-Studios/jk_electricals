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

// product-specific images (from assets/products)
import distributionBoardProductImage from "./assets/products/distribution-boards/mcbbox.png";
import switchgearProductImage from "./assets/products/switchgear/mcb.png";
import panelAccessoriesProductImage from "./assets/products/panel-accessories/controlpanel.png";
import automationProductImage from "./assets/products/automation-systems/plc.png";
import processControllerProductImage from "./assets/products/process-controllers/pidcontroller.png";
import sensorsProductImage from "./assets/products/industrial-sensors/proximitysensor.png";
import motorsProductImage from "./assets/products/heavy-duty-motors/inductionmotors.png";
import measurementProductImage from "./assets/products/electrical-measurement/multifunctionmeter.png";
import lightingProductImage from "./assets/products/industrial-lighting/highbarlights.png";
import fansProductImage from "./assets/products/industrial-fans/heavydutyfans.png";
import heatersProductImage from "./assets/products/industrial-heaters/tubularheater.png";

// Detailed product images per component
import vfdImage from "./assets/products/automation-systems/vfd.png";
import hmiImage from "./assets/products/automation-systems/hmi.png";

import armourCablesImage from "./assets/products/industrial-cables/armour cables.png";
import htCablesImage from "./assets/products/industrial-cables/htcables.png";
import multiCoreImage from "./assets/products/industrial-cables/multicore.png";
import solarCablesImage from "./assets/products/industrial-cables/solar.png";
import fiberOpticCablesImage from "./assets/products/industrial-cables/fiber.png";

import doubleDoorImage from "./assets/products/distribution-boards/doubledoor.png";

import rccbMccbImage from "./assets/products/switchgear/rccbmccb.png";
import powerControllerImage from "./assets/products/switchgear/powercontroller.png";
import thermalRelayImage from "./assets/products/switchgear/thermalrelay.png";

import relaysAndBaseImage from "./assets/products/panel-accessories/relaysandbase.png";
import smpsFuseCapImage from "./assets/products/panel-accessories/smpsfusecapacitor.png";
import switchAndPushImage from "./assets/products/panel-accessories/switchandpushbutton.png";

import coolingControllerImage from "./assets/products/process-controllers/coolingcontroller.png";
import digitalCounterTimerImage from "./assets/products/process-controllers/digitalcountertimer.png";
import processIndicatorImage from "./assets/products/process-controllers/processindicator.png";
import tempControllerImage from "./assets/products/process-controllers/tempcontroller.png";
import temperatureControllerImage from "./assets/products/process-controllers/temperature controller.png";

import capacitiveSensorImage from "./assets/products/industrial-sensors/capecativesensor.png";
import photoSensorImage from "./assets/products/industrial-sensors/photosensor.png";
import proximitySensorImage from "./assets/products/industrial-sensors/proximitysensor.png";
import thermortdSensorImage from "./assets/products/industrial-sensors/thermortdsensor.png";
import waterLevelerImage from "./assets/products/industrial-sensors/waterleveler.png";

import servoMotorsImage from "./assets/products/heavy-duty-motors/servomotors.png";
import gearsImage from "./assets/products/heavy-duty-motors/gears.png";

import currentTransformerImage from "./assets/products/electrical-measurement/currenttransformer.png";
import digitalMeterImage from "./assets/products/electrical-measurement/digitalmeter.png";
import energyMeterImage from "./assets/products/electrical-measurement/energymeter.png";

import floodlightImage from "./assets/products/industrial-lighting/floodlight.png";
import highMastImage from "./assets/products/industrial-lighting/highmastsystem.png";
import streetLightPoleImage from "./assets/products/industrial-lighting/streetlightpole.png";

import axialFanImage from "./assets/products/industrial-fans/axcialfan.png";
import heavyDutyAdjustFanImage from "./assets/products/industrial-fans/heavydutyadjustfan.png";
import panelFansImage from "./assets/products/industrial-fans/panelfans.png";
import pedestrianFanImage from "./assets/products/industrial-fans/pedestrianfan.png";
import wallFanImage from "./assets/products/industrial-fans/wallfan.png";

import irHeaterImage from "./assets/products/industrial-heaters/irheater.png";
import oilHeaterImage from "./assets/products/industrial-heaters/oilheater.png";
import waterHeaterImage from "./assets/products/industrial-heaters/waterheater.png";

// Normalize helper
const normalizeKey = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const PRODUCT_IMAGES: Record<string, Record<string, string>> = {
  "automation-systems": {
    [normalizeKey("VFD Drives")]: vfdImage,
    [normalizeKey("HMI Interfaces")]: hmiImage,
    [normalizeKey("PLC Systems")]: automationProductImage,
    [normalizeKey("SCADA Systems")]: automationProductImage,
  },
  "industrial-cables": {
    [normalizeKey("Armoured Alum/Copper")]: armourCablesImage,
    [normalizeKey("HT Cables")]: htCablesImage,
    [normalizeKey("Multi-Core Flex")]: multiCoreImage,
    [normalizeKey("Solar & Thermocouple")]: solarCablesImage,
    [normalizeKey("Fiber Optic Cables")]: fiberOpticCablesImage,
  },
  "distribution-boards": {
    [normalizeKey("MCB Boxes")]: distributionBoardProductImage,
    [normalizeKey("Double Door MCCB Boxes")]: doubleDoorImage,
    [normalizeKey("Weather Proof Enclosures")]: distributionBoardProductImage,
  },
  "switchgear": {
    [normalizeKey("MCB")]: switchgearProductImage,
    [normalizeKey("RCCB")]: rccbMccbImage,
    [normalizeKey("MCCB")]: rccbMccbImage,
    [normalizeKey("MPCB")]: powerControllerImage,
    [normalizeKey("Thermal Overload Relays")]: thermalRelayImage,
  },
  "panel-accessories": {
    [normalizeKey("Control Panels")]: panelAccessoriesProductImage,
    [normalizeKey("Relays & Bases")]: relaysAndBaseImage,
    [normalizeKey("Switches & Push Buttons")]: switchAndPushImage,
    [normalizeKey("SMPS & Fuses & Capacitors")]: smpsFuseCapImage,
  },
  "process-controllers": {
    [normalizeKey("PID/Temp Controllers")]: processControllerProductImage,
    [normalizeKey("Humidity/Cooling Control")]: coolingControllerImage,
    [normalizeKey("Indicators & Timers")]: digitalCounterTimerImage,
    [normalizeKey("Temperature Controller")]: tempControllerImage,
  },
  "industrial-sensors": {
    [normalizeKey("Proximity & Capacitive")]: proximitySensorImage,
    [normalizeKey("Photoelectric")]: photoSensorImage,
    [normalizeKey("Thermocouple")]: thermortdSensorImage,
    [normalizeKey("Water Level")]: waterLevelerImage,
  },
  "heavy-duty-motors": {
    [normalizeKey("Induction Motors")]: motorsProductImage,
    [normalizeKey("Servo Motors")]: servoMotorsImage,
    [normalizeKey("Gear Motors")]: gearsImage,
  },
  "electrical-measurement": {
    [normalizeKey("Multi-Function Meters")]: measurementProductImage,
    [normalizeKey("Energy Meters")]: energyMeterImage,
    [normalizeKey("Current Transformers")]: currentTransformerImage,
  },
  "industrial-lighting": {
    [normalizeKey("Highbay Lights")]: lightingProductImage,
    [normalizeKey("Flood & Street Lights")]: floodlightImage,
    [normalizeKey("Poles & High Mast")]: highMastImage,
  },
  "industrial-fans": {
    [normalizeKey("Axial & Panel Fans")]: axialFanImage,
    [normalizeKey("Heavy Duty Pedestal")]: heavyDutyAdjustFanImage,
    [normalizeKey("Centrifugal Blowers")]: fansProductImage,
    [normalizeKey("Panel Fans")]: panelFansImage,
    [normalizeKey("Pedestrian")]: pedestrianFanImage,
    [normalizeKey("Wall Fan")]: wallFanImage,
  },
  "industrial-heaters": {
    [normalizeKey("Infrared Heaters")]: irHeaterImage,
    [normalizeKey("Oil & Water Heaters")]: oilHeaterImage,
    [normalizeKey("Tubular Heaters")]: heatersProductImage,
  },
};

export function getProductImage(categorySlug: string, componentName: string, fallback: string) {
  const cat = PRODUCT_IMAGES[categorySlug];
  if (!cat) return fallback;
  const key = normalizeKey(componentName);
  return cat[key] ?? fallback;
}

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
  profiles: {
    indiamart: "https://www.indiamart.com/jkelectricals-gujrat/profile.html",
  },
};

export const PARTNER_BRANDS = [
  "POLYCAB",
  "CROMPTON",
  "MITSUBISHI",
  "SCHNEIDER",
  "PHILIPS",
  "INVT",
  "Lauritz Knudsen (L&T)",
  "SIEMENS",
  "OMRON",
  "ABB",
  "LEGRAND",
  "KEI",
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 1,
    name: "Industrial Cables",
    slug: "industrial-cables",
    description: "Armoured Alum/Copper, HT Cables, Multi-Core Flex, Solar & Thermocouple, Fiber Optic Cables",
    brands: ["Polycab", "RR", "KEI"],
    image: wiresImage,
  },
  {
    id: 2,
    name: "Distribution Boards",
    slug: "distribution-boards",
    description: "MCB Boxes, Double Door MCCB Boxes, Weather Proof Enclosures",
    brands: ["Schneider", "Siemens", "Lauritz Knudsen (L&T)", "Legrand"],
    image: boxImage,
  },
  {
    id: 3,
    name: "Switchgear",
    slug: "switchgear",
    description: "MCB, RCCB, MCCB, MPCB, Thermal Overload Relays",
    brands: ["Siemens", "Schneider", "Lauritz Knudsen (L&T)", "Chint", "ABB"],
    image: switchgearImage,
  },
  {
    id: 4,
    name: "Panel Accessories",
    slug: "panel-accessories",
    description: "Control Panels, Relays & Bases, Switches & Push Buttons, SMPS & Fuses & Capacitors",
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
    brands: ["Selec", "Multispan", "Autonics", "Omron", "Radix"],
    image: controllerImage,
  },
  {
    id: 7,
    name: "Industrial Sensors",
    slug: "industrial-sensors",
    description: "Proximity & Capacitive, Photoelectric, Thermocouple, Water Level",
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
    brands: ["Almonard", "Crompton", "RR", "Rexnord"],
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
  { label: "Support", value: "24/7" },
];
