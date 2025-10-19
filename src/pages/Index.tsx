import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { ProductSummary } from "@/components/ProductSummary";
import { Helmet } from "react-helmet";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mitolyn Weight Loss Support",
    "description": "Natural weight loss supplement that supports mitochondrial function for improved metabolism and energy production",
    "brand": {
      "@type": "Brand",
      "name": "Mitolyn"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "39",
      "highPrice": "59",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "url": "https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <ProductSummary />
        <FAQ />
        
        <footer className="bg-muted/30 py-8 border-t border-border">
          <div className="container px-4 mx-auto text-center text-sm text-muted-foreground">
            <p className="mb-2">
              These statements have not been evaluated by the Food and Drug Administration. 
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>© 2025 Mitolyn. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;