import { Sparkles, Compass, CheckCircle2, MessageCircle } from "lucide-react";

import { getWhatsAppUrl } from "../config";

export const About: React.FC = () => {
  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFF8E9]/50 relative overflow-hidden border-y border-[#C49A45]/20">
      {/* Background celestial watermark / glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-gradient-to-l from-[#E9C5CF]/20 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Brand Photograph of Nithraa with Card Spread */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Outer decorative gold frame */}
              <div
                className="absolute -inset-3 sm:-inset-4 rounded-3xl border border-[#C49A45]/30 bg-gradient-to-tr from-[#FFFDF9] to-[#E9C5CF]/25 rotate-1 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Photograph Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#C49A45]/40 shadow-xl bg-white group">
                <img
                  src="/assets/nithraa_pink_scene.jpg"
                  alt="Nithraa welcoming you to a personal tarot reading with card spread and natural crystals"
                  className="w-full h-auto object-cover transform duration-700 group-hover:scale-102"
                  loading="lazy"
                  width={550}
                  height={650}
                />

                {/* Bottom Overlay Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#FFFCF6]/95 backdrop-blur-sm p-4 rounded-xl border border-[#C49A45]/30 shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFF8E9] border border-[#C49A45]/40 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-[#C49A45]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#351044]">
                        “Trust the Universe...”
                      </p>
                      <p className="text-[11px] text-[#351044]/70 italic">
                        It always guides you to what’s best for you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle celestial detail stamp */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#351044] text-[#FFF8E9] border-2 border-[#C49A45] shadow-lg flex-col items-center justify-center text-center p-2">
                <span className="font-celestial text-[9px] tracking-widest uppercase text-[#C49A45]">Soul</span>
                <span className="font-heading text-xs font-bold leading-none">Guidance</span>
              </div>

            </div>
          </div>

          {/* Right Column: Introduction & Warm Brand Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
              <span className="w-6 h-[1px] bg-[#C49A45]" />
              <span>A Welcoming Sanctuary</span>
            </div>

            {/* Section Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight leading-tight">
              A Little Space for Clarity
            </h2>

            {/* Warm Narrative Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#351044]/80 leading-relaxed font-normal">
              <p>
                Life can bring questions about relationships, career, personal growth, and the direction we want to take. Nithraa’s Tarot offers a welcoming space to pause, reflect, and explore those questions with a fresh perspective.
              </p>
              <p>
                Every reading is approached with care, intuition, and respect for your personal journey. Rather than telling you what must happen, a session provides you with the calm insight and clarity needed to navigate your choices with confidence.
              </p>
            </div>

            {/* Core Values Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#C49A45]/20 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#C49A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#351044]">Empathetic &amp; Warm</h4>
                  <p className="text-xs text-[#351044]/70 mt-0.5">A non-judgmental environment to speak openly.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#C49A45]/20 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#C49A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#351044]">Mindful Reflection</h4>
                  <p className="text-xs text-[#351044]/70 mt-0.5">Focused on understanding your feelings in the now.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#C49A45]/20 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#C49A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#351044]">Complete Discretion</h4>
                  <p className="text-xs text-[#351044]/70 mt-0.5">Your sessions and personal questions remain private.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/80 border border-[#C49A45]/20 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-[#C49A45] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#351044]">Grounded Clarity</h4>
                  <p className="text-xs text-[#351044]/70 mt-0.5">Intuitive insights translated into practical steps.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                onClick={handleScrollToServices}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#351044] text-[#FFF8E9] font-medium text-sm sm:text-base border border-[#C49A45]/50 shadow-md hover:bg-[#4A174F] hover:shadow-lg transition-all duration-300"
              >
                <span>Discover Your Reading</span>
                <Compass className="w-4 h-4 text-[#C49A45]" />
              </a>

              <a
                href={getWhatsAppUrl("Hi Nithraa! I’d like to enquire about your tarot readings and ask a few questions.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A174F] hover:text-[#351044] transition-colors py-2 px-3"
              >
                <MessageCircle className="w-4 h-4 text-[#C49A45]" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
