import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import MarketingGallery from "./components/MarketingGallery";

// A importação do Toaster e do MapSection foram removidas daqui.

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* O Toaster foi removido daqui */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      {/* A classe min-h-screen está aqui, mas a imagem de fundo deve ser ajustada no HeroSection */}
      <main className="min-h-screen">
        <HeroSection />
        <Experience />
        <Services />
        {/* O MapSection foi removido daqui */}
        <MarketingGallery />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
