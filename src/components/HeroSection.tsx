import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const typingTexts = [
  "Batman Hoodie",
  "Floral T-shirt", 
  "Abstract Phone Case",
  "Custom Sneakers",
  "Vintage Poster"
];

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

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
              Turn your ideas into real products instantly with AI-powered generative commerce.
            </p>
          </div>

          {/* Interactive typing demo */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder={`Try "${currentText}"`}
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
            <p className="text-sm text-muted-foreground mt-2">
              <Sparkles className="inline h-4 w-4 mr-1" />
              AI is generating designs for: <span className="text-primary font-medium typing-cursor">{currentText}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="glow-primary"
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