import TeamSection from "./TeamSection";

export default function Footer() {
  return (
    <footer id="equipe" className="bg-dark">
      <TeamSection />
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/60">
        <p>JOVI — Galeria Inteligente · desenvolvido por Hello World Corporation · Sprint 4 - FIAP 2026</p>
      </div>
    </footer>
  );
}
