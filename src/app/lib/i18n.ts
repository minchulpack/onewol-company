import { createContext, useContext } from 'react';
import { content, type Locale, type SiteContent } from '../content';

export const SITE_URL = 'https://onewol.com'; // TODO: replace with real domain after deployment

interface I18nContextValue {
  locale: Locale;
  t: SiteContent;
  setLocale: (l: Locale) => void;
  pathFor: (l: Locale, hash?: string) => string;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith('/ko') ? 'ko' : 'en';
}

export function localePath(locale: Locale, path = ''): string {
  const base = locale === 'en' ? '/en' : '/ko';
  if (!path || path === '/') return base || '/';
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function pathForLocale(path: string, targetLocale: Locale): string {
  // Remove current locale prefix if present
  const withoutLocale = path.startsWith('/en/')
    ? path.slice(3)
    : path.startsWith('/en')
      ? '/'
      : path.startsWith('/ko/')
        ? path.slice(3)
        : path.startsWith('/ko')
          ? '/'
          : path;

  return localePath(targetLocale, withoutLocale);
}

export { content };
