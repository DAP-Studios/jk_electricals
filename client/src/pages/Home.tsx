import { Suspense, lazy, useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { CheckCircle2, ClipboardCheck, MapPin, ShieldCheck, Truck, Wrench } from "lucide-react";
import { COMPANY_INFO, PRODUCT_CATEGORIES } from "@/const";
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

const solutionCards = [
  {
    title: "Plant maintenance",
    description:
      "Replacement switchgear, relays, sensors, controllers, meters, cables, fans, lighting and panel spares for urgent breakdown or planned maintenance work.",
  },
  {
    title: "Panel and machine builds",
    description:
      "PLC, VFD, HMI, SMPS, contactors, terminal accessories, push buttons, indicators and protection components for panel builders and OEM machine teams.",
  },
  {
    title: "Project procurement",
    description:
      "BOQ-based support for factories, contractors and purchase departments sourcing multiple product families from trusted industrial brands.",
  },
];

const quoteSteps = [
  "Share product name, model number, rating, quantity and preferred brand.",
  "Add panel photos, old product labels or BOQ files when exact matching matters.",
  "Mention the application and urgency so the team can suggest practical options.",
];

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
                <span className="hero-gradient-text">Industrial Electrical & Automation Supply</span>
              </>
            }
            subtitle="A local source for factories, panel builders, OEMs and contractors who need genuine electrical components, automation products and practical quote support."
            ctaPrimary={{ label: "Request Quote", href: "/contact" }}
            ctaSecondary={{ label: "View Products", href: "/products", variant: "secondary" }}
          />
        </section>
        
        {/* Section 2: Product highlights */}
        <section className="relative w-full py-0 bg-[#050816]">
          <Suspense fallback={<SectionFallback className="min-h-[520px] bg-slate-50" />}>
            <Products />
          </Suspense>
        </section>

        <section className="relative w-full bg-white py-12 md:py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">How We Help</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                  Useful support before you buy
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                  Industrial buying is often more than picking a part number. JK Electricals helps customers check product
                  category, brand preference, rating, application fit and availability before preparing a quote.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4">
                    <ShieldCheck className="mt-1 size-5 shrink-0 text-[#00a896]" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-black text-slate-900">Genuine brands</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Products from established industrial electrical and automation manufacturers.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4">
                    <Wrench className="mt-1 size-5 shrink-0 text-[#00a896]" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-black text-slate-900">Application clarity</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Support for maintenance, panel assembly, machinery, utilities and factory projects.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4">
                    <Truck className="mt-1 size-5 shrink-0 text-[#00a896]" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-black text-slate-900">Local coordination</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Vapi-based communication for nearby industrial areas and urgent requirements.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded border border-slate-200 bg-slate-50 p-4">
                    <ClipboardCheck className="mt-1 size-5 shrink-0 text-[#00a896]" aria-hidden="true" />
                    <div>
                      <h3 className="text-base font-black text-slate-900">BOQ friendly</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">Share lists, model references and ratings for multi-item industrial quotations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded border border-slate-200 bg-[#000613] p-6 md:p-8">
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">Best details to send for a faster quote</h2>
                <div className="mt-6 grid gap-4">
                  {quoteSteps.map((step, index) => (
                    <div key={step} className="flex gap-4 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded bg-[#00a896] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm leading-7 text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="tel:+917383095063" className="inline-flex min-h-11 items-center justify-center rounded bg-white px-5 py-3 text-sm font-black uppercase text-[#000613]">
                    Call {COMPANY_INFO.contact.primary}
                  </a>
                  <a href="https://wa.me/917383095063" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded border border-white/25 px-5 py-3 text-sm font-black uppercase text-white hover:bg-white/10">
                    WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full bg-slate-50 py-12 md:py-16">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#00a896]">What Customers Source</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                Electrical material for maintenance, panels and factory projects
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
                JK Electricals gives industrial buyers a clear view of what is available, where support is offered,
                and what information helps the team prepare a useful quote.
              </p>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {solutionCards.map((card) => (
                <article key={card.title} className="rounded border border-slate-200 bg-white p-5">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">{card.title}</h3>
                  <p className="mt-4 text-sm md:text-base leading-7 text-slate-600">{card.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {PRODUCT_CATEGORIES.slice(0, 8).map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="flex min-h-16 items-center justify-between gap-3 rounded border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-900 hover:border-[#00a896] hover:text-[#007f72]"
                >
                  <span>{category.name}</span>
                  <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Brand and service confidence */}
        <section className="relative w-full bg-white py-12 md:py-14 overflow-hidden">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-stretch">
              <div className="relative min-h-[320px] overflow-hidden rounded border border-slate-200 bg-white">
                <div className="relative z-30 p-6 md:p-8">
                  <p className="text-[#00a896] text-xs font-black uppercase tracking-widest mb-2">Brands We Serve</p>
                  <h2 className="text-3xl md:text-4xl font-black text-[#000613] uppercase tracking-tight leading-none">Trusted industrial brands</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                    Customers can ask for brand-specific products or share existing model numbers when compatibility is important.
                  </p>
                </div>

                <Suspense fallback={<SectionFallback className="absolute inset-x-0 top-28 min-h-[160px] bg-white/70" />}>
                  <BrandLogoCarousel rows={1} className="absolute inset-x-0 top-36 md:top-40" cardClassName="bg-white/90" />
                </Suspense>
              </div>

              <aside className="rounded bg-[#000613] p-6 md:p-8">
                <MapPin className="mb-5 size-8 text-[#5eead4]" aria-hidden="true" />
                <h2 className="text-2xl font-black uppercase tracking-tight text-white">Serving Vapi and nearby industry</h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  JK Electricals supports buyers around Vapi GIDC, Silvassa, Daman, Sarigam, Valsad, Umbergaon and South Gujarat.
                </p>
                <div className="mt-6 grid gap-3 text-sm font-bold">
                  <Link className="text-white hover:text-[#5eead4]" href="/electrical-supplier-vapi">Vapi</Link>
                  <Link className="text-white hover:text-[#5eead4]" href="/electrical-supplier-silvassa">Silvassa</Link>
                  <Link className="text-white hover:text-[#5eead4]" href="/electrical-supplier-daman">Daman</Link>
                  <Link className="text-white hover:text-[#5eead4]" href="/contact">Send a requirement</Link>
                </div>
              </aside>
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
