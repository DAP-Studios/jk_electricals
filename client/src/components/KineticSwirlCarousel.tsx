import { motion } from "framer-motion";
import { gsap } from "gsap";
import { useEffect, useMemo, useRef } from "react";
import automationImage from "../assets/products/automation-systems/vfd.png";
import plcImage from "../assets/products/automation-systems/plc.png";
import controlPanelImage from "../assets/products/panel-accessories/controlpanel.png";
import iotImage from "../assets/products/automation-systems/hmi.png";
import componentsImage from "../assets/products/panel-accessories/switchandpushbutton.png";
import sensorsImage from "../assets/products/industrial-sensors/proximitysensor.png";
import lightsImage from "../assets/products/industrial-lighting/highbarlights.png";
import monitoringImage from "../assets/products/electrical-measurement/multifunctionmeter.png";

type SwirlCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

const demoCards: SwirlCard[] = [
  {
    title: "Automation",
    description: "Precision drives, controls, and industrial automation systems for high-throughput plants.",
    image: automationImage,
    href: "/products?category=automation-systems",
  },
  {
    title: "PLC Systems",
    description: "Reliable PLC platforms for sequencing, safety interlocks, and process intelligence.",
    image: plcImage,
    href: "/products?category=automation-systems",
  },
  {
    title: "Control Panels",
    description: "Engineered panel solutions for distribution, control, protection, and monitoring.",
    image: controlPanelImage,
    href: "/products?category=panel-accessories",
  },
  {
    title: "Industrial IoT",
    description: "Connected HMIs and monitoring layers that bring machine data into focus.",
    image: iotImage,
    href: "/products?category=automation-systems",
  },
  {
    title: "Electrical Components",
    description: "Switches, push buttons, relays, bases, SMPS units, and trusted panel essentials.",
    image: componentsImage,
    href: "/products?category=panel-accessories",
  },
  {
    title: "Sensors",
    description: "Proximity, capacitive, photoelectric, and process sensors for industrial accuracy.",
    image: sensorsImage,
    href: "/products?category=industrial-sensors",
  },
  {
    title: "High Bay Lights",
    description: "Industrial lighting systems built for factories, warehouses, and production floors.",
    image: lightsImage,
    href: "/products?category=industrial-lighting",
  },
  {
    title: "Smart Monitoring",
    description: "Meters and measurement devices that make power quality and consumption visible.",
    image: monitoringImage,
    href: "/products?category=electrical-measurement",
  },
];

type Particle = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: string;
  delay: string;
};

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const wrapDistance = (value: number, total: number) => {
  const half = total / 2;
  return ((((value + half) % total) + total) % total) - half;
};

function MagneticButton({ href }: { href: string }) {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.28;

    gsap.to(button, {
      x,
      y,
      duration: 0.28,
      ease: "power3.out",
    });
  };

  const handlePointerLeave = () => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.45)",
    });
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/12 px-5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-[0_12px_40px_rgba(0,168,150,0.20)] backdrop-blur-xl transition-colors hover:border-[#00d4aa]/70 hover:bg-[#00a896]/70"
    >
      Explore
    </a>
  );
}

