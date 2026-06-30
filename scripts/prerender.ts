import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES, SITE_NAME, SITE_URL } from "../client/src/lib/site";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_PUBLIC = path.resolve(__dirname, "../dist/public");
const TEMPLATE_PATH = path.join(DIST_PUBLIC, "index.html");

const PARTNER_BRANDS = [
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
  "DELTA",
  "RR Kabel",
  "C&S Electric",
  "PANASONIC",
  "ITHERM",
  "Bharat Bijlee",
  "SELEC",
  "MULTISPAN",
  "SECURE",
  "ELMEX",
];

const PRODUCT_CATEGORIES = [
  { name: "Industrial Cables", slug: "industrial-cables", description: "Armoured Alum/Copper, HT Cables, Multi-Core Flex, Solar & Thermocouple, Fiber Optic Cables" },
  { name: "Distribution Boards", slug: "distribution-boards", description: "MCB Boxes, Double Door MCCB Boxes, Weather Proof Enclosures" },
  { name: "Switchgear", slug: "switchgear", description: "MCB, RCCB, MCCB, MPCB, Thermal Overload Relays" },
  { name: "Panel Accessories", slug: "panel-accessories", description: "Control Panels, Relays & Bases, Switches & Push Buttons, SMPS & Fuses & Capacitors" },
  { name: "Automation Systems", slug: "automation-systems", description: "VFD Drives, HMI Interfaces, SCADA Systems, PLC Systems" },
  { name: "Process Controllers", slug: "process-controllers", description: "PID/Temp Controllers, Humidity/Cooling Control, Indicators & Timers" },
  { name: "Industrial Sensors", slug: "industrial-sensors", description: "Proximity & Capacitive, Photoelectric, Thermocouple, Water Level" },
  { name: "Heavy-Duty Motors", slug: "heavy-duty-motors", description: "Induction Motors, Servo Motors, Gear Motors" },
  { name: "Electrical Measurement", slug: "electrical-measurement", description: "Multi-Function Meters, Energy Meters, Current Transformers" },
  { name: "Industrial Lighting", slug: "industrial-lighting", description: "Highbay Lights, Flood & Street Lights, Poles & High Mast" },
  { name: "Industrial Fans", slug: "industrial-fans", description: "Heavy Duty Pedestal, Centrifugal Blowers, Axial & Panel Fans" },
  { name: "Industrial Heaters", slug: "industrial-heaters", description: "Infrared Heaters, Tubular Heaters, Oil & Water Heaters" },
  { name: "Contactors & Relays", slug: "contactors-relays", description: "Contactors, Control Relays, Relay Bases, Coils & Spare Parts" },
  { name: "Limit Switches", slug: "limit-switches", description: "Lever Limit Switches, Roller Limit Switches, Heavy Duty Limit Switches, Position Switches" },
  { name: "Flameproof Products", slug: "flameproof-products", description: "Flameproof Lights, Flameproof Push Buttons, Flameproof Limit Switches, Junction Boxes & Fittings" },
  { name: "Industrial Plugs & Sockets", slug: "industrial-plugs-sockets", description: "Industrial Plugs, Industrial Sockets, Power Connectors, Weatherproof Plug Socket Sets" },
  { name: "Cable Trays & Hardware", slug: "cable-trays-hardware", description: "Cable Trays, Cable Glands, Lugs & Ferrules, Mounting Hardware" }
];

const SERVICE_LOCATIONS = [
  "vapi",
  "silvassa",
  "daman",
  "sarigam",
  "umbergaon",
  "pardi",
  "valsad",
  "navsari",
  "ankleshwar",
  "bharuch",
  "surat",
  "dahej",
];

const AUTHORITY_BRANDS = [
  "siemens",
  "schneider-electric",
  "abb",
  "delta",
  "mitsubishi",
  "omron",
  "polycab",
  "rr-kabel",
  "kei",
  "legrand",
  "c-and-s-electric",
  "autonics",
  "panasonic",
  "philips",
  "crompton",
  "invt",
  "lauritz-knudsen-lt",
  "chint",
  "selec",
  "multispan",
  "radix",
  "itherm",
  "pepperl-fuchs",
  "hindustan",
  "bharat-bijlee",
  "secure",
  "elmex",
  "hager",
  "wipro",
  "bajaj",
  "havells",
  "almonard",
  "rexnord",
];

const RESOURCE_GUIDES = [
  "plc-selection-guide",
  "vfd-buying-guide",
  "mccb-selection-guide",
  "industrial-sensor-guide",
  "temperature-controller-guide",
  "contactor-relay-buying-guide",
  "limit-switch-selection-guide",
  "flameproof-product-guide",
  "industrial-plugs-sockets-guide",
  "cable-tray-hardware-guide",
];

