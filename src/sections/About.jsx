import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { ABOUT, AREAS } from '../data.js';

export default function About() {
  const [primeiro, ...resto] = ABOUT;
  return (
    <section className="band band--branco" id="sobre" aria-labelledby="h-sobre">
      <div className="wrap">
        <div className="about">
          <div>
            <Reveal className="sec-head">
              <h2 id="h-sobre">Um pouco sobre minha trajetória</h2>
            </Reveal>
            <Reveal className="about-text">
              <p className="first">{primeiro}</p>
              {resto.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
          </div>
          <ul className="areas" aria-label="Áreas de interesse">
            {AREAS.map(([icone, texto], i) => (
              <Reveal as="li" className="area" i={i} key={texto}>
                <Icon name={icone} />
                <strong>{texto}</strong>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
