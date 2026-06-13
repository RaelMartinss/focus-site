import { Wrench, MonitorSmartphone, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Wrench,
    title: "Instalação do rastreador",
    text: "Nossa equipe instala o dispositivo no seu veículo de forma rápida, discreta e segura.",
  },
  {
    icon: MonitorSmartphone,
    title: "Monitoramento pelo sistema",
    text: "Acesse a plataforma pelo app ou navegador e acompanhe tudo em tempo real.",
  },
  {
    icon: ShieldCheck,
    title: "Mais controle e segurança",
    text: "Bloqueie, receba alertas e tenha total controle sobre o seu patrimônio.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Como Funciona</span>
          <h2 className="section-title">Simples do começo ao fim</h2>
          <p>Em três passos você coloca seu veículo sob a proteção da FOCUS.</p>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <article key={s.title} className="step-card">
              <span className="step-card__num">{String(i + 1).padStart(2, "0")}</span>
              <div className="step-card__icon">
                <s.icon size={28} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
