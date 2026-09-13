import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { trackPageView } from '../lib/analytics';

/**
 * 라우트 변경 시 스크롤을 올리고 GA4 페이지뷰를 전송한다.
 * SPA 라 gtag 의 자동 page_view 는 최초 진입 1회만 발생하므로 여기서 보완한다.
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
