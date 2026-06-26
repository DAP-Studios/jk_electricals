import { PRODUCT_CATEGORIES } from "@/const";

export const SERVICE_LOCATIONS = [
  {
    name: "Vapi",
    slug: "vapi",
    region: "Gujarat",
    industries: ["chemical", "pharmaceutical", "textile", "packaging", "engineering"],
    nearby: ["Vapi GIDC", "Silvassa Road", "Sarigam", "Daman"],
  },
  {
    name: "Silvassa",
    slug: "silvassa",
    region: "Dadra and Nagar Haveli",
    industries: ["plastic", "packaging", "textile", "engineering", "food processing"],
    nearby: ["Vapi", "Dadra", "Naroli", "Daman"],
  },
  {
    name: "Daman",
    slug: "daman",
    region: "Daman and Diu",
    industries: ["packaging", "pharmaceutical", "hospitality", "engineering", "manufacturing"],
    nearby: ["Vapi", "Silvassa", "Sarigam", "Valsad"],
  },
  {
    name: "Sarigam",
    slug: "sarigam",
    region: "Gujarat",
    industries: ["chemical", "polymer", "pharmaceutical", "engineering", "process manufacturing"],
    nearby: ["Vapi", "Umbergaon", "Bhilad", "Valsad"],
  },
  {
    name: "Umbergaon",
    slug: "umbergaon",
    region: "Gujarat",
    industries: ["engineering", "plastic", "textile", "packaging", "fabrication"],
    nearby: ["Sarigam", "Bhilad", "Vapi", "Valsad"],
  },
  {
    name: "Valsad",
    slug: "valsad",
    region: "Gujarat",
    industries: ["manufacturing", "food processing", "textile", "engineering", "infrastructure"],
    nearby: ["Vapi", "Pardi", "Atul", "Navsari"],
  },
  {
    name: "Pardi",
    slug: "pardi",
    region: "Gujarat",
    industries: ["engineering", "packaging", "textile", "food processing", "manufacturing"],
    nearby: ["Vapi", "Valsad", "Atul", "Udvada"],
  },
  {
    name: "Ankleshwar",
    slug: "ankleshwar",
    region: "Gujarat",
    industries: ["chemical", "pharmaceutical", "process control", "hazardous area", "utilities"],
    nearby: ["Bharuch", "Dahej", "Panoli", "Jhagadia"],
  },
  {
    name: "Bharuch",
    slug: "bharuch",
    region: "Gujarat",
    industries: ["chemical", "fertilizer", "port-linked manufacturing", "utilities", "engineering"],
    nearby: ["Ankleshwar", "Dahej", "Jhagadia", "Surat"],
  },
  {
    name: "Surat",
    slug: "surat",
    region: "Gujarat",
    industries: ["textile", "diamond", "packaging", "commercial infrastructure", "manufacturing"],
    nearby: ["Hazira", "Navsari", "Bharuch", "Valsad"],
  },
  {
    name: "Dahej",
    slug: "dahej",
    region: "Gujarat",
    industries: ["chemical", "petrochemical", "port infrastructure", "process manufacturing", "utilities"],
    nearby: ["Bharuch", "Ankleshwar", "Vilayat", "Jhagadia"],
  },
] as const;

