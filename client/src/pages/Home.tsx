import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { COMPANY_INFO } from "@/const";
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

const About = lazy(() => import("@/components/About"));
const Products = lazy(() => import("../components/Products"));
const Contact = lazy(() => import("@/components/Contact"));
const BrandLogoCarousel = lazy(() => import("@/components/BrandLogoCarousel"));
const HomeSeoContent = lazy(() => import("@/components/HomeSeoContent"));

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
        
        {/* Section 2: About (Dynamic Layout) */}
        <section className="relative z-30 bg-white pt-0">
          <Suspense fallback={<SectionFallback className="min-h-[420px] bg-white" />}>
            <About variant="home" />
          </Suspense>
        </section>

        {/* Section 3: Product Carousel (Odd/Even Dynamic) */}
        <section className="relative w-full py-0 bg-[#050816]">
          <Suspense fallback={<SectionFallback className="min-h-[520px] bg-slate-50" />}>
            <Products />
          </Suspense>
        </section>

        {/* Section 4: Secondary Content (Raw Grid Ratio) */}
        <section className="relative w-full py-0 md:py-0 bg-white overflow-hidden">
          <div className="container">
             <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="relative min-h-[360px] w-full overflow-hidden rounded border border-slate-200 bg-white md:min-h-[520px] md:w-[65%]">
                  <div className="absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-white via-white/95 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-white via-white/95 to-transparent" />
                  <div className="absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-white to-transparent" />
                  <div className="absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-white to-transparent" />

                  <div className="relative z-30 p-8 md:p-10">
                    <p className="text-[#00a896] text-xs font-black uppercase tracking-widest mb-2">Quality Standards</p>
                    <h3 className="text-3xl md:text-5xl font-black text-[#000613] uppercase tracking-tighter leading-none">Brands we serve</h3>
                  </div>

                  <Suspense fallback={<SectionFallback className="absolute inset-x-0 top-32 min-h-[280px] bg-white/70 md:top-40" />}>
                    <BrandLogoCarousel
                      className="absolute inset-x-0 top-32 md:top-40"
                      cardClassName="bg-white/90"
                    />
                  </Suspense>
                </div>

                <div className="flex aspect-[4/5] w-full flex-col justify-between overflow-hidden rounded bg-[#000613] p-8 md:w-[35%] md:p-10">
                   <div>
                      <div className="mb-8 h-12 w-12 rounded bg-[#00a896]" />
                      <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Vapi <br/> <span className="text-[#00a896]">Industrial</span> Hub.</h3>
                      <p className="text-slate-400 text-sm font-light leading-relaxed">Centrally located in Vapi GIDC to serve the chemical, textile, and paper industries with lightning fast logistics.</p>
                   </div>
                   <div className="text-white/20 font-black text-6xl tracking-tighter">4.0</div>
                </div>
             </div>
          </div>
        </section>

        <section className="relative w-full bg-slate-50 py-16 md:py-20">
          <div className="container">
            <div className="max-w-5xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">Supply Overview</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">
                What JK Electricals Vapi Supplies
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Who is JK Electricals Vapi?
                </h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                  JK Electricals Vapi is an authorized industrial electrical distributor based in Vapi, Gujarat. The business supplies genuine industrial electrical products for factories, contractors, panel builders, maintenance teams, and procurement buyers. It supports customers searching for authorized dealers, suppliers, sellers, stockists, and distributors for switchgear, cables, automation systems, distribution boards, lighting, motors, sensors, and process control products. The company serves industrial buyers who need dependable sourcing, brand-backed products, and quotation support for ongoing plant requirements and project-based procurement in and around Vapi GIDC.
                </p>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  Where does JK Electricals serve?
                </h3>
                <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">
                  JK Electricals serves Vapi GIDC and nearby industrial regions including Sarigam, Umbergaon, Silvassa, Daman, Valsad, and South Gujarat. Buyers looking for industrial electrical suppliers in these regions can use the website to identify categories, listed brands, and inquiry paths for bulk orders. The business focuses on practical procurement support, quick communication, and genuine product sourcing for industrial operations. For product inquiries, quotation requests, and repeat procurement planning, the primary contact is {COMPANY_INFO.contact.primary} and the business email is {COMPANY_INFO.contact.email}.
                </p>
              </article>
            </div>
          </div>
        </section>

        <Suspense fallback={<SectionFallback className="min-h-[640px] bg-white" />}>
          <HomeSeoContent />
        </Suspense>

        {/* Section 5: Contact (Dynamic Reveal) */}
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
