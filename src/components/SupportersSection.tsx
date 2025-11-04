import supportersImage from '@/assets/supported-by-v2.png.png';

export const SupportersSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 supporters-gradient-animated relative overflow-hidden">
      <div className="absolute inset-0 space-particles opacity-40"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl supporters-image-container">
            <img
              src={supportersImage}
              alt="WNE3 is supported by NVIDIA Inception Program, Microsoft for Startups Founders Hub, IIM Field, MongoDB Startup Accelerator, Google Cloud for Startups, and DeepTech Nalpunya - Empowering the next generation of innovators"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};