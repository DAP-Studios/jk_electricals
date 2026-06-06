import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import heroImage from "../assets/hero.png";

type CTA = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Hero({
  eyebrow = "",
  title = (
    <>
      Reliability <br />
      <span className="hero-gradient-text">Powering Vapi</span>
    </>
  ),
  subtitle = "A decade of engineering excellence. Supplying world-class industrial electrical components to the manufacturing heart of Gujarat.",
  ctaPrimary = { label: "Explore Products", href: "/products" } as CTA,
  ctaSecondary = {
    label: "Get a Quote",
    href: "/contact",
    variant: "secondary",
  } as CTA,
  bgImage = heroImage,
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full min-h-[80vh] md:h-screen flex items-center overflow-hidden ${bgClass}`}
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/20 z-10" />

        {bgImage ? (
          <img
            src={bgImage}
            alt="Hero Background"
            className={`absolute inset-0 h-full w-full ${
              bgFit === "contain" ? "object-contain" : "object-cover"
            } object-center`}
          />
        ) : (
          <div className="absolute inset-0" />
        )}
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 min-h-screen flex items-center px-6 sm:px-8 lg:px-12">
        <div
          className={`max-w-4xl ${
            align === "left"
              ? "text-left"
              : "text-center md:text-left"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {eyebrow && (
              <span className="inline-block text-[#00a896] text-xs sm:text-sm font-black tracking-[0.28em] uppercase mb-4">
                {eyebrow}
              </span>
            )}

            <h1 className="text-[clamp(3rem,8vw,9rem)] font-extrabold text-white uppercase tracking-tight leading-[0.95] mb-6">
              {title}
            </h1>

            <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-300 max-w-3xl font-light leading-relaxed mb-8 border-l-4 border-[#00a896] pl-6">
              {subtitle}
            </p>

            {!hideButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={ctaPrimary.href}>
                  <span className="inline-flex items-center justify-center px-10 py-4 bg-[#00a896] text-white font-black uppercase tracking-wider rounded-full hover:bg-white hover:text-[#000613] transition-all duration-300 cursor-pointer">
                    {ctaPrimary.label}
                  </span>
                </Link>

                <Link href={ctaSecondary.href}>
                  <span className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/20 text-white font-black uppercase tracking-wider rounded-full hover:border-white transition-all duration-300 cursor-pointer">
                    {ctaSecondary.label}
                  </span>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Orange Diffusion Glow */}
      <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[1600px] h-[400px] bg-orange-400/40 blur-[180px] rounded-full z-10 pointer-events-none" />

      {/* Additional Warm Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-b from-transparent via-orange-500/10 to-orange-200/30 z-10 pointer-events-none" />

      {/* Wave Transition */}
      <div className="absolute 0 bottom-0 left-0 w-full overflow-hidden leading-none  x-50 z-20">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="relative block w-full h-[70px] md:h-[150px]"
        >
          <path
            fill="#ffffff"
            d="M0,96L80,112C160,128,320,160,480,165.3C640,171,800,149,960,122.7C1120,96,1280,64,1360,48L1440,32L1440,320L0,320Z"
          />
        </svg>
      </div>

      {/* Right Accent Line */}
      <div className="hidden md:flex absolute right-10 z-30 flex-col items-center gap-4 opacity-30">
        <div className="w-px h-24 bg-gradient-to-b from-[#00a896] to-transparent" />
      </div>
    </section>
  );
}