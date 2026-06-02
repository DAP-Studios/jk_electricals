import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";

type CTA = { label: string; href: string; variant?: "primary" | "secondary" };

export default function Hero({
  eyebrow = "",
  title = (
    <>
      Reliability <br /> <span className="hero-gradient-text">Powering Vapi</span>
    </>
  ),
  subtitle = "A decade of engineering excellence. Supplying world-class industrial electrical components to the manufacturing heart of Gujarat.",
  ctaPrimary = { label: "Explore Products", href: "/products" } as CTA,
  ctaSecondary = { label: "Get a Quote", href: "/contact", variant: "secondary" } as CTA,
  bgImage = "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop",
  bgClass = "bg-[#000613]",
  bgFit = "stretch",
  align = "center",
  hideButtons = false,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  bgImage?: string | null;
  bgClass?: string;
  bgFit?: "cover" | "contain" | "stretch";
  align?: "left" | "center";
  hideButtons?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <section ref={containerRef} className={`relative w-full min-h-[64vh] md:h-screen flex items-center justify-center overflow-hidden ${bgClass}`}>
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-10" />
        {bgImage ? (
          <img
            src={bgImage}
            alt="Hero background"
                className={`absolute inset-0 h-full w-full ${bgFit === "contain" ? "object-contain" : "object-cover"} object-center`}
          />
        ) : (
          <div className="absolute inset-0" />
        )}
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 px-33 py-16 md:py-0">
        <div className={`max-w-4xl mx-auto ${align === 'left' ? 'text-left md:text-left md:mx-0' : 'text-center md:text-left'}`}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            {eyebrow ? (
              <span className="inline-block text-[#00a896] text-xs sm:text-sm font-black tracking-[0.28em] uppercase mb-4">
                {eyebrow}
              </span>
            ) : null}

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white uppercase tracking-tight leading-[1.02] md:leading-[0.92] mb-6">
              {title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto md:mx-0 font-light leading-relaxed mb-8 border-l-4 border-[#00a896] pl-6">
              {subtitle}
            </p>

            {/* {!hideButtons && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href={ctaPrimary.href} className="inline-flex items-center justify-center px-10 sm:px-14 py-3.5 sm:py-4.5 bg-[#00a896] text-white font-black uppercase tracking-widest rounded-full hover:bg-white hover:text-[#000613] transition-all shadow-2xl shadow-[#00a896]/30 text-center">
                  {ctaPrimary.label}
                </Link>
                <Link href={ctaSecondary.href} className="inline-flex items-center justify-center px-10 sm:px-14 py-3.5 sm:py-4.5 border-2 border-white/20 text-white font-black uppercase tracking-widest rounded-full hover:border-white transition-all backdrop-blur-md text-center">
                  {ctaSecondary.label}
                </Link>
              </div>
            )} */}
          </motion.div>
        </div>
      </div>

      {/* Subtle right accent line for larger screens */}
      <div className="hidden md:flex absolute right-10 z-20 flex-col items-center gap-4 opacity-30">
        <div className="w-px h-24 bg-gradient-to-b from-[#00a896] to-transparent" />
      </div>
    </section>
  );
}
