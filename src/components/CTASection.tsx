import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding section-light">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-elevated p-12">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Create Your First Product?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join thousands of creators who are already bringing their ideas to life with TOBE
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium hover-lift group"
              >
                Try TOBE Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8 py-4 text-lg font-medium group"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </div>

            <div className="flex flex-col items-center justify-center space-y-6 pt-8 border-t border-border">
              <div className="text-center max-w-2xl">
                <div className="text-lg font-semibold text-primary mb-2">
                  Secured $100K+ in cloud credits from Google Cloud, Microsoft and NVIDIA Inception.
                </div>
                <div className="text-sm text-muted-foreground">
                  Supported by E-Cell IIT Patna, T-Hub, APIS, IIT Madras
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};