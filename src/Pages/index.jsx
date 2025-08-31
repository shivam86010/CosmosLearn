import { HeroSection } from "../Components/HeroSection";
import { FeaturesSection } from "../Components/FeaturesSection";
import { SubjectsSection } from "../Components/SubjectsSection";
import { CTASection } from "../Components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">

      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <CTASection />
    </div>
  );
};

export default Index;