const SEO_PRODUCT_LANDING_PAGES = [
  { path: "/products/switchgear-supplier-vapi", name: "Switchgear", keyword: "switchgear supplier in Vapi", related: ["MCB", "MCCB", "RCCB", "MPCB", "thermal overload relays"], category: "switchgear" },
  { path: "/products/plc-supplier-vapi", name: "PLC", keyword: "PLC supplier in Vapi", related: ["PLC systems", "HMI interfaces", "SCADA systems", "control relays", "SMPS"], category: "automation-systems" },
  { path: "/products/vfd-supplier-vapi", name: "VFD", keyword: "VFD supplier in Vapi", related: ["VFD drives", "motor control", "pumps", "fans", "compressors"], category: "automation-systems" },
  { path: "/products/industrial-sensors-supplier-vapi", name: "Industrial Sensors", keyword: "industrial sensor supplier in Vapi", related: ["proximity sensors", "photoelectric sensors", "capacitive sensors", "thermocouples", "water level sensors"], category: "industrial-sensors" },
  { path: "/products/process-controller-supplier-vapi", name: "Process Controllers", keyword: "process controller supplier in Vapi", related: ["PID controllers", "temperature controllers", "timers", "counters", "indicators"], category: "process-controllers" },
  { path: "/products/industrial-cables-supplier-vapi", name: "Industrial Cables", keyword: "industrial cables supplier in Vapi", related: ["armoured cables", "HT cables", "multi-core cables", "solar cables", "fiber optic cables"], category: "industrial-cables" },
  { path: "/products/flameproof-products-supplier-vapi", name: "Flameproof Products", keyword: "flameproof products supplier in Vapi", related: ["flameproof lights", "flameproof push buttons", "junction boxes", "limit switches", "fittings"], category: "flameproof-products" },
  { path: "/products/panel-accessories-supplier-vapi", name: "Panel Accessories", keyword: "panel accessories supplier in Vapi", related: ["SMPS", "fuses", "capacitors", "terminal blocks", "push buttons"], category: "panel-accessories" },
  { path: "/products/cable-tray-supplier-vapi", name: "Cable Trays", keyword: "cable tray supplier in Vapi", related: ["cable trays", "cable glands", "lugs", "ferrules", "mounting hardware"], category: "cable-trays-hardware" },
  { path: "/products/contactors-relays-supplier-vapi", name: "Contactors And Relays", keyword: "contactors and relays supplier in Vapi", related: ["contactors", "control relays", "relay bases", "coils", "spare parts"], category: "contactors-relays" },
  { path: "/products/limit-switches-supplier-vapi", name: "Limit Switches", keyword: "limit switches supplier in Vapi", related: ["lever limit switches", "roller limit switches", "heavy duty limit switches", "position switches"], category: "limit-switches" },
  { path: "/products/industrial-plugs-sockets-supplier-vapi", name: "Industrial Plugs And Sockets", keyword: "industrial plugs sockets supplier in Vapi", related: ["industrial plugs", "industrial sockets", "power connectors", "weatherproof plug socket sets"], category: "industrial-plugs-sockets" },
  { path: "/products/distribution-board-supplier-vapi", name: "Distribution Boards", keyword: "distribution board supplier in Vapi", related: ["MCB boxes", "MCCB boxes", "weather proof enclosures", "double door boxes"], category: "distribution-boards" },
];

const SEO_BRAND_LANDING_PAGES = [
  { path: "/brands/siemens-dealer-vapi", name: "Siemens", keyword: "Siemens dealer in Vapi", focus: ["switchgear", "PLC systems", "drives", "motors"] },
  { path: "/brands/schneider-dealer-vapi", name: "Schneider Electric", keyword: "Schneider dealer in Vapi", focus: ["switchgear", "distribution boards", "automation", "protection"] },
  { path: "/brands/polycab-cable-supplier-vapi", name: "Polycab", keyword: "Polycab cable supplier in Vapi", focus: ["industrial cables", "power cables", "control cables", "wires"] },
  { path: "/brands/rr-kabel-supplier-vapi", name: "RR Kabel", keyword: "RR Kabel supplier in Vapi", focus: ["industrial cables", "flexible wires", "control cables", "power cables"] },
  { path: "/brands/omron-sensor-supplier-vapi", name: "Omron", keyword: "Omron sensor supplier in Vapi", focus: ["sensors", "controllers", "relays", "automation"] },
  { path: "/brands/selec-controller-supplier-vapi", name: "Selec", keyword: "Selec controller supplier in Vapi", focus: ["meters", "process controllers", "timers", "control panel components"] },
  { path: "/brands/multispan-controller-supplier-vapi", name: "Multispan", keyword: "Multispan controller supplier in Vapi", focus: ["process controllers", "temperature controllers", "timers", "indicators"] },
  { path: "/brands/legrand-dealer-vapi", name: "Legrand", keyword: "Legrand dealer in Vapi", focus: ["distribution boards", "protection", "wiring devices", "enclosures"] },
  { path: "/brands/hager-dealer-vapi", name: "Hager", keyword: "Hager dealer in Vapi", focus: ["distribution boards", "protection products", "switchgear", "enclosures"] },
  { path: "/brands/chint-dealer-vapi", name: "Chint", keyword: "Chint dealer in Vapi", focus: ["switchgear", "MCB", "MCCB", "electrical protection"] },
  { path: "/brands/lauritz-knudsen-dealer-vapi", name: "Lauritz Knudsen", keyword: "Lauritz Knudsen dealer in Vapi", focus: ["switchgear", "contactors", "protection", "distribution boards"] },
];

