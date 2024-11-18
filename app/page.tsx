import { HeroSection } from "@/components/hero-section";
import { ProductHighlights } from "@/components/product-highlights";
import { FeaturedProducts } from "@/components/featured-products";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <ProductHighlights />
      <FeaturedProducts />
      <CTASection />
    </div>
  );
}