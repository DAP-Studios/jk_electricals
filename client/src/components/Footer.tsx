import { COMPANY_INFO, PARTNER_BRANDS } from "@/const";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000080] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-black">JK</span>
              <span className="text-xs font-bold text-[#00a896] tracking-wider">ELECTRICALS</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Authorized distributor of industrial electrical goods. Powering industrial excellence with genuine parts and expert support.
            </p>
            <p className="text-xs text-[#00a896] font-semibold">GSTIN: {COMPANY_INFO.gstin}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#00a896]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[#00a896]">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.contact.primary}`} className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  {COMPANY_INFO.contact.primary}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span className="opacity-80 text-xs">
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* Brand Partners */}
          <div>
            <h4 className="font-bold mb-4 text-[#00a896]">Our Partners</h4>
            <div className="flex flex-wrap gap-2">
              {PARTNER_BRANDS.slice(0, 6).map((brand) => (
                <span key={brand} className="text-xs px-2 py-1 bg-[#00a896] bg-opacity-20 rounded text-[#00a896]">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#00a896] border-opacity-20 py-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-opacity-80 text-white">
          <p>
            &copy; {currentYear} JK Electricals. All rights reserved. | Authorized Distributor of Industrial Electrical Goods
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
              Privacy Policy
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 hover:text-[#00a896] transition-all">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
