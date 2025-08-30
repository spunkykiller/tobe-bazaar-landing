import { MessageSquare, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Type Your Idea",
    description: "Describe what you want in natural language.",
    detail: "Just tell us what you're imagining - no browsing through endless catalogs."
  },
  {
    icon: Sparkles,
    title: "AI Generates Designs",
    description: "See instant, unique product options.",
    detail: "Our AI creates personalized designs tailored to your exact specifications."
  },
  {
    icon: Truck,
    title: "Get It Delivered",
    description: "Order sustainably with zero waste.",
    detail: "Made-to-order production ensures no excess inventory and minimal environmental impact."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold gradient-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your imagination into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group hover-scale"
            >
              <div className="card-gradient rounded-3xl p-8 text-center h-full border border-border/50 hover:border-primary/30 transition-all duration-300">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground font-poppins font-bold text-xl mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-bold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-primary mb-4">
                  {step.description}
                </p>
                <p className="text-muted-foreground">
                  {step.detail}
                </p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};