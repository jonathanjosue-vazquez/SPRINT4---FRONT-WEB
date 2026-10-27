export default function PrototypeSection() {
  return (
    <section
      id="prototipo"
      className="mx-auto w-[min(100%-32px,1120px)] py-16 sm:py-20"
      aria-labelledby="prototipo-title"
    >
      <div className="flex flex-col items-center gap-8 rounded-3xl bg-brand-gradient px-6 py-14 text-center sm:px-12">
        <span className="inline-flex w-fit rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-bold text-white">
          Conheça o protótipo
        </span>
        <h2 id="prototipo-title" className="text-[clamp(1.8rem,4.5vw,2.75rem)] font-extrabold text-white">
          Protótipo JOVI
        </h2>
        <p className="max-w-md text-sm text-white/90">
          Veja na prática, em um protótipo mobile interativo, como a câmera contextual e a
          Galeria Inteligente funcionam.
        </p>

        <a
          href="/jovi-prototype.html"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-dark px-7 py-3 text-sm font-semibold text-white shadow-brand transition-transform hover:scale-[1.03]"
        >
          Explorar protótipo ↗
        </a>
      </div>
    </section>
  );
}