export const AUTHORITY_BRANDS = [
  { name: "Siemens", slug: "siemens", focus: ["switchgear", "PLC systems", "drives", "motors"] },
  { name: "Schneider Electric", slug: "schneider-electric", focus: ["switchgear", "distribution boards", "automation", "protection"] },
  { name: "ABB", slug: "abb", focus: ["switchgear", "motors", "control products", "automation"] },
  { name: "Delta", slug: "delta", focus: ["VFD drives", "PLC", "HMI", "automation"] },
  { name: "Mitsubishi", slug: "mitsubishi", focus: ["PLC", "HMI", "servo systems", "factory automation"] },
  { name: "Omron", slug: "omron", focus: ["sensors", "controllers", "relays", "automation"] },
  { name: "Polycab", slug: "polycab", focus: ["industrial cables", "wires", "power cables", "control cables"] },
  { name: "RR Kabel", slug: "rr-kabel", focus: ["industrial cables", "flexible wires", "control cables", "power cables"] },
  { name: "KEI", slug: "kei", focus: ["HT cables", "LT cables", "control cables", "industrial wiring"] },
  { name: "Legrand", slug: "legrand", focus: ["distribution boards", "protection", "wiring devices", "enclosures"] },
  { name: "Autonics", slug: "autonics", focus: ["sensors", "controllers", "timers", "automation"] },
  { name: "Philips", slug: "philips", focus: ["industrial lighting", "LED fixtures", "highbay lights", "flood lights"] },
  { name: "Crompton", slug: "crompton", focus: ["motors", "industrial fans", "heavy duty pedestal fans", "ventilation"] },
  { name: "INVT", slug: "invt", focus: ["VFD drives", "motor control", "automation", "control panels"] },
  { name: "Lauritz Knudsen (L&T)", slug: "lauritz-knudsen-lt", focus: ["switchgear", "contactors", "protection", "distribution boards"] },
  { name: "Chint", slug: "chint", focus: ["switchgear", "MCB", "MCCB", "electrical protection"] },
  { name: "Selec", slug: "selec", focus: ["meters", "process controllers", "timers", "control panel components"] },
  { name: "Multispan", slug: "multispan", focus: ["process controllers", "temperature controllers", "timers", "indicators"] },
  { name: "Radix", slug: "radix", focus: ["temperature controllers", "process indicators", "automation components", "control systems"] },
  { name: "Pepperl+Fuchs", slug: "pepperl-fuchs", focus: ["industrial sensors", "proximity sensors", "photoelectric sensors", "factory automation"] },
  { name: "Hindustan", slug: "hindustan", focus: ["motors", "induction motors", "heavy duty motors", "industrial spares"] },
  { name: "Secure", slug: "secure", focus: ["energy meters", "electrical measurement", "multifunction meters", "panel meters"] },
  { name: "Elmex", slug: "elmex", focus: ["terminal blocks", "electrical measurement", "panel accessories", "control components"] },
  { name: "Wipro", slug: "wipro", focus: ["industrial lighting", "LED lights", "highbay lights", "flood lights"] },
  { name: "Bajaj", slug: "bajaj", focus: ["industrial lighting", "fans", "electrical equipment", "factory utilities"] },
  { name: "Havells", slug: "havells", focus: ["industrial lighting", "electrical equipment", "switchgear", "factory utilities"] },
  { name: "Almonard", slug: "almonard", focus: ["industrial fans", "heavy duty fans", "ventilation", "factory cooling"] },
  { name: "Rexnord", slug: "rexnord", focus: ["industrial fans", "panel fans", "ventilation", "motor cooling"] },
] as const;

export const BLOG_TOPICS = [
  "How to choose the right PLC supplier in Vapi for factory automation",
  "PLC vs relay control panels for industrial machines",
  "VFD selection guide for pumps, fans, compressors, and conveyors",
  "Common VFD faults and what maintenance teams should check first",
  "How proximity sensors improve automation reliability on production lines",
  "Photoelectric sensor applications in packaging and textile plants",
  "Inductive vs capacitive sensors for industrial detection",
  "Switchgear selection checklist for Vapi GIDC factories",
  "MCB, MCCB, RCCB, and MPCB differences for plant electrical teams",
  "How to size contactors and overload relays for motor protection",
  "Process controller buying guide for temperature and humidity control",
  "PID controller basics for chemical and pharma plants",
  "Industrial cable selection for power, control, instrumentation, and solar",
  "Armoured cable vs flexible cable for industrial installations",
  "Distribution board planning for machinery panels and plant utilities",
  "How to reduce downtime with ready-stock electrical spares",
  "Siemens switchgear supplier checklist for industrial buyers in Vapi",
  "Schneider Electric dealer selection guide for industrial procurement",
  "Omron sensor applications in machine automation",
  "Delta VFD and PLC use cases for small and medium factories",
  "Mitsubishi PLC applications in high-speed automation",
  "Autonics controller and sensor selection for process machines",
  "Industrial lighting lux planning for factories and warehouses",
  "Highbay light selection for manufacturing units",
  "Panel accessory checklist for control panel builders",
  "SMPS selection for PLC, HMI, and sensor control circuits",
  "Fuse and capacitor buying guide for panel maintenance teams",
  "Energy meter and multifunction meter selection for industrial panels",
  "Current transformer sizing basics for electrical measurement",
  "Industrial fan selection for panels, shop floors, and ventilation",
  "Heavy duty motor procurement checklist for maintenance teams",
  "Servo motor vs induction motor for factory automation",
  "Electrical safety essentials for South Gujarat manufacturing units",
  "Critical electrical spares every plant should keep in stock",
  "How procurement teams can verify genuine electrical components",
  "Electrical supplier selection criteria for chemical plants in Vapi",
  "Industrial automation supplier checklist for Silvassa factories",
  "Switchgear supplier guide for Daman manufacturers",
  "Electrical dealer guide for Sarigam industrial units",
  "Industrial sensor supplier checklist for Ankleshwar plants",
  "Process controller supplier guide for Bharuch industries",
  "PLC supplier checklist for Surat manufacturers",
  "VFD supplier guide for Dahej process industries",
  "How internal panel wiring quality affects machine uptime",
  "How to plan electrical distribution for factory expansion",
  "Why brand-backed components matter in industrial electrical procurement",
  "Cable tray and routing considerations for industrial plants",
  "Preventive maintenance checklist for switchgear panels",
  "How automation upgrades reduce manual process errors",
  "Buying electrical products locally vs long-distance procurement",
] as const;

