import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "../config";

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once scrolled past hero
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick WhatsApp Booking"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-in fade-in slide-in-from-bottom duration-300"
    >
      {/* Tooltip prompt (can be closed) */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FFFDF9] text-[#351044] px-3.5 py-2 rounded-xl border border-[#C49A45]/40 shadow-lg text-xs font-medium">
          <span>Book a reading with Nithraa</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#351044]/50 hover:text-[#351044] p-0.5 rounded-full"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppUrl("Hi Nithraa! I’m visiting your website and would like to enquire about a personal tarot reading.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nithraa on WhatsApp"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.5)] hover:scale-108 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </aside>
  );
};
