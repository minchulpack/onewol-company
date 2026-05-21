import { motion } from 'motion/react';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { RevealGroup } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

export function Process() {
  const { t } = useI18n();
  return (
    <SectionShell
      id="process"
      eyebrow={t.process.eyebrow}
      title={t.process.title}
      body={t.process.body}
      className="bg-[#FBF8F3]"
    >
      <RevealGroup className="relative grid gap-px md:grid-cols-3 lg:grid-cols-6 bg-[var(--brand-line)] rounded-3xl overflow-hidden border border-[var(--brand-line)]">
        {t.process.steps.map((s) => (
          <motion.div
            key={s.step}
            variants={fadeUp}
            className="group flex flex-col bg-white p-6 md:p-7 min-h-[220px] transition-colors duration-500 hover:bg-[var(--brand-warm-white)]"
          >
            <div className="text-[12px] tracking-[0.24em] text-[var(--brand-accent)]">
              {s.step}
            </div>
            <div className="mt-1 h-px w-8 bg-[var(--brand-muted-sand)] transition-all duration-500 group-hover:w-16" />
            <h3 className="mt-5 text-[16px] md:text-[17px] leading-[1.35] text-[var(--brand-charcoal)]">
              {s.title}
            </h3>
            <p className="mt-3 text-[13.5px] leading-[1.7] text-[var(--brand-soft-gray)]">
              {s.body}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}
