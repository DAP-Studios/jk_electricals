import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { useEffect, useMemo, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/const";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const uniqueBrands = useMemo(() => {
    const s = new Set<string>();
    PRODUCT_CATEGORIES.forEach((c) => c.brands.forEach((b: string) => s.add(b)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  function BrandsFilter({ selectedBrand, setSelectedBrand }: { selectedBrand: string | null; setSelectedBrand: (b: string | null) => void }) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-black uppercase tracking-wider">Filter by Brand</h3>
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-xs text-slate-500 hover:text-slate-900"
          >
            Clear
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
          <button
            onClick={() => setSelectedBrand(null)}
            className={`shrink-0 px-4 py-2 rounded-full border text-sm font-semibold ${selectedBrand === null ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200'}`}
          >
            All
          </button>
          {uniqueBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`shrink-0 px-4 py-2 rounded-full border text-sm font-semibold ${selectedBrand === brand ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Industrial Electrical Products | JK Electricals Vapi";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Simplified Premium Header */}
        <div className="bg-[#000613] py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,168,150,0.1),transparent_70%)]" />
          <div className="container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] mb-6 inline-block">Authorized Distribution</span>
              <h1 className="text-5xl md:text-8xl font-black text-white uppercase mb-8 tracking-tighter leading-none">
                Industrial <br/> <span className="text-[#00a896]">Ecosystem.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                A comprehensive catalog of high-quality components, authorized switchgear, and automation solutions for modern industries.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Brands Filter + Grid Layout for dedicated products page */}
        <section className="py-12">
          <div className="container">
            <BrandsFilter selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
          </div>
        </section>

        <ProductGrid selectedBrand={selectedBrand} />

        {/* Bulk Inquiry Section */}
        <section className="py-24 bg-slate-50">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Need a Custom Quote?</h2>
              <p className="text-lg text-slate-500 font-light mb-12">
                Our technical team in Vapi is ready to assist you with bulk requirements, project BOQs, and specialized industrial configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-[#00a896] text-white font-black uppercase tracking-widest px-12 py-5 rounded-full hover:scale-105 transition-all shadow-xl shadow-[#00a896]/20"
                >
                  Request Project Pricing
                </a>
                <a 
                  href="https://wa.me/917383095063" 
                  className="bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest px-12 py-5 rounded-full hover:bg-slate-900 hover:text-white transition-all"
                >
                  Direct WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
