import mitolynSingle from "@/assets/mitolyn-single.webp";
import { CheckCircle2 } from "lucide-react";

const ingredients = [
  {
    name: "Maqui Berry",
    benefit: "Powerful antioxidant that supports mitochondrial health and reduces oxidative stress"
  },
  {
    name: "Rhodiola",
    benefit: "Adaptogen that enhances energy production and helps the body respond to stress"
  },
  {
    name: "Haematococcus",
    benefit: "Rich in astaxanthin, protecting mitochondria from damage while boosting fat oxidation"
  },
  {
    name: "Amla",
    benefit: "Vitamin C powerhouse that supports cellular energy and metabolic function"
  },
  {
    name: "Theobroma Cacao",
    benefit: "Contains flavonoids that improve mitochondrial efficiency and mood"
  },
  {
    name: "Schisandra",
    benefit: "Traditional herb that supports liver function and cellular energy production"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="text-primary">Mitolyn</span> Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Mitolyn's proprietary formula combines six powerful natural ingredients that work synergistically to optimize mitochondrial function and restore your metabolic vitality.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              {ingredients.map((ingredient, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{ingredient.name}</h3>
                    <p className="text-muted-foreground">{ingredient.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-purple/10 blur-3xl" />
              <img 
                src={mitolynSingle} 
                alt="Mitolyn Supplement Bottle - Weight Loss Support"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};