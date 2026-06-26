import { PRODUCT_CATEGORIES, getInquiryLinks, getProductImage } from "@/const";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageCircle, Mail } from "lucide-react";

type ProductGridProps = {
  selectedBrand?: string | null;
  selectedCategory?: string | null;
  searchQuery?: string;
};

const PRODUCT_SEO_DETAILS: Record<string, { description: string; features: string[]; application: string }> = {
  // Industrial Cables
  "Armoured Alum/Copper": {
    description: "Heavy-duty power cables designed for industrial power distribution in factories and chemical plants. These cables feature aluminum or copper conductors with robust steel wire/tape armoring for mechanical protection against underground or physical impacts.",
    features: ["Steel wire or steel tape armoring", "Cross-linked polyethylene (XLPE) insulation", "Excellent resistance to chemicals and moisture", "Ideal for direct burial and mains distribution"],
    application: "Primary power feed from sub-station transformer to industrial switchgear panels."
  },
  "HT Cables": {
    description: "High Tension (HT) cables rated for 11kV to 33kV operations, crucial for heavy industries and power substations in industrial zones like Vapi GIDC, Silvassa, and Sarigam. Manufactured to strict IS standards for maximum reliability.",
    features: ["Suitable for high voltage transmission", "Anti-rodent and anti-termite outer sheath options", "Low dielectric loss design", "Screened copper/aluminum conductors"],
    application: "High-voltage incoming lines for substations and heavy machinery installations."
  },
  "Multi-Core Flex": {
    description: "Highly flexible multi-core copper cables used for machine wiring, control panels, appliances, and mobile electrical equipment. Designed to withstand continuous bending and mechanical stress.",
    features: ["Class 5 flexible copper conductors", "High heat-resistant PVC insulation", "Flame retardant outer jacket", "Available in various core configurations"],
    application: "Wiring between PLCs, limit switches, and control panel terminals on moving machinery."
  },
  "Solar & Thermocouple": {
    description: "Specialized solar DC cables and thermocouple extension cables. Solar cables are UV-stabilized and weather-proof for outdoor PV installations, while thermocouple cables ensure accurate temperature readings in process control.",
    features: ["UV & ozone resistant solar cables", "Tinned copper conductors for solar longevity", "Strict calibration class thermocouple wires", "High temperature rating up to 120°C"],
    application: "Connecting solar panel arrays to inverters; wiring RTD/thermocouples to PID controllers."
  },
  "Fiber Optic Cables": {
    description: "High-speed data communication cables designed for noise-free industrial ethernet networks, SCADA connectivity, and PLC-to-PLC communication in electromagnetic interference (EMI) prone factory floors.",
    features: ["Immunity to EMI and RFI noise", "Single-mode and multi-mode options", "Armored variants for rodent protection", "High-speed fiber-optic cores"],
    application: "Connecting plant-floor SCADA control systems to primary server rack rooms."
  },
  // Switchgear
  "MCB": {
    description: "Miniature Circuit Breakers (MCBs) provide essential overload and short-circuit protection for lighting circuits, control panel sub-circuits, and small machines in industrial setups.",
    features: ["Quick trip mechanism", "Finger-safe terminals (IP20)", "Breaking capacity up to 10kA", "B, C, and D trip curve options"],
    application: "Control circuit protection and auxiliary power supply isolation in control panels."
  },
  "RCCB": {
    description: "Residual Current Circuit Breakers (RCCBs) detect low earth leakage currents, providing critical protection against electrical shock and fire hazards for factory workers and machinery.",
    features: ["High sensitivity options (30mA for human safety, 300mA for fire protection)", "Electromechanical trip mechanism", "Dual termination terminals", "Test button for periodic health checks"],
    application: "Incoming mains protection in distribution boards to protect operating personnel."
  },
  "MCCB": {
    description: "Molded Case Circuit Breakers (MCCBs) handle higher currents (up to 1600A) and offer adjustable trip settings, protecting main power feeders and heavy machines from heavy short-circuits and overloads.",
    features: ["Adjustable thermal-magnetic or microprocessor trip units", "High breaking capacity (up to 150kA)", "Support for motor operator and auxiliary contacts", "Double insulation design"],
    application: "Main incoming protection in electrical distribution panels and MCCs."
  },
  "MPCB": {
    description: "Motor Protection Circuit Breakers (MPCBs) integrate short-circuit, overload, and phase-failure protection in a single compact device specifically tuned for electric motors.",
    features: ["Built-in phase failure/unbalance sensitivity", "Adjustable thermal overload setting matching motor FLA", "Ambient temperature compensation", "Saves panel space by replacing separate fuse/relay setups"],
    application: "Dedicated motor feeder protection in Motor Control Centers (MCCs) for induction motors."
  },
  "Thermal Overload Relays": {
    description: "Thermal overload relays protect three-phase electric motors from prolonged overcurrents, single phasing, and stalled rotor conditions by bending bimetallic strips inside.",
    features: ["Adjustable trip currents", "Hand/Auto reset selector", "Built-in auxiliary contacts (1NO + 1NC) for control interlocks", "Differential trip mechanism for phase failure protection"],
    application: "Interfacing with electromagnetic contactors to construct standard DOL or Star-Delta motor starters."
  },
  // Automation Systems
  "PLC Systems": {
    description: "Programmable Logic Controllers (PLCs) are the brains of modern industrial machinery, executing logic, timing, counting, and arithmetic operations to automate factory lines.",
    features: ["Modular and compact architectures", "Ethernet, Modbus, and Profibus communication protocols", "High-speed counters and pulse outputs", "Reliable real-time operating systems"],
    application: "Automated sequence control for packaging, filling, textile, and chemical batching machines."
  },
  "VFD Drives": {
    description: "Variable Frequency Drives (VFDs) control the speed and torque of AC motors by varying the input frequency and voltage, delivering massive energy savings and smooth starting.",
    features: ["Built-in PID control loops", "Modbus/RS485 communication ports", "Vector control and torque boost options", "Protective parameters for motor overload and overvoltage"],
    application: "Speed control of Centrifugal Blowers, process pumps, conveyors, and heavy-duty fans."
  },
  "HMI Interfaces": {
    description: "Human-Machine Interfaces (HMIs) display real-time machine graphics, alarms, and operating parameters, allowing plant operators to monitor and interact with PLCs easily.",
    features: ["High-resolution touchscreen displays", "Multi-language character support", "Data logging and trend visualization", "Support for various industrial PLC protocols"],
    application: "Operator panel interface on chemical reactors, packaging lines, and assembly machines."
  },
  "SCADA Systems": {
    description: "Supervisory Control and Data Acquisition (SCADA) systems gather real-time data from multiple PLCs and sensors across the entire plant, providing centralized monitoring, alarming, and analytical reports.",
    features: ["Interactive plant graphics", "Historical database integration", "Web-based remote client access", "Advanced alarm management and routing"],
    application: "Central control room monitoring for water treatment, power distribution, and batch manufacturing plants."
  }
};

