import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MarketingGallery from "./components/MarketingGallery";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="min-h-screen">
        <HeroSection />
        <Experience />
        <Services />
        <MarketingGallery />
      </main>
      
      <Footer />
    </>
  );
}

export default App;

