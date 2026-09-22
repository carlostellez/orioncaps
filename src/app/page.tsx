import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { ProductDetails } from "@/components/sections/product-details";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { MarketStats } from "@/components/sections/market-stats";
import { Pricing } from "@/components/sections/pricing";
import { Testimonials } from "@/components/sections/testimonials";
import { LocationSignup } from "@/components/sections/location-signup";
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
        <About />
        <ProductDetails />
        <ProductShowcase />
        <MarketStats />
        <Pricing />
        <Testimonials />
        <LocationSignup />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
