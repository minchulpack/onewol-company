import { useI18n } from '../../lib/i18n';

/**
 * MOQ 비교표. 소량(highlight) 컬럼을 강조해 "300개부터 가능"을 한눈에 읽히게 한다.
 * 모바일에서는 표가 아니라 컬럼별 카드로 쌓인다 — 4열 표는 좁은 화면에서 읽을 수 없다.
 */
export function Moq() {
  const { t } = useI18n();
  const { rowLabels, columns } = t.moq;
  const rows = [
    { key: 'minOrder', label: rowLabels.minOrder },
    { key: 'materials', label: rowLabels.materials },
    { key: 'sample', label: rowLabels.sample },
    { key: 'reorder', label: rowLabels.reorder },
  ] as const;

  return (
    <section id="moq" className="scroll-mt-24 bg-[var(--surface-muted,#F6F5F2)]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div data-reveal="up" className="mb-12 md:mb-16">
          <p className="text-[9px] tracking-[0.36em] uppercase text-[#8A7355] mb-5">
            {t.moq.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(30px,4.5vw,54px)] font-light leading-[1.15] tracking-[-0.02em]">
            {t.moq.title}
          </h2>
          <p className="mt-5 text-[14px] md:text-[15px] leading-[1.85] text-black/50 whitespace-pre-line max-w-[620px]">
            {t.moq.body}
          </p>
        </div>

        {/* 데스크톱 — 표 */}
        <div data-reveal="up" className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[140px] py-4 pr-4" />
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={`py-4 px-4 text-[14px] font-medium text-center align-bottom border-b border-black/10 ${
                      c.highlight ? 'text-[#8A6A3E]' : 'text-black/60'
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.key}>
                  <th className="py-6 pr-4 align-top text-[13px] font-normal text-black/40 border-b border-black/[0.07]">
                    {r.label}
                  </th>
                  {columns.map((c) => (
                    <td
                      key={c.key}
                      className={`py-6 px-4 text-center align-top text-[14px] leading-[1.7] whitespace-pre-line border-b border-black/[0.07] ${
                        c.highlight ? 'bg-black/[0.03] text-black/80 font-medium' : 'text-black/50'
                      }`}
                    >
                      {c[r.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 모바일 — 카드 */}
        <div data-reveal="up" className="md:hidden space-y-4">
          {columns.map((c) => (
            <div
              key={c.key}
              className={`rounded-sm border p-5 ${
                c.highlight ? 'border-[#CBB893] bg-black/[0.03]' : 'border-black/10'
              }`}
            >
              <p
                className={`text-[15px] font-medium mb-4 ${
                  c.highlight ? 'text-[#8A6A3E]' : 'text-black/70'
                }`}
              >
                {c.label}
              </p>
              <dl className="space-y-3">
                {rows.map((r) => (
                  <div key={r.key} className="grid grid-cols-[76px_1fr] gap-3">
                    <dt className="text-[12px] text-black/40 pt-[2px]">{r.label}</dt>
                    <dd className="text-[13px] leading-[1.7] text-black/70 whitespace-pre-line">
                      {c[r.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12px] leading-[1.8] text-black/35">{t.moq.note}</p>
      </div>
    </section>
  );
}
