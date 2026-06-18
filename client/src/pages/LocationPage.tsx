import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { PRODUCT_CATEGORIES } from "@/const";
import { getLocationBySlug, SERVICE_LOCATIONS } from "@/lib/seoContent";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  localServiceSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/seo";

export default function LocationPage() {
  const [path] = useLocation();
  const slug = path.replace("/electrical-supplier-", "");
  const location = getLocationBySlug(slug);
  const pagePath = `/electrical-supplier-${location.slug}`;
  const title = `Industrial Electrical Supplier in ${location.name} | JK Electricals`;
  const description = `JK Electricals supplies switchgear, PLC, VFD, sensors, process controllers, cables, motors, and industrial automation products for ${location.name} manufacturers.`;
  const faqs = [
    {
      question: `Does JK Electricals supply industrial electrical products in ${location.name}?`,
      answer: `Yes. JK Electricals supports ${location.name} buyers with industrial cables, switchgear, automation systems, process controllers, sensors, motors, lighting, fans, heaters, and electrical measurement products.`,
    },
    {
      question: `Can I request PLC, VFD, and sensor quotations for ${location.name}?`,
      answer: `Yes. Procurement, maintenance, and project teams can request quotations for PLCs, VFDs, HMIs, SCADA products, sensors, panel accessories, and switchgear based on brand and technical requirement.`,
    },
    {
      question: `Which nearby areas are served from JK Electricals Vapi?`,
      answer: `JK Electricals serves ${location.name} and nearby industrial areas including ${location.nearby.join(", ")}.`,
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
          localServiceSchema(location.name, pagePath, description),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: `Electrical Supplier ${location.name}`, path: pagePath },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Local Industrial Supply</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Industrial Electrical & Automation Supplier in {location.name}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              JK Electricals helps {location.name} factories, contractors, panel builders, and maintenance teams source genuine
              switchgear, PLC and VFD automation products, industrial sensors, process controllers, cables, motors, lighting,
              distribution boards, and panel accessories from trusted brands.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+917383095063" className="rounded bg-[#00a896] px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                Call Now
              </a>
              <a href="https://wa.me/917383095063" className="rounded border border-white/30 px-6 py-3 text-sm font-black uppercase tracking-widest text-white">
                WhatsApp Quote
              </a>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <article className="prose prose-slate max-w-none">
              <h2>Electrical procurement support for {location.name} industries</h2>
              <p>
                Industrial buyers in {location.name} usually need more than a counter sale. Maintenance engineers need reliable
                replacement parts, project teams need technical matching against BOQs, and purchase teams need quick clarity on
                brand availability. JK Electricals positions the supply process around those needs, helping customers compare
                switchgear ratings, automation compatibility, sensor types, cable categories, enclosure requirements, and control
                panel accessories before procurement begins.
              </p>
              <p>
                The product mix is built for {location.industries.join(", ")} operations where downtime, safety, and genuine
                material quality matter. Customers can request Siemens, Schneider, L&T, ABB, Delta, Mitsubishi, Omron, Autonics,
                Selec, Multispan, Polycab, RR Kabel, KEI, Legrand, Philips, Havells, Wipro, Crompton, and other industrial-grade
                product options depending on the application.
              </p>
              <h2>Products commonly requested from {location.name}</h2>
              <p>
                Common inquiries include MCB, MCCB, RCCB, MPCB, contactors, relays, SMPS units, fuses, capacitors, PLC systems,
                HMI interfaces, VFD drives, process indicators, PID temperature controllers, proximity sensors, photoelectric
                sensors, thermocouples, armoured cables, multi-core cables, energy meters, current transformers, highbay lights,
                heavy duty motors, industrial fans, and heaters.
              </p>
            </article>
            <aside className="self-start rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-black uppercase tracking-tight text-slate-900">Internal Links</h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold">
                <Link href="/products/automation-systems">Automation Systems</Link>
                <Link href="/products/switchgear">Switchgear Supplier</Link>
                <Link href="/products/industrial-sensors">Industrial Sensors</Link>
                <Link href="/products/process-controllers">Process Controllers</Link>
                <Link href="/brands/siemens">Siemens Dealer Vapi</Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-slate-50 py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Product Categories for {location.name}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_CATEGORIES.map((category) => (
                <Link key={category.slug} href={`/products/${category.slug}`} className="rounded border border-slate-200 bg-white p-5 transition hover:border-[#00a896]">
                  <h3 className="text-lg font-black text-slate-900">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-900">Local FAQs</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded border border-slate-200 p-5">
                  <h3 className="text-base font-black text-slate-900">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {SERVICE_LOCATIONS.filter((item) => item.slug !== location.slug).slice(0, 5).map((item) => (
                <Link key={item.slug} href={`/electrical-supplier-${item.slug}`} className="rounded border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700">
                  {item.name}
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
