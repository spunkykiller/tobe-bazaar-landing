import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const typingTexts = [
  "Fix my AC before 5 pm",
  "Best Biryani in city",
  "Abstract Phone case",
  "Batman hoodie",
  "Floral T shirt"
];

const slidingTexts = [
  { prefix: "TOBE is unlocking choices for:", text: "Guitar lessons near me" },
  { prefix: "TOBE is creating options for:", text: "custom hoodie with my startup logo" },
  { prefix: "TOBE is curating results for:", text: "Best Biryani in city" },
  { prefix: "TOBE is connecting you to:", text: "a yoga trainer near me tomorrow morning" },
  { prefix: "TOBE is finding solutions for:", text: "Fix my AC before 5" }
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [slidingIndex, setSlidingIndex] = useState(0);
  const [slidingVisible, setSlidingVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const current = typingTexts[textIndex];
      
      if (!isDeleting) {
        if (charIndex < current.length) {
          setCurrentText(current.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCurrentText(current.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typingTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const slidingTimer = setInterval(() => {
      setSlidingVisible(false);
      setTimeout(() => {
        setSlidingIndex((prev) => (prev + 1) % slidingTexts.length);
        setSlidingVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(slidingTimer);
  }, []);

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 hero-gradient"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full float-animation opacity-60" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full float-animation opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-accent rounded-full float-animation opacity-80" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-8">
          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-poppins font-bold gradient-text leading-tight">
              The One Bazaar for Everything
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Meet TOBE: your desires, instantly shoppable in natural language.
            </p>
          </div>

          {/* Interactive typing demo */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder={`Ask "${currentText}"`}
                className="h-16 text-lg pl-6 pr-16 bg-card/50 border-primary/20 backdrop-blur-sm text-foreground placeholder:text-muted-foreground typing-cursor"
                value=""
                readOnly
              />
              <Button 
                size="sm" 
                variant="hero"
                className="absolute right-2 top-2 h-12 w-12 p-0"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
            <p className={`text-sm text-muted-foreground mt-2 transition-opacity duration-300 ${slidingVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Sparkles className="inline h-4 w-4 mr-1" />
              {slidingTexts[slidingIndex].prefix} <span className="text-primary font-medium">{slidingTexts[slidingIndex].text}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="glow-primary"
              onClick={() => {
                // Track outbound click event
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'cta_start_creating_click', {
                    event_label: 'wne3.com'
                  });
                }
                window.open('https://www.wne3.com/', '_blank', 'noopener,noreferrer');
              }}
            >
              Start Creating
            </Button>
            <Button 
              size="lg" 
              variant="heroSecondary"
              onClick={scrollToHowItWorks}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};