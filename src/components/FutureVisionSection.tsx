import { Smartphone, ShoppingBag, Zap, Globe } from 'lucide-react';

const appFeatures = [
  {
    icon: ShoppingBag,
    title: "Commerce",
    description: "AI-powered product creation"
  },
  {
    icon: Zap,
    title: "Services",
    description: "On-demand local services"
  },
  {
    icon: Globe,
    title: "Utilities",
    description: "Essential daily needs"
  }
];

export const FutureVisionSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-poppins font-bold gradient-text mb-6">
                One Platform. Infinite Possibilities.
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                TOBE is just the beginning. We're building the ultimate commerce super app powered by ONDC.
              </p>
            </div>

            <div className="space-y-6">
              {appFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-lg text-foreground">
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

          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-b from-border to-muted rounded-[3rem] p-3 glow-primary">
                <div className="bg-background rounded-[2.5rem] overflow-hidden">
                  
                  {/* Status Bar */}
                  <div className="bg-card h-6 flex items-center justify-between px-6 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-primary rounded-sm"></div>
                      <div className="w-4 h-2 bg-primary rounded-sm"></div>
                      <div className="w-4 h-2 bg-primary/50 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-6 space-y-6 h-96">
                    
                    {/* Header */}
                    <div className="text-center">
                      <h3 className="font-poppins font-bold text-2xl gradient-text">TOBE</h3>
                      <p className="text-sm text-muted-foreground">Super App</p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {appFeatures.map((feature, index) => (
                        <div 
                          key={index}
                          className="card-gradient rounded-2xl p-4 text-center hover-scale"
                        >
                          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-3">
                            <feature.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h4 className="font-poppins font-semibold text-sm text-foreground mb-1">
                            {feature.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Search Bar */}
                    <div className="bg-muted rounded-2xl p-4">
                      <div className="flex items-center space-x-3">
                        <Smartphone className="h-5 w-5 text-primary" />
                        <span className="text-sm text-muted-foreground">What do you need today?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full float-animation opacity-80" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent rounded-full float-animation opacity-60" style={{ animationDelay: '3s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};