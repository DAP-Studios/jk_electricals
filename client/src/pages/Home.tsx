import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "JK Electricals | Premium Industrial Solutions";
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#00a896] selection:text-white overflow-x-hidden antialiased font-inter">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#00a896] origin-left z-[100]"
        style={{ scaleX }}
      />

      <Header />
      
      <main className="space-y-0">
        {/* Section 1: Hero (Independent Raw Ratio) */}
        <section className="relative w-full overflow-hidden">
          <Hero />
        </section>
        
        {/* Section 2: About (Dynamic Layout) */}
        <section className="relative w-full py-24 md:py-40 bg-white">
          <About />
        </section>

        {/* Section 3: Product Carousel (Odd/Even Dynamic) */}
        <section className="relative w-full py-24 bg-slate-50/50">
          <Products />
        </section>

        {/* Section 4: Secondary Content (Raw Grid Ratio) */}
        <section className="relative w-full py-32 bg-white overflow-hidden">
          <div className="container">
             <div className="flex flex-col md:flex-row items-center gap-16">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[65%] aspect-[16/7] md:aspect-[3/2] overflow-hidden rounded-[3rem] shadow-2xl relative group"
                >
                   <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Construction" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#000613]/80 via-transparent to-transparent opacity-60" />
                   <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-[#00a896] text-xs font-black uppercase tracking-widest mb-2">Quality Standards</p>
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Certified Engineering</h3>
                   </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[35%] aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#000613] p-12 flex flex-col justify-between"
                >
                   <div>
                      <div className="w-16 h-16 bg-[#00a896] rounded-2xl mb-8 flex items-center justify-center text-3xl">🏗️</div>
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Vapi <br/> <span className="text-[#00a896]">Industrial</span> Hub.</h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">Centrally located in Vapi GIDC to serve the chemical, textile, and paper industries with lightning fast logistics.</p>
                   </div>
                   <div className="text-white/20 font-black text-6xl tracking-tighter">04</div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* Section 5: Contact (Dynamic Reveal) */}
        <section className="relative w-full py-24 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
