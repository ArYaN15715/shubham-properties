import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "GIFT City Guide", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#2B0A4D] border-b border-[#F4B400]/20 shadow-elevated"
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-start gap-0 group"
          aria-label="Shubham Properties - back to top"
        >
          <span className="font-display font-extrabold text-[#F4B400] text-base sm:text-lg leading-tight tracking-tight">
            शुभम् PROPERTIES
          </span>
          <span className="text-[#B0B0B0] text-[10px] sm:text-xs tracking-widest uppercase font-body">
            BUY · SELL · RENT
          </span>
        </button>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-body text-white/80 hover:text-[#FFD54F] transition-colors duration-200"
              data-ocid={`navbar.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="btn-cta text-sm py-2 px-5"
            data-ocid="navbar.get_deals.button"
          >
            Get Best Deals
          </button>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-white p-2 rounded-md"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          data-ocid="navbar.menu_toggle.button"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#2B0A4D] border-t border-[#F4B400]/20 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => {
                scrollTo(link.href);
                setMenuOpen(false);
              }}
              className="text-left text-base font-body text-white/80 hover:text-[#FFD54F] py-2 border-b border-white/10 last:border-0"
              data-ocid={`navbar.mobile.${link.label.toLowerCase().replace(/ /g, "_")}.link`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => {
              scrollTo("#contact");
              setMenuOpen(false);
            }}
            className="btn-cta text-sm mt-2"
            data-ocid="navbar.mobile.get_deals.button"
          >
            Get Best Deals
          </button>
        </div>
      )}
    </header>
  );
}
