import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { INTERESTS, SKILLS } from '../data.js';

export default function Skills() {
  return (
    <section className="band band--branco" id="competencias" aria-labelledby="h-comp">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-comp">Ferramentas e conhecimentos</h2>
        </Reveal>
        <div className="skills">
          {SKILLS.map((s, i) => (
            <Reveal as="article" className="skill" i={i} key={s.titulo}>
              <div className="skill-h">
                <span className="ico">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.titulo}</h3>
              </div>
              <ul className="chips">
                {s.itens.map((t) => (
                  <li className="chip" key={t}>{t}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="interest">
          <h3>Áreas de interesse</h3>
          <ul className="chips">
            {INTERESTS.map(([icone, texto]) => (
              <li className="chip chip--w" key={texto}>
                <Icon name={icone} />
                {texto}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
