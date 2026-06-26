import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { RESOURCE_GUIDES, SERVICE_LOCATIONS, getResourceBySlug } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  faqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
  localBusinessSchema,
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export default function ResourceGuidePage() {
  const [path] = useLocation();
  const slug = path.replace("/resources/", "");
  const guide = getResourceBySlug(slug);
  const pagePath = `/resources/${guide.slug}`;
  const title = `${guide.title} | JK Electricals Vapi`;
  const description = `${guide.summary} Learn buying factors, applications, and supplier links for industrial buyers in Vapi.`;
  const relatedGuides = RESOURCE_GUIDES.filter((item) => item.slug !== guide.slug).slice(0, 4);
  const faqs = [
    {
      question: `Can JK Electricals help with ${guide.title.toLowerCase()} requirements?`,
      answer:
        "Yes. JK Electricals supports product selection and inquiry handling for industrial buyers, panel builders, contractors, and maintenance teams.",
    },
    {
      question: "What information should I share for a faster quotation?",
      answer:
        "Share model numbers, technical ratings, panel photos, quantity, application details, preferred brand, and delivery urgency.",
    },
    {
      question: "Which service areas are supported?",
      answer:
        "JK Electricals supports Vapi, Silvassa, Daman, Sarigam, Valsad, and nearby South Gujarat industrial areas.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        path={pagePath}
        schema={[
          organizationSchema(),
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema(pagePath, title, description, "TechArticle"),
          imageObjectSchema(`${guide.title} by JK Electricals Vapi`),
          internalLinkGraphSchema(),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources/plc-selection-guide" },
            { name: guide.title, path: pagePath },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Industrial Buying Resource</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              {guide.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">{guide.summary}</p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_320px]">
            <article className="prose prose-slate max-w-none">
              <h2>{guide.keyword}</h2>
              {guide.sections.map((section) => (
                <p key={section}>{section}</p>
              ))}
              <p>
                JK Electricals uses these buying factors to support factories, OEMs, panel builders, project contractors, and
                maintenance engineers who need genuine industrial electrical and automation products. A good inquiry should not
                only mention the product name; it should explain the application, existing system, preferred brand, technical
                rating, expected quantity, and urgency. This helps the supplier recommend the right product family and avoids
                mismatches during installation or replacement.
              </p>
              <p>
                For South Gujarat buyers, procurement speed also matters. Local sourcing from Vapi can reduce communication
                delays for switchgear, PLC, VFD, sensors, process controllers, panel accessories, electrical measurement,
                cables, motors, lighting, industrial fans, and heaters. Use this guide as a starting point, then connect it with
                the linked category and brand pages for product-specific inquiry paths.
              </p>
            </article>

            <aside className="self-start rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Internal Links</h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                <Link href={`/products/${guide.categorySlug}`}>Related Product Category</Link>
                <Link href={`/brands/${guide.brandSlug}`}>Related Brand Page</Link>
                <Link href="/electrical-supplier-vapi">Electrical Supplier Vapi</Link>
                <Link href="/products/automation-systems">Automation Systems</Link>
                <Link href="/contact">Request Quote</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Related Guides</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {relatedGuides.map((item) => (
                <Link key={item.slug} href={`/resources/${item.slug}`} className="rounded border border-slate-200 bg-white p-5 transition hover:border-[#00a896]">
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {SERVICE_LOCATIONS.slice(0, 5).map((location) => (
                <Link key={location.slug} href={`/electrical-supplier-${location.slug}`} className="rounded border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                  {location.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
