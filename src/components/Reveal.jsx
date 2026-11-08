import { useEffect, useRef, useState } from 'react';
import { reducedMotion } from '../hooks.js';

/**
 * Entrada discreta ao rolar. O conteúdo já nasce visível; só o que está abaixo
 * da primeira tela ganha um leve deslize quando chega perto.
 */
export default function Reveal({ as: Tag = 'div', i = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [estado, setEstado] = useState('visivel'); // 'pre' | 'entrando' | 'visivel'

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window) || reducedMotion()) return undefined;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.92) return undefined;

    let timer;
    setEstado('pre');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setEstado('entrando');
        io.disconnect();
        timer = setTimeout(() => setEstado('visivel'), 1000);
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-r=""
      className={className + (estado === 'pre' ? ' pre' : '')}
      style={estado === 'visivel' ? undefined : { transitionDelay: `${(i % 4) * 70}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
