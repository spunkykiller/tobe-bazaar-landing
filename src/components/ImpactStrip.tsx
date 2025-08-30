import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    value: "37M+",
    label: "tonnes textile waste prevented",
    detail: "(at scale)"
  },
  {
    value: "~4T",
    label: "liters water saved",
    detail: "(zero-inventory model)"
  },
  {
    value: "$100B+",
    label: "MSME revenues unlocked",
    detail: "(ONDC enablement)"
  }
];

export const ImpactStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => false));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger the animation of each stat
          stats.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedStats(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                animatedStats[index] 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
            >
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-poppins font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-lg text-foreground font-medium">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};