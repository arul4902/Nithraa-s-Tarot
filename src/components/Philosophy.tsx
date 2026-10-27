import React from "react";
import { Sparkles } from "lucide-react";

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#250730] text-[#FFF8E9] relative overflow-hidden">
      
      {/* Background Cinematic Panoramic Atmosphere Image */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-luminosity">
        <picture>
          <source srcSet="/assets/tarot-banner.webp" type="image/webp" />
          <img
            src="/assets/tarot-banner.jpg"
            alt="Atmospheric tarot reading sanctuary with candlelight, amethyst crystals, and celestial charts"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#250730] via-[#280833]/90 to-[#250730]" />
      </div>

      {/* Subtle fine celestial grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#DFB865_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-10">
        
        {/* Restrained Celestial Moon Phases Illustration */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 text-[#C49A45]" aria-hidden="true">
          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C49A45]/60" />
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-celestial tracking-widest text-[#DFB865]">
            <span className="opacity-40">☽</span>
            <span className="opacity-70">☾</span>
            <span className="text-base sm:text-lg text-[#F4E8CD] animate-pulse">✦</span>
            <span className="opacity-70">☽</span>
            <span className="opacity-40">☾</span>
          </div>

          <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C49A45]/60" />
        </div>

        {/* Brand Logo Light Variant */}
        <div className="flex justify-center">
          <img
            src="/assets/logo_light_gold.png"
            alt="Nithraa’s Tarot Symbol"
            className="h-16 sm:h-20 w-auto object-contain opacity-95 drop-shadow-[0_2px_12px_rgba(196,154,69,0.3)]"
            width={120}
            height={80}
            loading="lazy"
          />
        </div>

        {/* Main Brand Quote */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-normal leading-[1.18] text-[#FFFDF9] italic tracking-tight">
            “Not just about the future. <br className="hidden sm:inline" />
            It’s about <span className="text-gold-luminous font-semibold not-italic">understanding yourself</span> in the now.”
          </blockquote>
        </div>

        {/* Supporting Philosophical Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#FFF8E9]/80 font-normal leading-relaxed">
          Tarot can be a tool for reflection, helping you explore perspectives, recognise patterns, and approach decisions with greater self-awareness.
        </p>

        {/* Tagline Badge */}
        <div className="pt-4">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#C49A45]/40 bg-[#351044]/80 backdrop-blur-xs text-[#FFF8E9] shadow-inner">
            <Sparkles className="w-4 h-4 text-[#C49A45]" />
            <span className="font-heading text-sm sm:text-base font-semibold tracking-wider text-[#F4E8CD] italic">
              Heal within, Rise beyond.
            </span>
            <Sparkles className="w-4 h-4 text-[#C49A45]" />
          </div>
        </div>

      </div>
    </section>
  );
};
