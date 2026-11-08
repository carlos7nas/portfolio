import { useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { CONTACT } from '../data.js';

function Copiar({ alvo }) {
  const [rotulo, setRotulo] = useState('Copiar');

  const terminar = (copiou) => {
    if (!copiou && alvo.current) {
      const r = document.createRange();
      r.selectNodeContents(alvo.current);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
    }
    setRotulo(copiou ? 'Copiado' : 'Selecionado');
    setTimeout(() => setRotulo('Copiar'), 1800);
  };

  const copiar = () => {
    const texto = alvo.current ? alvo.current.textContent.trim() : '';
    try {
      navigator.clipboard.writeText(texto).then(() => terminar(true), () => terminar(false));
    } catch (erro) {
      terminar(false);
    }
  };

  return (
    <button className="copy" type="button" onClick={copiar}>
      <Icon name="copy" />
      <span>{rotulo}</span>
    </button>
  );
}

function Cartao({ icone, titulo, valor, children, i, copiavel }) {
  const ref = useRef(null);
  return (
    <Reveal as="article" className="contact" i={i}>
      <div className="contact-h">
        <span className="ico">
          <Icon name={icone} />
        </span>
        <h3>{titulo}</h3>
      </div>
      <p className="contact-val" ref={ref}>{valor}</p>
      <div className="contact-act">
        {children}
        {copiavel && <Copiar alvo={ref} />}
      </div>
    </Reveal>
  );
}

const externo = { target: '_blank', rel: 'noopener noreferrer' };

export default function Contact() {
  return (
    <section className="band band--branco" id="contato" aria-labelledby="h-cont">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-cont">Vamos construir algo juntos?</h2>
          <p className="sub">
            Estou aberto a oportunidades de estágio, novos desafios profissionais, networking e projetos que permitam
            aplicar meus conhecimentos e desenvolver novas habilidades.
          </p>
        </Reveal>
        <div className="contact-grid">
          <Cartao icone="mail" titulo="E-mail" valor={CONTACT.email} i={0} copiavel>
            <a className="btn btn--sm" href={'mailto:' + CONTACT.email}>
              <Icon name="mail" />
              Enviar e-mail
            </a>
          </Cartao>
          <Cartao icone="chat" titulo="WhatsApp" valor={CONTACT.telefone} i={1} copiavel>
            <a className="btn btn--sm" href={CONTACT.whatsapp} {...externo}>
              <Icon name="chat" />
              Abrir conversa
            </a>
          </Cartao>
          <Cartao icone="in" titulo="LinkedIn" valor={CONTACT.linkedinTexto} i={2}>
            <a className="btn btn--sm" href={CONTACT.linkedin} {...externo}>
              <Icon name="in" />
              Abrir perfil
            </a>
          </Cartao>
          <Cartao icone="gh" titulo="GitHub" valor={CONTACT.githubTexto} i={3}>
            <a className="btn btn--sm" href={CONTACT.github} {...externo}>
              <Icon name="gh" />
              Abrir perfil
            </a>
          </Cartao>
        </div>
      </div>
    </section>
  );
}
