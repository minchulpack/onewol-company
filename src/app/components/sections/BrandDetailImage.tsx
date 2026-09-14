import { useI18n } from '../../lib/i18n';

/**
 * 상세페이지 원본은 860×15,000~26,000px 짜리 한 장이라 그대로 올리면
 * 첫 화면에서 20MB 를 내려받게 된다. 2,400px 단위로 잘라 두고
 * loading="lazy" 로 화면에 들어올 때만 받게 한다.
 *
 * 조각 사이에 틈이 보이면 안 되므로 block + 음수 여백 없이
 * 한 덩어리로 붙이고, 폭은 항상 860px 기준 100% 로 맞춘다.
 */
export function BrandDetailImage({
  brandSlug,
  productSlug,
  slices,
  alt,
}: {
  brandSlug: string;
  productSlug: string;
  slices: number;
  alt: string;
}) {
  const base = `/brands/${brandSlug}/${productSlug}`;

  return (
    <div className="mx-auto w-full max-w-[860px]">
      {Array.from({ length: slices }, (_, i) => (
        <img
          key={i}
          src={`${base}/${String(i).padStart(2, '0')}.webp`}
          alt={i === 0 ? alt : ''}
          width={860}
          height={2400}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
          className="block w-full h-auto align-top"
        />
      ))}
    </div>
  );
}

/** 브랜드 개요·목록에서 쓰는 제품 썸네일 (4:5) */
export function ProductThumb({
  brandSlug,
  productSlug,
  alt,
}: {
  brandSlug: string;
  productSlug: string;
  alt: string;
}) {
  const { locale } = useI18n();
  return (
    <img
      src={`/brands/${brandSlug}/${productSlug}/thumb.webp`}
      alt={alt}
      width={860}
      height={1075}
      loading="lazy"
      decoding="async"
      lang={locale}
      className="block w-full h-auto object-cover"
    />
  );
}
