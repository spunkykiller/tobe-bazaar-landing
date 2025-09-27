import supportersBanner from '@/assets/supporters-banner.png';

export const SupportersSection = () => {
  return (
    <section className="py-8 px-0 space-gradient-alt space-particles-dense relative overflow-hidden">
      <div className="w-full">
        <div className="flex justify-center">
          <img 
            src={supportersBanner} 
            alt="WNE3 is supported by NVIDIA Inception Program, Microsoft for Startups Founders Hub, IIM Field, MongoDB Startup Accelerator, Google Cloud for Startups, and Ecell IIT Patna - Empowering the next generation of innovators"
            className="w-full max-w-none h-auto object-cover"
            style={{ minHeight: '400px' }}
          />
        </div>
      </div>
    </section>
  );
};