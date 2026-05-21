import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { RevealGroup } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

export function Services() {
  const { t, pathFor, locale } = useI18n();
  return (
    <SectionShell
      id="services"
      eyebrow={t.services.eyebrow}
      title={t.services.title}
      body={t.services.body}
      className="bg-[#FBF8F3]"
    >
      <RevealGroup className="grid gap-5 md:grid-cols-3">
        {t.services.items.map((s) => (
          <motion.div key={s.key} variants={fadeUp}>
            <Link
              to={pathFor(locale, '/contact')}
              className="group flex flex-col rounded-3xl border border-[var(--brand-line)] bg-white p-7 md:p-9 min-h-[340px] transition-all duration-500 hover:border-[var(--brand-muted-sand)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(23,23,23,0.18)]"
            >
            <div className="flex items-start justify-between">
              <div className="text-[11px] tracking-[0.28em] uppercase text-[var(--brand-accent)]">
                {s.label}
              </div>
              <ArrowUpRight
                size={20}
                className="text-[var(--brand-charcoal)]/30 transition-all duration-500 group-hover:text-[var(--brand-accent)] group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
            <h3 className="mt-6 text-[22px] md:text-[26px] leading-[1.25] tracking-[-0.01em] text-[var(--brand-charcoal)]">
              {s.label}
            </h3>
            <p className="mt-4 text-[14px] md:text-[15px] leading-[1.75] text-[var(--brand-soft-gray)] flex-1">
              {s.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--brand-line)] px-3 py-1 text-[11px] tracking-wide text-[var(--brand-charcoal)]/70"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 text-[12px] tracking-[0.18em] uppercase text-[var(--brand-charcoal)]/40 transition-colors group-hover:text-[var(--brand-accent)]">
              {t.services.cardCta}
            </div>
            </Link>
          </motion.div>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}
