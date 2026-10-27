import { useState } from "react";

export default function ContactSection() {
  const [enviado, setEnviado] = useState(false);

  function lidarComEnvio(event) {
    event.preventDefault();
    // Formulário estático para fins acadêmicos: não há backend de contato real.
    setEnviado(true);
  }

  return (
    <section
      id="contato"
      className="mx-auto w-[min(100%-32px,1120px)] py-16 sm:py-20"
      aria-labelledby="contato-title"
    >
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="inline-flex w-fit rounded-full bg-soft-blue px-3.5 py-1.5 text-xs font-bold text-primary-dark">
          Fale com a equipe
        </span>
        <h2 id="contato-title" className="mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-extrabold text-dark">
          Contato
        </h2>
      </div>

      <form
        onSubmit={lidarComEnvio}
        className="mx-auto grid w-full max-w-xl gap-4 rounded-2xl border border-border bg-surface p-7 shadow-brand"
      >
        <div className="grid gap-1.5">
          <label htmlFor="nome" className="text-sm font-medium text-dark">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-dark">
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="mensagem" className="text-sm font-medium text-dark">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            required
            className="resize-none rounded-xl border border-border px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          Enviar mensagem
        </button>

        <p role="status" aria-live="polite" className="text-sm text-primary-dark">
          {enviado ? "Mensagem registrada — obrigado pelo contato! (formulário demonstrativo)" : ""}
        </p>
      </form>
    </section>
  );
}
