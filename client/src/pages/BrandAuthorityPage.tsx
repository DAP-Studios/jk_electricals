import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { PRODUCT_CATEGORIES } from "@/const";
import { getBrandBySlug, SERVICE_LOCATIONS } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  brandRelationshipSchema,
  faqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
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
  const title = `${brand.name} Dealer, Distributor & Supplier in Vapi | JK Electricals`;
  const description = `Request ${brand.name} products from JK Electricals Vapi for authorized dealer, distributor, supplier, stockist, reseller, OEM, bulk, maintenance, and project procurement needs.`;
  const relatedCategories = PRODUCT_CATEGORIES.filter((category) =>
    category.brands.some((item) => item.toLowerCase().includes(brand.name.toLowerCase().split(" ")[0].toLowerCase())) ||
    brand.focus.some((focus) => category.description.toLowerCase().includes(focus.split(" ")[0].toLowerCase())),
  ).slice(0, 4);
  const faqs = [
    {
      question: `Where can I buy ${brand.name} products in Vapi?`,
      answer: `Industrial buyers can contact JK Electricals Vapi for ${brand.name} product inquiries, including ${brand.focus.join(", ")} for factories, panel builders, OEMs, contractors, and maintenance teams.`,
    },
    {
      question: `Is JK Electricals a ${brand.name} dealer, distributor, supplier, stockist, or reseller?`,
      answer: `JK Electricals supports commercial procurement inquiries for ${brand.name} products as an industrial electrical and automation supplier. Buyers should confirm model, rating, quantity, application, and availability before ordering.`,
    },
    {
      question: `Can I request ${brand.name} products for Daman, Silvassa, Valsad, or South Gujarat?`,
      answer: `Yes. JK Electricals serves Vapi, GIDC Vapi, Daman, Silvassa, Valsad, Umbergaon, Sarigam, Pardi, and nearby South Gujarat industrial regions.`,
    },
    {
      question: `What details help JK Electricals quote ${brand.name} products faster?`,
      answer: "Share the product name, model number, electrical rating, quantity, panel or machine application, preferred delivery timeline, and photos of existing equipment if this is a replacement.",
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
          imageObjectSchema(`${brand.name} industrial products supplied by JK Electricals Vapi`),
          brandRelationshipSchema(brand.name, brand.slug, brand.focus),
          productSchema(`${brand.name} industrial electrical products`, description, pagePath, [brand.name]),
          internalLinkGraphSchema(),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Brands", path: "/brands" },
            { name: brand.name, path: pagePath },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Industrial Brand Supply</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              {brand.name} Dealer, Distributor & Supplier in Vapi
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              JK Electricals supports industrial buyers searching for {brand.name} products in Vapi, including {brand.focus.join(", ")}. The page connects brand requirements with related categories, nearby service areas, and practical inquiry paths for genuine product sourcing.
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
                {brand.name} is commonly requested by maintenance engineers, panel builders, OEM teams, contractors, and project
                buyers who need dependable industrial electrical and automation products. JK Electricals helps customers identify
                suitable product families, confirm technical requirements, and request quotations based on model, rating,
                quantity, brand preference, and application.
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
              <h3>Commercial procurement support</h3>
              <p>
                Buyers searching for a {brand.name} dealer, distributor, supplier, stockist, reseller, OEM supplier, bulk
                supplier, or trusted industrial supplier can use this page to reach the right quotation path. JK Electricals
                focuses on original products, genuine products, industrial spare parts, electrical control components, automation
                components, and factory-ready electrical equipment for Vapi and nearby industrial regions.
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
