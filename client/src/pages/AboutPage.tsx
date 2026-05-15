import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | JK Electricals - Industrial Distributor in Vapi";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-[#000080] py-20 text-white">
          <div className="container text-center">
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">
              Legacy of <span className="text-[#00a896]">Reliability</span>
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              JK Electricals has been the backbone of industrial electrical distribution in Vapi, Gujarat for over a decade.
            </p>
          </div>
        </div>
        
        <About />
        
        <section className="section-padding bg-[#f8fafc]">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[#000080] mb-6">Our Mission & Vision</h2>
                <p className="text-lg text-[#475569] mb-4">
                  Our mission is to empower industries with high-quality electrical components that ensure safety, efficiency, and zero downtime. We strive to be the most trusted name in electrical distribution across Gujarat.
                </p>
                <p className="text-lg text-[#475569]">
                  We envision a future where every industrial unit has access to genuine, world-class electrical technology, supported by local expertise and immediate availability.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm border border-[#cbd5e1]">
                <h3 className="text-2xl font-bold text-[#000080] mb-4 italic">"Quality is not an act, it is a habit."</h3>
                <p className="text-[#475569]">
                  At JK Electricals, we live by this principle. Every product that leaves our warehouse in Vapi GIDC is thoroughly checked for authenticity and quality standards.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
