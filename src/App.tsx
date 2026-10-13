import { useEffect } from 'react';
import { About, Achievements, Contact, Experience, Header, Hero, SelectedWork, Skills } from './Sections';

function usePortfolioMotion() {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('has-reveal');
      const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); currentObserver.unobserve(entry.target); }
      }), { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
      revealItems.forEach((item) => observer.observe(item));
      return () => { observer.disconnect(); document.documentElement.classList.remove('has-reveal'); };
    }
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return undefined;
  }, []);

  useEffect(() => {
    const cursor = document.querySelector<HTMLElement>('.cursor-follower');
    if (!cursor || !window.matchMedia('(pointer: fine)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      cursor.classList.add('cursor-visible');
    };
    const updateHover = (event: PointerEvent) => {
      if (event.target instanceof Element && event.target.closest('a, button')) cursor.classList.add('cursor-link');
      else cursor.classList.remove('cursor-link');
    };
    const hideCursor = () => cursor.classList.remove('cursor-visible');
    window.addEventListener('pointermove', moveCursor); window.addEventListener('pointerover', updateHover);
    document.documentElement.addEventListener('pointerleave', hideCursor);
    return () => { window.removeEventListener('pointermove', moveCursor); window.removeEventListener('pointerover', updateHover); document.documentElement.removeEventListener('pointerleave', hideCursor); };
  }, []);
}

export default function App() {
  usePortfolioMotion();
  return <><div className="cursor-follower" aria-hidden="true"><span /></div><Header /><main id="top"><Hero /><SelectedWork /><Skills /><Achievements /><Experience /><About /><Contact /></main></>;
}
