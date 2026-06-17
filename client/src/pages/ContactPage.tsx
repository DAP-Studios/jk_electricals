import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Seo from "@/components/Seo";
import { breadcrumbSchema, localBusinessSchema, routeByPath, webPageSchema, websiteSchema } from "@/lib/seo";
import { useEffect } from "react";

export default function ContactPage() {
  const route = routeByPath("/contact");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title={route.title}
        description={route.description}
        path="/contact"
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema("/contact", route.title, route.description, "ContactPage"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />
      <Header />
      <main className="pt-0">
        <Hero
          title={
            <>
              <span>Get In</span> <br />
              <span className="hero-gradient-text">Touch</span>
            </>
          }
          subtitle="Reach out to JK Electricals for industrial electrical products, bulk quotations, and fast support across Vapi and Gujarat."
          bgClass="bg-gradient-to-br from-[#000080] via-[#003080] to-[#006994]"
          bgImage={null}
          align="left"
          hideButtons={true}
          height="half"
        />

        <Contact hideHeader={true} />

        <section className="py-0 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-[#000080] mb-6">Location Details</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-[#000080] mb-2 uppercase tracking-wide text-sm">Warehouse & Office</h3>
                    <p className="text-[#475569]">
                      Industrial Area, Vapi GIDC,<br />
                      Vapi, Gujarat 396191
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#000080] mb-2 uppercase tracking-wide text-sm">Business Hours</h3>
                    <p className="text-[#475569]">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed (Available for emergencies)
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#000080] mb-2 uppercase tracking-wide text-sm">Service Areas</h3>
                    <p className="text-xs text-[#94a3b8]">
                      Serving GIDC Vapi, Sarigam, Umbergaon, Silvassa, Daman, Valsad, and nearby Gujarat industrial hubs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 h-[400px] rounded-lg overflow-hidden border border-[#cbd5e1]">
                <iframe
                  title="JK Electricals Location - Vapi GIDC"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1234567890!2d72.90000!3d20.37000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzEyLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
