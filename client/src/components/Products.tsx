import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { categories } from "@/const";
import { Link } from "wouter";

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate logic
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we've reached the end, loop back to start
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollTo({ left: scrollLeft + 400, behavior: 'smooth' });
        }
      }
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  // Carousel manual scroll functions
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="products" 
      className="py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] mb-4 inline-block">Product Ecosystem</span>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 text-slate-900">
                Core <span className="text-[#00a896]">Inventory.</span>
              </h2>
            </motion.div>
          </div>
          
          <div className="flex gap-4">
             <button 
               onClick={() => scroll('left')}
               className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#00a896] hover:text-white transition-all active:scale-95"
             >
               ←
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-[#00a896] hover:text-white transition-all active:scale-95"
             >
               →
             </button>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-[5%] pb-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {categories.map((category, index) => (
          <ProductCard key={category.id} category={category} index={index} />
        ))}
        
        {/* Infinite Loop Placeholder / View All Card */}
        <div className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center rounded-[2.5rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-center group hover:border-[#00a896] transition-colors">
           <Link href="/products" className="text-slate-400 group-hover:text-[#00a896] transition-colors">
              <div className="text-5xl mb-6">→</div>
              <p className="text-sm font-black uppercase tracking-[0.2em]">Explore Full <br/> Catalog</p>
           </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}

function ProductCard({ category, index }: { category: any; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  // Odd/Even background combinations
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-[#000613]" : "bg-slate-100";
  const textColor = isEven ? "text-white" : "text-slate-900";
  const accentColor = isEven ? "text-[#00a896]" : "text-[#00a896]";
  const secondaryText = isEven ? "text-slate-400" : "text-slate-500";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`min-w-[320px] md:min-w-[450px] flex-shrink-0 snap-center relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ${bgColor} p-10 flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-2`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-10">
          <div className={`w-14 h-14 ${isEven ? 'bg-white/5' : 'bg-black/5'} rounded-2xl flex items-center justify-center text-2xl`}>
            {category.icon === "Zap" ? "⚡" : category.icon === "Shield" ? "🛡️" : category.icon === "Activity" ? "📈" : "🔌"}
          </div>
          <span className={`text-[10px] font-black uppercase tracking-widest ${isEven ? 'text-white/20' : 'text-slate-300'}`}>
            0{index + 1}
          </span>
        </div>
        
        <h3 className={`text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none mb-4 ${textColor}`}>
          {category.title.split(' ').map((word: string, i: number) => (
            <span key={i} className={i === 1 ? accentColor : ""}>{word} </span>
          ))}
        </h3>
        <p className={`text-sm md:text-base font-light leading-relaxed max-w-[80%] ${secondaryText}`}>
          {category.description}
        </p>
      </div>

      {/* Decorative Image with Raw Aspect */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[60%] aspect-[3/4] opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 rotate-12 group-hover:rotate-6 pointer-events-none">
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div className="relative z-10 flex items-center gap-6">
        <Link href="/products" className={`text-[10px] font-black uppercase tracking-[0.2em] pb-1 border-b-2 ${isEven ? 'border-white/10 hover:border-[#00a896]' : 'border-slate-200 hover:border-[#00a896]'} transition-colors ${textColor}`}>
          View Technical Specs
        </Link>
      </div>
    </motion.div>
  );
}
