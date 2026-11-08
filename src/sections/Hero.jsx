import Icon from '../components/Icon.jsx';
import { HERO_CHIPS } from '../data.js';
import { goTo } from '../hooks.js';

const atraso = (s) => ({ animationDelay: s });

export default function Hero() {
  return (
    <section className="band band--creme hero" id="topo" aria-labelledby="h-hero">
      <svg className="hero-net" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
        <g stroke="rgba(17,17,17,.16)" strokeWidth="2" fill="none">
          <path d="M70 430 L210 330 L330 400 L450 250 L560 330" />
          <path d="M210 330 L260 190 L450 250" />
          <path d="M330 400 L360 540 L520 470 L560 330" />
          <path d="M260 190 L400 90 L450 250" />
        </g>
        <g fill="rgba(17,17,17,.22)">
          <circle cx="70" cy="430" r="7" />
          <circle cx="330" cy="400" r="8" />
          <circle cx="260" cy="190" r="7" />
          <circle cx="400" cy="90" r="6" />
          <circle cx="360" cy="540" r="7" />
          <circle cx="520" cy="470" r="6" />
          <circle cx="560" cy="330" r="8" />
        </g>
        <circle cx="210" cy="330" r="10" fill="#D9541E" />
        <circle cx="450" cy="250" r="12" fill="#D9541E" />
      </svg>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="rise" id="h-hero">Carlos Vitor do Nascimento</h1>
          <p className="role rise" style={atraso('.08s')}>
            Informática para Negócios | Tecnologia, Desenvolvimento e Gestão.
          </p>
          <p className="lead rise" style={atraso('.16s')}>
            Transformando conhecimentos em tecnologia em soluções práticas para conectar sistemas, dados e negócios.
          </p>
          <p className="desc rise" style={atraso('.24s')}>
            Estudante de Informática para Negócios, com experiência profissional em suporte de TI, rotinas
            administrativas, vendas e e-commerce. Interessado em desenvolvimento de sistemas, análise de dados e
            automação de processos.
          </p>
          <div className="cta rise" style={atraso('.32s')}>
            <a className="btn btn--or" href="#projetos" onClick={(e) => goTo(e, 'projetos')}>
              Conheça meus projetos <Icon name="arrow" />
            </a>
            <a className="btn btn--linha-w" href="#contato" onClick={(e) => goTo(e, 'contato')}>
              Vamos conversar
            </a>
          </div>
          <ul className="chips rise" style={atraso('.4s')} aria-label="Destaques">
            {HERO_CHIPS.map(([icone, texto]) => (
              <li className="chip chip--w" key={texto}>
                <Icon name={icone} />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <figure className="hero-photo rise" style={atraso('.2s')}>
          <img
            src="img/carlos.webp"
            width="864"
            height="864"
            alt="Retrato de Carlos Vitor do Nascimento, de óculos redondos e jaqueta preta, sorrindo"
          />
          <figcaption className="photo-tag">
            <strong>Estudante de Informática para Negócios</strong>
            <span>FATEC Mauá</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
