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
  { name: "Industrial Sensors", slug: "industrial-sensors", description: "Proximity & Capacitive, Photoelectric, Thermocouple & Water Level" },
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

function preRenderPage(template: string, urlPath: string, title: string, description: string) {
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

  // 7. Pre-render blog hub
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

  // 8. Pre-render hidden SEO resource guides
  for (const guide of RESOURCE_GUIDES) {
    const guideName = titleCaseSlug(guide);
    const urlPath = `/resources/${guide}`;
    console.log(`Pre-rendering resource route: ${urlPath}`);
    const title = `${guideName} | JK Electricals Vapi`;
    const description = `${guideName} for industrial electrical and automation buyers in Vapi. Learn selection factors, applications, and quotation support from JK Electricals.`;
    const html = preRenderPage(template, urlPath, title, description);
    writePage(urlPath, html);
  }

  // 9. Update SEO for root home page
  console.log("Updating SEO for root home page...");
  const homeRoute = ROUTES.find((r) => r.path === "/");
  if (homeRoute) {
    const html = preRenderPage(template, "/", homeRoute.title, homeRoute.description);
    fs.writeFileSync(TEMPLATE_PATH, html, "utf8");
  }

  // 10. Create a 404.html fallback
  console.log("Creating 404.html...");
  fs.copyFileSync(TEMPLATE_PATH, path.join(DIST_PUBLIC, "404.html"));

  // 11. Update sitemap.xml dynamically to use clean paths
  const sitemapPath = path.join(DIST_PUBLIC, "sitemap.xml");
  console.log("Writing expanded sitemap.xml...");
  const today = new Date().toISOString().slice(0, 10);
  const sitemapRoutes = [
    ...ROUTES.map((route) => ({ path: route.path, priority: route.priority })),
    ...SERVICE_LOCATIONS.map((location) => ({ path: `/electrical-supplier-${location}`, priority: "0.85" })),
    ...PRODUCT_CATEGORIES.map((category) => ({ path: `/products/${category.slug}`, priority: "0.82" })),
    ...PRODUCT_CATEGORIES.flatMap((category) =>
      category.description
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((productName) => ({ path: `/products/${category.slug}/${productSlug(productName)}`, priority: "0.74" }))
    ),
    ...AUTHORITY_BRANDS.map((brand) => ({ path: `/brands/${brand}`, priority: "0.78" })),
    ...RESOURCE_GUIDES.map((guide) => ({ path: `/resources/${guide}`, priority: "0.68" })),
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes
    .map((route) => `  <url>\n    <loc>${SITE_URL}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${route.priority}</priority>\n  </url>`)
    .join("\n")}\n</urlset>\n`;
  fs.writeFileSync(sitemapPath, sitemap, "utf8");

  console.log("Pre-rendering complete successfully!");
}

run().catch((err) => {
  console.error("Error running pre-renderer:", err);
  process.exit(1);
});
