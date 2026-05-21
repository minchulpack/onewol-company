import { Link as RouterLink } from 'react-router';
import { useI18n } from '../../lib/i18n';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Locale-aware Link component that wraps react-router Link
 */
export function Link({ href, children, className, onClick }: LinkProps) {
  const { pathFor, locale } = useI18n();

  // If href is already absolute (starts with http or mailto), use regular anchor
  if (href.startsWith('http') || href.startsWith('mailto')) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  // Build locale-aware path
  const path = pathFor(locale, href);

  return (
    <RouterLink to={path} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  );
}
