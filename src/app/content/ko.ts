import type { SiteContent } from './types';

export const ko: SiteContent = {
  htmlLang: 'ko',
  meta: {
    title: '오뉴월컴퍼니 | 화장품 OEM ODM 소량생산 파트너',
    description:
      '오뉴월컴퍼니는 제형 개발, 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지 연결하는 화장품 OEM/ODM 원스톱 파트너입니다.',
    ogTitle: 'O_NEWOL COMPANY — 화장품 OEM/ODM 원스톱 파트너',
    ogDescription:
      '소량 생산부터 브랜드 완성까지, 화장품 OEM/ODM을 하나의 흐름으로 연결합니다.',
  },
  nav: {
    about: 'About',
    services: 'Services',
    capabilities: 'Capabilities',
    process: 'Process',
    partners: 'Partners',
    contact: 'Contact',
    cta: '문의하기',
    langLabel: 'EN',
  },
  hero: {
    eyebrow: 'O_NEWOL COMPANY',
    title: '소량 생산부터 브랜드 완성까지,\n화장품 OEM/ODM을 하나의 흐름으로 연결합니다.',
    body: '제형 개발, 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지\n브랜드가 원하는 결과에 도달하도록 함께 설계합니다.',
    primaryCta: 'OEM/ODM 문의하기',
    secondaryCta: '생산 가능 품목 보기',
  },
  about: {
    eyebrow: 'About',
    title: 'One-stop Brand Partner',
    body: '제품 개발부터 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지\n브랜드가 나누어 관리해야 했던 과정을 하나의 흐름으로 연결합니다.',
    features: [
      'Concept Planning',
      'Formula Development',
      'Package Design',
      'Manufacturing',
      'Export Support',
      'After Care',
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'ODM · OEM · Consulting',
    body: '브랜드의 단계와 목적에 맞춰 세 가지 협업 방식을 제공합니다.',
    cardCta: '문의로 이동',
    items: [
      {
        key: 'odm',
        label: 'ODM',
        description:
          '시장 트렌드와 브랜드 방향을 분석하여 콘셉트 제안부터 제품 개발, 생산까지 주도적으로 제공합니다.',
        tags: ['Concept', 'Formula', 'Design', 'Manufacturing'],
      },
      {
        key: 'oem',
        label: 'OEM',
        description:
          '브랜드가 제시한 사양과 의견을 기반으로 개발·생산 전 과정을 협업하여 제공합니다.',
        tags: ['Specification', 'Sampling', 'Production', 'Aftercare'],
      },
      {
        key: 'consulting',
        label: 'Consulting',
        description:
          '브랜드 초기 기획, 제품 구성, 패키지 방향, 생산 조건 검토까지 실질적인 실행 기준을 함께 정리합니다.',
        tags: ['Planning', 'MOQ', 'Package', 'Launch'],
      },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Production Capabilities',
    body: '다양한 화장품 카테고리의 개발과 생산을 지원합니다.',
    groups: [
      {
        key: 'skincare',
        title: '스킨케어',
        items: ['스킨 / 토너', '에센스 / 세럼 / 앰플', '크림 / 로션', '미스트 / 오일'],
      },
      {
        key: 'cleanser',
        title: '클렌저 / 필링',
        items: [
          '클렌징 폼 / 젤',
          '오일 / 밤',
          '워터 / 밀크',
          '필링 / 스크럽',
          '티슈 / 패드',
          '립 / 아이 리무버',
        ],
      },
      {
        key: 'suncare',
        title: '선케어',
        items: ['선크림', '선스틱', '선쿠션', '선스프레이', '선패치', '태닝 / 애프터선'],
      },
      {
        key: 'mens',
        title: '맨즈케어',
        items: ['스킨 / 토너', '올인원 로션', '매그그', '쉐이빙 / 왁싱'],
      },
      {
        key: 'body',
        title: '바디케어',
        items: [
          '바디로션 / 크림 / 오일 / 미스트',
          '바디워시 / 스크럽',
          '제모 / 왁스',
          '핸드크림 / 핸드워시',
          '풋케어',
          '데오도란트',
        ],
      },
      {
        key: 'hair',
        title: '헤어케어',
        items: [
          '샴푸 / 린스 / 컨디셔너 / 트리트먼트',
          '헤어팩 / 두피 케어 팩',
          '헤어토닉 / 두피토닉',
          '헤어에센스 / 세럼 / 오일',
          '왁스 / 젤 / 무스 / 스프레이 / 픽서',
        ],
      },
      {
        key: 'eyelash',
        title: '속눈썹 / 네일',
        items: [
          '속눈썹 펌제',
          '속눈썹 에센스 / 세럼 / 앰플',
          '속눈썹 영양 케어',
          '네일 케어',
        ],
      },
      {
        key: 'pigment',
        title: '반영구 색소',
        items: ['반영구화장 색소', '반영구 케어', '재생크림'],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: '단계별 진행 프로세스',
    body: '상담부터 출고와 사후관리까지,\n브랜드의 상황에 맞는 단계별 프로세스로 진행합니다.',
    steps: [
      { step: '01', title: '상담 및 기획', body: '프로젝트 목적, 희망 품목, 브랜드 방향을 확인합니다.' },
      { step: '02', title: '제형 개발 & 샘플링', body: '제품 제형을 개발하고 샘플을 통해 방향을 조정합니다.' },
      { step: '03', title: '디자인 & 패키지 디자인', body: '용기, 라벨, 패키지 디자인 방향을 구체화합니다.' },
      { step: '04', title: '견적 및 MOQ 확정', body: '품목과 수량에 따른 견적 및 MOQ 조건을 확정합니다.' },
      { step: '05', title: '부자재 입고 / 생산 / 포장', body: '부자재 입고 후 생산, 충진, 포장 과정을 진행합니다.' },
      { step: '06', title: '출고 및 사후관리', body: '완제품 출고 후 필요한 사후관리까지 지원합니다.' },
    ],
  },
  productionGuide: {
    eyebrow: 'Production Guide',
    title: '소량 생산부터 대량 생산까지',
    body: '브랜드 단계에 맞는 생산 조건을 제안합니다.\n품목, 용기, 성분, 수량에 따라 MOQ와 견적이 달라질 수 있으므로\n정확한 조건은 상담을 통해 안내드립니다.',
    cards: [
      { title: 'Small-batch Production', body: '소량 생산부터 시작해 시장 검증과 빠른 출시를 지원합니다.' },
      { title: 'Custom Formula / Package', body: '브랜드 콘셉트에 맞춘 제형과 패키지를 함께 설계합니다.' },
      { title: 'Consultation-based Quotation', body: '품목·수량 조건을 검토해 합리적인 견적을 안내드립니다.' },
    ],
    cta: '내 제품 MOQ 상담받기',
  },
  partners: {
    eyebrow: 'Partners',
    title: 'Business Partners',
    body: '다양한 브랜드, 기관, 교육·뷰티 관련 파트너와 함께해왔습니다.',
    list: [
      '라헬', '인덕대학교', '오뉴월색소', '한국패디협회', '서정대학교', '물리블리',
      '퓨스코어', '에비에', 'PBS', '셀긴코스메틱', '차의과대학교', 'GLK바이오',
      '셀코스', '닥터핌', '아리벨', '숙명여자대학교', '에리카', '리나코리아',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start Your Project',
    body: '제품 아이디어와 브랜드 방향을 남겨주시면,\n생산 가능성과 진행 조건을 검토해 안내드립니다.',
    fields: {
      name: '이름',
      company: '회사명',
      email: '이메일',
      phone: '연락처',
      serviceType: '희망 서비스',
      productCategory: '희망 품목',
      quantity: '예상 수량',
      brandStatus: '브랜드 보유 여부',
      message: '문의 내용',
      agreement: '개인정보 수집 및 이용에 동의합니다.',
    },
    serviceOptions: ['OEM', 'ODM', 'Consulting', 'Other'],
    brandOptions: ['기존 브랜드', '신규 브랜드', '준비 중'],
    submit: '문의 보내기',
    placeholderNotice:
      '문의 기능은 연결 준비 중입니다. 이메일 또는 연락처를 통해 문의해주세요.',
    successNotice: '문의가 정상적으로 접수되었습니다.',
    validation: {
      name: '이름을 입력해주세요.',
      email: '올바른 이메일을 입력해주세요.',
      message: '문의 내용을 입력해주세요.',
      agreement: '개인정보 수집 및 이용에 동의해주세요.',
    },
  },
  footer: {
    description: '화장품 | 코스메슈티컬 | 더마코스메틱 | 반영구색소 | OEM/ODM',
    biz: '사업자등록번호: 입력 예정',
    address: '주소: 입력 예정',
    email: '이메일: 입력 예정',
    phone: '연락처: 입력 예정',
    nav: ['About', 'Services', 'Capabilities', 'Process', 'Partners', 'Contact'],
    rights: '© O_NEWOL COMPANY. All rights reserved.',
  },
};
