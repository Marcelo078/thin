import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const packages = [
  {
    bottles: 1,
    label: "Starter",
    price: 59,
    perBottle: 59,
    savings: 0,
    popular: false
  },
  {
    bottles: 3,
    label: "Most Popular",
    price: 147,
    perBottle: 49,
    savings: 30,
    popular: true
  },
  {
    bottles: 6,
    label: "Best Value",
    price: 234,
    perBottle: 39,
    savings: 120,
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-primary">Package</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Select the package that fits your goals. All orders come with our 90-day money-back guarantee.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-primary shadow-glow' : 'border-border hover:border-primary/50'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary-pink text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  {pkg.label}
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl font-bold mb-2">{pkg.bottles}</div>
                <div className="text-muted-foreground">Bottle{pkg.bottles > 1 ? 's' : ''}</div>
                {pkg.savings > 0 && (
                  <div className="mt-2 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    Save ${pkg.savings}
                  </div>
                )}
              </div>
              
              <div className="text-center mb-6 pb-6 border-b border-border">
                <div className="text-4xl font-bold mb-1">${pkg.price}</div>
                <div className="text-muted-foreground">${pkg.perBottle} per bottle</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Free Shipping</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>90-Day Guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Made in USA</span>
                </li>
                {pkg.bottles >= 3 && (
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-semibold text-primary">Bonus: 2 Free eBooks</span>
                  </li>
                )}
              </ul>
              
              <Button 
                className={`w-full text-lg py-6 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-primary to-secondary-pink hover:shadow-glow' 
                    : ''
                }`}
                variant={pkg.popular ? 'default' : 'outline'}
                asChild
              >
                <a href="https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net" target="_blank" rel="noopener noreferrer">
                  Order Now
                </a>
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-3 bg-card border border-border rounded-full px-6 py-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">90</span>
            </div>
            <div className="text-left">
              <div className="font-semibold">Day Money-Back Guarantee</div>
              <div className="text-sm text-muted-foreground">Try risk-free. Not satisfied? Full refund.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};