function getProductSeoDetails(name: string, categoryName: string) {
  const normalized = name.trim();
  if (PRODUCT_SEO_DETAILS[normalized]) {
    return PRODUCT_SEO_DETAILS[normalized];
  }
  // Generic fallback generator
  return {
    description: `${normalized} supplied by JK Electricals Vapi are high-quality components designed for industrial reliability in factories and machinery. We provide authorized distribution and supply for leading brands across Vapi GIDC, Silvassa, Daman, and South Gujarat.`,
    features: [
      "Genuine components sourced directly from authorized manufacturers",
      "Robust build quality designed to minimize plant downtime",
      "Compliant with international and national safety standards",
      "Full technical support and manufacturer warranty coverage"
    ],
    application: `Utilized in industrial systems, control panels, and process machinery in ${categoryName} settings.`
  };
}

// Build the flattened product collection
const ALL_PRODUCTS = PRODUCT_CATEGORIES.flatMap((category) => {
  const subProducts = category.description.split(",").map((p) => p.trim());
  return subProducts.map((prodName) => {
    const details = getProductSeoDetails(prodName, category.name);
    return {
      name: prodName,
      parentCategory: category.name,
      parentSlug: category.slug,
      brands: category.brands,
      image: getProductImage(category.slug, prodName, category.image),
      description: details.description,
      features: details.features,
      application: details.application
    };
  });
});

