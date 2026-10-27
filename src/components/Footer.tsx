import React from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { BRAND_CONFIG, getWhatsAppUrl } from "../config";

export const Footer: React.FC = () => {
  const currentYear = 2026;

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
    <footer className="bg-[#240A2E] text-[#FFF8E9] pt-16 pb-12 border-t border-[#C49A45]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#C49A45]/20">
          
          {/* Brand Info & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C49A45]/50 shadow-sm shrink-0">
                <img
                  src="/assets/brand_badge.png"
                  alt="Nithraa’s Tarot Logo"
                  className="w-full h-full object-cover"
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-tight text-[#FFFDF9] block">
                  Nithraa’s Tarot
                </span>
                <span className="text-xs tracking-widest uppercase text-[#C49A45] font-celestial block">
                  Heal within, Rise beyond
                </span>
              </div>
            </div>

            <p className="text-sm text-[#FFF8E9]/75 max-w-sm leading-relaxed font-normal">
              A personal, welcoming sanctuary for intuitive tarot readings, mindful self-discovery, and grounded spiritual clarity.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#351044] border border-[#C49A45]/40 flex items-center justify-center text-[#C49A45] hover:text-[#FFF8E9] hover:border-[#C49A45] hover:bg-[#4A174F] transition-all"
                aria-label="Visit Nithraa's Tarot on Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#351044] border border-[#C49A45]/40 flex items-center justify-center text-[#C49A45] hover:text-[#FFF8E9] hover:border-[#C49A45] hover:bg-[#4A174F] transition-all"
                aria-label="Connect with Nithraa on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-celestial uppercase tracking-widest text-[#C49A45] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#FFF8E9]/70 hover:text-[#DFB865] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct WhatsApp Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-celestial uppercase tracking-widest text-[#C49A45] font-semibold">
              Personal Enquiry
            </h4>
            <p className="text-sm text-[#FFF8E9]/75 leading-relaxed">
              Sessions are arranged directly via WhatsApp to ensure a warm, personalized booking experience.
            </p>
            <div className="pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFB865] hover:text-[#FFF8E9] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {BRAND_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="pt-8 pb-4 text-xs text-[#FFF8E9]/55 leading-relaxed max-w-4xl mx-auto text-center font-normal">
          <p>
            <span className="font-semibold text-[#FFF8E9]/70">Disclaimer: </span>
            Tarot readings are intended for personal reflection and guidance. They are not a substitute for professional medical, mental health, legal, or financial advice.
          </p>
        </div>

        {/* Copyright & Attribution */}
        <div className="pt-4 text-center text-xs text-[#FFF8E9]/40 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {currentYear} {BRAND_CONFIG.name}. All rights reserved.</span>
          <span className="hidden sm:inline text-[#C49A45]/40">•</span>
          <span>{BRAND_CONFIG.tagline}</span>
        </div>

      </div>
    </footer>
  );
};
