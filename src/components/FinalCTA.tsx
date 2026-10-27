import { MessageCircle } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";

import { BRAND_CONFIG, getWhatsAppUrl } from "../config";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#FFFCF6] via-[#FFF8E9] to-[#FFFDF9] relative overflow-hidden border-t border-[#C49A45]/30">
      
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#4A174F]/8 via-[#C49A45]/12 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Brand Circular Badge */}
        <div className="flex justify-center">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C49A45] shadow-lg p-1 bg-white">
            <img
              src="/assets/brand_badge.png"
              alt="Nithraa’s Tarot Seal"
              className="w-full h-full object-cover rounded-full"
              width={96}
              height={96}
              loading="lazy"
            />
          </div>
        </div>

        {/* Section Heading & Copy */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#351044] tracking-tight leading-tight">
            Your Journey to Clarity Starts Here.
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/80 font-normal leading-relaxed">
            Have a question on your mind? Reach out to Nithraa’s Tarot to enquire about your personal reading.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl("Hi Nithraa! I’d like to book my personal tarot reading. Please share the details and next available options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A174F] to-[#351044] text-[#FFF8E9] font-semibold text-base border border-[#C49A45]/60 shadow-[0_8px_20px_rgba(53,16,68,0.2)] hover:shadow-[0_12px_28px_rgba(53,16,68,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 text-[#C49A45] group-hover:rotate-12 transition-transform duration-300" />
            <span>Book Your Reading on WhatsApp</span>
          </a>

          <a
            href={BRAND_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white text-[#351044] font-medium text-base border border-[#C49A45]/40 shadow-xs hover:bg-[#FFF8E9] hover:border-[#C49A45] transition-all duration-300 group"
          >
            <InstagramIcon className="w-5 h-5 text-[#C49A45] group-hover:scale-110 transition-transform duration-300" />
            <span>Explore Instagram</span>
          </a>
        </div>

        {/* Reassuring trust reminder */}
        <div className="pt-6 border-t border-[#C49A45]/20 max-w-lg mx-auto">
          <p className="text-xs sm:text-sm text-[#351044]/70 font-medium flex items-center justify-center gap-3">
            <span>Personal &amp; Intuitive</span>
            <span className="text-[#C49A45]">•</span>
            <span>Confidential Guidance</span>
            <span className="text-[#C49A45]">•</span>
            <span>Self-Reflection</span>
          </p>
        </div>

      </div>
    </section>
  );
};
