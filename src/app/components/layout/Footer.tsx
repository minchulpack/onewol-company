import { useI18n } from '../../lib/i18n';
import { Link } from '../ui/Link';

export function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Process', href: '/process' },
    { label: 'Partners', href: '/partners' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="border-t border-[var(--brand-line)] bg-[var(--brand-warm-white)]">
      <div className="mx-auto max-w-[1200px] px-6 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-[15px] tracking-[0.18em] text-[var(--brand-charcoal)]">
            O_NEWOL<span className="text-[var(--brand-accent)]">_</span>COMPANY
          </Link>
          <p className="mt-4 text-sm leading-[1.7] text-[var(--brand-soft-gray)]">
            {t.footer.description}
          </p>
        </div>

        <div className="text-sm leading-[1.9] text-[var(--brand-soft-gray)]">
          <div>{t.footer.biz}</div>
          <div>{t.footer.address}</div>
          <div>{t.footer.email}</div>
          <div>{t.footer.phone}</div>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:justify-end h-fit">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--brand-charcoal)]/70 hover:text-[var(--brand-accent)] transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[var(--brand-line)] py-6 text-center text-xs tracking-wide text-[var(--brand-soft-gray)]">
        {t.footer.rights}
      </div>
    </footer>
  );
}
