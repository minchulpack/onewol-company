import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router';
import { useI18n } from '../../lib/i18n';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap';

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-sm tracking-wide',
  lg: 'h-13 px-7 text-[15px] tracking-wide',
};

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--brand-charcoal)] text-[var(--brand-warm-white)] hover:bg-[var(--brand-accent)] hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgba(154,122,86,0.5)]',
  secondary:
    'bg-transparent text-[var(--brand-charcoal)] border border-[var(--brand-charcoal)]/15 hover:border-[var(--brand-charcoal)]/40 hover:-translate-y-0.5',
  ghost:
    'bg-transparent text-[var(--brand-charcoal)] hover:text-[var(--brand-accent)]',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & CommonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...rest }, ref) => (
    <button
      ref={ref}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    />
  ),
);
Button.displayName = 'Button';

interface ButtonLinkProps extends CommonProps {
  href: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export function ButtonLink({ variant = 'primary', size = 'md', className = '', href, children, onClick }: ButtonLinkProps) {
  const { pathFor, locale } = useI18n();

  // If href is external or mailto, use regular anchor
  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a
        href={href}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Build locale-aware path
  const path = pathFor(locale, href);

  return (
    <Link
      to={path}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
