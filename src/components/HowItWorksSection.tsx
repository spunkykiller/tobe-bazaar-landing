import { MessageSquare, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: "Just ask for it",
    description: "Describe anything in natural language.",
    detail: "Skip categories and filters—tell TOBE what you want."
  },
  {
    icon: Sparkles,
    title: "Your desires, instantly shoppable",
    description: "See unique product options in seconds.",
    detail: "TOBE creates personalized designs and mockups tailored to your request."
  },
  {
    icon: Truck,
    title: "Get it delivered",
    description: "Order sustainably with zero inventory waste.",
    detail: "Post Fulfillment Pipeline means no excess stock and minimal environmental impact."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding section-light">
      <div className="container-clean">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three simple steps to transform your imagination into reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group hover-lift"
            >
              <div className="card-elevated p-8 text-center h-full">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-primary mb-4 font-medium">
                  {step.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {step.detail}
                </p>
              </div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};