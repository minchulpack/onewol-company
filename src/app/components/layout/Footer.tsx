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
    <footer className="bg-[#0D0C14] text-white">
      {/* ── Main footer body ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-10
                      grid md:grid-cols-[1.6fr_1fr_1fr] gap-10 border-b border-white/[0.07]">
        {/* Brand */}
        <div>
          <Link href="/"
            className="block font-display text-[22px] font-light tracking-[-0.01em] text-white
                       hover:text-[#C8AA80] transition-colors duration-300">
            onewwol company
          </Link>
          <p className="mt-4 text-[12px] leading-[1.9] text-white/35 max-w-[280px]">
            {t.footer.description}
          </p>
        </div>

        {/* Business info */}
        <div className="text-[11px] leading-[2] text-white/30 space-y-0.5">
          <p>{t.footer.biz}</p>
          <p>{t.footer.address}</p>
          <p>{t.footer.email}</p>
          <p>{t.footer.phone}</p>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-2 md:items-end">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[12px] tracking-[0.04em] text-white/35
                         hover:text-white transition-colors duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-[1320px] mx-auto px-6 md:px-12 lg:px-20 py-5
                      flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-[10px] tracking-[0.06em] text-white/20">
          {t.footer.rights}
        </p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/15">
          Cosmetics · OEM / ODM
        </p>
      </div>
    </footer>
  );
}
