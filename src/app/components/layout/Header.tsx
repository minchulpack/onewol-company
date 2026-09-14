import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useI18n } from '../../lib/i18n';
import { ButtonLink } from '../ui/button';
import { Link } from '../ui/Link';

export function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items: Array<[keyof typeof t.nav, string]> = [
    ['about', '/about'],
    ['services', '/services'],
    ['capabilities', '/capabilities'],
    ['brands', '/brands'],
    ['process', '/process'],
    ['partners', '/partners'],
    ['contact', '/contact'],
  ];

  const otherLocale = locale === 'ko' ? 'en' : 'ko';

  // On the hero (not scrolled): transparent white text
  // After scroll: frosted white bg with dark text
  const isLight = scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${isLight
          ? 'bg-[#FAFAF8]/90 backdrop-blur-md border-b border-[rgba(17,17,17,0.07)]'
          : 'bg-gradient-to-b from-black/25 to-transparent'
        }`}
    >
      <div className="max-w-[1320px] mx-auto flex h-16 md:h-20 items-center justify-between
                      px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <Link
          href="/"
          className={`font-display text-[18px] font-light tracking-[-0.01em] transition-colors duration-300
            ${isLight ? 'text-[#111]' : 'text-white'}`}
        >
          onewwol company
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {items.map(([key, path]) => (
            <Link
              key={key}
              href={path}
              className={`text-[11px] tracking-[0.1em] uppercase transition-colors duration-300
                ${isLight
                  ? 'text-[#111]/65 hover:text-[#111]'
                  : 'text-white/75 hover:text-white'
                }`}
            >
              {t.nav[key]}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLocale(otherLocale)}
            className="text-[10px] tracking-[0.24em] uppercase transition-colors duration-300"
            aria-label="Toggle language"
          >
            <span className={locale === 'ko'
              ? (isLight ? 'text-[#111] font-medium' : 'text-white font-medium')
              : (isLight ? 'text-[#111]/45' : 'text-white/55')}>KR</span>
            <span className={`mx-1.5 ${isLight ? 'text-[#111]/25' : 'text-white/35'}`}>/</span>
            <span className={locale === 'en'
              ? (isLight ? 'text-[#111] font-medium' : 'text-white font-medium')
              : (isLight ? 'text-[#111]/45' : 'text-white/55')}>EN</span>
          </button>
          <ButtonLink
            href="/contact"
            size="md"
            className={`!text-[11px] !tracking-[0.1em] !uppercase transition-all duration-300
              ${isLight
                ? '!bg-[#111] !text-white !border-0 hover:!bg-[#1a1a1a]'
                : '!bg-white !text-[#111] !border-0 hover:!bg-white/90'
              }`}
          >
            {t.nav.cta}
          </ButtonLink>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 -mr-2 transition-colors duration-300
            ${isLight ? 'text-[#111]' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#FAFAF8]/97 backdrop-blur-md
                       border-b border-[rgba(17,17,17,0.07)]"
          >
            <nav className="flex flex-col px-6 py-6 gap-1">
              {items.map(([key, path]) => (
                <Link
                  key={key}
                  href={path}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[13px] tracking-[0.08em] text-[#111]/70
                             border-b border-[rgba(17,17,17,0.06)]
                             hover:text-[#111] transition-colors"
                >
                  {t.nav[key]}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-5">
                <button
                  onClick={() => { setLocale(otherLocale); setOpen(false); }}
                  className="text-[10px] tracking-[0.24em] uppercase text-[#111]/40 hover:text-[#111]"
                >
                  {locale === 'ko' ? 'English' : '한국어'}
                </button>
                <ButtonLink href="/contact" size="md" onClick={() => setOpen(false)}
                  className="!bg-[#111] !text-white !border-0">
                  {t.nav.cta}
                </ButtonLink>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
