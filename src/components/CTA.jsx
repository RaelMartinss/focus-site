import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <div className="cta-band__text">
          <h2>
            FOCO NO QUE IMPORTA.
            <br />
            <span className="orange">SEGURANÇA SEMPRE.</span>
          </h2>
          <p>Solicite uma consulta gratuita e descubra o plano ideal para você.</p>
        </div>
        <a className="btn btn-primary cta-band__btn" href="#contato">
          Entre em Contato <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
