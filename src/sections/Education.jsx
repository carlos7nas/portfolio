import Reveal from '../components/Reveal.jsx';
import { EDU_FACTS, EDU_TEXT } from '../data.js';

function Diagrama() {
  return (
    <svg
      viewBox="0 0 440 400"
      role="img"
      aria-label="Diagrama: Informática para Negócios no centro, ligada a tecnologia da informação, administração, sistemas e negócios"
    >
      <g stroke="rgba(17,17,17,.4)" strokeWidth="2">
        <line x1="220" y1="200" x2="90" y2="72" />
        <line x1="220" y1="200" x2="350" y2="72" />
        <line x1="220" y1="200" x2="90" y2="328" />
        <line x1="220" y1="200" x2="350" y2="328" />
      </g>
      <circle cx="220" cy="200" r="74" fill="#D9541E" />
      <text x="220" y="194" textAnchor="middle" fontSize="16" style={{ fill: '#111111', fontWeight: 700 }}>Informática</text>
      <text x="220" y="214" textAnchor="middle" fontSize="16" style={{ fill: '#111111', fontWeight: 700 }}>para Negócios</text>
      <g fill="#FFFFFF" stroke="rgba(17,17,17,.55)" strokeWidth="2">
        <rect x="14" y="42" width="152" height="60" rx="30" />
        <rect x="274" y="42" width="152" height="60" rx="30" />
        <rect x="14" y="298" width="152" height="60" rx="30" />
        <rect x="274" y="298" width="152" height="60" rx="30" />
      </g>
      <text x="90" y="68" textAnchor="middle" fontSize="14">Tecnologia da</text>
      <text x="90" y="86" textAnchor="middle" fontSize="14">informação</text>
      <text x="350" y="78" textAnchor="middle" fontSize="14">Administração</text>
      <text x="90" y="334" textAnchor="middle" fontSize="14">Sistemas</text>
      <text x="350" y="334" textAnchor="middle" fontSize="14">Negócios</text>
    </svg>
  );
}

export default function Education() {
  return (
    <section className="band band--creme" id="formacao" aria-labelledby="h-formacao">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-formacao">Minha formação</h2>
        </Reveal>
        <div className="edu">
          <Reveal className="edu-card">
            <h3>FATEC Mauá — Faculdade de Tecnologia de Mauá</h3>
            <dl className="facts">
              {EDU_FACTS.map(([rotulo, valor]) => (
                <div key={rotulo}>
                  <dt>{rotulo}</dt>
                  <dd>{valor}</dd>
                </div>
              ))}
            </dl>
            {EDU_TEXT.map((t) => (
              <p key={t}>{t}</p>
            ))}
            <div className="path" aria-label="Período do curso">
              <div>
                <span className="dot"></span>
                <b>Ago 2024</b>
                <span>Início</span>
              </div>
              <i aria-hidden="true"></i>
              <div style={{ textAlign: 'right' }}>
                <span className="dot dot--o" style={{ marginLeft: 'auto' }}></span>
                <b>Jun 2027</b>
                <span>Previsão de conclusão</span>
              </div>
            </div>
          </Reveal>
          <Reveal as="figure" className="edu-fig">
            <Diagrama />
            <figcaption>
              Um curso interdisciplinar: tecnologia da informação, administração, sistemas e negócios.
            </figcaption>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
