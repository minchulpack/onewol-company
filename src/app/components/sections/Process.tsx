import { useI18n } from '../../lib/i18n';

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="scroll-mt-20 bg-[#0D0C14] text-white">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <div data-reveal="up" className="mb-16 md:mb-20 grid md:grid-cols-2 gap-6 items-end">
          <div>
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#C8AA80] mb-5">
              {t.process.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-light
                           leading-[1.1] tracking-[-0.02em] text-white">
              {t.process.title}
            </h2>
          </div>
          <p className="text-[13px] leading-[1.85] text-white/40 whitespace-pre-line
                        md:max-w-[320px] md:ml-auto">
            {t.process.body}
          </p>
        </div>

        {/* Steps */}
        <div className="divide-y divide-white/[0.07]">
          {t.process.steps.map((step, i) => (
            <div
              key={step.step}
              data-reveal="up"
              data-reveal-delay={`${i * 60}`}
              className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr_1fr] gap-x-8
                         py-8 md:py-10 items-start
                         hover:bg-white/[0.02] transition-colors duration-300 -mx-6 px-6
                         md:-mx-12 md:px-12 lg:-mx-20 lg:px-20"
            >
              {/* Step number */}
              <span className="font-display text-[clamp(32px,4vw,52px)] font-light
                               text-white/15 leading-none pt-1 group-hover:text-white/25
                               transition-colors duration-300">
                {step.step}
              </span>

              {/* Title */}
              <h3 className="font-display text-[clamp(18px,2vw,26px)] font-light
                             leading-snug tracking-[-0.01em] text-white/80
                             group-hover:text-white transition-colors duration-300 pt-1">
                {step.title}
              </h3>

              {/* Body — hidden on mobile, right column on desktop */}
              <p className="col-span-2 md:col-span-1 mt-3 md:mt-0 text-[13px]
                            leading-[1.8] text-white/35 md:pt-1.5">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
