import { HeroSection } from '@/components/HeroSection';
import { SupportersSection } from '@/components/SupportersSection';
import { StatsSection } from '@/components/StatsSection';
import { Phase1Section } from '@/components/Phase1Section';
import { WhyTobeSection } from '@/components/WhyTobeSection';
import { Phase2Section } from '@/components/Phase2Section';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ArchitectureSection } from '@/components/ArchitectureSection';
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
      <StatsSection />
      <Phase1Section />
      <WhyTobeSection />
      <Phase2Section />
      <HowItWorksSection />
      <FeaturesSection />
      <ArchitectureSection />
      <ImpactSection />
      <FutureVisionSection />
      <CTASection />
      <ImpactStrip />
      <Footer />
    </div>
  );
};

export default Index;