export default function KineticSwirlCarousel({
  cards = demoCards,
}: {
  cards?: SwirlCard[];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const isDraggingRef = useRef(false);
  const hasDraggedRef = useRef(false);
  const hoveredIndexRef = useRef<number | null>(null);
  const stateRef = useRef({
    current: 0,
    target: 0,
    velocity: 0,
    lastPointerX: 0,
    lastPointerTime: 0,
    lastDeltaX: 0,
  });

  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 34 }, (_, index) => ({
        left: `${(index * 37) % 100}%`,
        top: `${(index * 53) % 100}%`,
        size: 2 + ((index * 11) % 5),
        opacity: 0.16 + ((index % 5) * 0.045),
        duration: `${8 + (index % 7)}s`,
        delay: `${-(index % 9)}s`,
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage || cards.length === 0) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setSpotlightX = gsap.quickTo(section, "--spotlight-x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const setSpotlightY = gsap.quickTo(section, "--spotlight-y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const updateSpotlight = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      setSpotlightX(event.clientX - rect.left);
      setSpotlightY(event.clientY - rect.top);
    };

    const render = () => {
      const state = stateRef.current;
      const rect = stage.getBoundingClientRect();
      const total = cards.length;
      const width = rect.width || window.innerWidth;
      const radiusX = clamp(width * 0.34, 260, 560);
      const radiusZ = clamp(width * 0.22, 160, 420);
      const velocityLean = clamp(state.velocity * 0.8, -18, 18);

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const relative = wrapDistance(index - state.current, total);
        const angle = (relative / total) * Math.PI * 2;
        const depth = (Math.cos(angle) + 1) / 2;
        const absDistance = Math.abs(relative);
        const activeBoost = hoveredIndexRef.current === index ? 1.08 : 1;
        const scale = (0.58 + depth * 0.55) * activeBoost;
        const x = Math.sin(angle) * radiusX;
        const z = Math.cos(angle) * radiusZ;
        const y = Math.sin(angle * 1.15) * 28 + (1 - depth) * 34;
        const rotateY = -Math.sin(angle) * 42;
        const rotateZ = -Math.sin(angle) * 7 + velocityLean;
        const opacity = clamp(0.26 + depth * 0.84, 0.18, 1);
        const blur = (1 - depth) * 6;
        const brightness = 0.58 + depth * 0.48;
        const zIndex = Math.round(depth * 1000);
        const shadowStrength = depth * 0.42;

        gsap.set(card, {
          x,
          y,
          z,
          scale,
          rotateY,
          rotateZ,
          opacity,
          zIndex,
          filter: `blur(${blur}px) brightness(${brightness})`,
          boxShadow:
            depth > 0.86
              ? `0 0 0 1px rgba(255,255,255,0.32), 0 36px 110px rgba(0,168,150,${shadowStrength})`
              : "0 20px 70px rgba(0,0,0,0.22)",
        });

        card.setAttribute("aria-hidden", absDistance > 1.7 ? "true" : "false");
        card.tabIndex = absDistance < 0.7 ? 0 : -1;
      });
    };

    const tick = () => {
      const state = stateRef.current;
      const delta = gsap.ticker.deltaRatio(120) / 120;

      if (!isDraggingRef.current && !prefersReducedMotion) {
        state.target += state.velocity * delta;
        state.velocity *= Math.pow(0.925, delta * 120);

        if (Math.abs(state.velocity) < 0.018) {
          const snapTarget = Math.round(state.target);
          state.target += (snapTarget - state.target) * clamp(delta * 10, 0, 1);
          if (Math.abs(snapTarget - state.target) < 0.001) {
            state.target = snapTarget;
          }
        }
      }

      state.current += (state.target - state.current) * clamp(delta * 13, 0, 1);
      render();
    };

    const handlePointerDown = (event: PointerEvent) => {
      isDraggingRef.current = true;
      hasDraggedRef.current = false;
      const state = stateRef.current;
      state.lastPointerX = event.clientX;
      state.lastPointerTime = performance.now();
      state.lastDeltaX = 0;
      state.velocity = 0;
      section.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateSpotlight(event);
      if (!isDraggingRef.current) return;

      const state = stateRef.current;
      const now = performance.now();
      const deltaX = event.clientX - state.lastPointerX;
      const deltaTime = Math.max(16, now - state.lastPointerTime);

      if (Math.abs(deltaX) > 2) {
        hasDraggedRef.current = true;
      }

      state.target -= deltaX / 320;
      state.velocity = -(deltaX / deltaTime) * 13.5;
      state.lastDeltaX = deltaX;
      state.lastPointerX = event.clientX;
      state.lastPointerTime = now;
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;

      isDraggingRef.current = false;
      section.releasePointerCapture?.(event.pointerId);
      window.setTimeout(() => {
        hasDraggedRef.current = false;
      }, 120);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!section.matches(":hover")) return;

      event.preventDefault();
      const state = stateRef.current;
      const wheelForce = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      state.target += wheelForce * 0.004;
      state.velocity += wheelForce * 0.0009;
    };

    const handleResize = () => render();

    gsap.ticker.fps(120);
    gsap.ticker.add(tick);
    render();

    section.addEventListener("pointerdown", handlePointerDown);
    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerup", handlePointerUp);
    section.addEventListener("pointercancel", handlePointerUp);
    section.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(tick);
      section.removeEventListener("pointerdown", handlePointerDown);
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerup", handlePointerUp);
      section.removeEventListener("pointercancel", handlePointerUp);
      section.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [cards.length]);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white [--spotlight-x:50vw] [--spotlight-y:50vh]"
      aria-labelledby="kinetic-products-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--spotlight-x)_var(--spotlight-y),rgba(0,212,170,0.24),transparent_30%),radial-gradient(circle_at_20%_20%,rgba(69,151,254,0.22),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(0,168,150,0.16),transparent_28%),linear-gradient(135deg,#050816_0%,#081426_55%,#050816_100%)]" />
      <div className="pointer-events-none absolute inset-x-[-10%] top-[10%] h-72 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.10),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_62%)] opacity-70" />

      {particles.map((particle, index) => (
        <span
          key={index}
          className="pointer-events-none absolute rounded-full bg-white blur-[1px] animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        />
      ))}

      <div className="container relative z-10 flex min-h-screen flex-col justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center md:mb-4"
        >
          <span className="text-xs font-black uppercase tracking-[0.35em] text-[#00d4aa]">
            Product Orbit
          </span>
          <h2
            id="kinetic-products-title"
            className="mt-4 text-[clamp(3rem,8vw,7.6rem)] font-black uppercase leading-[0.86] tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#bffcf0] to-[#00d4aa] bg-clip-text text-transparent">
              Industrial
            </span>
            <br />
            <span className="text-white/85">Ecosystem</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
            Drag through a precision catalog of automation, controls, lighting, sensors,
            and smart electrical systems.
          </p>
        </motion.div>

        <div
          ref={stageRef}
          className="relative mx-auto h-[560px] w-full max-w-7xl cursor-grab touch-pan-y select-none overflow-visible active:cursor-grabbing md:h-[620px]"
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
            contain: "layout paint",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-[52%] h-[36%] w-[82%] -translate-x-1/2 rounded-[50%] bg-white/10 blur-2xl [transform:rotateX(72deg)]" />
          <div className="pointer-events-none absolute left-1/2 top-[64%] h-[20%] w-[58%] -translate-x-1/2 rounded-[50%] bg-[#00a896]/20 blur-3xl [transform:rotateX(72deg)]" />

          {cards.map((card, index) => (
            <a
              key={card.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              href={card.href}
              onClick={(event) => {
                if (hasDraggedRef.current) {
                  event.preventDefault();
                }
              }}
              onPointerEnter={() => {
                hoveredIndexRef.current = index;
              }}
              onPointerLeave={() => {
                hoveredIndexRef.current = null;
              }}
              className="absolute left-1/2 top-1/2 block h-[430px] w-[300px] overflow-hidden rounded-[32px] border border-white/16 bg-white/10 p-3 text-left shadow-2xl outline-none backdrop-blur-2xl will-change-transform focus-visible:ring-2 focus-visible:ring-[#00d4aa] sm:w-[330px] md:h-[468px] md:w-[360px]"
              style={{
                transformStyle: "preserve-3d",
                transform: "translate3d(-50%, -50%, 0)",
                backfaceVisibility: "hidden",
              }}
            >
              <div className="relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-[#09111f]">
                <img
                  src={card.image}
                  alt={`${card.title} industrial electrical product category`}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/48 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.22),transparent_36%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-white/68">
                    {card.description}
                  </p>
                  <div className="mt-6">
                    <MagneticButton href={card.href} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-2 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white/62 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-[#00d4aa] shadow-[0_0_18px_rgba(0,212,170,0.9)]" />
          Drag to Explore
        </div>
      </div>
    </section>
  );
}
