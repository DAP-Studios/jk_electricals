import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import Hero from "@/components/Hero";
import BrandLogoCarousel from "@/components/BrandLogoCarousel";
import { useEffect, useMemo, useState } from "react";
import { PRODUCT_CATEGORIES } from "@/const";
import Seo from "@/components/Seo";
import { useLocation } from "wouter";
import { Search, X } from "lucide-react";
import {
  breadcrumbSchema,
  defaultPageFaqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
  localBusinessSchema,
  organizationSummarySchema,
  productCollectionSchema,
  productCatalogSchema,
  routeByPath,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export default function ProductsPage() {
  const route = routeByPath("/products");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFilterOpen, setMobileFilterOpen] = useState<"brands" | "category" | null>(null);
  const [, setLocation] = useLocation();

  const handleSelectBrand = (brand: string | null) => {
    setSelectedBrand(brand);
    setSelectedCategory(null);
    if (brand) {
      setLocation(`/products/brand/${encodeURIComponent(brand.toUpperCase())}`);
    } else {
      setLocation("/products");
    }
  };

  const handleSelectCategory = (category: string | null) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
    if (category) {
      setLocation(`/products/category/${category}`);
    } else {
      setLocation("/products");
    }
  };

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

  function ProductSearchBar() {
    return (
      <div className="mb-8 rounded-3xl border border-slate-100 bg-white p-4 shadow-sm md:p-5">
        <label htmlFor="product-search" className="mb-3 block text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">
          Search Products or Brands
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id="product-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search VFD, Siemens, MCCB, sensors, Polycab..."
            className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-14 text-sm font-semibold text-slate-900 outline-none transition focus:border-[#00a896] focus:bg-white focus:ring-4 focus:ring-[#00a896]/10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear product search"
              className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }

  function BrandFilterSidebar({
    selectedBrand,
    setSelectedBrand,
  }: {
    selectedBrand: string | null;
    setSelectedBrand: (b: string | null) => void;
  }) {
    return (
      <aside className="rounded-3xl border border-slate-100 bg-white shadow-sm p-6 lg:sticky lg:top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Brands</h3>
          <button
            onClick={() => setSelectedBrand(null)}
            className="text-[10px] font-bold text-slate-400 hover:text-[#00a896] uppercase tracking-wider transition-colors"
          >
            Clear
          </button>
        </div>
        <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          <button
            onClick={() => setSelectedBrand(null)}
            className={`w-full px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${selectedBrand === null ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-300 hover:bg-slate-100'}`}
          >
            All Brands
          </button>
          {availableBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`w-full px-4 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest text-left transition-all ${selectedBrand === brand ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-300 hover:bg-slate-100'}`}
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
      <div className="w-full rounded-3xl border border-slate-100 bg-white/95 p-4 shadow-sm backdrop-blur-md">
        <div className="flex items-center justify-between gap-4 mb-3 px-2">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Filter by Category</p>
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-[10px] font-bold text-slate-400 hover:text-[#00a896] uppercase tracking-wider transition-colors"
          >
            Clear Filter
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`shrink-0 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${selectedCategory === null ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-300 hover:bg-slate-100'}`}
          >
            All Categories
          </button>
          {availableCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={`shrink-0 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all ${selectedCategory === category.slug ? 'bg-slate-900 text-white shadow-md' : 'bg-slate-50 text-slate-600 border border-slate-100 hover:border-slate-300 hover:bg-slate-100'}`}
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
        <div className="rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 p-5">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">{title}</h3>
            <button
              onClick={() => {
                if (isBrands) setSelectedBrand(null);
                else setSelectedCategory(null);
                setMobileFilterOpen(null);
              }}
              className="text-[10px] font-bold text-slate-400 hover:text-[#00a896] uppercase tracking-wider"
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap gap-2 max-h-[50vh] overflow-y-auto pr-1">
            <button
              onClick={() => {
                if (isBrands) setSelectedBrand(null);
                else setSelectedCategory(null);
                setMobileFilterOpen(null);
              }}
              className={`px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest ${isBrands
                ? selectedBrand === null
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-600 border border-slate-100'
                : selectedCategory === null
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-50 text-slate-600 border border-slate-100'}`}
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
                  className={`px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest ${active ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 border border-slate-100'}`}
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
  }, []);

  useEffect(() => {
    // 1. Check query parameters first
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get("category");
    const brandParam = params.get("brand");
    const searchParam = params.get("q");

    if (searchParam) {
      setSearchQuery(searchParam);
    }

    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else if (brandParam) {
      setSelectedBrand(brandParam);
    } else {
      // 2. Check path parameters
      const pathParts = window.location.pathname.split("/").filter(Boolean);
      if (pathParts[0] === "products") {
        if (pathParts[1] === "category" && pathParts[2]) {
          setSelectedCategory(pathParts[2]);
        } else if (pathParts[1] === "brand" && pathParts[2]) {
          setSelectedBrand(decodeURIComponent(pathParts[2]));
        }
      }
    }
  }, []);

  const selectedCategoryEntry = selectedCategory
    ? PRODUCT_CATEGORIES.find((category) => category.slug === selectedCategory)
    : null;
  
  const seoTitle = selectedBrand
    ? `${selectedBrand} Dealer, Distributor & Supplier in Vapi | JK Electricals`
    : selectedCategoryEntry
      ? `${selectedCategoryEntry.name} Dealer, Distributor & Supplier in Vapi | JK Electricals`
      : route.title;
      
  const seoDescription = selectedBrand
    ? `Find ${selectedBrand} dealer, distributor, supplier, stockist, reseller, and industrial electrical product support from JK Electricals Vapi for genuine procurement in Gujarat.`
    : selectedCategoryEntry
      ? `Find ${selectedCategoryEntry.name.toLowerCase()} dealers, distributors, suppliers, stockists, and sellers in Vapi. JK Electricals supplies ${selectedCategoryEntry.description.toLowerCase()} from trusted brands.`
      : route.description;
      
  const seoPath = selectedBrand
    ? `/products/brand/${encodeURIComponent(selectedBrand.toUpperCase())}`
    : selectedCategoryEntry
      ? `/products/category/${selectedCategoryEntry.slug}`
      : "/products";

  return (
    <div className="min-h-screen bg-[#eef3f8]">
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={seoPath}
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema(seoPath, seoTitle, seoDescription, "CollectionPage"),
          imageObjectSchema("JK Electricals product catalog for industrial buyers"),
          productCollectionSchema(seoPath, "JK Electricals industrial product collection"),
          internalLinkGraphSchema(),
          organizationSummarySchema(
            "JK Electricals Vapi lists industrial electrical brands and product categories for buyers searching for authorized dealers, suppliers, and sellers in Vapi, Gujarat.",
            ["Authorized industrial electrical dealers", "Brand suppliers in Vapi", "Industrial product categories"]
          ),
          productCatalogSchema(),
          defaultPageFaqSchema("industrial product sourcing"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
          ]),
        ]}
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

        <section className="bg-white py-12 md:py-16 overflow-hidden border-b border-slate-100">
          <div className="container max-w-screen-2xl px-4 md:px-8 lg:px-10">
            <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896] mb-2">
                  Authorized Brands
                </p>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-slate-900">
                  Brands We Serve
                </h2>
              </div>
            </div>
            <div className="relative -mx-4 md:mx-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
              <BrandLogoCarousel rows={1} />
            </div>
          </div>
        </section>

        {/* Filters + Grid Layout */}
        <section className="py-12 pb-32 md:pb-24">
          <div className="container max-w-screen-2xl px-4 md:px-8 lg:px-10">
            <ProductSearchBar />

            <div className="hidden md:block">
              <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-8 items-start">
                <BrandFilterSidebar
                  selectedBrand={selectedBrand}
                  setSelectedBrand={handleSelectBrand}
                />

                <div>
                  <div className="sticky top-20 z-20 mb-8">
                    <CategoryFilterStrip
                      selectedCategory={selectedCategory}
                      setSelectedCategory={handleSelectCategory}
                    />
                  </div>

                  <ProductGrid
                    selectedBrand={selectedBrand}
                    selectedCategory={selectedCategory}
                    searchQuery={searchQuery}
                  />
                </div>
              </div>
            </div>
            
            <div className="md:hidden">
              <ProductGrid
                selectedBrand={selectedBrand}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </section>

        {/* Bulk Inquiry Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Need a Custom Quote?</h2>
              <p className="text-lg text-slate-500 font-light mb-12 leading-relaxed">
                Our technical team in Vapi is ready to assist you with bulk requirements, project BOQs, and specialized industrial configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-[#00a896] hover:bg-[#009081] transition-colors text-white text-xs font-black uppercase tracking-widest px-12 py-5 rounded-2xl shadow-xl shadow-[#00a896]/20">
                  Request Project Pricing
                </a>
                <a 
                  href="https://wa.me/917383095063" 
                  className="bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors text-slate-900 text-xs font-black uppercase tracking-widest px-12 py-5 rounded-2xl"
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
        setSelectedBrand={handleSelectBrand}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Mobile Sticky Footer Filter Toggle */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 px-3 py-3 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setMobileFilterOpen(mobileFilterOpen === "brands" ? null : "brands")}
            className={`rounded-xl py-3.5 text-xs font-black uppercase tracking-widest border transition-all ${mobileFilterOpen === "brands" ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-800 border-slate-200'}`}
          >
            Brands
          </button>
          <button
            onClick={() => setMobileFilterOpen(mobileFilterOpen === "category" ? null : "category")}
            className={`rounded-xl py-3.5 text-xs font-black uppercase tracking-widest border transition-all ${mobileFilterOpen === "category" ? 'bg-slate-900 text-white border-slate-900 shadow-md' : 'bg-white text-slate-800 border-slate-200'}`}
          >
            Category
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