const HOME_FAQS = [
  {
    question: "What products does JK Electricals Vapi supply?",
    answer: "JK Electricals Vapi supplies switchgear, PLC, VFD, HMI, sensors, process controllers, industrial cables, wires, flameproof products, panel accessories, cable trays, industrial plugs and sockets, distribution boards, motors, lighting, contactors, relays and limit switches for industrial buyers.",
  },
  {
    question: "Does JK Electricals supply industrial automation products?",
    answer: "Yes. JK Electricals supports industrial automation requirements such as PLC systems, VFD drives, HMI interfaces, SCADA related products, industrial sensors, relays, timers, SMPS units and process controllers.",
  },
  {
    question: "Does JK Electricals serve factories in Vapi GIDC?",
    answer: "Yes. JK Electricals supports factories, panel builders, contractors, OEMs and maintenance teams in Vapi GIDC with industrial electrical products and quotation support.",
  },
  {
    question: "Which areas does JK Electricals serve?",
    answer: "JK Electricals serves Vapi, GIDC Vapi, Daman, Silvassa, Valsad, Sarigam, Umbergaon, Navsari and nearby South Gujarat industrial areas.",
  },
  {
    question: "How can I request a quotation from JK Electricals?",
    answer: "Buyers can call, WhatsApp, email or use the contact page. Sharing model numbers, ratings, quantity, brand preference, panel photos and application details helps prepare a faster quotation.",
  },
  {
    question: "Does JK Electricals supply switchgear, PLC, VFD, sensors and cables?",
    answer: "Yes. Switchgear, PLC systems, VFD drives, industrial sensors and industrial cables are core product categories supported by JK Electricals Vapi.",
  },
  {
    question: "Does JK Electricals support panel builders and contractors?",
    answer: "Yes. JK Electricals supports panel builders, electrical contractors, OEMs and maintenance teams with panel accessories, control products, wiring accessories, switchgear and automation products.",
  },
  {
    question: "Does JK Electricals supply flameproof products for industrial use?",
    answer: "Yes. Buyers can inquire about flameproof lights, flameproof push buttons, flameproof limit switches, junction boxes and fittings for suitable industrial applications.",
  },
];

function titleCaseSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function productSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getAssetImages() {
  const assetsDir = path.join(DIST_PUBLIC, "assets");
  if (!fs.existsSync(assetsDir)) return ["/og-image.svg"];
  return fs
    .readdirSync(assetsDir)
    .filter((file) => /\.(png|jpe?g|webp|avif|svg)$/i.test(file))
    .filter((file) => !file.toLowerCase().includes("dap"))
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 24)
    .map((file) => `/assets/${file}`);
}

function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ElectricalSupplyStore",
    name: "JK Electricals Vapi",
    url: `${SITE_URL}/`,
    description: "JK Electricals Vapi supplies industrial electricals, switchgear, PLC, VFD, sensors, cables, flameproof products, panel accessories and automation products across Vapi GIDC and South Gujarat.",
    telephone: "+91 73830 95063",
    email: "jkelectricals93@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-5, City Centre, Opp. Hanuman Temple, Bhadakmora, Silvassa Road",
      addressLocality: "Vapi",
      addressRegion: "Gujarat",
      postalCode: "396195",
      addressCountry: "IN",
    },
    areaServed: ["Vapi", "GIDC Vapi", "Daman", "Silvassa", "Valsad", "Sarigam", "Umbergaon", "South Gujarat"].map((name) => ({
      "@type": "Place",
      name,
    })),
    sameAs: ["https://www.indiamart.com/jkelectricals-gujrat/profile.html"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Industrial Electrical and Automation Products",
      itemListElement: SEO_PRODUCT_LANDING_PAGES.map((page) => ({
        "@type": "OfferCatalog",
        name: page.name,
        url: `${SITE_URL}${page.path}`,
      })),
    },
  };
}

function faqJsonLd(items: typeof HOME_FAQS) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

function schemaScript(schema: unknown | unknown[]) {
  return `<script type="application/ld+json" data-prerender-schema>${JSON.stringify(schema)}</script>`;
}

function staticPageShell(content: string) {
  return `<div id="root"><div class="seo-prerender">${content}</div></div>`;
}

function imageHtml(images: string[], index: number, alt: string) {
  const terms = alt
    .toLowerCase()
    .replace(/&/g, " ")
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2 && !["supplier", "vapi", "products", "product", "industrial", "dealer"].includes(term));
  const matched = images.find((image) => terms.some((term) => image.toLowerCase().includes(term)));
  const src = matched ?? images[index % images.length] ?? "/og-image.svg";
  return `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async" />`;
}

