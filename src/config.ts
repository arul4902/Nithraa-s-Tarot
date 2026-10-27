/**
 * Nithraa's Tarot - Brand & Contact Configuration
 * Verified from Instagram reference (@nithraastarot)
 */

export const BRAND_CONFIG = {
  name: "Nithraa’s Tarot",
  tagline: "Heal within, Rise beyond.",
  instagramUrl: "https://www.instagram.com/nithraastarot/",
  instagramHandle: "@nithraastarot",
  // Verified WhatsApp business number: +91 7338779582
  whatsAppNumber: "917338779582",
  phoneDisplay: "+91 7338779582",
};

/**
 * Helper to generate international WhatsApp link with prefilled messages
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMsg = "Hi Nithraa! I’d like to enquire about a personal tarot reading. Could you please share the available options?";
  const message = customMessage || defaultMsg;
  return `https://wa.me/${BRAND_CONFIG.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export const READING_SERVICES = [
  {
    id: "career-life-direction",
    number: "01",
    title: "Career & Life Direction",
    description: "When a career decision has you stuck — a job opportunity, a direction that won’t come clear, or a business choice that needs intuitive clarity — this reading gives you an honest, grounded look at what’s ahead.",
    image: "/assets/career-guidance.webp",
    whatsappMessage: "Hi Nithraa! I’d like to book a Career & Life Direction tarot reading. Could you please share the available options and timings?",
    badge: "Career & Decisions",
    readMoreUrl: "#recommendation",
  },
  {
    id: "relationship-guidance",
    number: "02",
    title: "Love & Relationship Guidance",
    description: "For the questions about someone in your life that you haven’t been able to say out loud yet. Whether something’s uncertain, complicated, or just quietly needs closure — this is a private, completely judgment-free space.",
    image: "/assets/relationship-guidance.webp",
    whatsappMessage: "Hi Nithraa! I’d like to book a Love & Relationship Guidance tarot reading. Could you please share the available options and timings?",
    badge: "Love & Connections",
    readMoreUrl: "#recommendation",
  },
  {
    id: "personal-clarity-growth",
    number: "03",
    title: "Spiritual Growth & Life Path",
    description: "When life feels like it’s happening to you, not with you. This reading looks at where you are right now, what’s been draining your energy, and what a clearer, more peaceful path forward actually looks like.",
    image: "/assets/personal-growth.webp",
    whatsappMessage: "Hi Nithraa! I’d like to book a Spiritual Growth & Life Path tarot reading. Could you please share the available options and timings?",
    badge: "Soul Discovery",
    readMoreUrl: "#recommendation",
  },
  {
    id: "money-abundance",
    number: "04",
    title: "Money & Abundance Mindset",
    description: "Explore your relationship with financial flow, recognise scarcity patterns, and reflect thoughtfully on major investments, financial goals, and practical abundance choices with confidence.",
    image: "/assets/tarot-services.webp",
    whatsappMessage: "Hi Nithraa! I’d like to book a Money & Abundance tarot reading. Could you please share the available options and timings?",
    badge: "Financial Clarity",
    readMoreUrl: "#recommendation",
  },
];

export const PRICING_TIERS = [
  {
    id: "precise-pathway",
    duration: "30 MINUTES",
    title: "Precise Pathway",
    subtitle: "Best for follow-ups & focused single queries",
    price: "₹900",
    priceLabel: "audio / video session",
    isPopular: false,
    features: [
      "One focused life topic or specific question",
      "Direct intuitive card spread & energy insight",
      "Actionable takeaways for your current dilemma",
      "High-resolution photo of your card spread",
      "Option for voice note summary or call",
    ],
    whatsappMessage: "Hi Nithraa! I’d like to book the 30-Minute Precise Pathway reading (₹900). Could you please share the next available slots?",
  },
  {
    id: "deep-dive",
    duration: "60 MINUTES",
    title: "Deep Dive",
    subtitle: "Best for first-timers & root-cause finding",
    price: "₹1,800",
    priceLabel: "audio / video session",
    isPopular: true,
    popularBadge: "MOST POPULAR",
    features: [
      "Up to three life topics or major crossroads",
      "Full multi-card energetic layout & dynamics",
      "Identification of root causes & underlying patterns",
      "Crystal & reflection recommendations (if helpful)",
      "Dedicated time for follow-up questions & clarity",
      "Detailed audio or summary notes provided",
    ],
    whatsappMessage: "Hi Nithraa! I’d like to book the 60-Minute Deep Dive reading (₹1,800). Could you please share the next available slots?",
  },
  {
    id: "holistic-guidance",
    duration: "90 MINUTES",
    title: "Holistic Guidance",
    subtitle: "Best for 360° perspective & major life transitions",
    price: "₹2,700",
    priceLabel: "audio / video session",
    isPopular: false,
    features: [
      "Comprehensive 360° exploration of all life areas",
      "Deep relationship, career, and soul pattern analysis",
      "Energy alignment & negation reflection guidance",
      "Personalised affirmations & manifestation rituals",
      "Unrushed, deep dialogue with continuous card draws",
      "Complete guidance summary for long-term reflection",
    ],
    whatsappMessage: "Hi Nithraa! I’d like to book the 90-Minute Holistic Guidance reading (₹2,700). Could you please share the next available slots?",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is a tarot reading?",
    answer: "A tarot reading is a reflective, intuitive dialogue that uses a deck of symbolic cards to explore your current thoughts, emotions, and life circumstances. Rather than predicting a rigid future, tarot acts as a mirror to your inner self—helping you uncover new perspectives, recognise personal patterns, and make mindful decisions with clarity.",
  },
  {
    question: "What kinds of questions can I bring to a reading?",
    answer: "You are welcome to bring questions about any aspect of life that feels important to you—including relationships, career choices, creative decisions, personal transitions, or feelings of being at a crossroads. Open-ended questions (such as 'What should I reflect upon regarding my career?' or 'How can I bring harmony to my relationship?') offer the most meaningful insights.",
  },
  {
    question: "How do I book a session?",
    answer: "Booking is simple and personal. Tap any 'Book Your Reading' button on this website to connect directly with Nithraa on WhatsApp. Simply share the focus of your reading, and Nithraa will discuss available session options, timing, and confirm your slot.",
  },
  {
    question: "Are readings conducted online?",
    answer: "Yes, readings are conveniently conducted remotely via WhatsApp audio call, video call, or structured voice notes depending on your preference and schedule. When you enquire on WhatsApp, Nithraa will walk you through the available session formats so you can choose what feels most comfortable for you.",
  },
  {
    question: "How should I prepare for my reading?",
    answer: "Come with an open mind and a calm space free of distractions. You may want to take a few deep breaths before the session begins and jot down any thoughts or specific areas you wish to explore. No prior knowledge of tarot is required—Nithraa gently guides you through every step.",
  },
  {
    question: "What if I am new to tarot?",
    answer: "Everyone is warmly welcome! Many of Nithraa's clients are experiencing tarot for the very first time. There is nothing intimidating or complicated about the process—each reading is gentle, grounded, and focused on self-awareness and practical reflection.",
  },
];
