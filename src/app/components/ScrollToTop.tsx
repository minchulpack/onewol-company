import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Scrolls to top of page on route change
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
