import { ArrowRight, Sparkles } from "lucide-react";

import { getWhatsAppUrl } from "../config";

export const Hero: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#FFFCF6]"
    >
      {/* Subtle ambient celestial background light */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#4A174F]/5 via-[#C49A45]/8 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct Design Reference Translation */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Pill Eyebrow Tag matching Reference */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8E9] border border-[#C49A45]/35 text-[#351044] text-xs font-medium tracking-wide shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C49A45]" />
              <span className="font-sans font-semibold tracking-wider uppercase text-[11px] text-[#4A174F]">
                Personal &amp; Intuitive Guidance
              </span>
            </div>

            {/* Editorial Serif Headline with Italic emphasis */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold text-[#351044] tracking-tight leading-[1.08] max-w-2xl">
              Honest tarot readings for life’s <span className="italic font-normal text-[#C49A45]">real</span> questions.
            </h1>

            {/* Warm, Grounded Personal Introductory Copy */}
            <p className="text-base sm:text-lg text-[#351044]/80 max-w-xl font-normal leading-relaxed">
              Hi, I’m Nithraa. I offer private, intuitive tarot readings for people navigating real crossroads — in love, career, or life. No scary predictions, no judgment, and no pressure. Just a clear, confidential space to pause and reconnect with yourself.
            </p>

            {/* Dual CTAs matching Reference Button Language */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href={getWhatsAppUrl("Hi Nithraa! I’d like to book a personal tarot reading session. Could you please share the available options?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#351044] text-[#FFF8E9] font-medium text-base border border-[#C49A45]/50 shadow-md hover:bg-[#4A174F] hover:shadow-lg hover:border-[#C49A45] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
              >
                <span>Book Your Tarot Session</span>
                <ArrowRight className="w-4 h-4 text-[#C49A45] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={handleScrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#351044] font-medium text-base border border-[#C49A45]/40 shadow-2xs hover:bg-[#FFF8E9] hover:border-[#C49A45] transition-all duration-300"
              >
                <span>Explore Readings</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C49A45]/70" />
              </a>
            </div>

            {/* Trust Line */}
            <div className="pt-2 sm:pt-4 border-t border-[#C49A45]/20 w-full max-w-xl">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-[#351044]/75 font-medium">
                <span>Personal guidance</span>
                <span className="text-[#C49A45]">•</span>
                <span>Confidential one-on-one</span>
                <span className="text-[#C49A45]">•</span>
                <span>Online via WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Right Column: Reference-Inspired Tarot Card Composition & Authentic Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Outer decorative soft border */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#C49A45]/25 bg-gradient-to-br from-[#FFF8E9]/60 to-transparent -rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Cinematic Image Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C49A45]/40 shadow-[0_20px_45px_-10px_rgba(53,16,68,0.18)] bg-[#351044] group">
                <picture>
                  <source srcSet="/assets/tarot-hero.webp" type="image/webp" />
                  <img
                    src="/assets/tarot-hero.jpg"
                    alt="Luxury tarot reading setup with fanned gold-edged cards, velvet cloth, lotus candle, and natural crystals"
                    className="w-full h-auto object-cover transform duration-700 group-hover:scale-102"
                    loading="eager"
                    width={640}
                    height={480}
                  />
                </picture>

                {/* Subtle vignette gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#351044]/90 via-[#351044]/40 to-transparent pointer-events-none" />

                {/* Floating Bottom Card Label with authentic Nithraa badge */}
                <div className="absolute bottom-4 inset-x-4 sm:inset-x-6 p-3.5 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C49A45]/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-[#C49A45]/50 shrink-0">
                      <img
                        src="/assets/nithraa_hero.jpg"
                        alt="Nithraa"
                        className="w-full h-full object-cover object-top"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm sm:text-base font-bold text-[#351044] leading-tight">
                        Nithraa
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#351044]/70">
                        Intuitive Soul &amp; Tarot Guide
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-celestial font-semibold tracking-wider text-[#C49A45] bg-[#FFF8E9] px-2.5 py-1 rounded-md border border-[#C49A45]/30">
                    1-on-1 Sessions
                  </span>
                </div>
              </div>

              {/* Floating Top Tagline Badge */}
              <div className="absolute -top-3.5 -left-3 sm:-left-5 bg-[#351044] text-[#FFF8E9] px-4 py-2 rounded-full border border-[#C49A45] shadow-md flex items-center gap-2 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <Sparkles className="w-3.5 h-3.5 text-[#C49A45]" />
                <span className="font-heading text-xs sm:text-sm font-semibold tracking-wide italic">
                  “Heal within, Rise beyond”
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
