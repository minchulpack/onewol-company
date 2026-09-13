import { Pricing } from '../components/sections/Pricing';
import { Moq } from '../components/sections/Moq';

/**
 * Price page — 단가 참고.
 * 단가를 본 사람은 최소 수량 조건이 뒤따라 필요하므로 Moq 를 이어 붙인다.
 */
export function PricingPage() {
  return (
    <main className="pt-24 md:pt-32">
      <Pricing />
      <Moq />
    </main>
  );
}
