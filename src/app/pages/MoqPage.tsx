import { Moq } from '../components/sections/Moq';
import { Pricing } from '../components/sections/Pricing';

/**
 * MOQ page — 최소 수량 조건.
 * 수량을 확인한 사람은 곧바로 단가를 궁금해하므로 Pricing 을 이어 붙인다.
 */
export function MoqPage() {
  return (
    <main className="pt-24 md:pt-32">
      <Moq />
      <Pricing />
    </main>
  );
}
