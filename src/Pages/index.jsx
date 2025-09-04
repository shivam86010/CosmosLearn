import { HeroSection } from "../Components/HeroSection";
import { FeaturesSection } from "../Components/FeaturesSection";
import { SubjectsSection } from "../Components/SubjectsSection";
import { CTASection } from "../Components/CTASection";
import { SuccessStories } from "../Components/SuccessStories";
const Index = () => {
  return (
    <div className="min-h-screen">

      <HeroSection />
      <FeaturesSection />
      <SubjectsSection />
      <SuccessStories />
      <CTASection />
    </div>
  );
};

export default Index;