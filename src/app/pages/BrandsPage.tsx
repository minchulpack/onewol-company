import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { ProductThumb } from '../components/sections/BrandDetailImage';

/**
 * 브랜드관 — 오뉴월컴퍼니가 완성한 브랜드를 포트폴리오로 쌓는 자리.
 * 지금은 「오뉴월의새벽」 한 곳이지만 entries 에 추가하기만 하면 늘어난다.
 */
export function BrandsPage() {
  const { t, pathFor, locale } = useI18n();
  const b = t.brands;

  return (
    <main className="pt-24 md:pt-32">
      <section className="bg-[#FAFAF8]">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-14">
          <div data-reveal="up" className="max-w-[620px]">
            <p className="text-[9px] tracking-[0.36em] uppercase text-[#9A7A56] mb-5">
              {b.eyebrow}
            </p>
            <h1 className="font-display text-[clamp(32px,5vw,64px)] font-light leading-[1.1]
                           tracking-[-0.02em] text-[#111]">
              {b.title}
            </h1>
            <p className="mt-5 text-[14px] leading-[1.8] text-[#8A857D] whitespace-pre-line">
              {b.body}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="flex flex-col gap-20 md:gap-28">
          {b.entries.map((brand) => (
            <article key={brand.slug} data-reveal="up">
              {/* 브랜드 헤더 — 포트폴리오로 읽히려면 "무엇을 했는지"가 먼저다 */}
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-8
                              border-b border-[rgba(17,17,17,0.08)]">
                <div>
                  <p className="text-[10px] tracking-[0.24em] uppercase text-[#C9B79F] mb-3">
                    {brand.year} · {brand.kind}
                  </p>
                  <h2 className="font-display text-[clamp(26px,3.6vw,42px)] font-light leading-[1.15]
                                 tracking-[-0.02em] text-[#111]">
                    {brand.name}
                    <span className="ml-3 text-[0.5em] tracking-[0.12em] text-[#9A7A56] align-middle">
                      {brand.nameEn}
                    </span>
                  </h2>
                  <p className="mt-4 max-w-[560px] text-[14px] leading-[1.85] text-[#8A857D]
                                whitespace-pre-line">
                    {brand.summary}
                  </p>
                </div>

                <dl className="shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4 text-[12px]">
                  <div>
                    <dt className="text-[#B3AFA7] mb-1.5">{b.skuLabel}</dt>
                    <dd className="text-[#111]">{brand.skuLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-[#B3AFA7] mb-1.5">{b.scopeLabel}</dt>
                    <dd className="text-[#111] leading-[1.9]">
                      {brand.scope.join(' · ')}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* 제품 카드 */}
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
                {brand.products.map((p) => (
                  <Link
                    key={p.slug}
                    to={pathFor(locale, `/brands/${brand.slug}/${p.slug}`)}
                    className="group block"
                  >
                    <div className="overflow-hidden bg-[#F3F1EC]">
                      <div className="transition-transform duration-700 group-hover:scale-[1.03]">
                        <ProductThumb
                          brandSlug={brand.slug}
                          productSlug={p.slug}
                          alt={p.name}
                        />
                      </div>
                    </div>
                    <h3 className="mt-4 text-[15px] leading-[1.4] text-[#111]">{p.name}</h3>
                    <p className="mt-1 text-[11px] tracking-[0.12em] text-[#9A7A56]">
                      {p.nameEn}
                    </p>
                    <p className="mt-3 text-[12.5px] leading-[1.75] text-[#8A857D]">
                      {p.claim}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px]
                                     tracking-[0.1em] text-[#111] opacity-0 -translate-x-1
                                     transition-all duration-500
                                     group-hover:opacity-100 group-hover:translate-x-0">
                      {b.viewDetail}
                      <ArrowRight className="size-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
