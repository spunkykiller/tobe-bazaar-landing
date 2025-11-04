export const SupportersSection = () => {
  // Left column: dark format images (NVIDIA, Naipunya)
  const left = [
    { src: '/partners/nvidia-inception-program.png', alt: 'NVIDIA Inception Program', theme: 'dark' },
    { src: '/partners/deeptech%20naipunya.png', alt: 'DeepTech Naipunya', theme: 'dark' },
    { src: '/partners/mongo-db.jpg', alt: 'MongoDB Startup Accelerator', theme: 'light' },
  ];
  // Right/middle: white format images (Microsoft, Google Cloud, IIMV)
  const right = [
    { src: '/partners/Microsoft.png', alt: 'Microsoft for Startups Founders Hub', theme: 'light' },
    { src: '/partners/Goolge%20Cloud%20(1).png', alt: 'Google Cloud for Startups', theme: 'light' },
    { src: '/partners/IIMV.png', alt: 'IIM Visakhapatnam FIELD', theme: 'light' },
  ];

  // Dark logos should appear on white cards as requested
  const cardClass = (theme: 'dark' | 'light') =>
    'bg-white border-neutral-200';

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 space-gradient space-particles">
      <div className="absolute inset-0 animated-gradient-bg opacity-60" />
      <div className="orbit-dots" />
      <div className="orbit-stars" />
      <div className="fade-edge-top" />
      <div className="fade-edge-bottom" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-poppins font-bold gradient-text-animated mb-8 sm:mb-12">
          Supported by
        </h2>

        {/* 3x2 responsive grid: 3 columns on md+, 2 on sm, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[...left, ...right].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border shadow-md overflow-hidden flex items-center justify-center p-4 sm:p-6 ${cardClass(
                item.theme as 'dark' | 'light'
              )}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full h-auto object-contain ${item.alt.includes('NVIDIA') ? 'max-h-40 sm:max-h-44' : 'max-h-28 sm:max-h-32'}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};