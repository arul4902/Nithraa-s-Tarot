import { useState } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";


import { getWhatsAppUrl } from "../config";

export const RecommendationQuiz: React.FC = () => {
  const [topicSelection, setTopicSelection] = useState<number>(1); // 0: 1 topic, 1: 2-3 topics, 2: >3 topics
  const [depthSelection, setDepthSelection] = useState<number>(0); // 0: detailed, 1: balanced, 2: quick

  // Recommendation logic
  const getRecommendation = () => {
    if (topicSelection === 0 && depthSelection === 2) {
      return {
        duration: "30 MINUTES",
        name: "Precise Pathway",
        price: "₹900",
        reason: "You have one clear question and prefer a focused, straightforward overview.",
        whatsappMsg: "Hi Nithraa! I took your website recommendation quiz and '30-Minute Precise Pathway' was recommended for my focus. Could you please share available slots?",
      };
    } else if (topicSelection === 2 || depthSelection === 0) {
      return {
        duration: "90 MINUTES",
        name: "Holistic Guidance",
        price: "₹2,700",
        reason: "You have multiple life areas to explore and appreciate in-depth guidance with room for framing questions and remedies.",
        whatsappMsg: "Hi Nithraa! I took your website recommendation quiz and '90-Minute Holistic Guidance' was recommended for my questions. Could you please share available slots?",
      };
    } else {
      return {
        duration: "60 MINUTES",
        name: "Deep Dive (Most Popular)",
        price: "₹1,800",
        reason: "The perfect balance for 2 to 3 topics with thorough root-cause exploration and actionable takeaways.",
        whatsappMsg: "Hi Nithraa! I took your website recommendation quiz and '60-Minute Deep Dive' was recommended for my questions. Could you please share available slots?",
      };
    }
  };

  const rec = getRecommendation();

  const q1Options = [
    { id: 0, label: "Just 1 Topic (e.g., a specific career choice or relationship question)" },
    { id: 1, label: "2 to 3 Topics (e.g., career direction + love or personal transition)" },
    { id: 2, label: "More Than 3 Topics (a complete 360° overview of my current life path)" },
  ];

  const q2Options = [
    { id: 0, label: "I like detailed answers and need help with framing questions as well" },
    { id: 1, label: "I like details when required but not every time" },
    { id: 2, label: "I like a quick overview with little to no details" },
  ];

  return (
    <section
      id="find-plan"
      className="py-20 lg:py-28 bg-[#FFF8E9]/60 relative border-b border-[#C49A45]/20 scroll-mt-24 lg:scroll-mt-28"
    >
      {/* Anchor for recommendation hashtag as well */}
      <div id="recommendation" className="absolute -top-28 left-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Dash Eyebrow matching Reference */}
        <div className="text-center space-y-4 mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-3 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
            <span>RECOMMENDATION</span>
            <span className="w-8 h-[1px] bg-[#C49A45]/60" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight">
            Find the right plan for yourself
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/75 font-normal leading-relaxed max-w-xl mx-auto">
            Two questions, fifteen seconds. We’ll point you to the right session length and format.
          </p>
        </div>

        {/* Quiz Container Card matching Reference Screenshot 2 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#C49A45]/30 shadow-lg space-y-8">
          
          {/* Question 1 */}
          <div className="space-y-4">
            <div className="text-xs font-celestial font-semibold tracking-widest uppercase text-[#C49A45]">
              QUESTION 1
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#351044]">
              How many area/s of your life do you need guidance in?
            </h3>

            <div className="space-y-2.5">
              {q1Options.map((opt) => {
                const isSelected = topicSelection === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setTopicSelection(opt.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF8E9] border-[#C49A45] shadow-xs text-[#351044]"
                        : "bg-white border-[#C49A45]/20 hover:border-[#C49A45]/50 text-[#351044]/85"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? "border-[#4A174F] bg-[#4A174F] text-white"
                          : "border-[#C49A45]/50 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm sm:text-base font-normal">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question 2 */}
          <div className="space-y-4 pt-4 border-t border-[#C49A45]/15">
            <div className="text-xs font-celestial font-semibold tracking-widest uppercase text-[#C49A45]">
              QUESTION 2
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#351044]">
              What kind of guidance works for you?
            </h3>

            <div className="space-y-2.5">
              {q2Options.map((opt) => {
                const isSelected = depthSelection === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDepthSelection(opt.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl border transition-all duration-200 flex items-center gap-3.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#FFF8E9] border-[#C49A45] shadow-xs text-[#351044]"
                        : "bg-white border-[#C49A45]/20 hover:border-[#C49A45]/50 text-[#351044]/85"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected
                          ? "border-[#4A174F] bg-[#4A174F] text-white"
                          : "border-[#C49A45]/50 bg-white"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm sm:text-base font-normal">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Result Banner */}
          <div className="pt-6 border-t border-[#C49A45]/20">
            <div className="rounded-2xl bg-gradient-to-br from-[#351044] to-[#4A174F] text-[#FFF8E9] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#C49A45]/50">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-celestial uppercase tracking-wider text-[#DFB865]">
                  <Sparkles className="w-3.5 h-3.5 text-[#DFB865]" />
                  <span>Recommended for you</span>
                </div>
                <h4 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {rec.duration} — {rec.name} ({rec.price})
                </h4>
                <p className="text-xs sm:text-sm text-[#FFF8E9]/80 font-normal max-w-lg">
                  {rec.reason}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(rec.whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C49A45] to-[#DFB865] text-[#351044] font-bold text-sm hover:brightness-105 shadow-md transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-[#351044]" />
                <span>Book This Option</span>
                <ArrowRight className="w-4 h-4 text-[#351044] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
