import { Check } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    desc: "Ideal para quem quer proteger um único veículo.",
    price: "49",
    cents: ",90",
    period: "/mês",
    features: [
      "Localização em tempo real",
      "Histórico de até 30 dias",
      "Alertas de movimento",
      "Suporte por WhatsApp",
    ],
    cta: "Escolher Plano",
    featured: false,
  },
  {
    name: "Profissional",
    desc: "Mais recursos e controle total do seu veículo.",
    price: "79",
    cents: ",90",
    period: "/mês",
    features: [
      "Tudo do plano Essencial",
      "Bloqueio remoto",
      "Cerca virtual e velocidade",
      "Histórico de 90 dias",
      "Suporte prioritário 24/7",
    ],
    cta: "Escolher Plano",
    featured: true,
  },
  {
    name: "Frotas",
    desc: "Gestão completa para empresas e frotas.",
    price: null,
    priceText: "Sob consulta",
    features: [
      "Tudo do plano Profissional",
      "Painel multiveículos",
      "Relatórios de desempenho",
      "Gestor de conta dedicado",
    ],
    cta: "Falar com especialista",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="section">
      <div className="container">
        <div className="section-head">
          <span className="section-tag">Planos</span>
          <h2 className="section-title">Escolha a proteção ideal</h2>
          <p>Planos flexíveis para todos os perfis, sem fidelidade obrigatória.</p>
        </div>

        <div className="plans-grid">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`plan-card ${p.featured ? "plan-card--featured" : ""}`}
            >
              {p.featured && <span className="plan-card__badge">Mais Popular</span>}
              <h3>{p.name}</h3>
              <p className="plan-card__desc">{p.desc}</p>

              <div className="plan-card__price">
                {p.price ? (
                  <>
                    <span className="plan-card__currency">R$</span>
                    <span className="plan-card__value">{p.price}</span>
                    <span className="plan-card__cents">
                      {p.cents}
                      <em>{p.period}</em>
                    </span>
                  </>
                ) : (
                  <span className="plan-card__value plan-card__value--text">
                    {p.priceText}
                  </span>
                )}
              </div>

              <ul className="plan-card__features">
                {p.features.map((f) => (
                  <li key={f}>
                    <Check size={17} /> {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} plan-card__cta`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
