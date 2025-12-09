import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import MapSection from "./components/MapSection";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MarketingGallery from "./components/MarketingGallery";
import { Toaster } from "@/components/ui/toaster"; // <--- CORREÇÃO AQUI

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Toaster />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="min-h-screen">
        <HeroSection />
        <Experience />
        <Services />
        <MapSection />
        <MarketingGallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
