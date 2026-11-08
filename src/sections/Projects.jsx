import { useRef, useState } from 'react';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { useLightbox } from '../components/Lightbox.jsx';
import { PROJECTS } from '../data.js';

function Galeria({ projeto }) {
  const [indice, setIndice] = useState(0);
  const abrir = useLightbox();
  const botao = useRef(null);
  const { capturas, titulo } = projeto;
  const atual = capturas[indice];

  const itens = capturas.map((c, k) => ({
    src: c.src,
    alt: c.alt,
    titulo,
    legenda: `Captura ${k + 1} de ${capturas.length}`,
  }));

  return (
    <div className="proj-art">
      <button
        ref={botao}
        className="shot-main"
        type="button"
        aria-label={`Ampliar captura de tela: ${titulo}`}
        onClick={() => abrir(itens, indice, botao.current)}
      >
        <img src={atual.src} width={atual.w} height={atual.h} loading="lazy" alt={atual.alt} />
        <span className="cert-zoom">
          <Icon name="zoom" />
          Ampliar
        </span>
      </button>
      <div className="thumbs">
        {capturas.map((c, k) => (
          <button
            key={c.src}
            className="thumb"
            type="button"
            aria-current={k === indice}
            aria-label={`Ver captura ${k + 1} de ${capturas.length}`}
            onClick={() => setIndice(k)}
          >
            <img src={c.src} alt="" loading="lazy" />
          </button>
        ))}
      </div>
      <p className="art-note">Capturas de tela do projeto.</p>
    </div>
  );
}

function Bloco({ bloco }) {
  return (
    <div className="proj-block">
      <h4>{bloco.titulo}</h4>
      {bloco.tipo === 'chips' ? (
        <ul className="chips">
          {bloco.itens.map((t) => (
            <li className="chip" key={t}>{t}</li>
          ))}
        </ul>
      ) : (
        <ul className="bullets">
          {bloco.itens.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="band band--creme" id="projetos" aria-labelledby="h-proj">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-proj">Projetos que transformam conhecimento em prática</h2>
          <p className="sub">
            Conheça algumas das soluções que desenvolvi individualmente e em equipe durante minha jornada de aprendizado.
          </p>
        </Reveal>
        <div className="projs">
          {PROJECTS.map((p) => (
            <Reveal as="article" className="proj" key={p.id}>
              <Galeria projeto={p} />
              <div className="proj-body">
                <div className="proj-meta">
                  <span className="tag tag--creme">Projeto individual</span>
                </div>
                <h3>{p.titulo}</h3>
                <p className="proj-stack">{p.stack}</p>
                {p.paragrafos.map((t) => (
                  <p key={t}>{t}</p>
                ))}
                {p.blocos.map((b) => (
                  <Bloco bloco={b} key={b.titulo} />
                ))}
                <div className="proj-actions">
                  <a className="btn btn--sm" href={p.github} target="_blank" rel="noopener noreferrer">
                    <Icon name="gh" />
                    Ver no GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
