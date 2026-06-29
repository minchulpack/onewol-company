import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { Link } from '../ui/Link';

const SERVICE_IMGS = [
  '/5.png',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=900&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617897903246-719242758050?w=900&q=85&auto=format&fit=crop',
];

export function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="scroll-mt-20 bg-[#0D0C14] text-white overflow-hidden">
      {/* ── Header ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div data-reveal="up">
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#C8AA80] mb-4">
              {t.services.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-light leading-[1.1]
                           tracking-[-0.02em] text-white">
              {t.services.title}
            </h2>
          </div>
          <p data-reveal="fade" className="max-w-[280px] text-[13px] leading-[1.8] text-white/40">
            {t.services.body}
          </p>
        </div>
      </div>

      {/* ── Service panels ── */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left: tab list */}
        <div className="lg:w-[420px] shrink-0 border-t border-white/10">
          {t.services.items.map((item, i) => (
            <button
              key={item.key}
              onClick={() => setActive(i)}
              className={`w-full text-left px-6 md:px-12 lg:px-20 py-8 border-b border-white/10
                         transition-all duration-400 group
                         ${active === i ? 'bg-white/5' : 'hover:bg-white/[0.03]'}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-[9px] tracking-[0.32em] uppercase mb-2 transition-colors
                                ${active === i ? 'text-[#C8AA80]' : 'text-white/30'}`}>
                    0{i + 1}
                  </p>
                  <p className={`font-display text-[clamp(24px,3vw,40px)] font-light leading-none
                                transition-colors duration-300
                                ${active === i ? 'text-white' : 'text-white/40'}`}>
                    {item.label}
                  </p>
                </div>
                <ArrowRight
                  size={18}
                  className={`transition-all duration-300
                             ${active === i ? 'text-[#C8AA80] translate-x-0' : 'text-white/20 -translate-x-2'}`}
                />
              </div>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[13px] leading-[1.8] text-white/50">
                      {item.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] tracking-[0.2em] uppercase px-3 py-1.5
                                     border border-white/20 text-white/40 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 text-[11px]
                                 tracking-[0.15em] uppercase text-[#C8AA80] hover:gap-3
                                 transition-all duration-300"
                    >
                      {t.services.cardCta}
                      <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>

        {/* Right: image panel */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={SERVICE_IMGS[active]}
              alt={t.services.items[active].label}
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#0D0C14]/30" />
        </div>
      </div>
    </section>
  );
}
