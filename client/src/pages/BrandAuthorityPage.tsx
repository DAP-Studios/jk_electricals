import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { PRODUCT_CATEGORIES } from "@/const";
import { getBrandBySlug, SERVICE_LOCATIONS } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  productSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export default function BrandAuthorityPage() {
  const [path] = useLocation();
  const slug = path.replace("/brands/", "");
  const brand = getBrandBySlug(slug);
  const pagePath = `/brands/${brand.slug}`;
  const title = `${brand.name} Dealer & Supplier in Vapi | JK Electricals`;
  const description = `Request ${brand.name} industrial electrical products in Vapi from JK Electricals. Supply support for ${brand.focus.join(", ")} and related factory procurement.`;
  const relatedCategories = PRODUCT_CATEGORIES.filter((category) =>
    category.brands.some((item) => item.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0].toLowerCase())) ||
    brand.focus.some((focus) => category.description.toLowerCase().includes(focus.split(" ")[0].toLowerCase())),
  ).slice(0, 4);
  const faqs = [
    {
      question: `Does JK Electricals supply ${brand.name} products in Vapi?`,
      answer: `Yes. JK Electricals supports inquiries for ${brand.name} products used in industrial electrical, automation, panel, and maintenance applications.`,
    },
    {
      question: `Which ${brand.name} products can I inquire about?`,
      answer: `Common inquiries include ${brand.focus.join(", ")}. Share model numbers, ratings, quantities, and application details for quotation support.`,
    },
    {
      question: `Can JK Electricals support ${brand.name} requirements outside Vapi?`,
      answer: "Yes. JK Electricals serves Vapi and nearby industrial hubs including Silvassa, Daman, Sarigam, Valsad, Ankleshwar, Bharuch, Surat, and Dahej.",
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
          productSchema(`${brand.name} industrial electrical products`, description, pagePath, [brand.name]),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/products" },
            { name: brand.name, path: pagePath },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Brand Authority</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              {brand.name} Dealer & Supplier in Vapi
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              JK Electricals supports industrial buyers searching for {brand.name} products in Vapi, including {brand.focus.join(", ")}.
              The page helps procurement teams connect brand intent with category pages, service areas, and inquiry paths.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/917383095063" className="rounded bg-[#00a896] px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                Request {brand.name} Quote
              </a>
              <a href="/contact" className="rounded border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                Send Inquiry
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_320px]">
            <article className="prose prose-slate max-w-none">
              <h2>{brand.name} products for industrial buyers</h2>
              <p>
                {brand.name} is commonly requested by maintenance engineers, panel builders, OEM teams, and project buyers who
                need dependable industrial electrical and automation products. JK Electricals helps customers identify suitable
                product families, confirm technical requirements, and request quotations based on model, rating, quantity, and
                application.
              </p>
              <p>
                Typical requirements include {brand.focus.join(", ")} for control panels, machinery upgrades, utility systems,
                electrical distribution, process automation, and factory maintenance. Buyers can combine brand-specific inquiries
                with category-level requirements such as switchgear, industrial cables, distribution boards, PLC systems, VFD
                drives, sensors, controllers, motors, lighting, fans, and panel accessories.
              </p>
              <h2>Applications</h2>
              <p>
                {brand.name} products are used in chemical plants, pharma units, textile facilities, packaging lines, engineering
                workshops, commercial infrastructure, warehouse utilities, process plants, and machine automation projects. For
                urgent replacement or planned procurement, customers should share photos, existing model codes, electrical ratings,
                and load/application information to speed up matching.
              </p>
            </article>
            <aside className="self-start rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Related Product Links</h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                {(relatedCategories.length ? relatedCategories : PRODUCT_CATEGORIES.slice(0, 5)).map((category) => (
                  <Link key={category.slug} href={`/products/${category.slug}`}>{category.name}</Link>
                ))}
                <Link href="/electrical-supplier-vapi">Electrical Supplier Vapi</Link>
                <Link href="/contact">Contact JK Electricals</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Areas Served for {brand.name}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_LOCATIONS.map((location) => (
                <Link key={location.slug} href={`/electrical-supplier-${location.slug}`} className="rounded border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                  {location.name}
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
