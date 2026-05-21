import type { PropsWithChildren } from 'react';
import { Reveal } from './Reveal';

interface Props {
  id: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  align?: 'left' | 'center';
  className?: string;
  innerClassName?: string;
}

export function SectionShell({
  id,
  eyebrow,
  title,
  body,
  align = 'left',
  className = '',
  innerClassName = '',
  children,
}: PropsWithChildren<Props>) {
  const isCenter = align === 'center';
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-6 py-24 sm:py-28 md:py-32 lg:py-40 ${className}`}
    >
      <div className={`mx-auto w-full max-w-[1200px] ${innerClassName}`}>
        {(eyebrow || title || body) && (
          <Reveal
            className={`mb-12 md:mb-16 max-w-3xl ${isCenter ? 'mx-auto text-center' : ''}`}
          >
            {eyebrow && (
              <div className="mb-4 text-xs tracking-[0.24em] uppercase text-[var(--brand-accent)]">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-[-0.01em] text-[var(--brand-charcoal)] whitespace-pre-line">
                {title}
              </h2>
            )}
            {body && (
              <p className="mt-5 text-[15px] md:text-[16px] leading-[1.7] text-[var(--brand-soft-gray)] whitespace-pre-line">
                {body}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
