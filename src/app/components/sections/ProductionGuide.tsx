import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { ButtonLink } from '../ui/Button';

const GUIDE_IMG =
  'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1400&q=85&auto=format&fit=crop';

const CARD_IMGS = [
  'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?w=600&q=80&auto=format&fit=crop',
];

export function ProductionGuide() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section id="production-guide" ref={ref} className="scroll-mt-20 bg-[#FAFAF8]">
      {/* ── Full-bleed banner ── */}
      <div className="relative h-[55vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y: bgY }}
        >
          <img
            src={GUIDE_IMG}
            alt=""
            aria-hidden="true"
            className="h-[112%] w-full object-cover object-center -mt-[6%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0C14]/60 to-[#0D0C14]/40" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-end
                        px-6 md:px-12 lg:px-20 pb-12 max-w-[1320px] mx-auto">
          <p className="text-[9px] tracking-[0.36em] uppercase text-[#C8AA80] mb-4">
            {t.productionGuide.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(28px,4.5vw,60px)] font-light
                         leading-[1.1] tracking-[-0.02em] text-white max-w-[480px]">
            {t.productionGuide.title}
          </h2>
        </div>
      </div>

      {/* ── Body + cards ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <p data-reveal="up"
           className="max-w-[520px] text-[14px] leading-[1.9] text-[#8A857D] whitespace-pre-line mb-14">
          {t.productionGuide.body}
        </p>

        {/* Cards */}
        <div data-stagger className="grid sm:grid-cols-3 gap-4 mb-12">
          {t.productionGuide.cards.map((card, i) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <img
                src={CARD_IMGS[i]}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-center
                           transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C14]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#C8AA80] mb-2">
                  0{i + 1}
                </p>
                <p className="font-display text-[20px] font-light leading-snug text-white mb-2">
                  {card.title}
                </p>
                <p className="text-[12px] leading-[1.7] text-white/50">{card.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-reveal="up" className="flex justify-center">
          <ButtonLink href="/contact" size="lg"
            className="group flex items-center gap-3 !bg-[#111] !text-white !border-0
                       hover:!bg-[#1a1a1a]">
            {t.productionGuide.cta}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
