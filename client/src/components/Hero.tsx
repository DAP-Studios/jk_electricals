import { motion, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";
import heroImage from "../assets/hero.png";
import bgVideo from "../assets/hero-bg.mp4";

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
    label: "Contact Us",
    href: "/contact",
    variant: "secondary",
  } as CTA,
  bgImage = heroImage,
  bgClass = "bg-[#000613]",
  bgFit = "stretch",
  align = "center",
  hideButtons = false,
  height = "full",
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
  height?: "full" | "half";
}) {
  const [, navigate] = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isHalf = height === "half";
  const posterImage = bgImage ?? heroImage;

  const handleCtaClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return;
    }
    event.preventDefault();
    navigate(href);
  };

  const renderCta = (cta: CTA, className: string) => {
    const isExternal =
      cta.href.startsWith("http") ||
      cta.href.startsWith("mailto:") ||
      cta.href.startsWith("tel:");

    return (
      <a
        href={cta.href}
        onClick={(e) => handleCtaClick(e, cta.href)}
        className={className}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {cta.label}
      </a>
    );
  };

  return (
    <section
      className={`relative w-full flex items-center overflow-hidden ${isHalf ? "min-h-[52vh] md:min-h-[56vh]" : "min-h-[80vh] md:h-screen"} ${bgClass}`}
    >
      {/* Background — z-0 */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#000613]">
        {posterImage ? (
          <img
            src={posterImage}
            alt="JK Electricals industrial electrical and automation supply background"
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full ${
              bgFit === "contain" ? "object-contain" : "object-cover"
            } object-center`}
          />
        ) : null}

        {bgVideo && !prefersReducedMotion ? (
          <video
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={posterImage}
            disablePictureInPicture
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full transform-gpu ${
              bgFit === "contain" ? "object-contain" : "object-cover"
            } object-center will-change-transform [backface-visibility:hidden] [contain:paint]`}
          />
        ) : null}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/75 via-black/40 to-black/20" />
      </div>

      {/* Orange Diffusion Glow — z-10, pointer-events-none */}
      <div className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[1600px] h-[400px] bg-orange-400/40 blur-[180px] rounded-full z-10 pointer-events-none" />

      {/* Additional Warm Glow — z-10, pointer-events-none */}
      <div className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-b from-transparent via-orange-500/10 to-orange-200/30 z-10 pointer-events-none" />

      {/* Wave Transition — z-10, pointer-events-none */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
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

      {/* Content — z-20, above all decorative layers */}
      <div className={`container relative z-20 flex items-center px-6 sm:px-8 lg:px-12 ${isHalf ? "min-h-[52vh] md:min-h-[56vh] pt-20 pb-16" : "min-h-screen"}`}>
        <div
          className={`max-w-4xl ${
            align === "left" ? "text-left" : "text-center md:text-left"
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {eyebrow && (
              <span className="inline-block text-[#00a896] text-xs sm:text-sm font-black tracking-[0.28em] uppercase mb-4">
                {eyebrow}
              </span>
            )}

            <h1 className={`${isHalf ? "text-[clamp(2.25rem,5vw,4.75rem)]" : "text-[clamp(2.5rem,5.4vw,5.75rem)]"} font-extrabold text-white uppercase tracking-tight leading-[1.02] mb-6`}>
              {title}
            </h1>

            <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-300 max-w-3xl font-light leading-relaxed mb-8 border-l-4 border-[#00a896] pl-6">
              {subtitle}
            </p>

            {!hideButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                {renderCta(
                  ctaPrimary,
                  "inline-flex min-h-[clamp(2.75rem,5vw,3.5rem)] items-center justify-center rounded-full bg-[#00a896] px-[clamp(1.35rem,4vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.72rem,1.1vw,0.9rem)] font-black uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-[#000613]"
                )}
                {renderCta(
                  ctaSecondary,
                  "inline-flex min-h-[clamp(2.75rem,5vw,3.5rem)] items-center justify-center rounded-full border-2 border-white/20 px-[clamp(1.35rem,4vw,2.5rem)] py-[clamp(0.75rem,1.5vw,1rem)] text-[clamp(0.72rem,1.1vw,0.9rem)] font-black uppercase tracking-wider text-white transition-all duration-300 hover:border-white"
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Accent Line */}
      <div className="hidden md:flex absolute right-10 z-10 flex-col items-center gap-4 opacity-30 pointer-events-none">
        <div className="w-px h-24 bg-gradient-to-b from-[#00a896] to-transparent" />
      </div>
    </section>
  );
}
