import { useEffect, useRef } from "react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/const";
import { Link } from "wouter";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import logo from "../assets/logo.png";

gsap.registerPlugin(Draggable);

function ProductCard({
  category,
  index,
  wasDraggedRef,
}: {
  category: ProductCategory;
  index: number;
  wasDraggedRef: React.MutableRefObject<boolean>;
}) {
  const panelGradients = [
    "from-[#7c9bff] to-[#5eddec]",
    "from-[#00a896] to-[#76e7cf]",
    "from-[#005eb2] to-[#73b8ff]",
    "from-[#6f88ad] to-[#a7c8ff]",
  ];
  const panelGradient = panelGradients[index % panelGradients.length];

  return (
    <Link
      href={`/products?category=${category.slug}`}
      onClick={(event) => {
        if (wasDraggedRef.current) {
          event.preventDefault();
        }
      }}
    >
      <div className="group product-drag-card w-[330px] md:w-[442px] flex-shrink-0 overflow-hidden rounded-[12px] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)] transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
        <div className="product-card-inner relative h-[520px] md:h-[580px] overflow-hidden">
          <div className="relative h-[56%] overflow-hidden bg-slate-100">
            <img
              src={category.image}
              alt={`${category.name} supplier and authorized dealer in Vapi`}
              title={`${category.name} supplier in Vapi`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          <div className={`relative flex h-[44%] flex-col justify-center bg-gradient-to-br ${panelGradient} px-8 py-8 text-white md:px-11`}>
            <div className="absolute left-1/2 top-0 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-3 shadow-lg transition-transform duration-500 group-hover:scale-110">
              <img
                src={logo}
                alt="JK Electricals"
                decoding="async"
                className="h-full w-full object-contain"
                draggable={false}
              />
            </div>

            <h3 className="mb-4 text-2xl font-black tracking-tight text-white md:text-[25px]">
              {category.name}
            </h3>
            <p className="max-w-[340px] text-base leading-relaxed text-white/90 md:text-[20px]">
              {category.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const draggableRef = useRef<Draggable | null>(null);
  const wasDraggedRef = useRef(false);

  const getBounds = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) {
      return { minX: 0, maxX: 0 };
    }

    return {
      minX: Math.min(0, viewport.offsetWidth - track.scrollWidth),
      maxX: 0,
    };
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const resetCards = () => {
      gsap.to(".product-drag-card", {
        rotate: 0,
        skewX: 0,
        scale: 1,
        xPercent: 0,
        y: 0,
        duration: 1.05,
        ease: "elastic.out(1, 0.42)",
      });
      gsap.to(".product-card-inner", {
        skewX: 0,
        xPercent: 0,
        rotate: 0,
        duration: 1.05,
        ease: "elastic.out(1, 0.42)",
      });
    };

    const [draggable] = Draggable.create(track, {
      type: "x",
      bounds: getBounds(),
      edgeResistance: 0.72,
      dragResistance: 0.015,
      cursor: "ew-resize",
      activeCursor: "ew-resize",
      allowContextMenu: true,
      onDragStart() {
        wasDraggedRef.current = false;
        gsap.to(".product-drag-card", {
          scale: 0.975,
          duration: 0.22,
          ease: "power3.out",
          transformOrigin: "50% 115%",
        });
      },
      onDrag() {
        if (Math.abs(this.startX - this.x) > 6) {
          wasDraggedRef.current = true;
        }

        const velocity = this.getVelocity("x");
        const direction = velocity === 0 ? 0 : velocity > 0 ? 1 : -1;
        const velocitySkew = Math.max(-28, Math.min(28, velocity / 75));
        const velocityRotate = Math.max(-15, Math.min(15, velocity / 190));
        const velocityPush = Math.max(-3.2, Math.min(3.2, velocity / 520));
        const rouletteLift = Math.min(18, Math.abs(velocity) / 85);

        gsap.to(".product-drag-card", {
          rotate: velocityRotate,
          skewX: velocitySkew,
          xPercent: velocityPush,
          y: -rouletteLift,
          duration: 0.22,
          ease: "power3.out",
          stagger: {
            each: 0.012,
            from: direction > 0 ? "start" : "end",
          },
          transformOrigin: "50% 115%",
        });
        gsap.to(".product-card-inner", {
          skewX: -velocitySkew * 0.55,
          rotate: -velocityRotate * 0.18,
          xPercent: -velocityPush * 0.7,
          duration: 0.22,
          ease: "power3.out",
          stagger: {
            each: 0.012,
            from: direction > 0 ? "start" : "end",
          },
          transformOrigin: "50% 115%",
        });
      },
      onDragEnd() {
        resetCards();
        window.setTimeout(() => {
          wasDraggedRef.current = false;
        }, 80);
      },
    });

    draggableRef.current = draggable;

    const handleResize = () => {
      const bounds = getBounds();
      const currentX = Number(gsap.getProperty(track, "x"));

      draggable.applyBounds(bounds);
      gsap.set(track, {
        x: Math.min(bounds.maxX, Math.max(bounds.minX, currentX)),
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      draggable.kill();
      draggableRef.current = null;
    };
  }, []);

  return (
    <section id="products" className="py-20 bg-[#f8fafc] overflow-hidden border-y border-slate-100">
      <div className="container">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#00a896] text-xs font-bold tracking-[0.3em] uppercase">
              Product Categories
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3">
              Industrial Electrical
              <span className="text-[#00a896]"> Solutions</span>
            </h2>
          </div>

          <p className="text-slate-600 max-w-xl md:text-right">
            Browse our complete range of industrial electrical products,
            automation systems, switchgear, cables, lighting solutions, motors
            and process control equipment.
          </p>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-visible">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#f8fafc] to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#f8fafc] to-transparent md:w-28" />

          <div ref={viewportRef} className="overflow-visible px-7 pb-8 pt-2 cursor-ew-resize md:px-14">
            <div
              ref={trackRef}
              id="products-drag-track"
              className="flex w-max gap-7 will-change-transform select-none touch-pan-y"
            >
              {PRODUCT_CATEGORIES.map((category, index) => (
                <ProductCard
                  key={category.id}
                  category={category}
                  index={index}
                  wasDraggedRef={wasDraggedRef}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
