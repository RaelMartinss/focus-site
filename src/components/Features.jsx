import { MapPin, Lock, Bell, Headphones } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Localização em tempo real",
    text: "Acompanhe seu veículo no mapa a qualquer momento, direto do celular ou computador.",
  },
  {
    icon: Lock,
    title: "Bloqueio remoto",
    text: "Bloqueie o veículo à distância em caso de roubo ou furto com apenas um toque.",
  },
  {
    icon: Bell,
    title: "Alertas e notificações",
    text: "Receba avisos instantâneos de movimento, velocidade e cerca virtual.",
  },
  {
    icon: Headphones,
    title: "Suporte especializado",
    text: "Equipe pronta para ajudar você 24 horas por dia, todos os dias da semana.",
  },
];

export default function Features() {
  return (
    <section id="beneficios" className="section">
      <div className="container">
        <div className="features-grid">
          {features.map((f) => (
            <article key={f.title} className="feature-card">
              <div className="feature-card__icon">
                <f.icon size={26} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
