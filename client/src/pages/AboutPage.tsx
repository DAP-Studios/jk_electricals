import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import { COMPANY_INFO } from "@/const";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | JK Electricals - Industrial Distributor in Vapi";
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="About JK Electricals Vapi | Industrial Distribution Experts"
        description="Learn about JK Electricals, an authorized industrial electrical distributor in Vapi serving GIDC and nearby industrial hubs with genuine components and fast support."
        path="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About JK Electricals Vapi",
          url: `${SITE_URL}/about`,
          description: SITE_DESCRIPTION,
          about: {
            "@type": "LocalBusiness",
            name: COMPANY_INFO.name,
            url: SITE_URL,
          },
        }}
      />
      <Header />
      <main className="pt-20">
        <Hero
          title={<><span>Legacy of</span> <br /> <span className="text-[#00a896]">Reliability</span></>}
          subtitle="Explore the journey of JK Electricals, the company story, and the owner who leads the business in Vapi, Gujarat."
          bgClass="bg-[#000080]"
          bgImage={null}
          align="left"
          hideButtons={true}
        />

        <About variant="page" />
      </main>
      <Footer />
    </div>
  );
}
