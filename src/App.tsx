import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { RecommendationQuiz } from "./components/RecommendationQuiz";
import { Pricing } from "./components/Pricing";
import { HowItWorks } from "./components/HowItWorks";
import { Philosophy } from "./components/Philosophy";
import { Benefits } from "./components/Benefits";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export function App() {
  return (
    <div className="min-h-screen bg-[#FFFCF6] text-[#351044] selection:bg-[#E9C5CF] selection:text-[#351044]">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section matching Design Reference */}
        <Hero />

        {/* 2. Introduction / Authentic About Nithraa */}
        <About />

        {/* 3. Tarot Reading Services (2x2 Cards with Faint Numerals & AI Images) */}
        <Services />

        {/* 4. Interactive Recommendation Quiz ("Find the right plan for yourself") */}
        <RecommendationQuiz />

        {/* 5. Tarot Reading Pricing Tiers ("Pick what fits. No pressure.") */}
        <Pricing />

        {/* 6. How It Works (3 Clear Steps) */}
        <HowItWorks />

        {/* 7. Brand Philosophy & Atmosphere Banner */}
        <Philosophy />

        {/* 8. What Tarot Can Help You Explore */}
        <Benefits />

        {/* 9. Frequently Asked Questions Accordion */}
        <FAQ />

        {/* 10. Final Booking Call-to-Action */}
        <FinalCTA />
      </main>

      {/* Footer with Legal Disclaimer & Copyright */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
