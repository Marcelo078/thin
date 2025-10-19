import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Leaf, Shield, ThumbsUp } from "lucide-react";

export const ProductSummary = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The <span className="text-primary">Bottom Line</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Mitolyn represents a scientifically-backed approach to weight loss by targeting the root cause of metabolic slowdown—mitochondrial dysfunction.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Supports healthy mitochondrial function for improved metabolism</p>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Increases natural energy levels without stimulants</p>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Helps reduce inflammation and oxidative stress</p>
                </div>
                <div className="flex items-start gap-3">
                  <ThumbsUp className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Made with 100% natural, clinically-studied ingredients</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Quality Assurance:</h3>
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Manufactured in FDA-approved facilities</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">GMP-certified for quality and safety</p>
                </div>
                <div className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">Non-GMO and free from artificial additives</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground">90-day money-back guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-border pt-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Is Mitolyn Right for You?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                If you've been struggling with a slow metabolism, low energy, or difficulty losing weight despite diet and exercise, Mitolyn offers a unique solution by addressing the cellular root cause. With its risk-free guarantee, there's no downside to giving it a try.
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary-pink hover:shadow-glow transition-all duration-300"
                asChild
              >
                <a href="https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                  Try Mitolyn Risk-Free Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};