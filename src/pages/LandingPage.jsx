import { useEffect } from "react";
import AudienceSection from "../components/AudienceSection";
import ContactSection from "../components/ContactSection";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import JourneySection from "../components/JourneySection";
import PrototypeSection from "../components/PrototypeSection";
import { publicoAlvo, solucao } from "../data/conteudo";

export default function LandingPage() {
  useEffect(() => {
    document.title = "JOVI — Galeria Inteligente";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureSection id="solucao" kicker="A proposta" title="A Solução" items={solucao} />
        <AudienceSection items={publicoAlvo} />
        <JourneySection />
        <PrototypeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
