import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "../components/Products";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import BrandLogoCarousel from "@/components/BrandLogoCarousel";
import { breadcrumbSchema, localBusinessSchema, routeByPath, webPageSchema, websiteSchema } from "@/lib/seo";
import { motion } from "framer-motion";

export default function Home() {
  const route = routeByPath("/");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "JK Electricals | Premium Industrial Solutions";
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#00a896] selection:text-white overflow-x-hidden antialiased font-inter">
      <Seo
        title={route.title}
        description={route.description}
        path="/"
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema("/", route.title, route.description),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Header />
      
      <main id="main-content" className="pt-0 space-y-0">
        {/* Section 1: Hero (Independent Raw Ratio) */}
        <section className="relative w-full py-0 md:py-0 bg-transparent overflow-hidden">
          <Hero align="left" />
        </section>
        
        {/* Section 2: About (Dynamic Layout) */}
        <section className="relative z-30 bg-white pt-0">
          <About variant="home" />
        </section>

        {/* Section 3: Product Carousel (Odd/Even Dynamic) */}
        <section className="relative w-full py-0 bg-[#050816]">
          
          <Products />
        </section>

        {/* Section 4: Secondary Content (Raw Grid Ratio) */}
        <section className="relative w-full py-0 md:py-0 bg-white overflow-hidden">
          <div className="container">
             <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full md:w-[65%] min-h-[360px] md:min-h-[520px] overflow-hidden rounded-[3rem] shadow-xl relative bg-white border border-slate-100"
                >
                  <div className="absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-white via-white/95 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-white via-white/95 to-transparent" />
                  <div className="absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-white to-transparent" />
                  <div className="absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-white to-transparent" />

                  <div className="relative z-30 p-8 md:p-10">
                    <p className="text-[#00a896] text-xs font-black uppercase tracking-widest mb-2">Quality Standards</p>
                    <h3 className="text-3xl md:text-5xl font-black text-[#000613] uppercase tracking-tighter leading-none">Brands we serve</h3>
                  </div>

                  <BrandLogoCarousel
                    className="absolute inset-x-0 top-32 md:top-40"
                    cardClassName="bg-white/90"
                  />
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
                   <div className="text-white/20 font-black text-6xl tracking-tighter">4.0</div>
                </motion.div>
             </div>
          </div>
        </section>

        {/* Section 5: Contact (Dynamic Reveal) */}
        <section className="relative w-full py-0 bg-white">
          
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
