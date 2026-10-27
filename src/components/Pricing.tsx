import React, { useState } from "react";
import { Check, ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { PRICING_TIERS, getWhatsAppUrl } from "../config";

export const Pricing: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<"audio" | "video">("audio");

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#FFFCF6] relative scroll-mt-24 lg:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Dash Eyebrow matching Reference */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
            <span>TAROT READING PRICING</span>
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight">
            Pick what fits. No pressure.
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/75 font-normal leading-relaxed">
            Transparent tarot reading sessions with Nithraa. No hidden costs. No one nudging you toward the expensive option.
          </p>

          {/* Format Toggle Pill matching Reference */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex items-center p-1.5 rounded-full bg-[#FFF8E9] border border-[#C49A45]/30 shadow-2xs">
              <button
                type="button"
                onClick={() => setSelectedFormat("audio")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFormat === "audio"
                    ? "bg-[#351044] text-[#FFF8E9] shadow-xs"
                    : "text-[#351044]/80 hover:text-[#351044]"
                }`}
              >
                Audio Call
              </button>
              <button
                type="button"
                onClick={() => setSelectedFormat("video")}
                className={`px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedFormat === "video"
                    ? "bg-[#351044] text-[#FFF8E9] shadow-xs"
                    : "text-[#351044]/80 hover:text-[#351044]"
                }`}
              >
                Video Call
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid matching Reference Screenshots 3 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 items-stretch pt-6">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "bg-gradient-to-b from-[#351044] to-[#250730] text-[#FFF8E9] shadow-2xl border-2 border-[#C49A45] -translate-y-2 lg:-translate-y-3 z-20"
                    : "bg-[#FFFDF9] text-[#351044] border border-[#C49A45]/30 shadow-lg hover:shadow-xl hover:border-[#C49A45]/60 z-10"
                }`}
              >
                {/* Most Popular Badge Overlapping Top Border matching Reference */}
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C49A45] text-[#351044] px-5 py-1 rounded-full text-xs font-bold tracking-widest uppercase shadow-md font-celestial flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#351044]" />
                    <span>{tier.popularBadge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Duration Header */}
                  <div>
                    <span
                      className={`text-xs font-celestial font-bold tracking-widest uppercase ${
                        isFeatured ? "text-[#DFB865]" : "text-[#C49A45]"
                      }`}
                    >
                      {tier.duration}
                    </span>
                    <h3
                      className={`font-heading text-3xl font-bold tracking-tight mt-1 ${
                        isFeatured ? "text-white" : "text-[#351044]"
                      }`}
                    >
                      {tier.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1.5 ${
                        isFeatured ? "text-[#FFF8E9]/80" : "text-[#351044]/70"
                      }`}
                    >
                      {tier.subtitle}
                    </p>
                  </div>

                  {/* Format Pills */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                        selectedFormat === "audio"
                          ? isFeatured
                            ? "bg-[#C49A45] text-[#351044]"
                            : "bg-[#351044] text-[#FFF8E9]"
                          : isFeatured
                          ? "bg-white/10 text-[#FFF8E9]/70"
                          : "bg-[#FFF8E9] text-[#351044]/70"
                      }`}
                    >
                      Audio
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                        selectedFormat === "video"
                          ? isFeatured
                            ? "bg-[#C49A45] text-[#351044]"
                            : "bg-[#351044] text-[#FFF8E9]"
                          : isFeatured
                          ? "bg-white/10 text-[#FFF8E9]/70"
                          : "bg-[#FFF8E9] text-[#351044]/70"
                      }`}
                    >
                      Video
                    </span>
                  </div>

                  {/* Price Display */}
                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`font-heading text-4xl sm:text-5xl font-extrabold tracking-tight ${
                          isFeatured ? "text-white" : "text-[#351044]"
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span
                        className={`text-xs sm:text-sm ${
                          isFeatured ? "text-[#FFF8E9]/70" : "text-[#351044]/65"
                        }`}
                      >
                        / session
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist matching Reference */}
                  <div
                    className={`pt-5 border-t space-y-3 ${
                      isFeatured ? "border-[#C49A45]/30" : "border-[#C49A45]/20"
                    }`}
                  >
                    {tier.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-1 ${
                            isFeatured ? "text-[#DFB865]" : "text-[#C49A45]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isFeatured ? "text-[#FFF8E9]/90" : "text-[#351044]/80"
                          }`}
                        >
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-8 mt-6">
                  <a
                    href={getWhatsAppUrl(tier.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md group ${
                      isFeatured
                        ? "bg-[#C49A45] text-[#351044] hover:bg-[#DFB865] hover:shadow-lg"
                        : "bg-[#351044] text-[#FFF8E9] hover:bg-[#4A174F]"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassuring note */}
        <div className="mt-14 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-[#FFF8E9] border border-[#C49A45]/30">
          <p className="text-xs sm:text-sm text-[#351044]/80">
            Online sessions are conducted privately over WhatsApp audio or video call. Times are coordinated directly upon booking.
          </p>
        </div>

      </div>
    </section>
  );
};