function homeStaticHtml(images: string[]) {
  const productBlocks = [
    ["Switchgear", "/products/switchgear-supplier-vapi", "Switchgear supplier in Vapi GIDC", "Switchgear is essential for safe industrial electrical distribution. JK Electricals Vapi supports buyers with MCB, MCCB, RCCB, MPCB, overload relays and protection products for control panels, utility boards, machines and maintenance replacement. Buyers can share ratings, breaking capacity, pole configuration and preferred brands for a practical quotation."],
    ["PLC", "/products/plc-supplier-vapi", "PLC supplier in Vapi", "PLC systems help factories automate machines, process lines, packaging equipment and utility control. As an industrial automation supplier in Vapi, JK Electricals helps buyers compare PLC requirements with HMI, VFD, sensors, relays, SMPS and panel accessories so the control system remains serviceable."],
    ["VFD", "/products/vfd-supplier-vapi", "VFD supplier in Vapi", "VFD drives are used for pumps, fans, compressors, conveyors and motor speed control. JK Electricals supports VFD inquiries by asking for motor HP or kW, voltage, load type, duty cycle, enclosure needs and control method before recommending suitable options for industrial buyers."],
    ["HMI", "/products/plc-supplier-vapi", "HMI automation products supplier in Vapi", "HMI interfaces help operators monitor machines, alarms, setpoints and production conditions. JK Electricals connects HMI requirements with PLC systems, VFD drives, sensors and panel communication needs for machine builders and factories upgrading automation systems."],
    ["Industrial Sensors", "/products/industrial-sensors-supplier-vapi", "Industrial sensor supplier in Vapi", "Industrial sensors improve detection, counting, positioning, level control and automation feedback. JK Electricals supplies proximity sensors, photoelectric sensors, capacitive sensors, thermocouple sensors and related sensing products for packaging, textile, engineering and process applications."],
    ["Proximity Sensors", "/products/industrial-sensors-supplier-vapi", "Proximity sensor supplier in Vapi", "Proximity sensors are commonly used for metal detection, position feedback and automation reliability on machines. Buyers should confirm sensing distance, supply voltage, output type, mounting style and environment before selecting a replacement or new sensor."],
    ["Photoelectric Sensors", "/products/industrial-sensors-supplier-vapi", "Photoelectric sensor supplier in Vapi", "Photoelectric sensors help detect objects, labels, packaging, movement and machine positions where non-contact sensing is needed. JK Electricals supports buyers with brand, model, output and application matching for industrial automation requirements."],
    ["Process Controllers", "/products/process-controller-supplier-vapi", "Process controller supplier in Vapi", "Process controllers are used in heating, cooling, timing, counting, humidity, pressure and temperature applications. JK Electricals supports PID controllers, indicators, timers and counters for chemical, pharma, textile, packaging and machine-control applications."],
    ["Temperature Controllers", "/resources/temperature-controller-guide", "Temperature controller supplier in Vapi", "Temperature controllers should be selected by input type, control output, panel cutout, alarm need and process stability. JK Electricals helps maintenance teams and panel builders match controllers with sensors, SSRs, heaters and wiring requirements."],
    ["Timers", "/products/process-controller-supplier-vapi", "Timer supplier in Vapi", "Industrial timers and counters support sequencing, machine control, batching and panel logic. JK Electricals helps buyers confirm timing range, supply voltage, output contact type, mounting style and replacement model details before quotation."],
    ["Industrial Cables", "/products/industrial-cables-supplier-vapi", "Industrial cables supplier in Vapi", "Industrial cables must match load, voltage grade, core count, conductor, insulation, armouring, route and installation environment. JK Electricals supports power cables, control cables, HT cables, flexible cables, solar cables, instrumentation cables and thermocouple cables for projects and maintenance."],
    ["Wires", "/products/industrial-cables-supplier-vapi", "Industrial wires supplier in Vapi", "Industrial wires and flexible cables support control panels, machinery wiring, utility connections and maintenance work. Buyers can share cable size, color, length, brand preference and application to receive faster support from JK Electricals Vapi."],
    ["Flameproof Products", "/products/flameproof-products-supplier-vapi", "Flameproof products supplier in Vapi", "Flameproof products are requested for demanding industrial environments where rugged electrical hardware is required. JK Electricals supports inquiries for flameproof lights, push buttons, limit switches, junction boxes and fittings with attention to application and site conditions."],
    ["Panel Accessories", "/products/panel-accessories-supplier-vapi", "Panel accessories supplier in Vapi", "Panel accessories include SMPS, fuses, capacitors, relays, relay bases, terminal blocks, switches, push buttons and indicators. JK Electricals supplies these products for control panel builders, contractors, OEMs and maintenance departments."],
    ["Cable Trays", "/products/cable-tray-supplier-vapi", "Cable tray supplier in Vapi", "Cable trays and installation hardware help organize industrial cable routing, future maintenance and project expansion. JK Electricals supports cable tray, cable gland, lug, ferrule and mounting hardware inquiries for factories and electrical contractors."],
    ["Industrial Plugs & Sockets", "/products/industrial-plugs-sockets-supplier-vapi", "Industrial plugs sockets supplier in Vapi", "Industrial plugs and sockets should match current rating, voltage, pin configuration, IP rating, mounting style and cable size. JK Electricals supports plug, socket, connector and weatherproof plug-socket inquiries for machinery and utilities."],
    ["Distribution Boards", "/products/distribution-board-supplier-vapi", "Distribution board supplier in Vapi", "Distribution boards, MCB boxes, MCCB boxes and enclosures support safe power distribution for machines, utilities and industrial projects. Buyers should confirm enclosure type, incomer/outgoing requirements, panel space and protection rating."],
    ["Motors", "/products/heavy-duty-motors", "Industrial motor supplier in Vapi", "Industrial motors are used in pumps, fans, conveyors, compressors and machine systems. JK Electricals supports induction motors, servo motors, gear motors and replacement inquiries based on HP, kW, RPM, frame size, mounting and application."],
    ["Lighting", "/products/industrial-lighting", "Industrial lighting supplier in Vapi", "Industrial lighting includes highbay lights, flood lights, street lights, poles and high mast systems for factories, warehouses, yards and infrastructure. JK Electricals supports lighting requirements by application, mounting height and quantity."],
    ["Contactors", "/products/contactors-relays-supplier-vapi", "Contactor supplier in Vapi", "Contactors are used in motor starters, panels, pumps, compressors, conveyors and control circuits. JK Electricals supports contactor inquiries based on coil voltage, load rating, auxiliary contact requirement and replacement model."],
    ["Relays", "/products/contactors-relays-supplier-vapi", "Relay supplier in Vapi", "Control relays, relay bases and spare coils support panel logic, automation circuits and maintenance replacement. Buyers should share coil voltage, contact arrangement, existing model and panel photos for accurate matching."],
    ["Limit Switches", "/products/limit-switches-supplier-vapi", "Limit switch supplier in Vapi", "Limit switches help detect machine position, travel limits and mechanical movement. JK Electricals supports lever, roller, heavy-duty and position switch inquiries for packaging, engineering, textile and process equipment."],
  ];

  const brandLinks = SEO_BRAND_LANDING_PAGES.map((brand) => `<a href="${brand.path}">${escapeHtml(brand.name)} ${escapeHtml(brand.keyword)}</a>`).join("");
  const categoryHtml = productBlocks
    .map((block, index) => `<article><h3>${block[0]}</h3>${imageHtml(images, index, block[2])}<p>${block[3]}</p><p><strong>Related keywords:</strong> ${block[2]}, electrical products supplier in South Gujarat.</p><a href="${block[1]}">View ${block[0]} products</a> <a href="/contact">Request enquiry</a></article>`)
    .join("");

  const faqHtml = HOME_FAQS.map((faq) => `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`).join("");

  return `
    <header><nav><a href="/">JK Electricals Vapi</a><a href="/products">Products</a><a href="/brands">Brands</a><a href="/contact">Contact</a></nav></header>
    <main>
      <section>
        <h1>JK Electricals Vapi - Industrial Electrical Supplier in Vapi GIDC</h1>
        <p>JK Electricals Vapi is an industrial electrical supplier in Vapi serving factories, contractors, panel builders, OEMs and maintenance teams across Vapi GIDC and South Gujarat. The business supplies industrial electricals in Vapi for buyers who need practical quotation support, genuine product sourcing and quick communication for production, maintenance and project requirements.</p>
        <p>As an electrical supplier in Vapi GIDC and an industrial automation supplier in Vapi, JK Electricals supports switchgear, PLC, VFD, sensors, process controllers, industrial cables, flameproof products, panel accessories, cable trays, distribution boards, motors, lighting, contactors, relays and limit switches from trusted industrial brands.</p>
      </section>
      <section><h2>Industrial Electrical & Automation Products in Vapi</h2><p>Industrial buyers need more than a retail counter. A factory may need an MCCB for a distribution panel, a VFD for a pump, a PLC for machine automation, sensors for detection, cables for a new line, flameproof products for demanding areas and panel accessories for urgent maintenance. JK Electricals Vapi organizes these requirements into clear product categories with direct enquiry paths.</p></section>
      <section><h2>Switchgear, PLC, VFD, Sensors, Cables & Panel Accessories</h2><p>JK Electricals is positioned for buyers searching for switchgear supplier in Vapi, PLC supplier in Vapi, VFD supplier in Vapi, industrial sensor supplier in Vapi, process controller supplier in Vapi, industrial cables supplier in Vapi, flameproof products supplier in Vapi, panel accessories supplier in Vapi and cable tray supplier in Vapi.</p></section>
      <section><h2>Electrical Product Categories We Supply</h2><div>${categoryHtml}</div></section>
      <section><h2>Industrial Automation Supplier for Factories and Panel Builders</h2><p>Automation requirements often involve PLC, HMI, VFD, SCADA products, sensors, SMPS, relays, timers, process controllers and panel wiring accessories together. JK Electricals helps panel builders, OEMs and factories share complete technical information so products can be matched to the real application rather than guessed from a short item name.</p></section>
      <section><h2>Brands and Product Support</h2><p>Industrial buyers often search by brand because compatibility, warranty, standardization and trust matter in plant maintenance. JK Electricals supports brand-led inquiries for Siemens, Schneider Electric, Polycab, RR Kabel, Omron, Selec, Multispan, Legrand, Hager, Chint, Lauritz Knudsen and other industrial electrical brands.</p><div>${brandLinks}</div></section>
      <section><h2>Serving Vapi GIDC, Daman, Silvassa and South Gujarat</h2><p>JK Electricals serves Vapi, GIDC Vapi, Daman, Silvassa, Valsad, Sarigam, Umbergaon, Navsari and nearby South Gujarat industrial areas. Local supply is useful when downtime, contractor schedules, replacement matching or project procurement requires fast response.</p><a href="/electrical-supplier-vapi">Electrical supplier Vapi</a><a href="/electrical-supplier-daman">Electrical supplier Daman</a><a href="/electrical-supplier-silvassa">Electrical supplier Silvassa</a></section>
      <section><h2>Why Choose JK Electricals Vapi</h2><p>Buyers choose JK Electricals Vapi because the site and enquiry process are organized around actual industrial procurement needs: category clarity, brand support, local service areas, visible contact details, catalog access, GST information and practical quotation guidance. Customers can share BOQs, model numbers, ratings, photos, quantities and urgency to reduce back-and-forth.</p></section>
      <section><h2>Frequently Asked Questions</h2>${faqHtml}</section>
    </main>
    <footer><a href="/contact">Contact JK Electricals Vapi</a></footer>
  `;
}

