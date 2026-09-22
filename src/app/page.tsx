import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { MarketStats } from "@/components/sections/market-stats";
import { Features } from "@/components/sections/features";
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
        <MarketStats />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
