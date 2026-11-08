import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

const LightboxContext = createContext(() => {});

/** Devolve open(itens, indice, elementoQueAbriu). Cada item: { src, alt, titulo, legenda }. */
export const useLightbox = () => useContext(LightboxContext);

export function LightboxProvider({ children }) {
  const [estado, setEstado] = useState(null); // { itens, indice }
  const dialogo = useRef(null);
  const origem = useRef(null);

  const abrir = useCallback((itens, indice, de) => {
    origem.current = de;
    setEstado({ itens, indice });
  }, []);

  useEffect(() => {
    const d = dialogo.current;
    if (estado && d && !d.open) {
      if (d.showModal) d.showModal();
      else d.setAttribute('open', '');
    }
  }, [estado]);

  const fechar = () => {
    const d = dialogo.current;
    if (!d) return;
    if (d.close) d.close();
    else d.removeAttribute('open');
  };

  const passar = (n) =>
    setEstado((s) => (s ? { ...s, indice: (s.indice + n + s.itens.length) % s.itens.length } : s));

  const aoFechar = () => {
    setEstado(null);
    if (origem.current && origem.current.focus) origem.current.focus();
  };

  const item = estado ? estado.itens[estado.indice] : null;

  return (
    <LightboxContext.Provider value={abrir}>
      {children}
      <dialog
        ref={dialogo}
        className="lightbox"
        aria-label="Imagem ampliada"
        onClose={aoFechar}
        onClick={(e) => {
          const c = e.target.classList;
          if (e.target === e.currentTarget || c.contains('lb') || c.contains('lb-stage')) fechar();
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') passar(-1);
          if (e.key === 'ArrowRight') passar(1);
        }}
      >
        <div className="lb">
          <div className="lb-top">
            <p className="lb-title">
              {item && item.titulo}
              {item && <span>{item.legenda}</span>}
            </p>
            <button className="lb-btn" type="button" aria-label="Fechar" onClick={fechar}>
              <Icon name="x" />
            </button>
          </div>
          <div className="lb-stage">{item && <img src={item.src} alt={item.alt} />}</div>
          <div className="lb-nav">
            <button className="lb-btn" type="button" aria-label="Imagem anterior" onClick={() => passar(-1)}>
              <Icon name="left" />
            </button>
            <button className="lb-btn" type="button" aria-label="Próxima imagem" onClick={() => passar(1)}>
              <Icon name="right" />
            </button>
          </div>
        </div>
      </dialog>
    </LightboxContext.Provider>
  );
}
