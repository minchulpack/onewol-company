import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Capabilities } from '../components/sections/Capabilities';
import { ProductionGuide } from '../components/sections/ProductionGuide';
import { Partners } from '../components/sections/Partners';
import { Contact } from '../components/sections/Contact';

/**
 * Home page - Landing page with key sections
 */
export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Capabilities />
      <ProductionGuide />
      <Partners />
      <Contact />
    </main>
  );
}