function productLandingHtml(page: (typeof SEO_PRODUCT_LANDING_PAGES)[number], images: string[]) {
  const faqItems = [
    { question: `Where can I find a ${page.keyword}?`, answer: `You can contact JK Electricals Vapi for ${page.name} inquiries for factories, contractors, panel builders and maintenance buyers in Vapi GIDC and South Gujarat.` },
    { question: `What details are needed for a ${page.name} quotation?`, answer: "Share model number, rating, quantity, brand preference, application, photos and delivery urgency for faster support." },
    { question: `Does JK Electricals supply ${page.name} outside Vapi?`, answer: "Yes. JK Electricals supports buyers in Daman, Silvassa, Valsad, Sarigam, Umbergaon and nearby South Gujarat industrial areas." },
  ];
  return `
    <main>
      <section><h1>${escapeHtml(page.keyword.replace(/\b\w/g, (char) => char.toUpperCase()))}</h1><p>JK Electricals Vapi supports buyers looking for ${escapeHtml(page.keyword)} with practical product matching, quotation support and industrial procurement guidance. The page is built for factories, panel builders, electrical contractors, OEMs and maintenance teams that need genuine products for Vapi GIDC and South Gujarat.</p></section>
      <section><h2>${escapeHtml(page.name)} Products And Applications</h2>${imageHtml(images, 1, `${page.keyword} products at JK Electricals Vapi`)}<p>${escapeHtml(page.name)} requirements may include ${escapeHtml(page.related.join(", "))}. These products are used in control panels, machinery, utility distribution, automation upgrades, plant maintenance and project procurement. Buyers should explain the application so the product can be matched by rating, brand and installation context.</p></section>
      <section><h2>Technical Buying Details</h2><p>A good enquiry includes electrical rating, model number, quantity, preferred brand, panel or machine details, existing photos and urgency. This helps JK Electricals reduce mismatch risk and prepare a useful quotation for industrial buyers.</p></section>
      <section><h2>Serving Vapi GIDC And South Gujarat</h2><p>JK Electricals supports ${escapeHtml(page.name)} procurement for Vapi, GIDC Vapi, Daman, Silvassa, Valsad, Sarigam, Umbergaon, Navsari and South Gujarat industrial regions where downtime and fast response matter.</p></section>
      <section><h2>Related Internal Links</h2><a href="/products/${page.category}">Main ${escapeHtml(page.name)} category</a><a href="/brands/siemens-dealer-vapi">Siemens dealer Vapi</a><a href="/brands/schneider-dealer-vapi">Schneider dealer Vapi</a><a href="/contact">Request quotation</a></section>
      <section><h2>Frequently Asked Questions</h2>${faqItems.map((faq) => `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`).join("")}</section>
    </main>
  `;
}

