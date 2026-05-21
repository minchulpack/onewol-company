import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { Button, ButtonLink } from '../ui/Button';
import { Link } from '../ui/Link';

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items: Array<[keyof typeof t.nav, string]> = [
    ['about', '/about'],
    ['services', '/services'],
    ['capabilities', '/capabilities'],
    ['process', '/process'],
    ['partners', '/partners'],
    ['contact', '/contact'],
  ];

  const otherLocale = locale === 'ko' ? 'en' : 'ko';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[color-mix(in_oklab,var(--brand-warm-white)_80%,transparent)] backdrop-blur-md border-b border-[var(--brand-line)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-[1200px] items-center justify-between px-6">
        <Link
          href="/"
          className="text-[15px] tracking-[0.18em] text-[var(--brand-charcoal)]"
        >
          O_NEWOL<span className="text-[var(--brand-accent)]">_</span>COMPANY
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {items.map(([key, path]) => (
            <Link
              key={key}
              href={path}
              className="text-sm tracking-wide text-[var(--brand-charcoal)]/80 hover:text-[var(--brand-accent)] transition-colors"
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLocale(otherLocale)}
            className="text-xs tracking-[0.2em] transition-colors"
            aria-label="Toggle language"
          >
            <span className={locale === 'ko' ? 'text-[var(--brand-charcoal)]' : 'text-[var(--brand-charcoal)]/30'}>KR</span>
            <span className="text-[var(--brand-charcoal)]/30 mx-1.5">/</span>
            <span className={locale === 'en' ? 'text-[var(--brand-charcoal)]' : 'text-[var(--brand-charcoal)]/30'}>EN</span>
          </button>
          <ButtonLink href="/contact" size="md">
            {t.nav.cta}
          </ButtonLink>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[var(--brand-charcoal)]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[var(--brand-warm-white)]/95 backdrop-blur-md border-b border-[var(--brand-line)]`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {items.map(([key, path]) => (
            <Link
              key={key}
              href={path}
              onClick={() => setOpen(false)}
              className="py-2 text-[15px] text-[var(--brand-charcoal)] border-b border-[var(--brand-line)]"
            >
              {t.nav[key]}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4">
            <Button
              variant="ghost"
              size="md"
              onClick={() => {
                setLocale(otherLocale);
                setOpen(false);
              }}
            >
              {locale === 'ko' ? 'English' : '한국어'}
            </Button>
            <ButtonLink href="/contact" size="md" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
