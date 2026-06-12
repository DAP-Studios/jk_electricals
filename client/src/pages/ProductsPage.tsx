import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import Hero from "@/components/Hero";
import BrandLogoCarousel from "@/components/BrandLogoCarousel";
import { useEffect, useMemo, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/const";
import Seo from "@/components/Seo";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

export default function ProductsPage() {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState<"brands" | "category" | null>(null);

  const allBrands = useMemo(() => {
    const s = new Set<string>();
    PRODUCT_CATEGORIES.forEach((c) => c.brands.forEach((b: string) => s.add(b)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const categories = useMemo(
    () => PRODUCT_CATEGORIES.map((c) => ({ name: c.name, slug: c.slug })),
    []
  );

  const availableBrands = useMemo(() => {
    if (!selectedCategory) return allBrands;
    const category = PRODUCT_CATEGORIES.find((entry) => entry.slug === selectedCategory);
    if (!category) return allBrands;
    return Array.from(new Set(category.brands)).sort((a, b) => a.localeCompare(b));
  }, [allBrands, selectedCategory]);

  const availableCategories = useMemo(() => {
    if (!selectedBrand) return categories;
    return PRODUCT_CATEGORIES
      .filter((category) => category.brands.some((brand) => brand.toLowerCase() === selectedBrand.toLowerCase()))
      .map((category) => ({ name: category.name, slug: category.slug }));
  }, [categories, selectedBrand]);

  function BrandFilterSidebar({
    selectedBrand,
    setSelectedBrand,
  }: {
    selectedBrand: string | null;
    setSelectedBrand: (b: string | null) => void;
  }) {
    return (
      <aside className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 lg:sticky lg:top-20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-black uppercase tracking-wider">Brands</h3>
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-xs text-slate-500 hover:text-slate-900"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-2 max-h-[64vh] overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedBrand(null)}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold text-left transition-colors ${selectedBrand === null ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
          >
            All Brands
          </button>
          {availableBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm font-semibold text-left transition-colors ${selectedBrand === brand ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
            >
              {brand}
            </button>
          ))}
        </div>
      </aside>
    );
  }

  function CategoryFilterStrip({
    selectedCategory,
    setSelectedCategory,
  }: {
    selectedCategory: string | null;
    setSelectedCategory: (c: string | null) => void;
  }) {
    return (
      <div className="w-full rounded-2xl border border-slate-100 bg-white/95 p-3 shadow-sm shadow-slate-900/5 backdrop-blur">
        <div className="flex items-center justify-between gap-4 mb-2 px-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-xs text-slate-500 hover:text-slate-900"
          >
            Clear Category
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`shrink-0 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors ${selectedCategory === null ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
          >
            All
          </button>
          {availableCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`shrink-0 px-4 py-2 rounded-xl border text-sm font-semibold transition-colors ${selectedCategory === category.slug ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  function MobileFilterTray({
    mode,
    selectedBrand,
    setSelectedBrand,
    selectedCategory,
    setSelectedCategory,
  }: {
    mode: "brands" | "category" | null;
    selectedBrand: string | null;
    setSelectedBrand: (b: string | null) => void;
    selectedCategory: string | null;
    setSelectedCategory: (c: string | null) => void;
  }) {
    if (!mode) return null;

    const isBrands = mode === "brands";
    const title = isBrands ? "Brands" : "Category";
    const items = isBrands ? availableBrands : availableCategories.map((category) => category.name);

    return (
      <div className="md:hidden fixed inset-x-0 bottom-[72px] z-50 px-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-black/10 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-black uppercase tracking-wider">{title}</h3>
            <button
              onClick={() => {
                if (isBrands) {
                  setSelectedBrand(null);
                } else {
                  setSelectedCategory(null);
                }
                setMobileFilterOpen(null);
              }}
              className="text-xs text-slate-500 hover:text-slate-900"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto pr-1">
            <button
              onClick={() => {
                if (isBrands) {
                  setSelectedBrand(null);
                } else {
                  setSelectedCategory(null);
                }
                setMobileFilterOpen(null);
              }}
              className={`px-4 py-2 rounded-full border text-sm font-semibold ${isBrands
                ? selectedBrand === null
                  ? 'bg-[#00a896] text-white border-[#00a896]'
                  : 'bg-white text-slate-700 border-slate-200'
                : selectedCategory === null
                  ? 'bg-[#00a896] text-white border-[#00a896]'
                  : 'bg-white text-slate-700 border-slate-200'}`}
            >
              All
            </button>
            {items.map((item) => {
              const active = isBrands ? selectedBrand === item : selectedCategory === availableCategories.find((category) => category.name === item)?.slug;
              return (
                <button
                  key={item}
                  onClick={() => {
                    if (isBrands) {
                      setSelectedBrand(item);
                    } else {
                      const category = availableCategories.find((entry) => entry.name === item);
                      setSelectedCategory(category?.slug ?? null);
                    }
                    setMobileFilterOpen(null);
                  }}
                  className={`px-4 py-2 rounded-full border text-sm font-semibold ${active ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-700 border-slate-200'}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Industrial Electrical Products | JK Electricals Vapi";
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title="Industrial Electrical Products in Vapi | JK Electricals"
        description="Browse authorized industrial electrical products, switchgear, cables, automation systems, and distribution boards from JK Electricals Vapi."
        path="/products"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Industrial Electrical Products",
          url: `${SITE_URL}/products`,
          description: SITE_DESCRIPTION,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: PRODUCT_CATEGORIES.length,
            itemListElement: PRODUCT_CATEGORIES.map((category, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: category.name,
              url: `${SITE_URL}/products#${category.slug}`,
            })),
          },
        }}
      />
      <Header />
      
      <main id="main-content" className="pt-0">
        <Hero
          title={<>Industrial <br/> <span className="text-[#00a896]">Ecosystem.</span></>}
          subtitle="A comprehensive catalog of high-quality components, authorized switchgear, and automation solutions for modern industries."
          bgClass="bg-[#000613]"
          bgImage={null}
          align="left"
          hideButtons={true}
          height="half"
        />

        <section className="bg-white py-8 md:py-10 overflow-hidden">
          <div className="container max-w-screen-2xl px-4 md:px-8 lg:px-10">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">
                  Authorized Brands
                </p>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
                  Brands We Serve
                </h2>
              </div>
              <p className="max-w-xl text-sm md:text-base text-slate-500">
                Source genuine industrial electrical products from leading manufacturers through JK Electricals.
              </p>
            </div>
            <div className="relative -mx-4 md:mx-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
              <BrandLogoCarousel rows={1} />
            </div>
          </div>
        </section>

        {/* Filters + Grid Layout for dedicated products page */}
        <section className="py-8 pb-32 md:pb-10">
          <div className="container max-w-screen-2xl px-4 md:px-8 lg:px-10">
            <p className="text-sm text-slate-500 mb-4">
              Showing all products by default. Use filters below to narrow by category or brand.
            </p>
            <div className="hidden md:block">
              <div className="grid grid-cols-1 lg:grid-cols-[285px_minmax(0,1fr)] gap-6 items-start">
                <BrandFilterSidebar
                  selectedBrand={selectedBrand}
                  setSelectedBrand={setSelectedBrand}
                />

                <div>
                  <div className="sticky top-20 z-20">
                    <CategoryFilterStrip
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </div>

                  <div className="mt-5">
                    <ProductGrid selectedBrand={selectedBrand} selectedCategory={selectedCategory} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:hidden rounded-[1.75rem] border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm text-slate-600 leading-relaxed">
                Tap the buttons at the bottom to filter by brand or category on your phone.
              </p>
            </div>
          </div>
        </section>

        <div className="md:hidden">
          <ProductGrid selectedBrand={selectedBrand} selectedCategory={selectedCategory} />
        </div>

        {/* Bulk Inquiry Section */}
        <section className="py-24 bg-slate-50">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Need a Custom Quote?</h2>
              <p className="text-lg text-slate-500 font-light mb-12">
                Our technical team in Vapi is ready to assist you with bulk requirements, project BOQs, and specialized industrial configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-[#00a896] text-white font-black uppercase tracking-widest px-12 py-5 rounded-full">
                  Request Project Pricing
                </a>
                <a 
                  href="https://wa.me/917383095063" 
                  className="bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest px-12 py-5 rounded-full"
                >
                  Direct WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MobileFilterTray
        mode={mobileFilterOpen}
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-3">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setMobileFilterOpen(mobileFilterOpen === "brands" ? null : "brands")}
            className={`rounded-full py-4 text-sm font-black uppercase tracking-widest border ${mobileFilterOpen === "brands" ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-800 border-slate-200'}`}
          >
            Brands
          </button>
          <button
            onClick={() => setMobileFilterOpen(mobileFilterOpen === "category" ? null : "category")}
            className={`rounded-full py-4 text-sm font-black uppercase tracking-widest border ${mobileFilterOpen === "category" ? 'bg-[#00a896] text-white border-[#00a896]' : 'bg-white text-slate-800 border-slate-200'}`}
          >
            Category
          </button>
        </div>
        <a href="/contact" className="mt-3 block text-center text-sm font-semibold text-[#00a896]">
           Contact Us for Bulk Orders
         </a>
        </div>

      <Footer />
    </div>

  );
}
