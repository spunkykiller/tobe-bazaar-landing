import supportersBanner from '@/assets/supporters-banner.png';

export const SupportersSection = () => {
  return (
    <section className="px-0 hero-gradient space-particles-dense relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 mix-blend-overlay"></div>
      <div className="w-full relative z-10">
        <div className="flex justify-center">
          <img 
            src={supportersBanner} 
            alt="WNE3 is supported by NVIDIA Inception Program, Microsoft for Startups Founders Hub, IIM Field, MongoDB Startup Accelerator, Google Cloud for Startups, and Ecell IIT Patna - Empowering the next generation of innovators"
            className="w-full max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};