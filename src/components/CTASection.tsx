import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-gradient rounded-3xl p-12 border border-primary/20 glow-primary">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-poppins font-bold gradient-text mb-6">
                Ready to Create Your First Product?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of creators who are already bringing their ideas to life with TOBE
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
              >
                Try TOBE Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="heroSecondary"
                className="group"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Our Community
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Early Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">Products Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">MSME Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};