export default function ProductGrid({ selectedBrand, selectedCategory, searchQuery = "" }: ProductGridProps) {
  const [activeProduct, setActiveProduct] = useState<any | null>(null);
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesBrand = !selectedBrand || product.brands.some((b) => b.toLowerCase() === selectedBrand.toLowerCase());
    const matchesCategory = !selectedCategory || product.parentSlug === selectedCategory;
    const searchableText = [
      product.name,
      product.parentCategory,
      product.parentSlug,
      product.description,
      product.application,
      ...product.features,
      ...product.brands,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);
    return matchesBrand && matchesCategory && matchesSearch;
  });

  return (
    <div className="relative">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">Products</h2>
        <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">
          {filteredProducts.length} Items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={`${product.parentSlug}-${product.name}`}
            product={product}
            index={index}
            selectedBrand={selectedBrand}
            onProductClick={(p) => setActiveProduct(p)}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center text-slate-500 py-24 bg-white rounded-3xl border border-slate-100">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">No products found</h3>
          <p className="text-sm">Try another product, brand, or filter to see available industrial products.</p>
        </div>
      )}

      {/* Product Detail Dialog */}
      <Dialog open={activeProduct !== null} onOpenChange={(open) => !open && setActiveProduct(null)}>
        <DialogContent className="max-w-xl bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl">
          {activeProduct && (() => {
            const links = getInquiryLinks(activeProduct.name);
            return (
              <div className="space-y-6">
                <DialogHeader className="text-left border-b border-slate-100 pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896] mb-1">
                    {activeProduct.parentCategory} Distribution
                  </p>
                  <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                    {activeProduct.name}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Product Description</h4>
                    <DialogDescription className="text-slate-600 text-sm leading-relaxed font-light">
                      {activeProduct.description}
                    </DialogDescription>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">Key Features</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProduct.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium">
                          <span className="text-[#00a896] mt-0.5">✔</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Common Applications</h4>
                    <p className="text-xs text-slate-500 font-light leading-relaxed">{activeProduct.application}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
                  <a
                    href={links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-[#00a896] hover:bg-[#009081] text-white text-xs font-black uppercase tracking-widest rounded-2xl text-center transition-colors shadow-lg shadow-[#00a896]/20 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Inquiry
                  </a>
                  <a
                    href={links.email}
                    className="px-6 py-4 border border-slate-200 text-slate-700 text-xs font-black uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={16} />
                    Email Quote
                  </a>
                </div>
              </div>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function ProductCard({
  product,
  index,
  selectedBrand,
  onProductClick,
}: {
  product: any;
  index: number;
  selectedBrand?: string | null;
  onProductClick: (p: any) => void;
}) {
  const links = getInquiryLinks(product.name);
  const visibleBrands = selectedBrand
    ? product.brands.filter((brand: string) => brand.toLowerCase() === selectedBrand.toLowerCase())
    : product.brands;

  return (
    <div
      onClick={() => onProductClick(product)}
      className="group bg-white border border-slate-100 rounded-3xl overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full shadow-sm cursor-pointer"
    >
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={`${product.name} industrial supply and authorized dealer in Vapi`}
          loading={index < 4 ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896] mb-1">
            {product.parentCategory}
          </p>
          <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">{product.name}</h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div className="flex flex-col flex-grow">
          <p className="text-xs text-slate-500 mb-5 leading-relaxed line-clamp-3">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {visibleBrands.map((brand: string) => (
              <span
                key={brand}
                className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${selectedBrand ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto" onClick={(e) => e.stopPropagation()}>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 bg-[#00a896] hover:bg-[#009081] text-white text-[11px] font-black uppercase tracking-widest rounded-xl text-center transition-colors shadow-lg shadow-[#00a896]/20">
            WhatsApp
          </a>
          <a href={links.email} className="px-5 py-3.5 border border-slate-200 text-slate-700 text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
