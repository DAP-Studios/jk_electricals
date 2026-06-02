import { useRef } from "react";
import { PRODUCT_CATEGORIES, ProductCategory } from "@/const";
import { Link } from "wouter";

function ProductCard({
  category,
}: {
  category: ProductCategory;
}) {
  return (
    <Link href={`/products?category=${category.slug}`}>
      <div
        className="
          group
          w-[320px]
          md:w-[360px]
          lg:w-[380px]
          flex-shrink-0
          overflow-hidden
          rounded-[28px]
          bg-white
          border
          border-slate-200
          shadow-sm
          hover:shadow-2xl
          transition-all
          duration-500
          cursor-pointer
        "
      >
        <div className="relative h-[240px] overflow-hidden bg-slate-100">
          <img
            src={category.image}
            alt={category.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#00a896] shadow">
              {category.brands.length}+ Brands
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">{category.name}</h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-5">{category.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {category.brands.slice(0, 3).map((brand) => (
              <span
                key={brand}
                className="
                  rounded-full
                  bg-slate-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-slate-700
                "
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span
              className="
                text-[#00a896]
                font-semibold
                group-hover:translate-x-1
                transition-transform
              "
            >
              Explore Category →
            </span>

            <div
              className="
                h-10
                w-10
                rounded-full
                bg-slate-100
                flex
                items-center
                justify-center
              "
            >
              →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -420 : 420,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="products"
      className="
        py-20
        bg-gradient-to-b
        from-white
        via-slate-50
        to-white
        overflow-hidden
      "
    >
      <div className="container">
        <div className="mb-12">
          <span className="text-[#00a896] text-xs font-bold tracking-[0.3em] uppercase">
            Product Categories
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-3">
            Industrial Electrical
            <span className="text-[#00a896]"> Solutions</span>
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl">
            Browse our complete range of industrial electrical products,
            automation systems, switchgear, cables, lighting solutions,
            motors and process control equipment.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md"
            aria-label="Scroll left"
          >
            ←
          </button>

          <div
            ref={scrollRef}
            className="
              flex
              gap-6
              overflow-x-auto
              no-scrollbar
              pb-4
              scroll-smooth
            "
          >
            {PRODUCT_CATEGORIES.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white shadow-md"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
