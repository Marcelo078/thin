import { Button } from "@/components/ui/button";
import mitolynImage from "@/assets/mitolyn-bottles.webp";
import { ArrowRight, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary-glow)/0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-purple)/0.1),transparent_50%)]" />
      
      <div className="container px-4 py-12 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by thousands worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Unlock Your Body's{" "}
              <span className="bg-gradient-to-r from-primary via-secondary-pink to-accent-purple bg-clip-text text-transparent">
                Natural Fat-Burning Power
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Mitolyn works at the cellular level to supercharge your mitochondria—the powerhouses responsible for energy production and metabolism. Feel the difference as your body naturally burns fat more efficiently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary-pink hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                  Get Special Offer Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-secondary"
                asChild
              >
                <a href="#how-it-works">
                  Learn More
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">90-Day</div>
                <div className="text-sm text-muted-foreground">Money Back</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Natural</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">FDA</div>
                <div className="text-sm text-muted-foreground">Approved Facility</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20 blur-3xl" />
            <img 
              src={mitolynImage} 
              alt="Mitolyn Weight Loss Supplement Bottles"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};