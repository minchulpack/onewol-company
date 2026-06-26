import { useRef } from 'react';
import { motion, useAnimationFrame } from 'motion/react';
import { useI18n } from '../../lib/i18n';

function Marquee({ items }: { items: string[] }) {
  const x = useRef(0);
  const ref = useRef<HTMLDivElement>(null);
  const speed = 0.6; // px per frame

  useAnimationFrame(() => {
    if (!ref.current) return;
    x.current -= speed;
    const w = ref.current.scrollWidth / 2;
    if (Math.abs(x.current) >= w) x.current = 0;
    ref.current.style.transform = `translateX(${x.current}px)`;
  });

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div ref={ref} className="flex gap-12 whitespace-nowrap" style={{ width: 'max-content' }}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-display text-[clamp(18px,2.2vw,28px)] font-light
                       tracking-[-0.01em] text-white/40 hover:text-white/70
                       transition-colors duration-500 cursor-default shrink-0"
          >
            {name}
            <span className="ml-12 inline-block text-[#C8AA80]/30 text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function Partners() {
  const { t } = useI18n();

  return (
    <section id="partners" className="scroll-mt-20 bg-[#0D0C14] text-white
                                      border-t border-white/[0.06]">
      {/* Header */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-14">
        <div data-reveal="up" className="flex flex-col md:flex-row md:items-end gap-6 md:gap-16">
          <div>
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#C8AA80] mb-4">
              {t.partners.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-light
                           leading-[1.1] tracking-[-0.02em] text-white">
              {t.partners.title}
            </h2>
          </div>
          <p className="max-w-[300px] text-[13px] leading-[1.8] text-white/35 md:mb-2">
            {t.partners.body}
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="py-6 flex flex-col gap-5 border-t border-white/[0.06]">
        <Marquee items={t.partners.list.slice(0, 10)} />
        <div className="relative">
          <div
            className="overflow-hidden"
            style={{ direction: 'rtl' }}
          >
            <Marquee items={t.partners.list.slice(9)} />
          </div>
        </div>
      </div>

      <div className="pb-16" />
    </section>
  );
}
