import { HeroSection } from '@/components/HeroSection';
import { SupportersSection } from '@/components/SupportersSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ImpactSection } from '@/components/ImpactSection';
import { FutureVisionSection } from '@/components/FutureVisionSection';
import { CTASection } from '@/components/CTASection';
import { ImpactStrip } from '@/components/ImpactStrip';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SupportersSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ImpactSection />
      <FutureVisionSection />
      <CTASection />
      <ImpactStrip />
      <Footer />
    </div>
  );
};

export default Index;
