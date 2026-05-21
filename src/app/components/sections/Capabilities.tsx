import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../../lib/i18n';
import { SectionShell } from '../ui/SectionShell';
import { RevealGroup } from '../ui/Reveal';
import { fadeUp } from '../../lib/motion';

export function Capabilities() {
  const { t } = useI18n();
  const [active, setActive] = useState<string>('all');

  const groups = t.capabilities.groups;
  const filtered = active === 'all' ? groups : groups.filter((g) => g.key === active);

  return (
    <SectionShell
      id="capabilities"
      eyebrow={t.capabilities.eyebrow}
      title={t.capabilities.title}
      body={t.capabilities.body}
    >
      <div className="mb-10 flex flex-wrap gap-2">
        <FilterChip active={active === 'all'} onClick={() => setActive('all')}>
          All
        </FilterChip>
        {groups.map((g) => (
          <FilterChip
            key={g.key}
            active={active === g.key}
            onClick={() => setActive(g.key)}
          >
            {g.title}
          </FilterChip>
        ))}
      </div>

      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((g) => (
            <motion.article
              key={g.key}
              layout
              variants={fadeUp}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl border border-[var(--brand-line)] bg-white p-6 md:p-7 min-h-[220px] transition-all duration-500 hover:border-[var(--brand-muted-sand)] hover:-translate-y-1"
            >
              <div className="text-[11px] tracking-[0.22em] uppercase text-[var(--brand-muted-sand)]">
                Category
              </div>
              <h3 className="mt-4 text-[17px] md:text-[19px] leading-[1.3] text-[var(--brand-charcoal)]">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-1.5 text-[13.5px] leading-[1.65] text-[var(--brand-soft-gray)]">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span className="text-[var(--brand-muted-sand)]">·</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </AnimatePresence>
      </RevealGroup>
    </SectionShell>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs tracking-wide transition-all duration-300 ${
        active
          ? 'border-[var(--brand-charcoal)] bg-[var(--brand-charcoal)] text-[var(--brand-warm-white)]'
          : 'border-[var(--brand-line)] text-[var(--brand-charcoal)]/70 hover:border-[var(--brand-charcoal)]/40'
      }`}
    >
      {children}
    </button>
  );
}
