import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { BLOG_TOPICS } from "@/lib/seoContent";
import { breadcrumbSchema, defaultPageFaqSchema, imageObjectSchema, itemListSchema, localBusinessSchema, webPageSchema, websiteSchema } from "@/lib/seo";

export default function BlogPage() {
  const title = "Industrial Electrical & Automation Blog Topics | JK Electricals";
  const description =
    "Commercial-intent blog topic roadmap for PLC, VFD, sensors, automation, switchgear, electrical distribution, industrial safety, and maintenance.";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        path="/blog"
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema("/blog", title, description, "CollectionPage"),
          imageObjectSchema("JK Electricals industrial electrical resource center"),
          itemListSchema("Industrial electrical resource topics", BLOG_TOPICS.slice(0, 20)),
          defaultPageFaqSchema("industrial electrical resources"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="bg-[#000613] px-4 pt-32 pb-16 text-white md:pt-40 md:pb-24">
          <div className="container">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a896]">Resource Center</p>
            <h1 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight text-white md:text-6xl">
              Industrial Electrical & Automation Content Hub
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Practical notes for industrial buyers comparing PLC, VFD, sensors, automation, switchgear, electrical
              distribution, safety, maintenance, and procurement decisions.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container">
            <div className="grid gap-4 md:grid-cols-2">
              {BLOG_TOPICS.map((topic, index) => (
                <article key={topic} className="rounded border border-slate-200 p-5">
                  <p className="text-xs font-black uppercase tracking-widest text-[#00a896]">Topic {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-3 text-lg font-black normal-case tracking-tight text-slate-900">{topic}</h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
                    <Link href="/products/automation-systems" className="rounded bg-slate-100 px-3 py-1 text-slate-700">Automation</Link>
                    <Link href="/products/switchgear" className="rounded bg-slate-100 px-3 py-1 text-slate-700">Switchgear</Link>
                    <Link href="/contact" className="rounded bg-slate-100 px-3 py-1 text-slate-700">Quote CTA</Link>
                  </div>
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
