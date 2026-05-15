import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PRODUCT_CATEGORIES, getInquiryLinks } from "@/const";

export default function ProductGrid({ selectedBrand }: { selectedBrand?: string | null }) {
  const filtered = selectedBrand
    ? PRODUCT_CATEGORIES.filter((c) => c.brands.map((b: string) => b.toLowerCase()).includes(selectedBrand.toLowerCase()))
    : PRODUCT_CATEGORIES;

  return (
    <section className="py-24 bg-white relative">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((category, index) => (
            <ProductCard key={category.id} category={category} index={index} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-slate-500 py-16">No products found for <strong>{selectedBrand}</strong></div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ category, index }: { category: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const links = getInquiryLinks(category.name);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-[#00a896]/5 transition-all group flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-xl">
             {index % 4 === 0 ? "⚡" : index % 4 === 1 ? "🛡️" : index % 4 === 2 ? "📈" : "🔌"}
          </div>
          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Item {String(index + 1).padStart(2, '0')}</span>
        </div>
        
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 group-hover:text-[#00a896] transition-colors">{category.name}</h3>
        <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
          {category.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {category.brands.map((brand: string) => (
            <span key={brand} className="px-3 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-bold text-slate-400">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <a 
          href={links.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-[#00a896] text-white text-[10px] font-black uppercase tracking-widest rounded-xl text-center hover:scale-[1.02] transition-transform shadow-lg shadow-[#00a896]/20"
        >
          Inquire
        </a>
        <a 
          href={links.email}
          className="px-6 py-3 border border-slate-200 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all"
        >
          Email
        </a>
      </div>
    </motion.div>
  );
}
