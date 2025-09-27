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
    <section className="py-24 px-4 space-gradient-light space-particles-dense relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold gradient-text mb-6">
            Key Features & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing commerce with AI-powered personalization and sustainable practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover-scale cursor-pointer"
            >
              <div className="card-gradient rounded-3xl p-8 text-center h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover:glow-primary">
                
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-10 w-10 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-primary mb-4 font-medium">
                  {feature.description}
                </p>
                <p className="text-sm text-muted-foreground">
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