import { useEffect, useState, useRef } from 'react';
import sustainabilityImage from '@/assets/sustainability-bg.jpg';

const stats = [
  {
    value: 37,
    suffix: "M tonnes",
    label: "textile waste prevented"
  },
  {
    value: 4,
    suffix: "trillion liters",
    label: "of water saved"
  },
  {
    value: 100,
    suffix: "B MSME",
    label: "revenues unlocked"
  }
];

const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.round(increment * currentStep), value));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span className="text-4xl md:text-6xl font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

export const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="section-padding section-dark relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${sustainabilityImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 container-clean text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-6">
            Sustainable Commerce. Scalable Commerce.
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto leading-relaxed">
            Our impact goes beyond individual products to reshape entire industries
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-lg text-background/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};