import { getProductImage, PRODUCT_CATEGORIES, ProductCategory } from "@/const";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "wouter";
import logo from "../assets/logo.png";

function ProductCard({
  category,
}: {
  category: ProductCategory;
}) {
  const primaryProduct = category.description.split(",")[0]?.trim() ?? category.name;
  const productImage = getProductImage(category.slug, primaryProduct, category.image);

  return (
    <Link
      href={`/products/${category.slug}`}
      className="group grid min-w-[260px] snap-start overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:border-[#00a896] sm:min-w-[300px] lg:min-w-[320px]"
    >
      <div className="aspect-[5/3] overflow-hidden bg-slate-100">
        <img
          src={productImage}
          alt={`${primaryProduct} and ${category.name} supplier in Vapi`}
          title={`${category.name} supplier in Vapi`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="grid gap-3 p-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-50 p-1.5">
            <img src={logo} alt="" aria-hidden="true" decoding="async" className="h-full w-full object-contain" />
          </span>
          <h3 className="text-base font-black tracking-tight text-slate-950">
            {category.name}
          </h3>
        </div>
        <p className="line-clamp-2 text-sm leading-6 text-slate-600">{category.description}</p>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#007f72]">
          View products
        </span>
      </div>
    </Link>
  );
}

export default function Products() {
  const featuredCategories = PRODUCT_CATEGORIES.slice(0, 12);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "prev" | "next") => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const distance = Math.min(680, carousel.clientWidth * 0.82);
    carousel.scrollBy({ left: direction === "next" ? distance : -distance, behavior: "smooth" });
  };

  return (
    <section id="products" className="bg-[#f8fafc] py-12 md:py-14 border-y border-slate-100">
      <div className="container">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#00a896] text-xs font-bold tracking-[0.3em] uppercase">
              Product Categories
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
              Fast Industrial Supply
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-right">
            Key product families with real product photos from stock categories. Full category and product pages remain crawlable for search.
          </p>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Featured product categories carousel"
          >
            {featuredCategories.map((category) => (
              <ProductCard key={category.id} category={category} />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("prev")}
                aria-label="Previous product categories"
                className="flex size-11 items-center justify-center rounded border border-slate-200 bg-white text-slate-900 transition hover:border-[#00a896] hover:text-[#007f72]"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                aria-label="Next product categories"
                className="flex size-11 items-center justify-center rounded border border-slate-200 bg-white text-slate-900 transition hover:border-[#00a896] hover:text-[#007f72]"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>

            <Link href="/products" className="inline-flex min-h-11 items-center justify-center rounded bg-[#000613] px-5 py-3 text-sm font-black uppercase tracking-widest text-white">
              View All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
