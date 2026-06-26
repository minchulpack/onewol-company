import { useEffect, useRef } from 'react';

/**
 * useScrollReveal
 *
 * IntersectionObserver 기반 스크롤 트리거 애니메이션 훅.
 * globals.css의 [data-reveal] / [data-stagger] 클래스와 함께 작동.
 *
 * 사용법 1 — 앱 전체에 적용 (App.tsx):
 *   import { ScrollRevealProvider } from './lib/useScrollReveal';
 *   <ScrollRevealProvider />
 *
 * 사용법 2 — 컴포넌트에서 직접:
 *   const ref = useScrollReveal<HTMLElement>();
 *   <section ref={ref} data-reveal="up">...</section>
 *
 * HTML 속성:
 *   data-reveal="up"    → fade + slide up (기본값)
 *   data-reveal="fade"  → fade only
 *   data-reveal="left"  → slide from left
 *   data-reveal="right" → slide from right
 *   data-reveal="scale" → scale in
 *   data-stagger        → 자식 요소 순서대로 딜레이 등장
 *   data-reveal-delay="200" → ms 단위 추가 딜레이
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current ?? document;
    const targets = (root instanceof Document ? root : root).querySelectorAll<HTMLElement>(
      '[data-reveal], [data-stagger]'
    );

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay ?? '0', 10);

          if (delay > 0) {
            setTimeout(() => el.classList.add('is-visible'), delay);
          } else {
            el.classList.add('is-visible');
          }

          observer.unobserve(el);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
        ...options,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * ScrollRevealProvider
 * App.tsx에서 한 번만 마운트하면 전체 페이지에 적용됩니다.
 */
export function ScrollRevealProvider() {
  useScrollReveal();
  return null;
}
