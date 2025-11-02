export const StatsSection = () => {
  const stats = [
    {
      value: "100+",
      label: "AI-Created Designs",
      description: "Production-ready designs generated in beta testing"
    },
    {
      value: "40%",
      label: "Waste Reduction",
      description: "Estimated reduction through post-purchase manufacturing"
    },
    {
      value: "2",
      label: "Partner Integrations",
      description: "Qikink & Printful fulfillment networks"
    }
  ];

  return (
    <section className="py-24 px-4 bg-primary/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
            Transforming Commerce with AI
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-gradient rounded-3xl p-8 text-center border border-border/50 hover:border-primary/30 transition-all duration-300 hover-scale"
            >
              <div className="text-5xl md:text-6xl font-poppins font-bold gradient-text mb-4">
                {stat.value}
              </div>
              <h3 className="text-xl font-poppins font-bold text-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground">
            TOBE is a DPIIT-Recognized Startup registered in Andhra Pradesh, pioneering the future of generative commerce with AI-powered design and sustainable fulfillment models.
          </p>
        </div>
      </div>
    </section>
  );
};
