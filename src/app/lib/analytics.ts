/**
 * GA4 이벤트 전송 헬퍼.
 * gtag 는 index.html 에서 로드되므로 여기서는 존재 여부만 확인하고 호출한다.
 * 광고 차단기 등으로 gtag 가 없을 수 있으니 절대 예외를 던지지 않는다.
 */
type GtagArgs = [string, string, Record<string, unknown>?];
declare global {
  interface Window {
    gtag?: (...args: GtagArgs) => void;
  }
}

export function track(event: string, params: Record<string, unknown> = {}) {
  try {
    window.gtag?.('event', event, params);
  } catch {
    /* 분석 실패가 사용자 흐름을 막아서는 안 된다 */
  }
}

/** SPA 라우팅 시 페이지뷰를 수동으로 전송 (gtag 자동 추적은 최초 1회뿐) */
export function trackPageView(path: string, title?: string) {
  try {
    window.gtag?.('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: title ?? document.title,
    });
  } catch {
    /* noop */
  }
}
