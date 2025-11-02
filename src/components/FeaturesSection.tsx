import { Sparkles, Search, Store, Network, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Generative Design Engine",
    description: "Fine-tuned AI models specifically trained for apparel and merchandise design, creating production-ready assets instantly."
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Intent-aware queries that understand context across all product and service categories, delivering relevant results."
  },
  {
    icon: Store,
    title: "Creator Storefronts",
    description: "Launch micro-shops instantly with zero setup costs. Creators can monetize their ideas without inventory risk."
  },
  {
    icon: Network,
    title: "ONDC Integration",
    description: "Vendor-agnostic network access connecting consumers to India's open commerce ecosystem seamlessly."
  },
  {
    icon: TrendingUp,
    title: "Sustainability Engine",
    description: "Post-purchase fulfillment model with analytics tracking waste reduction and environmental impact."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 space-gradient-light space-particles-dense relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold gradient-text mb-6">
            Product Features
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover-scale cursor-pointer"
            >
              <div className="card-gradient rounded-3xl p-8 h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};