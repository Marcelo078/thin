import { Zap, Heart, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Boost Mitochondrial Function",
    description: "Enhance your cellular powerhouses to produce more energy and burn fat more efficiently throughout the day."
  },
  {
    icon: TrendingUp,
    title: "Accelerate Metabolism",
    description: "Speed up your metabolic rate naturally, helping your body convert food into energy instead of storing it as fat."
  },
  {
    icon: Heart,
    title: "Increase Energy Levels",
    description: "Feel more energized and alert as your cells produce energy more effectively, without the crash of stimulants."
  },
  {
    icon: Shield,
    title: "Combat Inflammation",
    description: "Reduce cellular stress and inflammation that can slow down metabolism and make weight loss more difficult."
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why You Need <span className="text-primary">Mitolyn</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            As we age, mitochondrial function naturally declines, slowing metabolism and energy production. Mitolyn targets this root cause to help you feel and look your best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-soft group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};