import { COMPANY_INFO } from "@/const";
import { SERVICE_LOCATIONS } from "@/lib/seoContent";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import Logo from "../assets/logo.png";
import dapLogo from "../assets/dap.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#298799] via-[#011431] to-[#000310]" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#00a896]/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="container relative z-10 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-tight">
                 <img
                      src={Logo}
                      alt="JK ELECTRICALS"
                      className="h-10 w-auto animate-pulse"
style={{
  filter:
    "drop-shadow(0 0 4px #00e5ff) drop-shadow(0 0 12px #00e5ff) drop-shadow(0 0 24px #0099ff)",
}}
                    />
                                      
                </span>
                <span className="text-2xl font-bold tracking-[0.22em] text-[#00ffe5]">
                  ELECTRICALS
                </span>
              </div>

              <div className="mt-2 h-1 w-16 rounded-full bg-[#00a896]" />
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Authorized distributor of industrial electrical goods. Powering
              industrial excellence with genuine parts and expert support.
            </p>

            <p className="inline-flex rounded-full border border-[#00a896]/30 bg-[#00a896]/10 px-4 py-2 text-xs font-semibold text-[#00e0c0]">
              GSTIN: {COMPANY_INFO.gstin}
            </p>

            <a
              href={COMPANY_INFO.profiles.indiamart}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-all hover:text-[#00a896]"
            >
              IndiaMART Profile
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#00a896]">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Blog", href: "/blog" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-white/70 transition-all hover:text-[#00a896]"
                  >
                    {item.label}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#00a896]">
              Service Areas
            </h4>

            <ul className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              {SERVICE_LOCATIONS.slice(0, 10).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/electrical-supplier-${area.slug}`}
                    className="group inline-flex items-center gap-2 text-white/70 transition-all hover:text-[#00a896]"
                  >
                    {area.name}
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-black uppercase tracking-[0.2em] text-[#00a896]">
              Contact
            </h4>

            <div className="space-y-4 text-sm">
              <a
                href={`tel:${COMPANY_INFO.contact.primary}`}
                className="flex items-center gap-3 text-white/70 transition-all hover:text-[#00a896]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Phone size={15} />
                </span>
                {COMPANY_INFO.contact.primary}
              </a>

              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-white/70 transition-all hover:text-[#00a896]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Mail size={15} />
                </span>
                {COMPANY_INFO.contact.email}
              </a>

              <div className="flex items-start gap-3 text-white/70">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 mt-1 flex-shrink-0">
                  <MapPin size={15} />
                </span>
                <span className="leading-relaxed">
                  {COMPANY_INFO.address.street},<br />
                  {COMPANY_INFO.address.area},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-[#00a896]/40 to-transparent" />

  
        {/* Bottom */}
{/* Bottom */}
<div className="flex flex-col items-center justify-between gap-5 md:flex-row">
  <p className="text-center text-sm leading-5 text-white/55 md:text-left">
    &copy; {currentYear} JK Electricals. All rights reserved. |
    Authorized Distributor of Industrial Electrical Goods
  </p>

  <div className="flex items-center gap-2.5 opacity-80 transition-opacity hover:opacity-100">
    <img
      src={dapLogo}
      alt="DAP Tech Solutions"
      className="h-7 w-auto flex-shrink-0"
    />

    <div className="text-center leading-tight md:text-right">
      <p className="text-[11px] text-white/45">
        Website by{" "}
        <a
          href="https://thedap.live"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-red-400 transition-colors hover:text-[#a80000]"
        >
          DAP Tech Solutions
        </a>
      </p>

      <p className="mt-0.5 text-[11px] text-white/35">
        Deep Parmar{" "}
        <a
          href="https://wa.me/919725362234"
          target="_blank"
          rel="noopener noreferrer"
          className="font-light text-white transition-colors hover:text-[#0030a8]"
        >
          +91 9725362234
        </a>
      </p>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}