function brandLandingHtml(page: (typeof SEO_BRAND_LANDING_PAGES)[number], images: string[]) {
  const faqItems = [
    { question: `Where can I buy ${page.name} products in Vapi?`, answer: `Industrial buyers can contact JK Electricals Vapi for ${page.name} product inquiries and quotation support.` },
    { question: `Which ${page.name} product families are supported?`, answer: `Common inquiry areas include ${page.focus.join(", ")} depending on model and availability.` },
    { question: `Does JK Electricals support ${page.name} inquiries for South Gujarat?`, answer: "Yes. JK Electricals serves Vapi GIDC, Daman, Silvassa, Valsad, Sarigam, Umbergaon and nearby South Gujarat industrial areas." },
  ];
  return `
    <main>
      <section><h1>${escapeHtml(page.keyword.replace(/\b\w/g, (char) => char.toUpperCase()))}</h1><p>JK Electricals Vapi supports buyers searching for ${escapeHtml(page.keyword)} with brand-led quotation support for factories, panel builders, OEMs, contractors and maintenance teams.</p></section>
      <section><h2>${escapeHtml(page.name)} Product Support</h2>${imageHtml(images, 2, `${page.keyword} industrial products supplier in Vapi`)}<p>${escapeHtml(page.name)} is commonly requested for ${escapeHtml(page.focus.join(", "))}. Buyers can share product models, ratings, quantities, panel photos and application details so the quotation can be matched to real industrial use.</p></section>
      <section><h2>Applications In Factories And Panels</h2><p>${escapeHtml(page.name)} products are used in control panels, machine automation, electrical distribution, maintenance replacement, utility systems and project procurement across Vapi GIDC and South Gujarat.</p></section>
      <section><h2>Related Product Categories</h2><a href="/products/switchgear-supplier-vapi">Switchgear supplier Vapi</a><a href="/products/plc-supplier-vapi">PLC supplier Vapi</a><a href="/products/vfd-supplier-vapi">VFD supplier Vapi</a><a href="/products/industrial-sensors-supplier-vapi">Industrial sensors supplier Vapi</a><a href="/contact">Request quotation</a></section>
      <section><h2>Service Areas</h2><p>JK Electricals supports buyers in Vapi, GIDC Vapi, Daman, Silvassa, Valsad, Sarigam, Umbergaon, Navsari and nearby South Gujarat industrial areas.</p></section>
      <section><h2>Frequently Asked Questions</h2>${faqItems.map((faq) => `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`).join("")}</section>
    </main>
  `;
}