export const RESOURCE_GUIDES = [
  {
    title: "PLC Selection Guide",
    slug: "plc-selection-guide",
    keyword: "PLC selection guide for industrial automation",
    categorySlug: "automation-systems",
    brandSlug: "siemens",
    summary:
      "A practical guide for choosing PLC systems for machines, process lines, control panels, and automation upgrades in Vapi and South Gujarat.",
    sections: [
      "Start with input/output count, communication protocol, panel space, expansion needs, and machine criticality before selecting a PLC platform.",
      "Compare PLC options with the HMI, VFD, sensors, relays, SMPS, and process controllers already used in the plant so the control architecture remains serviceable.",
      "For industrial buyers in Vapi, Silvassa, Daman, Sarigam, and Valsad, local availability and support are important because automation downtime can stop production.",
    ],
  },
  {
    title: "VFD Buying Guide",
    slug: "vfd-buying-guide",
    keyword: "VFD buying guide for pumps fans compressors and conveyors",
    categorySlug: "automation-systems",
    brandSlug: "delta",
    summary:
      "A buyer-focused guide for selecting VFD drives for pumps, fans, conveyors, compressors, and motor control applications.",
    sections: [
      "Confirm motor kW or HP, voltage, load type, duty cycle, ambient temperature, enclosure needs, braking requirement, and control method before buying a VFD.",
      "VFD selection should also consider harmonic control, cable distance, overload capacity, keypad or HMI control, and spare availability for maintenance teams.",
      "Factories should share motor nameplate photos and application details so the supplier can recommend a suitable VFD rating and accessories.",
    ],
  },
  {
    title: "MCCB Selection Guide",
    slug: "mccb-selection-guide",
    keyword: "MCCB selection guide for industrial switchgear panels",
    categorySlug: "switchgear",
    brandSlug: "schneider-electric",
    summary:
      "A switchgear guide for choosing MCCBs for distribution boards, machine panels, feeders, utilities, and industrial protection systems.",
    sections: [
      "MCCB selection depends on current rating, breaking capacity, pole configuration, trip unit type, fault level, load profile, and upstream/downstream coordination.",
      "Industrial plants should consider thermal magnetic versus electronic trip units, panel space, cable termination, safety standards, and future expansion.",
      "For maintenance replacements, share the existing MCCB model, panel photo, rating label, and application so the replacement can be matched accurately.",
    ],
  },
  {
    title: "Industrial Sensor Guide",
    slug: "industrial-sensor-guide",
    keyword: "industrial sensor guide for proximity photoelectric and capacitive sensors",
    categorySlug: "industrial-sensors",
    brandSlug: "omron",
    summary:
      "A selection guide for proximity sensors, photoelectric sensors, capacitive sensors, thermocouple sensors, and water-level sensing applications.",
    sections: [
      "Sensor selection should start with detection target, sensing distance, mounting space, output type, supply voltage, switching frequency, and environment.",
      "Photoelectric, inductive, capacitive, and temperature sensors solve different detection problems, so model matching should be based on the actual machine condition.",
      "Factories using automation systems should keep spare sensors for critical lines to reduce breakdown time and support faster maintenance response.",
    ],
  },
  {
    title: "Temperature Controller Guide",
    slug: "temperature-controller-guide",
    keyword: "temperature controller guide for industrial process control",
    categorySlug: "process-controllers",
    brandSlug: "autonics",
    summary:
      "A guide for selecting PID temperature controllers, process indicators, timers, counters, humidity control, and cooling control products.",
    sections: [
      "Temperature controller selection depends on input type, control output, panel cutout, setpoint range, alarm needs, relay or SSR output, and process stability.",
      "Chemical, packaging, plastic, textile, heater, and oven applications may need different controller features, sensor compatibility, and enclosure planning.",
      "Buyers should share controller model numbers, sensor type, wiring photos, and process details to match replacement units and avoid commissioning delays.",
    ],
  },
] as const;

export const PRODUCT_AUTHORITY_CATEGORIES = PRODUCT_CATEGORIES.map((category) => ({
  ...category,
  applications: [
    "factory maintenance",
    "control panels",
    "machine automation",
    "utility distribution",
    "project procurement",
  ],
  industries: ["chemical", "pharmaceutical", "textile", "packaging", "engineering"],
}));

export function getLocationBySlug(slug?: string) {
  return SERVICE_LOCATIONS.find((location) => location.slug === slug) ?? SERVICE_LOCATIONS[0];
}

export function getCategoryBySlug(slug?: string) {
  return PRODUCT_AUTHORITY_CATEGORIES.find((category) => category.slug === slug) ?? PRODUCT_AUTHORITY_CATEGORIES[0];
}

export function getBrandBySlug(slug?: string) {
  return AUTHORITY_BRANDS.find((brand) => brand.slug === slug) ?? AUTHORITY_BRANDS[0];
}

export function getResourceBySlug(slug?: string) {
  return RESOURCE_GUIDES.find((guide) => guide.slug === slug) ?? RESOURCE_GUIDES[0];
}
