import { MessageCircle, ArrowRight } from "lucide-react";

const stats = [
  { value: "+12 mil", label: "veículos protegidos" },
  { value: "24/7", label: "monitoramento" },
  { value: "99,9%", label: "uptime da rede" },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__overlay" aria-hidden="true" />
      <div className="container hero-section__inner">
        <div className="hero-section__content">
          <span className="hero-badge">
            <span className="hero-badge__dot" /> Tecnologia em rastreamento veicular
          </span>
          <h1>
            Proteja seu veículo com tecnologia de{" "}
            <span className="orange">rastreamento inteligente.</span>
          </h1>
          <p className="hero-section__lead">
            Monitoramento em tempo real, localização precisa e mais segurança
            para você e sua frota — onde quer que você esteja.
          </p>

          <div className="hero-section__actions">
            <a className="btn btn-whatsapp" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Fale no WhatsApp
            </a>
            <a className="btn btn-ghost" href="#planos">
              Conheça os Planos <ArrowRight size={18} />
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((s) => (
              <div key={s.label} className="hero-stats__item">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
