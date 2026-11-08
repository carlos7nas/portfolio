import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { EXPERIENCES } from '../data.js';

export default function Experience() {
  return (
    <section className="band band--branco" id="experiencia" aria-labelledby="h-exp">
      <div className="wrap exp">
        <Reveal className="sec-head">
          <h2 id="h-exp">Minha experiência profissional</h2>
          <p className="sub">
            Experiências que contribuíram para minha formação, visão de negócios e desenvolvimento profissional.
          </p>
        </Reveal>
        <ol className="timeline">
          {EXPERIENCES.map((e, i) => (
            <Reveal as="li" className={'tl' + (e.atual ? ' tl--now' : '')} i={i} key={e.empresa}>
              <span className="tl-node" aria-hidden="true">
                <Icon name={e.icon} />
              </span>
              <article className="tl-card">
                {e.atual && (
                  <div className="tl-top">
                    <span className="tag tag--or">Atual</span>
                  </div>
                )}
                <h3>{e.empresa}</h3>
                <p className="tl-role">{e.cargo}</p>
                <p>{e.texto}</p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
