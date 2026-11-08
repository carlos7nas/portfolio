import Reveal from '../components/Reveal.jsx';
import { CONNECTIONS } from '../data.js';

export default function Connections() {
  return (
    <section className="band band--creme" id="conexoes" aria-labelledby="h-con">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="h-con">Aprendizado aplicado na prática</h2>
          <p className="sub">Cada conhecimento adquirido representa uma oportunidade de desenvolver novas soluções.</p>
        </Reveal>
        <ul className="links">
          {CONNECTIONS.map(({ de, para }, i) => (
            <Reveal as="li" className="link-row" i={i} key={para[0]}>
              <div className="node node--de">
                <strong>{de[0]}</strong>
                <span>{de[1]}</span>
              </div>
              <div className="wire" aria-hidden="true"></div>
              <div className="node node--para">
                <h3>{para[0]}</h3>
                <p>{para[1]}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
