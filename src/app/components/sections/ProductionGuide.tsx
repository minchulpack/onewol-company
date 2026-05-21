import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { ButtonLink } from '../ui/Button';
import { RevealGroup, Reveal } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

export function ProductionGuide() {
  const { t } = useI18n();
  return (
    <SectionShell
      id="guide"
      eyebrow={t.productionGuide.eyebrow}
      title={t.productionGuide.title}
      body={t.productionGuide.body}
    >
      <RevealGroup className="grid gap-4 md:grid-cols-3">
        {t.productionGuide.cards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="rounded-3xl border border-[var(--brand-line)] bg-[var(--brand-soft-beige)]/30 p-7 md:p-9 min-h-[220px]"
          >
            <div className="text-[11px] tracking-[0.24em] text-[var(--brand-accent)]">
              0{i + 1}
            </div>
            <h3 className="mt-5 text-[18px] md:text-[20px] leading-[1.3] text-[var(--brand-charcoal)]">
              {c.title}
            </h3>
            <p className="mt-3 text-[14px] leading-[1.7] text-[var(--brand-soft-gray)]">
              {c.body}
            </p>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mt-12">
        <ButtonLink href="/contact" size="lg">
          {t.productionGuide.cta}
          <ArrowRight size={16} />
        </ButtonLink>
      </Reveal>
    </SectionShell>
  );
}
