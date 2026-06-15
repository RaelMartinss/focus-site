import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>
            Tecnologia em rastreamento veicular para proteger o que é mais
            importante para você.
          </p>
        </div>

        <div className="footer__col">
          <h4>Contato</h4>
          <a href="tel:+5500000000000">
            <Phone size={16} /> (00) 00000-0000
          </a>
          <a href="mailto:contato@focusrastreamento.com.br">
            <Mail size={16} /> contato@focusrastreamento.com.br
          </a>
          <span className="footer__line">
            <MapPin size={16} /> São Paulo · SP
          </span>
        </div>

        <div className="footer__col">
          <h4>Navegação</h4>
          <a href="#como-funciona">Como Funciona</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#planos">Planos</a>
        </div>

        <div className="footer__col">
          <h4>Atendimento</h4>
          <span className="footer__line">Segunda a Sexta · 8h às 18h</span>
          <span className="footer__line">Suporte técnico 24/7</span>
           <a className="btn btn-whatsapp footer__wa" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              <MessageCircle size={19} /> Fale no WhatsApp
            </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} FOCUS Rastreamento Veicular. Todos os direitos reservados.</span>
          <span className="orange">Foco no que importa. Segurança sempre.</span>
        </div>
      </div>
    </footer>
  );
}
