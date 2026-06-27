import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { getInquiryLinks } from "@/const";
import { SERVICE_LOCATIONS } from "@/lib/seoContent";
import { getProductPage, getRelatedProducts } from "@/lib/productPages";
import {
  breadcrumbSchema,
  faqSchema,
  imageObjectSchema,
  internalLinkGraphSchema,
  localBusinessSchema,
  productSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

function brandSlug(brand: string) {
  const normalized = brand
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const aliases: Record<string, string> = {
    schneider: "schneider-electric",
    rr: "rr-kabel",
    "lauritz-knudsen": "lauritz-knudsen-lt",
    "premium-industrial-grade": "brands",
    "custom-heavy-duty": "brands",
  };

  return aliases[normalized] ?? normalized;
}

export default function ProductDetailPage() {
  const [path] = useLocation();
  const [, categorySlug, productSlug] = path.match(/^\/products\/([^/]+)\/([^/]+)/) ?? [];
  const product = getProductPage(categorySlug, productSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main-content" className="container py-40">
          <h1 className="text-3xl font-black text-slate-900">Product not found</h1>
          <Link href="/products" className="mt-6 inline-flex rounded bg-[#00a896] px-5 py-3 text-sm font-black uppercase tracking-widest text-white">
            Back to Products
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const pagePath = product.path;
  const title = `${product.name} Supplier, Dealer & Distributor in Vapi | JK Electricals`;
  const description = `Source ${product.name} in Vapi, Daman, Silvassa, Valsad, Navsari, and South Gujarat from JK Electricals for industrial projects, maintenance, panel, OEM, and bulk procurement.`;
  const links = getInquiryLinks(product.name);
  const relatedProducts = getRelatedProducts(product.parentSlug, product.slug);
  const faqs = [
    {
      question: `Where can I buy ${product.name} in Vapi?`,
      answer: `You can contact JK Electricals Vapi for ${product.name} inquiries for factories, panel builders, contractors, OEMs, and maintenance teams in Vapi and nearby industrial areas.`,
    },
    {
      question: `Which brands are available for ${product.name}?`,
      answer: `Commonly requested brands for this product family include ${product.brands.join(", ")}. Availability depends on model, rating, quantity, and stock.`,
    },
    {
      question: `Can JK Electricals supply ${product.name} for Daman, Silvassa, or Valsad?`,
      answer: "Yes. JK Electricals supports industrial product inquiries across Vapi, Daman, Silvassa, Sarigam, Umbergaon, Pardi, Valsad, Navsari, Surat, and South Gujarat.",
    },
    {
      question: `What details are needed for a ${product.name} quote?`,
      answer: "Share the product name, brand preference, model number, rating, quantity, application, panel or machine details, and urgency for faster quotation support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        path={pagePath}
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema(pagePath, title, description, "Product"),
          imageObjectSchema(`${product.name} supplied by JK Electricals Vapi`, product.image, description),
          productSchema(product.name, product.description, pagePath, product.brands),
          internalLinkGraphSchema(),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: product.parentCategory, path: `/products/${product.parentSlug}` },
            { name: product.name, path: pagePath },
          ]),
        ]}
      />
      <Header />

      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">{product.parentCategory}</p>
              <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
                {product.name} Supplier in Vapi
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                {description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded bg-[#00a896] px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                  WhatsApp Quote
                </a>
                <a href={links.email} className="rounded border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                  Email Inquiry
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded border border-white/10 bg-white/5">
              <img src={product.image} alt={`${product.name} dealer and supplier in Vapi`} className="h-full max-h-[460px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1fr_340px]">
            <article className="prose prose-slate max-w-none">
              <h2>{product.name} for industrial buyers</h2>
              <p>{product.description}</p>
              <h2>Applications</h2>
              <p>{product.application}</p>
              <h2>Selection and quotation details</h2>
              <p>
                Buyers should confirm brand preference, electrical rating, model number, panel or machine use, quantity,
                installation environment, and delivery urgency before finalizing {product.name.toLowerCase()}. These details
                help JK Electricals match the product for maintenance, replacement, project, and bulk procurement requirements.
              </p>
              <h3>Key points</h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>

            <aside className="self-start rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Related Brands</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.brands.map((brand) => {
                  const slug = brandSlug(brand);
                  return (
                    <Link key={brand} href={slug === "brands" ? "/brands" : `/brands/${slug}`} className="rounded bg-white px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-700">
                      {brand}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-8 grid gap-3 text-sm font-semibold">
                <Link href={`/products/${product.parentSlug}`}>{product.parentCategory}</Link>
                <Link href="/products">All Products</Link>
                <Link href="/brands">All Brands</Link>
                <Link href="/contact">Contact JK Electricals</Link>
              </div>
            </aside>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="bg-slate-50 py-14 md:py-20">
            <div className="container">
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Related Products</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((item) => (
                  <Link key={item.path} href={item.path} className="rounded border border-slate-200 bg-white p-5 font-bold text-slate-800">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Service Areas</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {SERVICE_LOCATIONS.map((location) => (
                <Link key={location.slug} href={`/electrical-supplier-${location.slug}`} className="rounded border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700">
                  {product.name} in {location.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">FAQs</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded border border-slate-200 bg-white p-5">
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
