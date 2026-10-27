import { MessageCircle, Sparkles, Send, Eye } from "lucide-react";
import { getWhatsAppUrl } from "../config";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Focus",
      description: "Select the area of life you would like to explore—whether it is relationships, career, personal direction, or general clarity.",
      icon: Eye,
    },
    {
      number: "02",
      title: "Connect With Nithraa",
      description: "Send a booking enquiry through WhatsApp to discuss your reading, check current availability, and confirm your slot.",
      icon: Send,
    },
    {
      number: "03",
      title: "Begin Your Reflection",
      description: "Connect for your reading and take time to reflect on the insights shared to move forward with peace and confidence.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#FFFDF9] relative border-b border-[#C49A45]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
            <span className="w-6 h-[1px] bg-[#C49A45]" />
            <span>The Process</span>
            <span className="w-6 h-[1px] bg-[#C49A45]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight">
            Your Reading, Made Simple
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/75 font-normal leading-relaxed">
            Booking your personal tarot session is effortless, transparent, and direct.
          </p>
        </div>

        {/* Three Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Subtle connecting line across cards on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#C49A45]/30 to-transparent -translate-y-8 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-white rounded-2xl p-8 border border-[#C49A45]/25 shadow-sm hover:shadow-md hover:border-[#C49A45]/60 transition-all duration-300 flex flex-col items-center text-center space-y-5 group"
              >
                {/* Step Numeral Badge with Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#FFF8E9] border border-[#C49A45]/40 flex flex-col items-center justify-center group-hover:bg-[#351044] group-hover:border-[#C49A45] transition-colors duration-300 shadow-xs relative">
                  <span className="font-display text-lg font-bold text-[#C49A45] group-hover:text-[#FFF8E9] transition-colors">
                    {step.number}
                  </span>
                  <Icon className="w-3.5 h-3.5 text-[#C49A45] group-hover:text-[#FFF8E9] opacity-75 mt-0.5" />
                </div>


                {/* Step Title */}
                <h3 className="font-heading text-2xl font-bold text-[#351044] group-hover:text-[#4A174F] transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#351044]/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clear Call to Action */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppUrl("Hi Nithraa! I’d like to start my booking for a personal tarot reading. Please share the next available slots.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#4A174F] to-[#351044] text-[#FFF8E9] font-semibold text-base border border-[#C49A45]/60 shadow-[0_8px_20px_rgba(53,16,68,0.2)] hover:shadow-[0_12px_28px_rgba(53,16,68,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5 text-[#C49A45] group-hover:rotate-12 transition-transform duration-300" />
            <span>Start Your Booking</span>
          </a>
        </div>

      </div>
    </section>
  );
};
