import { PRODUCT_CATEGORIES, getInquiryLinks } from "@/const";

type ProductGridProps = {
  selectedBrand?: string | null;
  selectedCategory?: string | null;
};

type ProductComponentItem = {
  id: string;
  categorySlug: string;
  categoryName: string;
  componentName: string;
  description: string;
  image: string;
  brands: string[];
};

function parseComponents(description: string) {
  return description
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function ProductGrid({ selectedBrand, selectedCategory }: ProductGridProps) {
  const allItems: ProductComponentItem[] = PRODUCT_CATEGORIES.flatMap((category) =>
    parseComponents(category.description).map((componentName, index) => ({
      id: `${category.slug}-${index + 1}`,
      categorySlug: category.slug,
      categoryName: category.name,
      componentName,
      description: category.description,
      image: category.image,
      brands: category.brands,
    }))
  );

  const filtered = allItems.filter((item) => {
    const matchesBrand = !selectedBrand || item.brands.some((b: string) => b.toLowerCase() === selectedBrand.toLowerCase());
    const matchesCategory = !selectedCategory || item.categorySlug === selectedCategory;
    return matchesBrand && matchesCategory;
  });

  return (
    <div className="bg-white relative">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">All Types & Components</h2>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{filtered.length} Items</span>
      </div>

      {/* Masonry-like mosaic using CSS columns for responsive mosaic */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filtered.map((item, index) => (
          <div key={item.id} className="break-inside-avoid">
            <ProductCard item={item} index={index} selectedBrand={selectedBrand} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-slate-500 py-16">No types/components found for the selected filters.</div>
      )}
    </div>
  );
}

function ProductCard({ item, index, selectedBrand }: { item: ProductComponentItem; index: number; selectedBrand?: string | null }) {
  const links = getInquiryLinks(`${item.categoryName} - ${item.componentName}`);
  const visibleBrands = selectedBrand
    ? item.brands.filter((brand) => brand.toLowerCase() === selectedBrand.toLowerCase())
    : item.brands;

  return (
        <div id={`${item.categorySlug}-${item.id}`} className="bg-slate-50 border border-slate-100 rounded-[1.25rem] overflow-hidden transform-gpu transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
      <div className="p-6 md:p-8 min-h-[320px] flex flex-col justify-between">
      <div>
        <div className="relative overflow-hidden rounded-[1rem] mb-6 bg-slate-100">
          <img
            src={item.image}
            alt={item.componentName}
            className="h-full w-full object-cover object-center brightness-110 contrast-105 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />
        </div>
        
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00a896] mb-2">{item.categoryName}</p>
        <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{item.componentName}</h3>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {visibleBrands.map((brand: string) => (
            <span
              key={brand}
              className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${selectedBrand ? "bg-[#00a896] text-white border-[#00a896]" : "bg-white text-slate-400 border-slate-100"}`}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 flex gap-4">
        <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 bg-gradient-to-r from-[#00a896] to-[#00d4aa] text-white text-sm font-black uppercase tracking-widest rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
          Inquire
        </a>
        <a href={links.email} className="px-6 py-3.5 border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg flex items-center gap-3">
          Email
        </a>
      </div>
    </div>
    </div>    
  );
}
