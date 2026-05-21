import { motion } from 'motion/react';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { RevealGroup } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

const sizes = [
  'text-[22px]',
  'text-[18px]',
  'text-[26px]',
  'text-[20px]',
  'text-[16px]',
  'text-[24px]',
  'text-[18px]',
  'text-[20px]',
];

export function Partners() {
  const { t } = useI18n();
  return (
    <SectionShell
      id="partners"
      eyebrow={t.partners.eyebrow}
      title={t.partners.title}
      body={t.partners.body}
      className="bg-[#FBF8F3]"
    >
      <RevealGroup className="flex flex-wrap items-baseline justify-center gap-x-8 gap-y-6 max-w-4xl mx-auto text-center">
        {t.partners.list.map((p, i) => (
          <motion.span
            key={`${p}-${i}`}
            variants={fadeUp}
            className={`${sizes[i % sizes.length]} text-[var(--brand-charcoal)]/55 hover:text-[var(--brand-accent)] transition-colors duration-500 tracking-[-0.005em] cursor-default`}
          >
            {p}
          </motion.span>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}
