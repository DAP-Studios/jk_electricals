import { useEffect, useRef, useState, useCallback } from "react";
import { PARTNER_BRANDS } from "@/const";
import { Zap, Shield, Package, Phone } from "lucide-react";
import heroImage from "@/assets/hero_image.png";

/* ──────────────────────────────────────────────
   Animated Counter Hook
   ────────────────────────────────────────────── */
function useCounter(target: number, duration = 2000, startOnMount = false) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(startOnMount);
  const ref = useRef<HTMLDivElement>(null);

  const start = useCallback(() => setStarted(true), []);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);

  return { count, ref, start };
}

/* ──────────────────────────────────────────────
   Intersection Observer Hook
   ────────────────────────────────────────────── */
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ──────────────────────────────────────────────
   Animated Circuit SVG Background
   ────────────────────────────────────────────── */
function CircuitBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit-grid"
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#00a896"
            strokeWidth="0.5"
          />
          <circle cx="0" cy="0" r="2" fill="#00a896" />
          <circle cx="60" cy="0" r="2" fill="#00a896" />
          <circle cx="0" cy="60" r="2" fill="#00a896" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit-grid)" />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   Electric Energy Pulse Lines
   ────────────────────────────────────────────── */
function EnergyLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal energy lines */}
      <div className="hero-energy-line hero-energy-line-1" />
      <div className="hero-energy-line hero-energy-line-2" />
      <div className="hero-energy-line hero-energy-line-3" />

      {/* Glowing orbs */}
      <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-[#00a896] opacity-[0.04] blur-[80px] animate-float" />
      <div
        className="absolute bottom-[20%] left-[5%] w-48 h-48 rounded-full bg-[#000080] opacity-[0.06] blur-[60px] animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-[50%] right-[30%] w-32 h-32 rounded-full bg-[#00a896] opacity-[0.03] blur-[40px] animate-float"
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────
   Brand Marquee
   ────────────────────────────────────────────── */
function BrandMarquee() {
  const doubled = [...PARTNER_BRANDS, ...PARTNER_BRANDS];
  return (
    <div className="relative overflow-hidden py-4">
      <div className="hero-marquee-track">
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="inline-flex items-center px-5 py-2 mx-2 text-xs font-bold tracking-widest text-white/40 border border-white/10 rounded-full whitespace-nowrap uppercase hover:text-[#00a896] hover:border-[#00a896]/40 transition-all duration-300"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   HERO COMPONENT
   ────────────────────────────────────────────── */
export default function Hero() {
  const statsRef = useInView(0.5);

  const stat1 = useCounter(12, 1500);
  const stat2 = useCounter(12, 1500);
  const stat3 = useCounter(500, 2000);

  // Trigger counters when stats come into view
  useEffect(() => {
    if (statsRef.inView) {
      stat1.start();
      stat2.start();
      stat3.start();
    }
  }, [statsRef.inView, stat1.start, stat2.start, stat3.start]);

  const pillars = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Zero Downtime",
      desc: "Immediate solutions with fast dispatch ensuring your operations never stop",
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Ready Stock",
      desc: "Local inventory in Vapi for same-day availability and rapid fulfillment",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Genuine Parts",
      desc: "Authorized distributor of global brands with full warranty support",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, #000020 0%, #000050 30%, #000080 60%, #001a4d 100%)",
      }}
    >
      {/* Background layers */}
      <CircuitBackground />
      <EnergyLines />

      {/* Diagonal accent stripe */}
      <div
        className="absolute -right-20 top-0 w-[600px] h-full opacity-[0.03]"
        style={{
          background:
            "linear-gradient(160deg, transparent 30%, #00a896 50%, transparent 70%)",
          transform: "skewX(-12deg)",
        }}
      />

      {/* ── Main Content ── */}
      <div className="container relative z-10 flex-1 flex items-center pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* Left — Text Content */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Tagline pill */}
            <div className="hero-animate hero-animate-delay-1">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest text-[#00a896] uppercase border border-[#00a896]/30 rounded-full bg-[#00a896]/5">
                <span className="w-2 h-2 rounded-full bg-[#00a896] animate-pulse" />
                Authorized Industrial Distributor
              </span>
            </div>

            {/* Headline */}
            <div className="hero-animate hero-animate-delay-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
                Powering
                <br />
                <span className="hero-gradient-text">Industrial</span>
                <br />
                Excellence
              </h1>
            </div>

            {/* Sub-headline */}
            <div className="hero-animate hero-animate-delay-3">
              <p className="text-base md:text-lg text-white/60 max-w-lg leading-relaxed">
                Your trusted partner for premium industrial electrical goods.
                From cables to automation — genuine products, expert support,
                and zero-downtime delivery from Vapi, Gujarat.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-animate hero-animate-delay-4 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#products"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00a896] text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,168,150,0.4)] hover:scale-[1.03] active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Explore Products
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00a896] to-[#00c9b0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="tel:+917383095063"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-white/20 text-white font-bold rounded-lg transition-all duration-300 hover:border-[#00a896] hover:bg-[#00a896]/10 hover:scale-[1.03] active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Right — Image & Pillar Cards */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="hero-animate hero-animate-delay-3 relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src={heroImage} alt="Industrial Electrical Components" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000020] via-[#000020]/20 to-transparent opacity-90" />
              
              {/* Overlay Pillars on Image */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 space-y-3">
                {pillars.slice(0, 2).map((pillar) => (
                  <div
                    key={pillar.title}
                    className="group relative p-4 rounded-xl border border-white/10 bg-[#000020]/60 backdrop-blur-md hover:bg-[#000020]/80 hover:border-[#00a896]/50 transition-all duration-400"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#00a896]/20 flex items-center justify-center text-[#00a896]">
                        {pillar.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-0.5">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-white/70 line-clamp-2">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quick stat badge floating outside */}
            <div className="hero-animate hero-animate-delay-6 absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#000050] border border-white/10 rounded-xl p-4 shadow-xl flex items-center gap-3">
              <div className="flex -space-x-2">
                {["POLYCAB", "SIEMENS", "SCHNEIDER"].map((b, i) => (
                  <div
                    key={b}
                    className="w-8 h-8 rounded-full bg-[#000020] border border-white/20 flex items-center justify-center text-[8px] font-bold text-white/80"
                    style={{ zIndex: 3 - i }}
                  >
                    {b[0]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-white/60">Global Partners</p>
                <p className="text-sm text-white font-bold"><span className="text-[#00a896]">12+</span> Brands</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div ref={statsRef.ref} className="relative z-10">
        <div className="border-t border-white/10">
          <div className="container">
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {[
                {
                  counter: stat1,
                  suffix: "+",
                  label: "Product Categories",
                },
                {
                  counter: stat2,
                  suffix: "",
                  label: "Brand Partners",
                },
                {
                  counter: stat3,
                  suffix: "+",
                  label: "Happy Clients",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="py-5 md:py-6 text-center"
                >
                  <p className="text-2xl md:text-3xl font-black text-white">
                    {stat.counter.count}
                    <span className="text-[#00a896]">{stat.suffix}</span>
                  </p>
                  <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand Marquee ── */}
      <div className="relative z-10 border-t border-white/5">
        <BrandMarquee />
      </div>

    </section>
  );
}
