import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { SERVICE_LOCATIONS, getCategoryBySlug } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  productSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export default function CategoryAuthorityPage() {
  const [path] = useLocation();
  const slug = path.replace("/products/", "");
  const category = getCategoryBySlug(slug);
  const pagePath = `/products/${category.slug}`;
  const title = `${category.name} Supplier in Vapi | JK Electricals`;
  const description = `Source ${category.name.toLowerCase()} in Vapi for industrial projects, maintenance, automation panels, and factory procurement. Brands include ${category.brands.join(", ")}.`;
  const faqs = [
    {
      question: `Does JK Electricals supply ${category.name.toLowerCase()} in Vapi?`,
      answer: `Yes. JK Electricals supplies ${category.name.toLowerCase()} for factories, contractors, panel builders, and maintenance teams in Vapi and South Gujarat.`,
    },
    {
      question: `Which brands are available for ${category.name.toLowerCase()}?`,
      answer: `Commonly requested brands include ${category.brands.join(", ")}. Availability depends on rating, model, and current stock.`,
    },
    {
      question: `Can I request a technical quote for ${category.name.toLowerCase()}?`,
      answer: "Yes. Share your BOQ, rating, model number, quantity, panel drawing, or application details for quotation support.",
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
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema(pagePath, title, description, "CollectionPage"),
          productSchema(category.name, description, pagePath, category.brands),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: category.name, path: pagePath },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Category Authority</p>
              <h1 className="mt-4 text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
                {category.name} Supplier in Vapi
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                JK Electricals supplies {category.name.toLowerCase()} for industrial buyers who need genuine components,
                dependable technical matching, and quick quotation support across Vapi, Silvassa, Daman, Sarigam, Valsad,
                Ankleshwar, Bharuch, Surat, and Dahej.
              </p>
            </div>
            <div className="rounded border border-white/15 bg-white/5 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-white">Brands Supplied</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.brands.map((brand) => (
                  <Link key={brand} href={`/brands/${brand.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`} className="rounded bg-white px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-900">
                    {brand}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_320px]">
            <article className="prose prose-slate max-w-none">
              <h2>{category.name} for industrial applications</h2>
              <p>
                {category.name} are used across factory maintenance, new installations, control panel assembly, machinery
                upgrades, utility distribution, and automation projects. JK Electricals helps buyers match the right product
                type to load requirements, panel space, environmental conditions, safety expectations, and brand preferences.
                For procurement teams, this reduces back-and-forth and keeps purchase decisions aligned with technical need.
              </p>
              <p>
                The category covers {category.description.toLowerCase()}. These products support day-to-day operations in
                chemical plants, pharmaceutical units, textile facilities, packaging lines, engineering workshops, warehouses,
                utilities, and process manufacturing environments across South Gujarat.
              </p>
              <h2>Technical buying considerations</h2>
              <p>
                Buyers should confirm voltage, current rating, enclosure protection, control voltage, communication requirement,
                mounting type, cable size, ambient conditions, duty cycle, spare availability, and compatibility with existing
                panels or machines. For automation-related products, PLC, HMI, VFD, sensor, and controller compatibility should
                be reviewed before finalizing make and model.
              </p>
              <h2>Why source from JK Electricals</h2>
              <p>
                JK Electricals focuses on genuine industrial products, practical product selection, local Vapi support, and
                quotation handling for repeat procurement. Instead of treating every inquiry as a simple product sale, the team
                supports maintenance engineers, contractors, panel builders, and purchase departments with category-level clarity
                and brand options.
              </p>
            </article>
            <aside className="self-start rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Request Quote</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share rating, brand, quantity, and application details for {category.name.toLowerCase()}.
              </p>
              <a href="https://wa.me/917383095063" className="mt-5 inline-flex rounded bg-[#00a896] px-5 py-3 text-sm font-black uppercase tracking-widest text-white">
                WhatsApp Inquiry
              </a>
              <div className="mt-8 grid gap-3 text-sm font-semibold">
                <Link href="/electrical-supplier-vapi">Electrical Supplier Vapi</Link>
                <Link href="/brands/siemens">Siemens Dealer</Link>
                <Link href="/brands/schneider-electric">Schneider Dealer</Link>
                <Link href="/products/automation-systems">Automation Systems</Link>
                <Link href="/contact">Contact JK Electricals</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Service Areas</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_LOCATIONS.map((location) => (
                <Link key={location.slug} href={`/electrical-supplier-${location.slug}`} className="rounded border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                  {category.name} in {location.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">FAQs</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded border border-slate-200 p-5">
                  <h3 className="text-base font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
