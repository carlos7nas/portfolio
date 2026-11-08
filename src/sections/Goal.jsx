import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { GOAL, GOAL_FIELDS } from '../data.js';

export default function Goal() {
  return (
    <section className="band band--creme" id="objetivo" aria-labelledby="h-obj">
      <div className="wrap goal">
        <Reveal className="goal-text">
          <div className="sec-head">
            <h2 id="h-obj">Conectando tecnologia a resultados</h2>
          </div>
          {GOAL.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </Reveal>
        <ul className="fields" aria-label="Campos de atuação desejados">
          {GOAL_FIELDS.map(([icone, texto], i) => (
            <Reveal as="li" className="field" i={i} key={texto}>
              <Icon name={icone} />
              <strong>{texto}</strong>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
