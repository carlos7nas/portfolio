import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { NAV } from '../data.js';
import { goTo, useActiveSection } from '../hooks.js';

const IDS = NAV.map(([id]) => id);

export default function Header() {
  const [aberto, setAberto] = useState(false);
  const botao = useRef(null);
  const ativo = useActiveSection(IDS);

  useEffect(() => {
    if (!aberto) return undefined;
    const aoTeclar = (e) => {
      if (e.key === 'Escape') {
        setAberto(false);
        if (botao.current) botao.current.focus();
      }
    };
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, [aberto]);

  const ir = (id) => (e) => goTo(e, id, () => setAberto(false));

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#topo" onClick={ir('topo')}>
          <span>Carlos Vitor</span>
        </a>
        <nav className={'menu' + (aberto ? ' open' : '')} id="menu" aria-label="Navegação principal">
          {NAV.map(([id, rotulo]) => (
            <a key={id} href={'#' + id} onClick={ir(id)} aria-current={ativo === id ? 'true' : undefined}>
              {rotulo}
            </a>
          ))}
        </nav>
        <button
          ref={botao}
          className="menu-btn"
          type="button"
          aria-expanded={aberto}
          aria-controls="menu"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setAberto((v) => !v)}
        >
          <Icon name={aberto ? 'x' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
