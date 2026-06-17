import { PRODUCT_CATEGORIES, getInquiryLinks } from "@/const";

type ProductGridProps = {
  selectedBrand?: string | null;
  selectedCategory?: string | null;
};

export default function ProductGrid({ selectedBrand, selectedCategory }: ProductGridProps) {
  const filtered = PRODUCT_CATEGORIES.filter((category) => {
    const matchesBrand = !selectedBrand || category.brands.some((b: string) => b.toLowerCase() === selectedBrand.toLowerCase());
    const matchesCategory = !selectedCategory || category.slug === selectedCategory;
    return matchesBrand && matchesCategory;
  });

  return (
    <div className="relative">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900">Categories</h2>
        <span className="text-xs font-black uppercase tracking-widest text-slate-400 bg-slate-200/50 px-3 py-1 rounded-full">{filtered.length} Items</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} selectedBrand={selectedBrand} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-slate-500 py-24 bg-white rounded-3xl border border-slate-100">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">No categories found</h3>
          <p className="text-sm">Try adjusting your filters to see available categories.</p>
        </div>
      )}
    </div>
  );
}

function CategoryCard({ category, index, selectedBrand }: { category: any; index: number; selectedBrand?: string | null }) {
  const links = getInquiryLinks(category.name);
  const visibleBrands = selectedBrand
    ? category.brands.filter((brand: string) => brand.toLowerCase() === selectedBrand.toLowerCase())
    : category.brands;

  return (
    <div className="group bg-white border border-slate-100 rounded-3xl overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full shadow-sm">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={category.image}
          alt={category.name}
          loading={index < 4 ? "eager" : "lazy"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">{category.name}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow justify-between bg-white">
        <div>
          <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-3">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {visibleBrands.map((brand: string) => (
              <span
                key={brand}
                className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${selectedBrand ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 text-slate-500 border-slate-200'}`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 mt-auto">
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex-1 py-3.5 bg-[#00a896] hover:bg-[#009081] text-white text-[11px] font-black uppercase tracking-widest rounded-xl text-center transition-colors shadow-lg shadow-[#00a896]/20">
            WhatsApp
          </a>
          <a href={links.email} className="px-5 py-3.5 border border-slate-200 text-slate-700 text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}
