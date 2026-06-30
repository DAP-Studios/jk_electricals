import { PRODUCT_CATEGORIES, ProductCategory } from "@/const";
import { Link } from "wouter";
import logo from "../assets/logo.png";

function ProductCard({
  category,
}: {
  category: ProductCategory;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group grid overflow-hidden rounded border border-slate-200 bg-white transition-colors hover:border-[#00a896]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={`${category.name} supplier and authorized dealer in Vapi`}
          title={`${category.name} supplier in Vapi`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="grid gap-4 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-slate-50 p-1.5">
            <img src={logo} alt="" aria-hidden="true" decoding="async" className="h-full w-full object-contain" />
          </span>
          <h3 className="text-lg font-black tracking-tight text-slate-950">
            {category.name}
          </h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">
          {category.description}
        </p>
        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#007f72]">
          View products
        </span>
      </div>
    </Link>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-[#f8fafc] py-16 md:py-20 border-y border-slate-100">
      <div className="container">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#00a896] text-xs font-bold tracking-[0.3em] uppercase">
              Product Categories
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-5xl">
              Industrial Electrical Solutions
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-600 md:text-right md:text-base">
            Browse our complete range of industrial electrical products,
            automation systems, switchgear, cables, lighting solutions, motors
            and process control equipment.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category) => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
