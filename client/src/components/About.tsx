import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { stats } from "@/const";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="about" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Text (Parallax) */}
      <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none">
        <motion.div style={{ x: x1 }} className="text-[20rem] font-black uppercase whitespace-nowrap leading-none tracking-tighter">
          Excellence Reliability Innovation
        </motion.div>
        <motion.div style={{ x: x2 }} className="text-[20rem] font-black uppercase whitespace-nowrap leading-none tracking-tighter">
          Authority Distribution Quality
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left Side: Visual/Story */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 relative group">
              <img
                src="https://images.unsplash.com/photo-1558444479-c8f010524776?q=80&w=1000&auto=format&fit=crop"
                alt="Industrial Electrical"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00a896]/20 to-transparent" />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white"
              >
                <p className="text-[#00a896] text-4xl font-black tracking-tighter">12+</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years of Experience</p>
              </motion.div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00a896]/5 rounded-full blur-3xl" />
          </motion.div>

          {/* Right Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] mb-4 inline-block">The JK Story</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                Distributing Power <br /> <span className="text-[#00a896]">Empowering Vapi.</span>
              </h2>
              <p className="text-slate-500 text-lg font-light leading-relaxed mb-12">
                Founded with a vision to streamline industrial procurement, JK Electricals has grown from a local supplier to a regional distribution powerhouse. We specialize in complex electrical systems that keep the gears of the Vapi Industrial Hub turning.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-12">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                    <p className="text-xs text-[#00a896] font-black uppercase tracking-[0.2em] mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-slate-100 mb-12" />

              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Partner" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-[#00a896] flex items-center justify-center text-[10px] text-white font-black">
                    +1k
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tighter">Trusted by Clients</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-light">Direct Authorized Support</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
