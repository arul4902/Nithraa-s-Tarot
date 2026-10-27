import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../config";

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Readings", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Find Plan", href: "#find-plan" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace("#", "");
      const target = document.getElementById(targetId) || document.querySelector(href);
      if (target) {
        const navHeight = 85;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFCF6]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(53,16,68,0.08)] py-3 border-b border-[#C49A45]/20"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Nithraa's Tarot Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#C49A45]/40 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C49A45]">
              <img
                src="/assets/brand_badge.png"
                alt="Nithraa’s Tarot Emblem"
                className="w-full h-full object-cover"
                width={48}
                height={48}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#351044] leading-none group-hover:text-[#4A174F] transition-colors">
                Nithraa’s Tarot
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-[#C49A45] font-celestial mt-1 font-medium">
                Heal within, Rise beyond
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#351044]/80 hover:text-[#4A174F] tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C49A45] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#351044] text-[#FFF8E9] text-xs sm:text-sm font-medium tracking-wide border border-[#C49A45]/50 shadow-md hover:bg-[#4A174F] hover:shadow-lg hover:border-[#C49A45] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 text-[#C49A45] group-hover:rotate-12 transition-transform duration-300" />
              <span>Book a Reading</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#351044] hover:bg-[#FFF8E9] focus:outline-none focus:ring-2 focus:ring-[#C49A45]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFCF6] border-b border-[#C49A45]/30 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-[#351044] hover:text-[#4A174F] hover:bg-[#FFF8E9] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#C49A45]/20 flex flex-col gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#351044] text-[#FFF8E9] font-medium text-sm border border-[#C49A45]/60 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#C49A45]" />
                <span>Book a Reading on WhatsApp</span>
              </a>
              <p className="text-center text-xs text-[#351044]/60 font-serif italic mt-1">
                Heal within, Rise beyond
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
