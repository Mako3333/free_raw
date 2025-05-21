import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { DualPath } from "@/components/dual-path";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <DualPath />
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  );
}
