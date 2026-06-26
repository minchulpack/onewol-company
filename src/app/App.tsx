import { useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation, useNavigate } from 'react-router';
import { I18nContext, content, getLocaleFromPath, localePath, pathForLocale } from './lib/i18n';
import type { Locale } from './content';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { useSeo } from './lib/seo';
import { useI18n } from './lib/i18n';
import { ScrollRevealProvider } from './lib/useScrollReveal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { CapabilitiesPage } from './pages/CapabilitiesPage';
import { ProcessPage } from './pages/ProcessPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

/**
 * Make / Vite shell. When porting to Next.js:
 *   - Replace BrowserRouter with the App Router file layout:
 *       app/layout.tsx          -> wraps <I18nProvider>
 *       app/page.tsx            -> redirects to /en
 *       app/en/page.tsx         -> renders <HomePage /> with locale="en"
 *       app/ko/page.tsx         -> renders <HomePage /> with locale="ko"
 *       app/en/about/page.tsx   -> renders <AboutPage /> with locale="en"
 *       app/ko/about/page.tsx   -> renders <AboutPage /> with locale="ko"
 *   - Move useSeo() into each route's generateMetadata().
 *   - Replace this BrowserRouter with next/navigation.
 */
function I18nProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [locale, setLocaleState] = useState<Locale>(() => getLocaleFromPath(location.pathname));

  useEffect(() => {
    setLocaleState(getLocaleFromPath(location.pathname));
  }, [location.pathname]);

  const setLocale = useCallback(
    (l: Locale) => {
      const newPath = pathForLocale(location.pathname, l);
      navigate(newPath, { replace: false });
    },
    [navigate, location.pathname],
  );

  const value = useMemo(
    () => ({
      locale,
      t: content[locale],
      setLocale,
      pathFor: localePath,
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function Layout({ children }: { children: React.ReactNode }) {
  const { locale, t } = useI18n();
  useSeo(locale, t);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ScrollRevealProvider />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />

            {/* English routes */}
            <Route path="/en" element={<HomePage />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/services" element={<ServicesPage />} />
            <Route path="/en/capabilities" element={<CapabilitiesPage />} />
            <Route path="/en/process" element={<ProcessPage />} />
            <Route path="/en/partners" element={<PartnersPage />} />
            <Route path="/en/contact" element={<ContactPage />} />

            {/* Korean routes */}
            <Route path="/ko" element={<HomePage />} />
            <Route path="/ko/about" element={<AboutPage />} />
            <Route path="/ko/services" element={<ServicesPage />} />
            <Route path="/ko/capabilities" element={<CapabilitiesPage />} />
            <Route path="/ko/process" element={<ProcessPage />} />
            <Route path="/ko/partners" element={<PartnersPage />} />
            <Route path="/ko/contact" element={<ContactPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </Layout>
      </I18nProvider>
    </BrowserRouter>
  );
}
