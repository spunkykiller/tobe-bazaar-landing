import { Zap, Leaf, Users, Infinity } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Real-time Personalization",
    description: "No browsing, no limits—just creation.",
    detail: "Skip endless product catalogs. Our AI understands your style and creates exactly what you envision."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Cutting waste, saving water, reducing emissions.",
    detail: "On-demand production eliminates overstock waste while using eco-friendly materials and processes."
  },
  {
    icon: Users,
    title: "MSME Empowerment",
    description: "Enabling 63M+ small businesses with ONDC.",
    detail: "Connect directly with local manufacturers and artisans, creating economic opportunities across communities."
  },
  {
    icon: Infinity,
    title: "Infinite Products",
    description: "Your imagination is the catalog.",
    detail: "From clothing to accessories to home decor - if you can imagine it, we can create it."
  }
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding section-muted">
      <div className="container-clean">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Key Features & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Revolutionizing commerce with AI-powered personalization and sustainable practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover-lift cursor-pointer"
            >
              <div className="card-clean p-8 text-center h-full">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground mb-6 group-hover:scale-105 transition-transform duration-200">
                  <feature.icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary mb-4 font-medium">
                  {feature.description}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};