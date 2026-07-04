import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { Building2, MapPin, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { PRODUCT_CATEGORIES } from "@/const";
import { AUTHORITY_BRANDS, SERVICE_LOCATIONS } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  defaultPageFaqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
  itemListSchema,
  localBusinessSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

const BRAND_PAGE_PATHS: Record<string, string> = {
  siemens: "/brands/siemens-dealer-vapi",
  "schneider-electric": "/brands/schneider-electric-dealer-vapi",
  abb: "/brands/abb-dealer-vapi",
  delta: "/brands/delta-dealer-vapi",
  mitsubishi: "/brands/mitsubishi-dealer-vapi",
  omron: "/brands/omron-dealer-vapi",
  polycab: "/brands/polycab-cable-supplier-vapi",
  "rr-kabel": "/brands/rr-kabel-supplier-vapi",
  kei: "/brands/kei-cable-supplier-vapi",
  legrand: "/brands/legrand-dealer-vapi",
  hager: "/brands/hager-dealer-vapi",
  "c-and-s-electric": "/brands/cs-electric-dealer-vapi",
  autonics: "/brands/autonics-dealer-vapi",
  panasonic: "/brands/panasonic-industrial-sensor-supplier-vapi",
  philips: "/brands/philips-industrial-lighting-supplier-vapi",
  crompton: "/brands/crompton-motor-fan-supplier-vapi",
  invt: "/brands/invt-vfd-supplier-vapi",
  "lauritz-knudsen-lt": "/brands/lauritz-knudsen-lt-dealer-vapi",
  chint: "/brands/chint-dealer-vapi",
  selec: "/brands/selec-controller-supplier-vapi",
  multispan: "/brands/multispan-controller-supplier-vapi",
  radix: "/brands/radix-controller-supplier-vapi",
  itherm: "/brands/itherm-controller-supplier-vapi",
  "pepperl-fuchs": "/brands/pepperl-fuchs-sensor-supplier-vapi",
  hindustan: "/brands/hindustan-motor-supplier-vapi",
  "bharat-bijlee": "/brands/bharat-bijlee-motor-supplier-vapi",
  secure: "/brands/secure-meter-supplier-vapi",
  elmex: "/brands/elmex-terminal-block-supplier-vapi",
  wipro: "/brands/wipro-industrial-lighting-supplier-vapi",
  bajaj: "/brands/bajaj-industrial-lighting-fan-supplier-vapi",
  havells: "/brands/havells-industrial-electrical-supplier-vapi",
  almonard: "/brands/almonard-industrial-fan-supplier-vapi",
  rexnord: "/brands/rexnord-industrial-fan-supplier-vapi",
};

export default function BrandsPage() {
  const [query, setQuery] = useState("");
  const title = "Industrial Electrical Brands Supplied by JK Electricals Vapi";
  const description =
    "Explore industrial electrical, automation, switchgear, cable, sensor, motor, lighting and panel accessory brands supplied by JK Electricals Vapi across South Gujarat.";

  const filteredBrands = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return AUTHORITY_BRANDS;

    return AUTHORITY_BRANDS.filter((brand) =>
      [brand.name, brand.slug, ...brand.focus].some((value) => value.toLowerCase().includes(term)),
    );
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        path="/brands"
        schema={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          webPageSchema("/brands", title, description, "CollectionPage"),
          imageObjectSchema("Industrial electrical and automation brands supplied by JK Electricals Vapi"),
          itemListSchema(
            "Industrial electrical brands supplied by JK Electricals Vapi",
            AUTHORITY_BRANDS.map((brand) => brand.name),
          ),
          internalLinkGraphSchema(),
          defaultPageFaqSchema("industrial electrical brands and automation brands"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
          ]),
        ]}
      />
      <Header />

      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Brand Supply Hub</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Industrial Electrical Brands Supplied by JK Electricals Vapi
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Find brand-specific inquiry pages for switchgear, automation, cables, sensors, meters, lighting, motors,
              panel accessories, and industrial spares supplied through JK Electricals Vapi.
            </p>

            <label className="mt-8 flex max-w-2xl items-center gap-3 rounded bg-white px-4 py-3 text-slate-900 shadow-lg">
              <Search size={20} className="text-slate-500" />
              <span className="sr-only">Search brands</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Siemens, Schneider, ABB, Delta, Polycab..."
                className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBrands.map((brand) => {
                const brandPath = BRAND_PAGE_PATHS[brand.slug] ?? `/brands/${brand.slug}`;
                const relatedCategories = PRODUCT_CATEGORIES.filter((category) =>
                  category.brands.some((item) =>
                    item.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0].toLowerCase()),
                  ) ||
                  brand.focus.some((focus) =>
                    category.description.toLowerCase().includes(focus.split(" ")[0].toLowerCase()),
                  ),
                ).slice(0, 3);

                return (
                  <article key={brand.slug} className="rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#00a896]/10 text-[#007f72]">
                        <Building2 size={20} />
                        </span>
                      <div>
                        <h2 className="text-xl font-black tracking-tight text-slate-900">
                          <Link href={brandPath}>{brand.name}</Link>
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{brand.focus.join(", ")}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {relatedCategories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/products/${category.slug}`}
                          className="rounded border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 hover:border-[#00a896] hover:text-[#007f72]"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={brandPath}
                      className="mt-6 inline-flex text-sm font-black uppercase tracking-widest text-[#007f72]"
                    >
                      View Brand Page
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
            <article className="prose prose-slate max-w-none">
              <h2>Brand, category, and location coverage</h2>
              <p>
                This brand hub connects commercial searches such as brand dealer, brand distributor, brand supplier,
                brand stockist, product supplier, and product dealer in Vapi with the relevant category and location
                pages. It supports procurement teams comparing original products, genuine parts, replacement spares,
                automation components, and electrical control components.
              </p>
              <p>
                Buyers can start from a brand page, move into related product categories, and then confirm service
                coverage for Vapi GIDC, Daman, Silvassa, Sarigam, Umbergaon, Pardi, Valsad, Navsari, Surat, and South
                Gujarat. The visible content stays concise while structured data and internal links help search engines
                understand the full inventory relationship.
              </p>
            </article>

            <aside className="rounded border border-slate-200 bg-white p-6">
              <h2 className="flex items-center gap-2 text-lg font-black uppercase tracking-tight text-slate-900">
                <MapPin size={18} />
                Service Areas
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm font-bold">
                {SERVICE_LOCATIONS.slice(0, 12).map((location) => (
                  <Link key={location.slug} href={`/electrical-supplier-${location.slug}`}>
                    {location.name}
                  </Link>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
