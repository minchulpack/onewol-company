import { useEffect } from 'react';
import type { Locale, SiteContent } from '../content';
import { SITE_URL } from './i18n';

/**
 * Lightweight SEO updater for the Vite/Make environment.
 * Maps 1:1 to Next.js `generateMetadata` when this is ported:
 *   - title / description / og:* / twitter:* → metadata.openGraph / twitter
 *   - link[rel=alternate hreflang] → alternates.languages
 *   - JSON-LD script → app/(routes)/layout.tsx <Script type="application/ld+json">
 */
export function useSeo(locale: Locale, t: SiteContent) {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;

    setMeta('description', t.meta.description);
    setMeta('og:title', t.meta.ogTitle, true);
    setMeta('og:description', t.meta.ogDescription, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', locale === 'ko' ? 'ko_KR' : 'en_US', true);
    setMeta('og:url', `${SITE_URL}${locale === 'en' ? '/en' : '/ko'}`, true);
    setMeta('og:site_name', 'onewwol', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', t.meta.ogTitle);
    setMeta('twitter:description', t.meta.ogDescription);

    setLink('canonical', `${SITE_URL}${locale === 'en' ? '/en' : '/ko'}`);
    setLink('alternate', `${SITE_URL}/ko`, { hreflang: 'ko' });
    setLink('alternate', `${SITE_URL}/en`, { hreflang: 'en' });
    setLink('alternate', `${SITE_URL}/en`, { hreflang: 'x-default' });

    setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'onewwol',
      url: SITE_URL,
      description: t.meta.description,
      sameAs: [],
    });
  }, [locale, t]);
}

function setMeta(name: string, content: string, og = false) {
  const attr = og ? 'property' : 'name';
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, extra: Record<string, string> = {}) {
  const selector = `link[rel="${rel}"]${
    extra.hreflang ? `[hreflang="${extra.hreflang}"]` : ''
  }`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  for (const [k, v] of Object.entries(extra)) el.setAttribute(k, v);
}

function setJsonLd(data: unknown) {
  const id = 'ld-org';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.id = id;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
