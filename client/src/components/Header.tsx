import { useState } from "react";
import { Menu, X } from "lucide-react";

/* Header Component
   - Sticky navigation bar with brand logo
   - Minimalist design with navy background
   - Teal accent for active/hover states
   - Smooth animations on scroll
*/

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#cbd5e1] shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black text-[#000080]">JK</span>
              <span className="text-sm font-bold text-[#00a896] tracking-wider">ELECTRICALS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1e293b] font-medium text-sm transition-all duration-300 hover:text-[#00a896] hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#00a896] text-white font-semibold rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#000080] hover:bg-[#f8fafc] rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-[#cbd5e1] animate-slide-up">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-[#1e293b] font-medium hover:bg-[#f8fafc] hover:text-[#00a896] transition-colors stagger-1"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <a
                href="#contact"
                className="block px-4 py-2.5 bg-[#00a896] text-white font-semibold rounded-md text-center transition-all duration-300 hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