function preRenderPage(template: string, urlPath: string, title: string, description: string, bodyContent = "", schemas: unknown[] = []) {
  const fullTitle = title.includes(SITE_NAME) || title.includes("JK Electricals")
    ? title
    : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${urlPath}`;

  let html = template;

  // Replace Title
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${fullTitle}</title>`);

  // Replace description meta tag
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${description}" />`
  );
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`
  );
  html = html.replace(
    /<meta\s+name="googlebot"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`
  );
  html = html.replace(
    /<meta\s+name="bingbot"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph tags
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${fullTitle}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${SITE_URL}/og-image.svg" />`);

  // Replace Twitter tags
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${fullTitle}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${description}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${SITE_URL}/og-image.svg" />`);

  if (bodyContent) {
    html = html.replace(/<div id="root"><\/div>/i, staticPageShell(bodyContent));
  }

  if (schemas.length > 0) {
    html = html.replace("</head>", `${schemaScript(schemas.length === 1 ? schemas[0] : schemas)}\n</head>`);
  }

  return html;
}

function writePage(urlPath: string, html: string) {
  const routeDir = path.join(DIST_PUBLIC, urlPath);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, "index.html"), html, "utf8");
}

async function run() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`Template not found at ${TEMPLATE_PATH}. Run build first.`);
    process.exit(1);
  }

  const template = fs.readFileSync(TEMPLATE_PATH, "utf8");
  const images = getAssetImages();

  // 1. Pre-render primary pages from site routes
  for (const route of ROUTES) {
    if (route.path === "/") continue;
    console.log(`Pre-rendering core route: ${route.path}`);
    const html = preRenderPage(template, route.path, route.title, route.description);
    writePage(route.path, html);
  }

  // 2. Pre-render category-specific product pages
  for (const cat of PRODUCT_CATEGORIES) {
    const urlPath = `/products/category/${cat.slug}`;
    console.log(`Pre-rendering category route: ${urlPath}`);
    const title = `${cat.name} Dealer, Distributor & Supplier in Vapi | JK Electricals`;
    const description = `Find ${cat.name.toLowerCase()} dealers, distributors, suppliers, stockists, and sellers in Vapi. JK Electricals supplies ${cat.description.toLowerCase()} from trusted brands.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 3. Pre-render brand-specific product pages
  for (const brand of PARTNER_BRANDS) {
    const encodedBrand = encodeURIComponent(brand.toUpperCase());
    const urlPath = `/products/brand/${encodedBrand}`;
    console.log(`Pre-rendering brand route: ${urlPath}`);
    const title = `${brand} Dealer, Distributor & Supplier in Vapi | JK Electricals`;
    const description = `Find ${brand} dealer, distributor, supplier, stockist, reseller, and industrial electrical product support from JK Electricals Vapi for genuine procurement in Gujarat.`;
    const html = preRenderPage(template, urlPath, title, description);
    
    // Write to both decoded and encoded paths for server lookup safety
    writePage(`/products/brand/${brand.toUpperCase()}`, html);
    if (encodedBrand !== brand.toUpperCase()) {
      writePage(`/products/brand/${encodedBrand}`, html);
    }
  }

  // 4. Pre-render clean category authority pages
  for (const cat of PRODUCT_CATEGORIES) {
    const urlPath = `/products/${cat.slug}`;
    console.log(`Pre-rendering clean category route: ${urlPath}`);
    const title = `${cat.name} Dealer, Distributor & Supplier in Vapi | JK Electricals`;
    const description = `Source ${cat.name.toLowerCase()} in Vapi, Daman, Silvassa, Valsad, Pardi, and South Gujarat for industrial projects, maintenance, automation panels, and factory procurement from JK Electricals.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 5. Pre-render location landing pages
  for (const cat of PRODUCT_CATEGORIES) {
    for (const productName of cat.description.split(",").map((item) => item.trim()).filter(Boolean)) {
      const productPath = `/products/${cat.slug}/${productSlug(productName)}`;
      console.log(`Pre-rendering product route: ${productPath}`);
      const title = `${productName} Supplier, Dealer & Distributor in Vapi | JK Electricals`;
      const description = `Source ${productName} in Vapi, Daman, Silvassa, Valsad, Navsari, and South Gujarat from JK Electricals for industrial projects, maintenance, panel, OEM, and bulk procurement.`;
      const html = preRenderPage(template, productPath, title, description);
      writePage(productPath, html);
    }
  }

  // 5. Pre-render location landing pages
  for (const location of SERVICE_LOCATIONS) {
    const locationName = titleCaseSlug(location);
    const urlPath = `/electrical-supplier-${location}`;
    console.log(`Pre-rendering location route: ${urlPath}`);
    const title = `Industrial Electrical & Automation Supplier in ${locationName} | JK Electricals`;
    const description = `JK Electricals supplies switchgear, PLC, VFD, sensors, process controllers, cables, motors, and industrial automation products for ${locationName} manufacturers.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 6. Pre-render brand authority pages
  for (const brand of AUTHORITY_BRANDS) {
    const brandName = titleCaseSlug(brand).replace("Rr", "RR").replace("Abb", "ABB").replace("Kei", "KEI");
    const urlPath = `/brands/${brand}`;
    console.log(`Pre-rendering brand authority route: ${urlPath}`);
    const title = `${brandName} Dealer, Distributor & Supplier in Vapi | JK Electricals`;
    const description = `Request ${brandName} products from JK Electricals Vapi for authorized dealer, distributor, supplier, stockist, reseller, OEM, bulk, maintenance, and project procurement needs.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 7. Pre-render search-focused product landing pages requested for SEO.
  for (const page of SEO_PRODUCT_LANDING_PAGES) {
    console.log(`Pre-rendering SEO product landing route: ${page.path}`);
    const title = `${page.name} Supplier in Vapi | JK Electricals Vapi`;
    const description = `JK Electricals Vapi supplies ${page.name.toLowerCase()} for factories, panel builders, contractors and maintenance teams across Vapi GIDC, Daman, Silvassa and South Gujarat.`;
    const html = preRenderPage(
      template,
      page.path,
      title,
      description,
      productLandingHtml(page, images),
      [
        localBusinessJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: page.name, path: page.path },
        ]),
      ],
    );
    writePage(page.path, html);
  }

  // 8. Pre-render search-focused brand landing pages requested for SEO.
  for (const page of SEO_BRAND_LANDING_PAGES) {
    console.log(`Pre-rendering SEO brand landing route: ${page.path}`);
    const title = `${page.name} Dealer in Vapi | JK Electricals Vapi`;
    const description = `JK Electricals Vapi supports ${page.name} product inquiries for industrial buyers, panel builders, contractors and maintenance teams across Vapi GIDC and South Gujarat.`;
    const html = preRenderPage(
      template,
      page.path,
      title,
      description,
      brandLandingHtml(page, images),
      [
        localBusinessJsonLd(),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: page.name, path: page.path },
        ]),
      ],
    );
    writePage(page.path, html);
  }

  // 9. Pre-render blog hub
  console.log("Pre-rendering blog route: /blog");
  writePage(
    "/blog",
    preRenderPage(
      template,
      "/blog",
      "Industrial Electrical & Automation Blog | JK Electricals",
      "Read buying guides and topic resources for PLC, VFD, sensors, automation, switchgear, industrial safety, and maintenance procurement."
    )
  );

  // 10. Pre-render hidden SEO resource guides
  for (const guide of RESOURCE_GUIDES) {
    const guideName = titleCaseSlug(guide);
    const urlPath = `/resources/${guide}`;
    console.log(`Pre-rendering resource route: ${urlPath}`);
    const title = `${guideName} | JK Electricals Vapi`;
    const description = `${guideName} for industrial electrical and automation buyers in Vapi. Learn selection factors, applications, and quotation support from JK Electricals.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 11. Update SEO for root home page
  console.log("Updating SEO for root home page...");
  const homeRoute = ROUTES.find((r) => r.path === "/");
  if (homeRoute) {
    const html = preRenderPage(
      template,
      "/",
      "JK Electricals Vapi | Industrial Electrical Supplier in Vapi GIDC",
      "JK Electricals Vapi supplies switchgear, PLC, VFD, sensors, cables, flameproof products, panel accessories and automation products across South Gujarat.",
      homeStaticHtml(images),
      [
        localBusinessJsonLd(),
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "JK Electricals Vapi",
          url: `${SITE_URL}/`,
        },
        faqJsonLd(HOME_FAQS),
      ],
    );
    fs.writeFileSync(TEMPLATE_PATH, html, "utf8");
  }

  // 12. Create a 404.html fallback
  console.log("Creating 404.html...");
  fs.copyFileSync(TEMPLATE_PATH, path.join(DIST_PUBLIC, "404.html"));

  // 13. Update sitemap.xml dynamically to use clean paths
  const sitemapPath = path.join(DIST_PUBLIC, "sitemap.xml");
  console.log("Writing expanded sitemap.xml...");
  const today = new Date().toISOString().slice(0, 10);
  const sitemapRoutes = [
    ...ROUTES.map((route) => ({ path: route.path })),
    ...SERVICE_LOCATIONS.map((location) => ({ path: `/electrical-supplier-${location}` })),
    ...PRODUCT_CATEGORIES.map((category) => ({ path: `/products/${category.slug}` })),
    ...PRODUCT_CATEGORIES.flatMap((category) =>
      category.description
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((productName) => ({ path: `/products/${category.slug}/${productSlug(productName)}` }))
    ),
    ...AUTHORITY_BRANDS.map((brand) => ({ path: `/brands/${brand}` })),
    ...SEO_PRODUCT_LANDING_PAGES.map((page) => ({ path: page.path })),
    ...SEO_BRAND_LANDING_PAGES.map((page) => ({ path: page.path })),
    ...RESOURCE_GUIDES.map((guide) => ({ path: `/resources/${guide}` })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes
    .map((route) => `  <url>\n    <loc>${SITE_URL}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
    .join("\n")}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, sitemap, "utf8");

  console.log("Pre-rendering complete successfully!");
}

run().catch((err) => {
  console.error("Error running pre-renderer:", err);
  process.exit(1);
});
