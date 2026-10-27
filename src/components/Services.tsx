import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { READING_SERVICES, getWhatsAppUrl } from "../config";

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#280833] text-[#FFF8E9] relative overflow-hidden">
      
      {/* Background ambient starry glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#DFB865_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#4A174F]/30 via-[#C49A45]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Dash Line Eyebrow matching Reference */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-celestial font-semibold tracking-widest text-[#DFB865] uppercase">
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
            <span>TAROT READING SERVICES</span>
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFDF9] tracking-tight">
            Guidance for What Matters to You
          </h2>

          <p className="text-base sm:text-lg text-[#FFF8E9]/80 font-normal leading-relaxed">
            Explore the areas of life where a little clarity and reflection can help you move forward.
          </p>
        </div>

        {/* 4 Cards Grid - 2x2 Layout matching Design Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {READING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FFFDF9] text-[#351044] rounded-3xl p-8 sm:p-10 border border-[#C49A45]/30 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
            >
              {/* Giant Faint Numeral in Top Right matching Reference */}
              <span className="absolute top-6 right-8 font-heading text-5xl sm:text-6xl font-light text-[#C49A45]/30 select-none group-hover:text-[#C49A45]/50 transition-colors">
                {service.number}
              </span>

              <div className="space-y-6">
                
                {/* Visual Thumbnail of Generated Image */}
                <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-[#C49A45]/30 shadow-sm relative bg-[#351044]">
                  <picture>
                    <source srcSet={service.image} type="image/webp" />
                    <img
                      src={service.image.replace('.webp', '.jpg')}
                      alt={service.title}
                      className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={480}
                      height={260}
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-[#351044]/80 backdrop-blur-xs text-[#FFF8E9] px-3 py-1 rounded-full text-[11px] font-celestial tracking-wider uppercase border border-[#C49A45]/40">
                    {service.badge}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#351044] group-hover:text-[#4A174F] transition-colors leading-snug pr-12">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm sm:text-base text-[#351044]/80 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              {/* Action Buttons matching Reference */}
              <div className="pt-8 mt-6 border-t border-[#C49A45]/15 space-y-3">
                <a
                  href={getWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#351044] text-[#FFF8E9] hover:bg-[#4A174F] text-sm font-semibold tracking-wide border border-[#C49A45]/50 transition-all shadow-sm hover:shadow-md group/btn"
                >
                  <MessageCircle className="w-4 h-4 text-[#C49A45]" />
                  <span>Book a {service.badge.toLowerCase()} reading</span>
                  <ArrowRight className="w-4 h-4 text-[#C49A45] group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <div>
                  <a
                    href="#find-plan"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.getElementById("find-plan");
                      if (target) {
                        const offset = target.getBoundingClientRect().top + window.pageYOffset - 85;
                        window.scrollTo({ top: offset, behavior: "smooth" });
                        window.history.pushState(null, "", "#find-plan");
                      }
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4A174F] hover:text-[#C49A45] transition-colors cursor-pointer"
                  >
                    <span>Find the right session length for this reading</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#FFF8E9]/75 font-normal">
            Every reading is private, personal, and conducted one-on-one with Nithraa over WhatsApp.
          </p>
        </div>

      </div>
    </section>
  );
};
