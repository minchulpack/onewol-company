import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { BrandDetailImage } from '../components/sections/BrandDetailImage';

/**
 * 제품 상세 — 기획·디자인된 상세페이지 원본을 그대로 보여준다.
 * 원본이 860px 고정 폭 한 장이므로 가운데 정렬하고 좌우는 배경으로 둔다.
 */
export function BrandProductPage() {
  const { t, pathFor, locale } = useI18n();
  const { brandSlug, productSlug } = useParams();
  const b = t.brands;

  const brand = b.entries.find((e) => e.slug === brandSlug);
  const product = brand?.products.find((p) => p.slug === productSlug);

  // 잘못된 주소면 브랜드관으로 돌려보낸다 (영문 홈으로 튕기지 않도록)
  if (!brand || !product) {
    return <Navigate to={pathFor(locale, '/brands')} replace />;
  }

  return (
    <main className="pt-24 md:pt-32 bg-[#FAFAF8]">
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-10 pb-12">
        <Link
          to={pathFor(locale, '/brands')}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em]
                     text-[#8A857D] hover:text-[#111] transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          {b.backToBrands}
        </Link>

        <div className="mt-8 max-w-[620px]">
          <p className="text-[10px] tracking-[0.24em] uppercase text-[#C9B79F] mb-3">
            {brand.name}
          </p>
          <h1 className="font-display text-[clamp(28px,4vw,48px)] font-light leading-[1.15]
                         tracking-[-0.02em] text-[#111]">
            {product.name}
          </h1>
          <p className="mt-2 text-[12px] tracking-[0.14em] text-[#9A7A56]">
            {product.nameEn}
          </p>
          <p className="mt-5 text-[14px] leading-[1.85] text-[#8A857D]">
            {product.claim}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li
                key={tag}
                className="px-3 py-1.5 rounded-full border border-[rgba(17,17,17,0.12)]
                           text-[11px] tracking-[0.06em] text-[#6E6A63]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white">
        <BrandDetailImage
          brandSlug={brand.slug}
          productSlug={product.slug}
          slices={product.slices}
          alt={`${brand.name} ${product.name} ${b.productsLabel}`}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        <Link
          to={pathFor(locale, '/brands')}
          className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em]
                     text-[#8A857D] hover:text-[#111] transition-colors"
        >
          <ArrowLeft className="size-3.5" />
          {b.backToBrands}
        </Link>
      </div>
    </main>
  );
}
