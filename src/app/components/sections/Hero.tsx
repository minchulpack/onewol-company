import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { useI18n } from '../../lib/i18n';
import { ButtonLink } from '../ui/Button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { easeRefined } from '../../lib/motion';

export function Hero() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Soft floating gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <motion.div
          className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(closest-side, rgba(201,183,159,0.45), transparent 70%)',
          }}
          animate={reduce ? undefined : { y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-32 h-[480px] w-[480px] rounded-full opacity-35"
          style={{
            background:
              'radial-gradient(closest-side, rgba(233,223,208,0.8), transparent 70%)',
          }}
          animate={reduce ? undefined : { y: [0, -25, 0], x: [0, 18, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-10rem)]">
          {/* Left: Text Content */}
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeRefined }}
              className="text-xs tracking-[0.32em] uppercase text-[var(--brand-accent)] mb-6"
            >
              {t.hero.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeRefined, delay: 0.1 }}
              className="text-[clamp(32px,5.6vw,68px)] leading-[1.15] tracking-[-0.015em] text-[var(--brand-charcoal)] whitespace-pre-line"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: easeRefined, delay: 0.25 }}
              className="mt-7 max-w-xl text-[15px] md:text-[17px] leading-[1.75] text-[var(--brand-soft-gray)] whitespace-pre-line"
            >
              {t.hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeRefined, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <ButtonLink href="/contact" size="lg">
                {t.hero.primaryCta}
                <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href="/capabilities" size="lg" variant="secondary">
                {t.hero.secondaryCta}
              </ButtonLink>
            </motion.div>

            {/* Editorial keyword strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="mt-16 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.25em] uppercase text-[var(--brand-charcoal)]/40"
            >
              <span>Formula</span>
              <span>·</span>
              <span>Package</span>
              <span>·</span>
              <span>Manufacturing</span>
              <span>·</span>
              <span>Export</span>
            </motion.div>
          </div>

          {/* Right: Hero Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: easeRefined, delay: 0.3 }}
            className="relative h-[70vh] lg:h-[80vh] rounded-2xl overflow-hidden"
          >
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-soft-gray)]" />
            </div>

            <motion.div
              style={
                reduce
                  ? undefined
                  : {
                      y: imageY,
                      scale: imageScale,
                    }
              }
              className="relative h-full w-full"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764694071508-e4b1efcd39bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1400"
                alt="Luxury cosmetic face cream jar with silver lid"
                className="h-full w-full object-cover rounded-2xl"
              />

              {/* Subtle gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl" />
            </motion.div>

            {/* Floating product details badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: easeRefined }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-2xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-[var(--brand-accent)] mb-1">
                    Premium Quality
                  </p>
                  <p className="text-sm text-[var(--brand-charcoal)]">
                    Korean Beauty Manufacturing Excellence
                  </p>
                </div>
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: 1.4 + i * 0.1,
                        ease: easeRefined,
                      }}
                      className="w-2 h-2 rounded-full bg-[var(--brand-accent)]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
