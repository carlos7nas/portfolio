import { useEffect, useState } from 'react';

export const reducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Rola suavemente até a seção, sem alterar o endereço da página. */
export function goTo(event, id, depois) {
  const el = document.getElementById(id);
  if (!el) return;
  event.preventDefault();
  if (depois) depois();
  el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
}

/** Devolve o id da seção que está no meio da tela, para destacar o item do menu. */
export function useActiveSection(ids) {
  const [ativo, setAtivo] = useState(null);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setAtivo(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [ids]);
  return ativo;
}
