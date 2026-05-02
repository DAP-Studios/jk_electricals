import { PARTNER_BRANDS } from "@/const";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#000080] mb-4">
            Why Choose <span className="text-[#00a896]">JK Electricals</span>
          </h2>
          <p className="text-lg text-[#475569]">
            With years of expertise in industrial electrical distribution, we deliver reliability, quality, and service excellence.
          </p>
        </div>

        {/* Messaging Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Zero Downtime",
              description: "Solving the customer's biggest pain point with reliable, immediate solutions and fast dispatch.",
              icon: "⏱️",
            },
            {
              title: "Ready Stock",
              description: "Local inventory in Vapi for fast dispatch and immediate availability when you need it most.",
              icon: "📦",
            },
            {
              title: "Genuine Parts",
              description: "Authorized distributors of global brands ensuring authenticity, quality, and warranty support.",
              icon: "✓",
            },
          ].map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-8 bg-[#f8fafc] rounded-lg border border-[#cbd5e1] hover:border-[#00a896] transition-all duration-300 hover:shadow-lg stagger-1 animate-slide-up"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-[#000080] mb-3">{pillar.title}</h3>
              <p className="text-[#475569] leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div className="animate-slide-left">
            <h3 className="text-3xl font-bold text-[#000080] mb-6">Trusted Industrial Partner</h3>
            <p className="text-lg text-[#475569] mb-4 leading-relaxed">
              JK Electricals is your one-stop solution for all industrial electrical requirements. Based in Vapi, Gujarat, we serve industries across sectors with premium products from world-renowned manufacturers.
            </p>
            <p className="text-lg text-[#475569] mb-6 leading-relaxed">
              Our commitment to quality, authenticity, and customer service has made us a trusted partner for businesses seeking reliable electrical solutions without compromise.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#00a896] font-bold text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-[#000080]">Authorized Distributor</p>
                  <p className="text-sm text-[#475569]">Official partner of leading global brands</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00a896] font-bold text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-[#000080]">Expert Support</p>
                  <p className="text-sm text-[#475569]">Technical guidance and after-sales service</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#00a896] font-bold text-xl mt-1">✓</span>
                <div>
                  <p className="font-semibold text-[#000080]">Competitive Pricing</p>
                  <p className="text-sm text-[#475569]">Best value without compromising quality</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-right">
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#f0f4f8] p-8 rounded-lg border border-[#cbd5e1]">
              <h4 className="text-2xl font-bold text-[#000080] mb-8">Global Partnerships</h4>
              <div className="grid grid-cols-2 gap-4">
                {PARTNER_BRANDS.map((brand, idx) => (
                  <div
                    key={brand}
                    className="p-4 bg-white rounded-lg border border-[#cbd5e1] text-center hover:border-[#00a896] transition-all duration-300 hover:shadow-md stagger-1 animate-scale-in"
                    style={{ animationDelay: `${(idx % 4) * 0.1}s` }}
                  >
                    <p className="font-bold text-[#000080] text-sm">{brand}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12 bg-[#000080] text-white rounded-lg">
          {[
            { number: "12+", label: "Product Categories" },
            { number: "12", label: "Global Brand Partners" },
            { number: "24/7", label: "Customer Support" },
          ].map((stat, idx) => (
            <div
              key={stat.label}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              <p className="text-4xl md:text-5xl font-black mb-2">{stat.number}</p>
              <p className="text-lg opacity-90">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
