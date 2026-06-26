import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { useI18n } from '../../lib/i18n';

export function Capabilities() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="capabilities" className="scroll-mt-20 bg-[#FAFAF8]">
      {/* ── Header ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-20 md:pt-28 pb-14">
        <div data-reveal="up" className="max-w-[560px]">
          <p className="text-[9px] tracking-[0.36em] uppercase text-[#9A7A56] mb-5">
            {t.capabilities.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,64px)] font-light leading-[1.1]
                         tracking-[-0.02em] text-[#111]">
            {t.capabilities.title}
          </h2>
          <p className="mt-5 text-[14px] leading-[1.8] text-[#8A857D]">
            {t.capabilities.body}
          </p>
        </div>
      </div>

      {/* ── Accordion grid ── */}
      <div className="border-t border-[rgba(17,17,17,0.07)]">
        {t.capabilities.groups.map((group, i) => (
          <div key={group.key} className="border-b border-[rgba(17,17,17,0.07)]">
            <button
              onClick={() => setOpen(open === group.key ? null : group.key)}
              className="w-full flex items-center justify-between
                         px-6 md:px-12 lg:px-20 py-7
                         hover:bg-[#F0EBE2]/40 transition-colors duration-300 text-left"
            >
              <div className="flex items-center gap-6 md:gap-12">
                <span className="text-[10px] tracking-[0.24em] text-[#C9B79F] shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[clamp(20px,2.5vw,32px)] font-light
                                 tracking-[-0.01em] text-[#111]">
                  {group.title}
                </span>
              </div>
              <motion.div
                animate={{ rotate: open === group.key ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Plus size={20} className="text-[#C9B79F]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {open === group.key && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-12 lg:px-20 pb-8 pt-2">
                    <div className="pl-[calc(0.625rem+1.5rem+3rem)] md:pl-[calc(0.625rem+3rem+3rem)]
                                    flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[12px] px-4 py-2 rounded-full
                                     border border-[rgba(17,17,17,0.1)]
                                     text-[#555] hover:border-[#C9B79F] hover:text-[#111]
                                     transition-all duration-300 cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
