import { useLocation } from "wouter";
import heroImage from "../assets/hero.png";
import { trackConversion } from "@/lib/analytics";

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
  const isHalf = height === "half";
  const posterImage = bgImage ?? heroImage;

  const handleCtaClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    label: string
  ) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      if (href.includes("wa.me")) {
        trackConversion("whatsapp_click", label);
      } else if (href.startsWith("mailto:")) {
        trackConversion("email_click", label);
      } else if (href.startsWith("tel:")) {
        trackConversion("phone_click", label);
      }
      return;
    }
    event.preventDefault();
    if (href === "/contact") {
      trackConversion("quote_cta_click", label);
    }
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
        onClick={(e) => handleCtaClick(e, cta.href, cta.label)}
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
      className={`relative w-full flex items-center overflow-hidden ${isHalf ? "min-h-[48vh] md:min-h-[52vh]" : "min-h-[76vh] md:min-h-[82vh]"} ${bgClass}`}
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#000613]">
        {posterImage ? (
          <img
            src={posterImage}
            alt="JK Electricals industrial electrical and automation supply background"
            aria-hidden="true"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className={`absolute inset-0 h-full w-full ${
              bgFit === "contain" ? "object-contain" : "object-cover"
            } object-center opacity-55`}
          />
        ) : null}

        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(0,6,19,0.94),rgba(0,6,19,0.76)_46%,rgba(0,6,19,0.48))]" />
      </div>

      <div className={`container relative z-20 flex items-center px-6 sm:px-8 lg:px-12 ${isHalf ? "min-h-[48vh] md:min-h-[52vh] pt-20 pb-14" : "min-h-[76vh] md:min-h-[82vh] pt-24 pb-16"}`}>
        <div
          className={`max-w-3xl ${
            align === "left" ? "text-left" : "text-center md:text-left"
          }`}
        >
          <div>
            {eyebrow && (
              <span className="inline-block text-[#5eead4] text-xs sm:text-sm font-black tracking-[0.22em] uppercase mb-4">
                {eyebrow}
              </span>
            )}

            <h1 className={`${isHalf ? "text-[clamp(2.25rem,5vw,4.75rem)]" : "text-[clamp(2.5rem,5.4vw,5.5rem)]"} font-black text-white uppercase tracking-tight leading-[1.02] mb-6`}>
              {title}
            </h1>

            <p className="text-[clamp(1rem,2vw,1.2rem)] text-slate-200 max-w-2xl leading-8 mb-8 border-l-2 border-[#5eead4] pl-5">
              {subtitle}
            </p>

            {!hideButtons && (
              <div className="flex flex-col sm:flex-row gap-4">
                {renderCta(
                  ctaPrimary,
                  "inline-flex min-h-12 items-center justify-center rounded bg-[#00a896] px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-[#000613]"
                )}
                {renderCta(
                  ctaSecondary,
                  "inline-flex min-h-12 items-center justify-center rounded border border-white/25 px-6 py-3 text-sm font-black uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/10"
                )}
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
