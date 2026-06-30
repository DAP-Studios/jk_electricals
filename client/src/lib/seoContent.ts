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
    name: "Navsari",
    slug: "navsari",
    region: "Gujarat",
    industries: ["manufacturing", "food processing", "textile", "commercial infrastructure", "engineering"],
    nearby: ["Valsad", "Surat", "Pardi", "Vapi"],
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
  { name: "Hager", slug: "hager", focus: ["distribution boards", "protection products", "switchgear", "enclosures"] },
  { name: "C&S Electric", slug: "c-and-s-electric", focus: ["switchgear", "protection", "contactors", "distribution products"] },
  { name: "Autonics", slug: "autonics", focus: ["sensors", "controllers", "timers", "automation"] },
  { name: "Panasonic", slug: "panasonic", focus: ["industrial sensors", "photoelectric sensors", "automation components", "factory automation"] },
  { name: "Philips", slug: "philips", focus: ["industrial lighting", "LED fixtures", "highbay lights", "flood lights"] },
  { name: "Crompton", slug: "crompton", focus: ["motors", "industrial fans", "heavy duty pedestal fans", "ventilation"] },
  { name: "INVT", slug: "invt", focus: ["VFD drives", "motor control", "automation", "control panels"] },
  { name: "Lauritz Knudsen (L&T)", slug: "lauritz-knudsen-lt", focus: ["switchgear", "contactors", "protection", "distribution boards"] },
  { name: "Chint", slug: "chint", focus: ["switchgear", "MCB", "MCCB", "electrical protection"] },
  { name: "Selec", slug: "selec", focus: ["meters", "process controllers", "timers", "control panel components"] },
  { name: "Multispan", slug: "multispan", focus: ["process controllers", "temperature controllers", "timers", "indicators"] },
  { name: "Radix", slug: "radix", focus: ["temperature controllers", "process indicators", "automation components", "control systems"] },
  { name: "Itherm", slug: "itherm", focus: ["temperature controllers", "process control", "timers", "industrial indicators"] },
  { name: "Pepperl+Fuchs", slug: "pepperl-fuchs", focus: ["industrial sensors", "proximity sensors", "photoelectric sensors", "factory automation"] },
  { name: "Hindustan", slug: "hindustan", focus: ["motors", "induction motors", "heavy duty motors", "industrial spares"] },
  { name: "Bharat Bijlee", slug: "bharat-bijlee", focus: ["motors", "induction motors", "three phase motors", "industrial drives"] },
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
  {
    title: "Contactor & Relay Buying Guide",
    slug: "contactor-relay-buying-guide",
    keyword: "contactor and relay buying guide for industrial panels",
    categorySlug: "contactors-relays",
    brandSlug: "lauritz-knudsen-lt",
    summary:
      "A procurement guide for contactors, control relays, relay bases, coils, overload relays, and spare parts used in motor starters and control panels.",
    sections: [
      "Start with coil voltage, contact rating, pole count, auxiliary contact needs, mounting method, and load type before matching a contactor or relay.",
      "Panel builders and maintenance teams should verify existing model numbers, wiring photos, and overload relay coordination so replacements fit without rework.",
      "Local availability matters for Vapi, Daman, Silvassa, and Valsad plants because contactor or relay failure can stop motors, conveyors, pumps, and machine controls.",
    ],
  },
  {
    title: "Limit Switch Selection Guide",
    slug: "limit-switch-selection-guide",
    keyword: "limit switch selection guide for industrial machines",
    categorySlug: "limit-switches",
    brandSlug: "omron",
    summary:
      "A machine-maintenance guide for selecting lever limit switches, roller limit switches, heavy-duty limit switches, and position switches.",
    sections: [
      "Limit switch selection depends on actuator style, travel direction, operating force, enclosure rating, contact configuration, and the mechanical movement being detected.",
      "Heavy-duty machines should use switches that can handle vibration, dust, oil, coolant, and repeated actuation in production environments.",
      "Share photos of the installed switch, wiring, and mounting position when requesting a replacement so the supplier can match the body, lever, and contact arrangement.",
    ],
  },
  {
    title: "Flameproof Product Guide",
    slug: "flameproof-product-guide",
    keyword: "flameproof electrical product guide for industrial areas",
    categorySlug: "flameproof-products",
    brandSlug: "philips",
    summary:
      "A guide for selecting flameproof lights, push buttons, limit switches, junction boxes, and fittings for industrial environments that need rugged electrical products.",
    sections: [
      "Flameproof product selection should consider the area condition, enclosure type, cable entry, mounting location, operating temperature, and inspection requirements.",
      "Chemical, solvent, packaging, and process plants should avoid generic substitutions and confirm suitability before installing electrical products in demanding zones.",
      "For quotation support, provide the product type, quantity, site application, enclosure preference, and any existing model details so procurement can move faster.",
    ],
  },
  {
    title: "Industrial Plugs & Sockets Guide",
    slug: "industrial-plugs-sockets-guide",
    keyword: "industrial plugs and sockets buying guide",
    categorySlug: "industrial-plugs-sockets",
    brandSlug: "legrand",
    summary:
      "A practical guide for choosing industrial plugs, sockets, connectors, and weatherproof plug-socket sets for machines, utilities, and maintenance use.",
    sections: [
      "Check current rating, voltage, pin configuration, phase requirement, IP rating, mounting style, and cable size before selecting plugs or sockets.",
      "Factories should match plug and socket hardware to equipment load, movement, washdown exposure, and maintenance practices to reduce unsafe temporary wiring.",
      "Local sourcing helps maintenance teams replace damaged connectors quickly and standardize plug-socket systems across machines and utility points.",
    ],
  },
  {
    title: "Cable Tray & Hardware Guide",
    slug: "cable-tray-hardware-guide",
    keyword: "cable tray and electrical hardware guide for factories",
    categorySlug: "cable-trays-hardware",
    brandSlug: "polycab",
    summary:
      "A guide for planning cable trays, cable glands, lugs, ferrules, mounting hardware, and electrical installation accessories for industrial projects.",
    sections: [
      "Cable-routing hardware should be planned around cable load, bend radius, support spacing, corrosion exposure, future expansion, and maintenance access.",
      "Use proper glands, lugs, ferrules, markers, and mounting hardware so panel wiring and field cabling remain serviceable after installation.",
      "For project inquiries, share cable schedule, tray size preference, site photos, and required accessories so the material list can be prepared accurately.",
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

export const PRODUCT_LANDING_ALIASES: Record<string, string> = {
  "switchgear-supplier-vapi": "switchgear",
  "plc-supplier-vapi": "automation-systems",
  "vfd-supplier-vapi": "automation-systems",
  "industrial-sensors-supplier-vapi": "industrial-sensors",
  "process-controller-supplier-vapi": "process-controllers",
  "industrial-cables-supplier-vapi": "industrial-cables",
  "flameproof-products-supplier-vapi": "flameproof-products",
  "panel-accessories-supplier-vapi": "panel-accessories",
  "cable-tray-supplier-vapi": "cable-trays-hardware",
  "contactors-relays-supplier-vapi": "contactors-relays",
  "limit-switches-supplier-vapi": "limit-switches",
  "industrial-plugs-sockets-supplier-vapi": "industrial-plugs-sockets",
  "distribution-board-supplier-vapi": "distribution-boards",
};

export const BRAND_LANDING_ALIASES: Record<string, string> = {
  "siemens-dealer-vapi": "siemens",
  "schneider-dealer-vapi": "schneider-electric",
  "polycab-cable-supplier-vapi": "polycab",
  "rr-kabel-supplier-vapi": "rr-kabel",
  "omron-sensor-supplier-vapi": "omron",
  "selec-controller-supplier-vapi": "selec",
  "multispan-controller-supplier-vapi": "multispan",
  "legrand-dealer-vapi": "legrand",
  "hager-dealer-vapi": "hager",
  "chint-dealer-vapi": "chint",
  "lauritz-knudsen-dealer-vapi": "lauritz-knudsen-lt",
};

export function getLocationBySlug(slug?: string) {
  return SERVICE_LOCATIONS.find((location) => location.slug === slug) ?? SERVICE_LOCATIONS[0];
}

export function getCategoryBySlug(slug?: string) {
  const resolvedSlug = slug ? PRODUCT_LANDING_ALIASES[slug] ?? slug : slug;
  return PRODUCT_AUTHORITY_CATEGORIES.find((category) => category.slug === resolvedSlug) ?? PRODUCT_AUTHORITY_CATEGORIES[0];
}

export function getBrandBySlug(slug?: string) {
  const resolvedSlug = slug ? BRAND_LANDING_ALIASES[slug] ?? slug : slug;
  return AUTHORITY_BRANDS.find((brand) => brand.slug === resolvedSlug) ?? AUTHORITY_BRANDS[0];
}

export function getResourceBySlug(slug?: string) {
  return RESOURCE_GUIDES.find((guide) => guide.slug === slug) ?? RESOURCE_GUIDES[0];
}
