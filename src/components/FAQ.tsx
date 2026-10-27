import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";


import { FAQ_ITEMS, getWhatsAppUrl } from "../config";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#FFF8E9]/40 relative border-t border-[#C49A45]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
            <span className="w-6 h-[1px] bg-[#C49A45]" />
            <span>Common Questions</span>
            <span className="w-6 h-[1px] bg-[#C49A45]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/75 font-normal leading-relaxed max-w-xl mx-auto">
            Everything you need to know before your personal tarot reading.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions Accordion">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C49A45]/50 shadow-md ring-1 ring-[#C49A45]/20"
                    : "bg-white/80 border-[#C49A45]/25 hover:border-[#C49A45]/40 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C49A45] cursor-pointer"
                >
                  <span className="font-heading text-lg sm:text-xl font-bold text-[#351044] pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#C49A45]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#351044] text-[#FFF8E9] rotate-180 border-[#351044]" : "bg-[#FFF8E9] text-[#C49A45]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#351044]/80 leading-relaxed font-normal border-t border-[#C49A45]/15"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Helpful WhatsApp prompt if visitors have additional questions */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-[#C49A45]/25 shadow-xs">
          <p className="text-sm text-[#351044]/80">
            Have a question that wasn’t answered here?{" "}
            <a
              href={getWhatsAppUrl("Hi Nithraa! I have a question about tarot readings that wasn't covered on the website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#4A174F] hover:text-[#C49A45] underline underline-offset-4 decoration-[#C49A45]/50 inline-flex items-center gap-1.5 ml-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#C49A45]" />
              <span>Ask Nithraa directly on WhatsApp</span>
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
