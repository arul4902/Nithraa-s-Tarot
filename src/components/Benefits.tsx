import { Heart, Compass, Scale, Sprout } from "lucide-react";

export const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Understand Your Emotions",
      description: "Acknowledge where you are emotionally, release mental noise, and bring gentle clarity to inner feelings that need attention.",
    },
    {
      icon: Compass,
      title: "Explore New Perspectives",
      description: "Step back from overwhelming thoughts to examine your circumstances, connections, and challenges through a fresh, calm lens.",
    },
    {
      icon: Scale,
      title: "Reflect on Important Choices",
      description: "Gain thoughtful clarity around potential directions ahead, helping you make choices that align with your true values.",
    },
    {
      icon: Sprout,
      title: "Support Personal Growth",
      description: "Deepen your self-awareness, discover inner strengths, and approach your everyday path with renewed peace and confidence.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFCF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-celestial font-semibold tracking-widest text-[#C49A45] uppercase">
            <span className="w-6 h-[1px] bg-[#C49A45]" />
            <span>Mindful Reflection</span>
            <span className="w-6 h-[1px] bg-[#C49A45]" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#351044] tracking-tight">
            What Tarot Can Help You Explore
          </h2>

          <p className="text-base sm:text-lg text-[#351044]/75 font-normal leading-relaxed">
            Tarot is not about passive prediction—it is an empowering practice of self-discovery and conscious guidance.
          </p>
        </div>

        {/* 4 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="card-luxury rounded-2xl p-7 flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FFF8E9] border border-[#C49A45]/30 flex items-center justify-center group-hover:bg-[#351044] group-hover:border-[#C49A45] transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-[#C49A45] group-hover:text-[#FFF8E9] transition-colors" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#351044] group-hover:text-[#4A174F] transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-sm text-[#351044]/80 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C49A45]/15 flex items-center gap-1.5 text-xs text-[#C49A45] font-celestial">
                  <span>✦</span>
                  <span className="tracking-wider uppercase font-medium">Soul Inquiry</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Spread Banner Quote */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-[#C49A45]/30 bg-[#FFF8E9] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-heading text-2xl sm:text-3xl font-bold text-[#351044]">
              “It’s not magic... It’s a mirror to your soul.”
            </h4>
            <p className="text-sm text-[#351044]/75 font-normal">
              A respectful, grounded reading designed to bring light to your everyday decisions.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-celestial tracking-widest text-[#C49A45] uppercase shrink-0">
            <span>REFLECT</span>
            <span>+</span>
            <span>REALIGN</span>
            <span>+</span>
            <span>GROW</span>
          </div>
        </div>

      </div>
    </section>
  );
};
