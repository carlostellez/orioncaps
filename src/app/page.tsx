import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { ProductDetails } from "@/components/sections/product-details";
import { MarketStats } from "@/components/sections/market-stats";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { CallToAction } from "@/components/sections/cta";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main>
        <Hero />
        <ProductDetails />
        <MarketStats />
        <Pricing />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
