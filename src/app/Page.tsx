import { useI18n } from './lib/i18n';
import { useSeo } from './lib/seo';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Capabilities } from './components/sections/Capabilities';
import { Process } from './components/sections/Process';
import { ProductionGuide } from './components/sections/ProductionGuide';
import { Partners } from './components/sections/Partners';
import { Contact } from './components/sections/Contact';

/**
 * Single landing page. Renders identically for /  and  /en — locale comes from the
 * I18nProvider. Maps 1:1 to a Next.js `app/[locale]/page.tsx`.
 */
export function Page() {
  const { locale, t } = useI18n();
  useSeo(locale, t);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Capabilities />
        <Process />
        <ProductionGuide />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
