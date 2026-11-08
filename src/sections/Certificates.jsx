import { useRef } from 'react';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { useLightbox } from '../components/Lightbox.jsx';
import { CERTS } from '../data.js';

const ITENS = CERTS.map((c) => ({ src: c.src, alt: c.alt, titulo: c.titulo, legenda: c.inst }));

function Certificado({ cert, indice }) {
  const abrir = useLightbox();
  const botao = useRef(null);
  return (
    <Reveal as="article" className="cert" i={indice}>
      <button
        ref={botao}
        className="cert-view"
        type="button"
        aria-label={`Ampliar certificado: ${cert.titulo}, ${cert.inst}`}
        onClick={() => abrir(ITENS, indice, botao.current)}
      >
        <img src={cert.src} width={cert.w} height={cert.h} loading="lazy" alt={cert.alt} />
        <span className="cert-zoom">
          <Icon name="zoom" />
          Ampliar
        </span>
      </button>
      <div className="cert-body">
        <h3>{cert.titulo}</h3>
        <p className="cert-inst">
          {cert.inst}
          <span className="tag tag--ok">
            <Icon name="check" />
            Concluído
          </span>
        </p>
        <ul className="cert-list">
          {cert.lista.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function Certificates() {
  return (
    <section className="band band--branco" id="certificacoes" aria-labelledby="h-cert">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-cert">Conhecimentos em constante evolução</h2>
          <p className="sub">
            Certificações que complementam minha formação acadêmica e ampliam meus conhecimentos em tecnologia.
          </p>
        </Reveal>
        <div className="certs">
          {CERTS.map((c, i) => (
            <Certificado cert={c} indice={i} key={c.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
