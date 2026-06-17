import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Seo from "@/components/Seo";
import Hero from "@/components/Hero";
import { breadcrumbSchema, localBusinessSchema, routeByPath, webPageSchema, websiteSchema } from "@/lib/seo";
import { useEffect } from "react";

export default function AboutPage() {
  const route = routeByPath("/about");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | JK Electricals - Industrial Distributor in Vapi";
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title={route.title}
        description={route.description}
        path="/about"
        schema={[
          localBusinessSchema(),
          websiteSchema(),
          webPageSchema("/about", route.title, route.description, "AboutPage"),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      <Header />
      <main className="pt-0">
        <Hero
          title={<><span>Legacy of</span> <br /> <span className="text-[#00a896]">Reliability</span></>}
          subtitle="Explore the journey of JK Electricals, the company story, and the owner who leads the business in Vapi, Gujarat."
          bgClass="bg-[#000080]"
          bgImage={null}
          align="left"
          hideButtons={true}
          height="half"
        />

        <About variant="page" />
      </main>
      <Footer />
    </div>
  );
}
