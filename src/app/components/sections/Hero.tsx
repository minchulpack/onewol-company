import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { useI18n } from '../../lib/i18n';
import { ButtonLink } from '../ui/Button';

const HERO_IMG =
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1800&q=85&auto=format&fit=crop';

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative h-screen min-h-[640px] overflow-hidden flex items-end"
    >
      {/* ── Background image with parallax ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={reduce ? undefined : { y: imgY }}
      >
        <img
          src={HERO_IMG}
          alt=""
          className="h-[115%] w-full object-cover object-center"
          loading="eager"
          aria-hidden="true"
        />
        {/* Gradient overlays — morning mist */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C14]/80 via-[#0D0C14]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C14]/30 to-transparent" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        className="relative z-10 w-full pb-16 md:pb-24 px-6 md:px-12 lg:px-20"
        style={reduce ? undefined : { y: textY, opacity }}
      >
        <div className="max-w-[1320px] mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-[10px] tracking-[0.36em] uppercase text-[#C8AA80] mb-6"
          >
            {t.hero.eyebrow}
          </motion.p>

          {/* Main headline — editorial serif */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
              className="font-display text-[clamp(36px,6.5vw,90px)] font-light leading-[1.05]
                         tracking-[-0.025em] text-white max-w-[900px]"
            >
              {t.hero.title.split(',\n')[0]},
              <br />
              <span className="italic">{t.hero.title.split(',\n')[1]?.trim()}</span>
            </motion.h1>
          </div>

          {/* Sub + CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12"
          >
            <p className="max-w-[360px] text-[13px] leading-[1.85] text-white/60">
              {t.hero.body.split('\n')[0]}
            </p>
            <div className="flex items-center gap-4 shrink-0">
              <ButtonLink href="/contact" size="lg"
                className="!bg-white !text-[#0D0C14] hover:!bg-white/90 !border-0">
                {t.hero.primaryCta}
              </ButtonLink>
              <ButtonLink href="/capabilities" size="lg" variant="ghost"
                className="!text-white !border-white/30 hover:!border-white hover:!bg-white/10">
                {t.hero.secondaryCta}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Keyword strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-12 flex items-center gap-6 text-[9px] tracking-[0.3em] uppercase text-white/30"
          >
            {['Formula', 'Package', 'Manufacturing', 'Export'].map((kw, i) => (
              <span key={kw} className="flex items-center gap-6">
                {i > 0 && <span className="w-6 h-px bg-white/20" />}
                {kw}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute right-8 bottom-10 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/40 rotate-90 mb-4">
          scroll
        </span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-white/60"
            animate={{ height: ['0%', '100%'], top: ['0%', '0%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            style={{ height: '40%' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
