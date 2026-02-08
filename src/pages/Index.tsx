import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import CarsSection from "@/components/CarsSection";
import ConditionsSection from "@/components/ConditionsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyBookButton from "@/components/StickyBookButton";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ProcessSection />
      <PricingSection />
      <CarsSection />
      <ConditionsSection />
      <ReviewsSection />
      <FAQSection />
      <FooterSection />
      <StickyBookButton />
    </main>
  );
};

export default Index;
