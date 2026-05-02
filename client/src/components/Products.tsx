import { PRODUCT_CATEGORIES, getInquiryLinks } from "@/const";
import { Mail, MessageCircle } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="section-padding bg-[#f8fafc]">
      <div className="container">
        <div className="max-w-2xl mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#000080] mb-4">
            Our <span className="text-[#00a896]">Product Range</span>
          </h2>
          <p className="text-lg text-[#475569]">
            Comprehensive catalog of industrial electrical goods from world-renowned brands. Each category backed by genuine parts and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category, idx) => {
            const inquiryLinks = getInquiryLinks(category.name);
            return (
              <div
                key={category.id}
                className="card-hover bg-white p-6 md:p-8 rounded-lg border border-[#cbd5e1] transition-all duration-300 hover:shadow-xl hover:border-[#00a896] stagger-1 animate-slide-up"
                style={{ animationDelay: `${(idx % 3) * 0.1}s` }}
              >
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-[#000080] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-[#000080] mb-2">BRANDS</p>
                  <div className="flex flex-wrap gap-2">
                    {category.brands.map((brand) => (
                      <span
                        key={brand}
                        className="px-3 py-1 bg-[#f0f4f8] text-[#1e293b] text-xs font-medium rounded border border-[#cbd5e1] hover:border-[#00a896] transition-colors"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[#cbd5e1]">
                  <a
                    href={inquiryLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm"
                  >
                    <MessageCircle size={16} />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                  <a
                    href={inquiryLinks.email}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#00a896] text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm"
                  >
                    <Mail size={16} />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 md:p-12 bg-gradient-to-r from-[#000080] to-[#00a896] rounded-lg text-white text-center animate-slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-lg mb-6 opacity-90">
            Contact our team for bulk orders, custom configurations, or specialized requirements.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-[#000080] font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
