import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useI18n } from '../../lib/i18n';

const ABOUT_IMG =
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=85&auto=format&fit=crop';

export function About() {
  const { t } = useI18n();
  const reduce = useReducedMotion();
  const imgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" className="scroll-mt-20 bg-[#FAFAF8]">
      {/* ── Full-bleed image ── */}
      <div ref={imgRef} className="relative h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={reduce ? undefined : { y: imgY }}
        >
          <img
            src={ABOUT_IMG}
            alt="Skincare serum texture"
            className="h-[116%] w-full object-cover object-center -mt-[8%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#FAFAF8]/10" />

        {/* Eyebrow overlay */}
        <div className="absolute top-8 left-8 md:left-12">
          <p className="text-[9px] tracking-[0.36em] uppercase text-white/50">
            {t.about.eyebrow}
          </p>
        </div>
      </div>

      {/* ── Text block ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          {/* Left: title */}
          <div data-reveal="up">
            <h2 className="font-display text-[clamp(32px,5vw,64px)] font-light leading-[1.1]
                           tracking-[-0.02em] text-[#111]">
              {t.about.title}
            </h2>
          </div>

          {/* Right: body + features */}
          <div data-reveal="up" data-reveal-delay="100">
            <p className="text-[15px] leading-[1.9] text-[#8A857D] whitespace-pre-line mb-12">
              {t.about.body}
            </p>

            {/* Feature grid */}
            <div data-stagger className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {t.about.features.map((f, i) => (
                <div
                  key={f}
                  className="group border border-[rgba(17,17,17,0.07)] rounded-xl p-5
                             hover:border-[#C9B79F] hover:bg-white
                             transition-all duration-500 cursor-default"
                >
                  <p className="text-[10px] tracking-[0.2em] text-[#C9B79F] mb-3">
                    0{i + 1}
                  </p>
                  <p className="text-[13px] text-[#111] leading-snug">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
