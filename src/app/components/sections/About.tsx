import { motion } from 'motion/react';
import { useI18n } from '../../lib/i18n';
import { Reveal, RevealGroup } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

export function About() {
  const { t } = useI18n();
  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 py-24 sm:py-28 md:py-32 lg:py-40 bg-[var(--brand-warm-white)]"
    >
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <Reveal>
          <div className="text-xs tracking-[0.24em] uppercase text-[var(--brand-accent)] mb-4">
            {t.about.eyebrow}
          </div>
          <h2 className="text-[clamp(28px,4vw,44px)] leading-[1.2] tracking-[-0.01em] text-[var(--brand-charcoal)]">
            {t.about.title}
          </h2>
          <p className="mt-6 text-[15px] md:text-[16px] leading-[1.8] text-[var(--brand-soft-gray)] whitespace-pre-line">
            {t.about.body}
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4">
          {t.about.features.map((f, i) => (
            <motion.div
              key={f}
              variants={fadeUp}
              className="group relative rounded-2xl border border-[var(--brand-line)] bg-white/60 p-6 md:p-7 transition-all duration-500 hover:bg-white hover:border-[var(--brand-muted-sand)] hover:-translate-y-1"
            >
              <div className="text-[11px] tracking-[0.2em] text-[var(--brand-muted-sand)]">
                0{i + 1}
              </div>
              <div className="mt-6 text-[15px] md:text-[17px] text-[var(--brand-charcoal)] tracking-[-0.005em]">
                {f}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
