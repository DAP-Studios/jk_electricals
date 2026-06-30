import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import {
  breadcrumbSchema,
  defaultPageFaqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
  itemListSchema,
  localBusinessSchema,
  organizationSchema,
  organizationSummarySchema,
  routeByPath,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

const Products = lazy(() => import("../components/Products"));
const Contact = lazy(() => import("@/components/Contact"));
const BrandLogoCarousel = lazy(() => import("@/components/BrandLogoCarousel"));

function SectionFallback({ className = "min-h-48 bg-white" }: { className?: string }) {
  return <div className={className} aria-hidden="true" />;
}

export default function Home() {
  const route = routeByPath("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white selection:bg-[#00a896] selection:text-white overflow-x-hidden antialiased font-inter">
      <Seo
        title={route.title}
        description={route.description}
        path="/"
        schema={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          webPageSchema("/", route.title, route.description),
          imageObjectSchema("JK Electricals Vapi industrial electrical and automation supply"),
          internalLinkGraphSchema(),
          organizationSummarySchema(
            "JK Electricals Vapi is an authorized industrial electrical and automation supplier serving factories, contractors, panel builders, OEMs, and procurement teams in Vapi, Vapi GIDC, Silvassa, Daman, Sarigam, Valsad, and South Gujarat.",
            [
              "Industrial electrical supplier Vapi",
              "Industrial automation supplier Vapi",
              "Switchgear, PLC, VFD, sensors, process controllers, cables, motors, lighting, and panel accessories",
              "Siemens, Schneider Electric, ABB, Delta, Omron, Polycab, KEI, Legrand, Autonics, Mitsubishi, Philips",
              "Vapi GIDC industrial procurement",
            ]
          ),
          itemListSchema("Industrial buyer intents supported by JK Electricals", [
            "JK Electricals Vapi",
            "electrical supplier Vapi",
            "industrial electrical supplier Vapi",
            "industrial automation supplier Vapi",
            "switchgear supplier Vapi",
            "PLC supplier Vapi",
            "VFD supplier Vapi",
            "industrial sensor supplier Vapi",
            "process controller supplier Vapi",
            "Siemens dealer Vapi",
            "Schneider dealer Vapi",
            "Polycab cable dealer Vapi",
            "electrical supplier Silvassa",
            "electrical supplier Daman",
          ]),
          defaultPageFaqSchema("industrial electrical and automation supply"),
          breadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />
      <Header />
      
      <main id="main-content" className="pt-0 space-y-0">
        {/* Section 1: Hero (Independent Raw Ratio) */}
        <section className="relative w-full py-0 md:py-0 bg-transparent overflow-hidden">
          <Hero
            align="left"
            eyebrow="Industrial Electrical & Automation Solutions"
            title={
              <>
                JK Electricals Vapi{" "}
                <span className="hero-gradient-text">Industrial Electrical Supplier in Vapi GIDC</span>
              </>
            }
            subtitle="Source switchgear, PLC, VFD, industrial sensors, process controllers, cables, motors, lighting, distribution boards, and panel accessories from JK Electricals in Vapi."
            ctaPrimary={{ label: "Request Quote", href: "/contact" }}
            ctaSecondary={{ label: "WhatsApp", href: "https://wa.me/917383095063", variant: "secondary" }}
          />
        </section>
        
        {/* Section 2: Product highlights */}
        <section className="relative w-full py-0 bg-[#050816]">
          <Suspense fallback={<SectionFallback className="min-h-[520px] bg-slate-50" />}>
            <Products />
          </Suspense>
        </section>

        {/* Section 3: Brand and crawlable link structure */}
        <section className="relative w-full bg-white py-12 md:py-14 overflow-hidden">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-stretch">
              <div className="relative min-h-[300px] overflow-hidden rounded border border-slate-200 bg-white">
                <div className="relative z-30 p-6 md:p-8">
                  <p className="text-[#00a896] text-xs font-black uppercase tracking-widest mb-2">Brands We Serve</p>
                  <h2 className="text-3xl md:text-4xl font-black text-[#000613] uppercase tracking-tight leading-none">Authorized brand support</h2>
                </div>

                <Suspense fallback={<SectionFallback className="absolute inset-x-0 top-28 min-h-[160px] bg-white/70" />}>
                  <BrandLogoCarousel rows={1} className="absolute inset-x-0 top-28 md:top-32" cardClassName="bg-white/90" />
                </Suspense>
              </div>

              <aside className="rounded bg-[#000613] p-6 md:p-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">Clean Crawl Paths</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Product, brand, location and quote pages are linked in a simple HTML flow for users and search engines.
                </p>
                <div className="mt-6 grid gap-3 text-sm font-bold">
                  <a className="text-white hover:text-[#5eead4]" href="/products/plc-supplier-vapi">PLC Supplier Vapi</a>
                  <a className="text-white hover:text-[#5eead4]" href="/products/vfd-supplier-vapi">VFD Supplier Vapi</a>
                  <a className="text-white hover:text-[#5eead4]" href="/brands/siemens-dealer-vapi">Siemens Dealer Vapi</a>
                  <a className="text-white hover:text-[#5eead4]" href="/electrical-supplier-vapi">Electrical Supplier Vapi</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-slate-50 py-12 md:py-14">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">Supply Overview</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                What JK Electricals Vapi Supplies
              </h2>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              <article className="rounded border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-black tracking-tight text-slate-900">Industrial electricals</h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                  Switchgear, distribution boards, cables, panel accessories, contactors, relays and control products for Vapi GIDC factories.
                </p>
              </article>

              <article className="rounded border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-black tracking-tight text-slate-900">Automation products</h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                  PLC, VFD, HMI, sensors, timers and process controllers for panels, OEMs, machine builders and maintenance teams.
                </p>
              </article>

              <article className="rounded border border-slate-200 bg-white p-5">
                <h3 className="text-lg font-black tracking-tight text-slate-900">South Gujarat supply</h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                  Local support for Vapi, Daman, Silvassa, Sarigam, Valsad, Umbergaon and nearby industrial belts.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Section 4: Contact */}
        <section className="relative w-full py-0 bg-white">
          
          <Suspense fallback={<SectionFallback className="min-h-[420px] bg-white" />}>
            <Contact />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
  );
}
