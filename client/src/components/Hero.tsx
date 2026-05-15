import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax effect on background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // No longer hiding on scroll - maintaining full visibility
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#000613]">
      {/* Background Image with Classic Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#000613] z-10" />
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
          alt="Power Substation"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-4">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-[#00a896] text-sm font-black tracking-[0.4em] uppercase mb-6">
              Authorized Industrial Distribution
            </span>

            <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Reliability <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-white">Powering Vapi</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-12 border-l-4 border-[#00a896] pl-8">
              A decade of engineering excellence. Supplying world-class industrial electrical components to the manufacturing heart of Gujarat.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Link href="/products" className="px-12 py-5 bg-[#00a896] text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-[#000613] transition-all shadow-2xl shadow-[#00a896]/30">
                Explore Products
              </Link>
              <Link href="/contact" className="px-12 py-5 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-full hover:border-white transition-all backdrop-blur-md">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Brand Bar Removed as requested */}

      {/* Classic Scroll Hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute right-10 z-20 flex flex-col items-center gap-4 opacity-30"
      >
        <div className="w-px h-24 bg-gradient-to-b from-[#00a896] to-transparent" />
      </motion.div>
    </section>
  );
}
