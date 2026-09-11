import { useI18n } from '../../lib/i18n';

/**
 * 단가 참고표 + 발주 예시.
 * 500개 열을 강조 — 소량 문의가 가장 많이 몰리는 구간이라 시선을 여기 둔다.
 */
export function Pricing() {
  const { t } = useI18n();
  const HI = 2; // values 배열 기준 500개 열

  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div data-reveal="up" className="mb-12 md:mb-16">
          <p className="text-[9px] tracking-[0.36em] uppercase text-[#8A7355] mb-5">
            {t.pricing.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(30px,4.5vw,54px)] font-light leading-[1.15] tracking-[-0.02em]">
            {t.pricing.title}
          </h2>
          <p className="mt-5 text-[14px] md:text-[15px] leading-[1.85] text-black/50 whitespace-pre-line max-w-[620px]">
            {t.pricing.body}
          </p>
        </div>

        {/* 단가표 */}
        <div data-reveal="up" className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/15">
                {t.pricing.tableHead.map((h, i) => (
                  <th
                    key={h}
                    className={`py-4 text-[13px] font-medium ${
                      i === 0 ? 'text-black/70' : 'text-center'
                    } ${i === HI ? 'text-[#8A6A3E]' : 'text-black/50'}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.pricing.rows.map((r) => (
                <tr key={r.item} className="border-b border-black/[0.07]">
                  <td className="py-5 pr-4 text-[14px] text-black/70">{r.item}</td>
                  {r.values.map((v, i) => (
                    <td
                      key={i}
                      className={`py-5 px-3 text-center text-[14px] ${
                        i + 1 === HI
                          ? 'bg-black/[0.03] text-black/85 font-medium'
                          : 'text-black/55'
                      }`}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 발주 예시 */}
        <h3
          data-reveal="up"
          className="mt-16 mb-6 font-display text-[clamp(18px,2vw,24px)] font-light tracking-[-0.01em]"
        >
          {t.pricing.exampleTitle}
        </h3>
        <div data-reveal="up" className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/15">
                {t.pricing.exampleHead.map((h, i) => (
                  <th
                    key={h}
                    className={`py-4 text-[13px] font-medium text-black/50 ${
                      i === 0 ? '' : 'text-right'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.pricing.exampleRows.map((r, i) => {
                const isTotal = i === t.pricing.exampleRows.length - 1;
                return (
                  <tr
                    key={r.item}
                    className={`border-b border-black/[0.07] ${isTotal ? 'bg-black/[0.03]' : ''}`}
                  >
                    <td
                      className={`py-5 pr-4 text-[14px] ${
                        isTotal ? 'text-black/85 font-medium' : 'text-black/70'
                      }`}
                    >
                      {r.item}
                    </td>
                    <td className="py-5 px-3 text-right text-[14px] text-black/50">{r.qty}</td>
                    <td
                      className={`py-5 pl-3 text-right text-[14px] ${
                        isTotal ? 'text-[#8A6A3E] font-medium' : 'text-black/70'
                      }`}
                    >
                      {r.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-[12px] leading-[1.8] text-black/35">{t.pricing.note}</p>
      </div>
    </section>
  );
}
