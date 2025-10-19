import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Mitolyn work?",
    answer: "Mitolyn works at the cellular level by supporting and optimizing mitochondrial function. Mitochondria are the powerhouses of your cells, responsible for energy production and metabolism. As we age or experience stress, mitochondrial efficiency declines, leading to slower metabolism and reduced energy. Mitolyn's blend of natural ingredients helps restore mitochondrial health, allowing your body to burn fat more efficiently and produce energy more effectively."
  },
  {
    question: "Is Mitolyn safe?",
    answer: "Yes, Mitolyn is made with 100% natural ingredients in an FDA-approved and GMP-certified facility in the USA. The formula contains no harmful chemicals, stimulants, or artificial additives. However, if you have any pre-existing medical conditions or are taking medications, we recommend consulting with your healthcare provider before starting any new supplement."
  },
  {
    question: "How long until I see results?",
    answer: "Results vary by individual, but many users report feeling more energized within the first week. Visible weight loss results typically begin to appear after 2-4 weeks of consistent use. For optimal results, we recommend taking Mitolyn for at least 90 days, which is why we offer packages with multiple bottles at a discounted rate."
  },
  {
    question: "How should I take Mitolyn?",
    answer: "Take 2 capsules daily with a glass of water, preferably with your morning meal. Consistency is key—make it part of your daily routine for best results. Each bottle contains a 30-day supply."
  },
  {
    question: "What if Mitolyn doesn't work for me?",
    answer: "We stand behind our product with a 90-day money-back guarantee. If you're not completely satisfied with your results, simply contact our customer support team within 90 days of purchase for a full refund—no questions asked. Your satisfaction is our priority."
  },
  {
    question: "Can I take Mitolyn with other supplements?",
    answer: "Mitolyn is formulated to work well on its own and is generally safe to take with other supplements. However, if you're currently taking prescription medications or other supplements, we recommend consulting with your healthcare provider to ensure there are no potential interactions."
  },
  {
    question: "Is shipping free?",
    answer: "Yes! We offer free shipping on all orders within the United States. International shipping rates may vary depending on your location."
  },
  {
    question: "How quickly will I receive my order?",
    answer: "Orders are typically processed within 24-48 hours. Domestic shipping usually takes 5-7 business days. You'll receive a tracking number via email once your order ships so you can monitor its progress."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about Mitolyn
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};