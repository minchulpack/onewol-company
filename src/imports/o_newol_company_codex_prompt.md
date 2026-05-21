# O_NEWOL COMPANY Website Implementation Prompt

## 0. Role

You are a senior frontend engineer, UX information architect, and interaction-focused web designer.

Build a responsive bilingual website for **O_NEWOL COMPANY**, a Korean cosmetic OEM/ODM manufacturing and consulting company.

The website should feel:

- Premium
- Clean
- Refined
- Trustworthy
- Cosmetic / beauty-manufacturing oriented
- B2B professional
- Soft but precise
- Not like a generic tech startup website

The site should be implemented with **React + Vite** and prepared for deployment on **Vercel**.

---

## 1. Project Context

O_NEWOL COMPANY provides cosmetic OEM/ODM services.

Core business areas:

- Cosmetic manufacturing
- Cosmeceutical
- Derma cosmetics
- Semi-permanent pigment
- OEM / ODM
- Consulting
- Product development
- Package design
- Manufacturing
- Delivery
- Export support

The original company material emphasizes:

> 제형 개발부터 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지  
> 모든 과정을 나누지 않고 하나의 흐름으로 이어 브랜드가 원하는 결과에 도달하도록 최적의 원스텝 개발 시스템을 제공합니다.

The website should convert visitors into inquiries from potential cosmetic brand founders, startup brands, existing cosmetic brands, and B2B partners.

---

## 2. Website Goal

The primary goal is **inquiry conversion**.

The user should quickly understand:

1. What O_NEWOL COMPANY does
2. What categories they can produce
3. The difference between OEM and ODM
4. How the production process works
5. That small-batch production is possible
6. That the company has partner credibility
7. How to submit a project inquiry

The site is not just a visual portfolio.  
It is a B2B conversion website for cosmetic OEM/ODM inquiries.

---

## 3. Target Users

### Primary

- Cosmetic brand founders
- Small-batch cosmetic startup brands
- Individual entrepreneurs preparing a beauty brand
- Existing brands planning new products
- Overseas buyers looking for Korean cosmetic OEM/ODM partners

### User Concerns

- “Can I start with small quantities?”
- “Can they help with formula development?”
- “Can they handle package design?”
- “Can they support the full process?”
- “What product categories are possible?”
- “How do I start the inquiry?”
- “Can they communicate professionally?”

---

## 4. Recommended Site Structure

Use a **one-page landing structure** with anchor navigation and a separate English route.

### Routes

```txt
/
  Korean main website

/en
  English main website
```

### Anchor Sections

```txt
/#about
/#services
/#capabilities
/#process
/#partners
/#contact

/en#about
/en#services
/en#capabilities
/en#process
/en#partners
/en#contact
```

---

## 5. Navigation

Header navigation:

```txt
About
Services
Capabilities
Process
Partners
Contact
KR / EN
```

Behavior:

- Sticky header
- Subtle background blur after scrolling
- Smooth anchor scrolling
- Mobile hamburger menu
- Language switch between `/` and `/en`
- CTA button in header: `문의하기` / `Contact`

---

## 6. Information Architecture

```txt
Home
├─ Hero
├─ About / Brand Promise
├─ Services
│  ├─ ODM
│  ├─ OEM
│  └─ Consulting
├─ Product Capabilities
│  ├─ Skincare
│  ├─ Cleanser / Peeling
│  ├─ Suncare
│  ├─ Men’s Care
│  ├─ Body Care
│  ├─ Hair Care
│  ├─ Eyelash / Nail
│  └─ Semi-permanent Pigment
├─ Process
│  ├─ Consultation & Planning
│  ├─ Formula Development & Sampling
│  ├─ Design & Package Design
│  ├─ Quotation & MOQ Confirmation
│  ├─ Materials / Production / Packing
│  └─ Delivery & Aftercare
├─ Production Guide
├─ Partners
└─ Contact
```

---

# 7. Section-by-Section Requirements

---

## SECTION 01. Hero

### Purpose

Immediately communicate that O_NEWOL COMPANY is a cosmetic OEM/ODM partner supporting small-batch production and full brand development.

### Korean Content

```txt
O_NEWOL COMPANY

소량 생산부터 브랜드 완성까지,
화장품 OEM/ODM을 하나의 흐름으로 연결합니다.

제형 개발, 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지
브랜드가 원하는 결과에 도달하도록 함께 설계합니다.
```

### English Content

```txt
O_NEWOL COMPANY

From small-batch production to complete brand development,
we connect cosmetic OEM/ODM processes into one seamless flow.

From formula development and concept planning to package design,
manufacturing, delivery, and export support,
we help brands reach their desired outcome.
```

### CTA Buttons

Korean:

```txt
OEM/ODM 문의하기
생산 가능 품목 보기
```

English:

```txt
Start a Project
View Capabilities
```

### Visual Direction

- Use a premium cosmetic/lab/product development visual atmosphere
- Soft beige or warm white background
- Abstract lab glass / cosmetic bottle / formulation-inspired imagery
- If no real images exist, use elegant placeholder blocks
- Avoid cheap stock-photo feeling

### Interaction

- Gentle fade-up text entrance
- CTA button micro interaction
- Subtle floating visual element or soft gradient movement

---

## SECTION 02. About / Brand Promise

### Purpose

Explain the one-stop value proposition.

### Korean Title

```txt
One-stop Brand Partner
```

### Korean Body

```txt
제품 개발부터 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지
브랜드가 나누어 관리해야 했던 과정을 하나의 흐름으로 연결합니다.
```

### English Title

```txt
One-stop Brand Partner
```

### English Body

```txt
From product development and concept planning to package design,
manufacturing, delivery, and export support,
we connect the fragmented brand-building process into one seamless flow.
```

### Feature Cards

```txt
Concept Planning
Formula Development
Package Design
Manufacturing
Export Support
After Care
```

### Layout

- 2-column layout on desktop
- Intro text on the left
- Feature cards grid on the right
- On mobile, stack vertically

### Interaction

- Cards reveal sequentially on scroll
- Soft hover state

---

## SECTION 03. Services

### Purpose

Clarify ODM, OEM, and Consulting services.

### Korean Content

#### ODM

```txt
시장 트렌드와 브랜드 방향을 분석하여
콘셉트 제안부터 제품 개발, 생산까지 주도적으로 제공합니다.
```

#### OEM

```txt
브랜드가 제시한 사양과 의견을 기반으로
개발·생산 전 과정을 협업하여 제공합니다.
```

#### Consulting

```txt
브랜드 초기 기획, 제품 구성, 패키지 방향, 생산 조건 검토까지
실질적인 실행 기준을 함께 정리합니다.
```

### English Content

#### ODM

```txt
We analyze market trends and brand direction,
then lead the process from concept proposal to product development and manufacturing.
```

#### OEM

```txt
Based on the specifications and direction provided by the brand,
we collaborate throughout the development and manufacturing process.
```

#### Consulting

```txt
We help define practical execution standards,
including early brand planning, product lineup, package direction, and production conditions.
```

### Layout

- 3 service cards
- Each card should have:
  - Label
  - Short description
  - Key process tags
  - CTA link to contact section

### Tags

ODM:

```txt
Concept
Formula
Design
Manufacturing
```

OEM:

```txt
Specification
Sampling
Production
Aftercare
```

Consulting:

```txt
Planning
MOQ
Package
Launch
```

---

## SECTION 04. Product Capabilities

### Purpose

Show production categories clearly.

### Korean Title

```txt
Production Capabilities
```

### Korean Description

```txt
다양한 화장품 카테고리의 개발과 생산을 지원합니다.
```

### English Title

```txt
Production Capabilities
```

### English Description

```txt
We support development and production across a wide range of cosmetic categories.
```

### Categories

Create a responsive card grid.

#### 스킨케어 / Skincare

Korean:

```txt
스킨 / 토너
에센스 / 세럼 / 앰플
크림 / 로션
미스트 / 오일
```

English:

```txt
Skin / Toner
Essence / Serum / Ampoule
Cream / Lotion
Mist / Oil
```

#### 클렌저 / 필링 / Cleanser / Peeling

Korean:

```txt
클렌징 폼 / 젤
오일 / 밤
워터 / 밀크
필링 / 스크럽
티슈 / 패드
립 / 아이 리무버
```

English:

```txt
Cleansing Foam / Gel
Oil / Balm
Water / Milk
Peeling / Scrub
Tissue / Pad
Lip / Eye Remover
```

#### 선케어 / Suncare

Korean:

```txt
선크림
선스틱
선쿠션
선스프레이
선패치
태닝 / 애프터선
```

English:

```txt
Sun Cream
Sun Stick
Sun Cushion
Sun Spray
Sun Patch
Tanning / After Sun
```

#### 맨즈케어 / Men’s Care

Korean:

```txt
스킨 / 토너
올인원 로션
매그그
쉐이빙 / 왁싱
```

English:

```txt
Skin / Toner
All-in-one Lotion
Men’s Grooming
Shaving / Waxing
```

Note: The Korean source text includes “매그그,” which may be a typo or uncertain label. Keep this value editable in the content file.

#### 바디케어 / Body Care

Korean:

```txt
바디로션 / 크림 / 오일 / 미스트
바디워시 / 스크럽
제모 / 왁스
핸드크림 / 핸드워시
풋케어
데오도란트
```

English:

```txt
Body Lotion / Cream / Oil / Mist
Body Wash / Scrub
Hair Removal / Wax
Hand Cream / Hand Wash
Foot Care
Deodorant
```

#### 헤어케어 / Hair Care

Korean:

```txt
샴푸 / 린스 / 컨디셔너 / 트리트먼트
헤어팩 / 두피 케어 팩
헤어토닉 / 두피토닉
헤어에센스 / 세럼 / 오일
왁스 / 젤 / 무스 / 스프레이 / 픽서
```

English:

```txt
Shampoo / Rinse / Conditioner / Treatment
Hair Pack / Scalp Care Pack
Hair Tonic / Scalp Tonic
Hair Essence / Serum / Oil
Wax / Gel / Mousse / Spray / Fixer
```

#### 속눈썹 / 네일 / Eyelash / Nail

Korean:

```txt
속눈썹 펌제
속눈썹 에센스 / 세럼 / 앰플
속눈썹 영양 케어
네일 케어
```

English:

```txt
Eyelash Perm
Eyelash Essence / Serum / Ampoule
Eyelash Nutrition Care
Nail Care
```

#### 반영구 색소 / Semi-permanent Pigment

Korean:

```txt
반영구화장 색소
반영구 케어
재생크림
```

English:

```txt
Semi-permanent Makeup Pigment
Semi-permanent Care
Regeneration Cream
```

### Layout

- Desktop: 4 columns or 3 columns depending on width
- Tablet: 2 columns
- Mobile: 1 column
- Cards should feel premium, light, and editorial
- Use simple line icons or minimal abstract icons if available

### Interaction

- Filter tabs are optional:
  - All
  - Face
  - Body
  - Hair
  - Specialty
- If filters add too much complexity, use a simple card grid.

---

## SECTION 05. Process

### Purpose

Help the client understand how the project proceeds.

### Korean Title

```txt
Process
```

### Korean Description

```txt
상담부터 출고와 사후관리까지,
브랜드의 상황에 맞는 단계별 프로세스로 진행합니다.
```

### English Title

```txt
Process
```

### English Description

```txt
From consultation to delivery and aftercare,
we guide each project through a step-by-step process tailored to the brand’s situation.
```

### Steps

Korean:

```txt
01 상담 및 기획
02 제형 개발 & 샘플링
03 디자인 & 패키지 디자인
04 견적 및 MOQ 확정
05 부자재 입고 / 생산 / 포장
06 출고 및 사후관리
```

English:

```txt
01 Consultation & Planning
02 Formula Development & Sampling
03 Design & Package Design
04 Quotation & MOQ Confirmation
05 Materials / Production / Packing
06 Delivery & Aftercare
```

### Layout

- Desktop: horizontal timeline
- Mobile: vertical stacked timeline
- Each step includes short supporting body text

### Korean Supporting Text

```txt
01 프로젝트 목적, 희망 품목, 브랜드 방향을 확인합니다.
02 제품 제형을 개발하고 샘플을 통해 방향을 조정합니다.
03 용기, 라벨, 패키지 디자인 방향을 구체화합니다.
04 품목과 수량에 따른 견적 및 MOQ 조건을 확정합니다.
05 부자재 입고 후 생산, 충진, 포장 과정을 진행합니다.
06 완제품 출고 후 필요한 사후관리까지 지원합니다.
```

### English Supporting Text

```txt
01 We clarify the project goal, product category, and brand direction.
02 We develop formulas and adjust direction through sampling.
03 We refine container, label, and package design direction.
04 We confirm quotation and MOQ conditions based on product and quantity.
05 We proceed with materials, production, filling, and packing.
06 We support delivery and necessary aftercare after production.
```

---

## SECTION 06. Production Guide / MOQ

### Purpose

Communicate that small-batch production is possible without exposing detailed pricing publicly.

### Important Instruction

Do **not** display detailed price tables publicly.

The source material includes MOQ and price example tables, but the website should not expose exact pricing because it may reduce negotiation flexibility.

Use this as a consultation-oriented section instead.

### Korean Title

```txt
Production Guide
```

### Korean Body

```txt
소량 생산부터 대량 생산까지,
브랜드 단계에 맞는 생산 조건을 제안합니다.

품목, 용기, 성분, 수량에 따라 MOQ와 견적이 달라질 수 있으므로
정확한 조건은 상담을 통해 안내드립니다.
```

### English Title

```txt
Production Guide
```

### English Body

```txt
From small-batch production to larger-scale manufacturing,
we propose production conditions suited to each brand stage.

MOQ and quotation may vary depending on product type, container, ingredients, and quantity.
Please contact us for an accurate consultation.
```

### CTA

Korean:

```txt
내 제품 MOQ 상담받기
```

English:

```txt
Consult My MOQ
```

### Layout

- Use 3 soft info cards:
  - Small-batch Production
  - Custom Formula / Package
  - Consultation-based Quotation

---

## SECTION 07. Partners

### Purpose

Build credibility through partner references.

### Korean Title

```txt
Business Partners
```

### Korean Body

```txt
다양한 브랜드, 기관, 교육·뷰티 관련 파트너와 함께해왔습니다.
```

### English Title

```txt
Business Partners
```

### English Body

```txt
We have worked with a wide range of brands, institutions, and beauty-related partners.
```

### Partner Keywords

Use a text-based partner wall or logo-grid-style layout.

Do not use actual logos unless image assets are available and usage rights are confirmed.

```txt
라헬
인덕대학교
오뉴월색소
한국패디협회
서정대학교
물리블리
퓨스코어
에비에
PBS
셀긴코스메틱
차의과대학교
GLK바이오
셀코스
닥터핌
아리벨
숙명여자대학교
에리카
리나코리아
```

### Layout

- Use a refined word-wall style
- Vary text sizes subtly
- Use muted colors
- Avoid looking chaotic
- Make it feel like a premium credibility section

---

## SECTION 08. Contact

### Purpose

Drive inquiry submission.

### Korean Title

```txt
Start Your Project
```

### Korean Body

```txt
제품 아이디어와 브랜드 방향을 남겨주시면,
생산 가능성과 진행 조건을 검토해 안내드립니다.
```

### English Title

```txt
Start Your Project
```

### English Body

```txt
Share your product idea and brand direction.
We will review production feasibility and guide you through the next steps.
```

### Form Fields

Use these fields:

```txt
Name
Company
Email
Phone
Service Type
Product Category
Expected Quantity
Brand Status
Message
Privacy Agreement
```

### Korean Labels

```txt
이름
회사명
이메일
연락처
희망 서비스
희망 품목
예상 수량
브랜드 보유 여부
문의 내용
개인정보 수집 및 이용에 동의합니다.
```

### English Labels

```txt
Name
Company
Email
Phone
Service Type
Product Category
Expected Quantity
Brand Status
Message
I agree to the collection and use of personal information.
```

### Select Options

Service Type:

```txt
OEM
ODM
Consulting
Other
```

Brand Status:

```txt
Existing brand
New brand
Preparing
```

### Form Behavior

For now, implement the form UI and structure only.

Prepare the code so EmailJS can be connected later.

Use environment variable placeholders:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

If EmailJS is not configured, prevent actual submission and show this friendly message:

Korean:

```txt
문의 기능은 연결 준비 중입니다. 이메일 또는 연락처를 통해 문의해주세요.
```

English:

```txt
The inquiry function is being prepared. Please contact us by email or phone for now.
```

Add basic validation:

- Required name
- Required email
- Required message
- Privacy agreement must be checked

---

## SECTION 09. Footer

### Content

Korean:

```txt
O_NEWOL COMPANY

화장품 | 코스메슈티컬 | 더마코스메틱 | 반영구색소 | OEM/ODM

사업자등록번호: 입력 예정
주소: 입력 예정
이메일: 입력 예정
연락처: 입력 예정
```

English:

```txt
O_NEWOL COMPANY

Cosmetics | Cosmeceutical | Derma Cosmetics | Semi-permanent Pigment | OEM/ODM

Business Registration No.: TBD
Address: TBD
Email: TBD
Phone: TBD
```

### Footer Navigation

```txt
About
Services
Capabilities
Process
Partners
Contact
```

---

# 8. Design Direction

## Visual Keywords

```txt
premium
clean
soft
warm
trustworthy
cosmetic
laboratory
manufacturing
refined
B2B
minimal
editorial
```

## Color Direction

Use a palette similar to:

```txt
Warm White: #F8F5EF
Soft Beige: #E9DFD0
Muted Sand: #C9B79F
Deep Charcoal: #171717
Soft Gray: #8A857D
Accent Brown / Gold: #9A7A56
```

Exact colors can be adjusted if needed.

## Typography

Use a clean modern sans-serif.

Recommended:

- Korean: Pretendard, Noto Sans KR, or system fallback
- English: Inter, Helvetica, or system fallback

Typography should feel modern but not cold.

## Layout Principles

- Large whitespace
- Strong hierarchy
- Soft image areas
- Editorial spacing
- Rounded but not overly cute
- Premium B2B tone
- Avoid heavy shadows
- Use subtle borders and dividers
- Avoid overly saturated colors

---

# 9. Interaction Requirements

Use subtle, lightweight interactions.

Required:

1. Sticky header with blur on scroll
2. Smooth anchor scrolling
3. Section fade-up reveal on scroll
4. Service card hover interaction
5. CTA button micro interaction
6. Timeline step reveal
7. Mobile menu open/close transition

Optional:

- Soft floating visual in hero
- Subtle marquee for partner keywords
- Simple filter in capabilities section

Do not overuse animation.  
The site should feel refined, not flashy.

---

# 10. Technical Requirements

## Stack

```txt
React
Vite
CSS Modules, global CSS, or Tailwind CSS
React Router or simple route detection for / and /en
Optional: Framer Motion
Optional: EmailJS integration-ready structure
```

## Build

Make sure this command works:

```bash
npm run build
```

## Deployment

The project should be ready for Vercel deployment.

## Structure

Create a clean component structure:

```txt
src/
├─ App.jsx
├─ main.jsx
├─ data/
│  └─ content.js
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ About.jsx
│  ├─ Services.jsx
│  ├─ Capabilities.jsx
│  ├─ Process.jsx
│  ├─ ProductionGuide.jsx
│  ├─ Partners.jsx
│  ├─ Contact.jsx
│  └─ Footer.jsx
├─ styles/
│  ├─ global.css
│  └─ variables.css
└─ utils/
   └─ language.js
```

If TypeScript is already configured, use `.tsx` and `.ts`.  
If not, use JSX.

## Content Management

All Korean and English text should be editable from:

```txt
src/data/content.js
```

Use an object structure like:

```js
export const content = {
  ko: {
    nav: {},
    hero: {},
    about: {},
    services: {},
    capabilities: {},
    process: {},
    productionGuide: {},
    partners: {},
    contact: {},
    footer: {}
  },
  en: {
    nav: {},
    hero: {},
    about: {},
    services: {},
    capabilities: {},
    process: {},
    productionGuide: {},
    partners: {},
    contact: {},
    footer: {}
  }
}
```

---

# 11. SEO Requirements

## Korean Page

Title:

```txt
오뉴월컴퍼니 | 화장품 OEM ODM 소량생산 파트너
```

Description:

```txt
오뉴월컴퍼니는 제형 개발, 콘셉트 기획, 디자인·패키징, 제조·출고, 수출까지 연결하는 화장품 OEM/ODM 원스톱 파트너입니다.
```

## English Page

Title:

```txt
O_NEWOL COMPANY | Cosmetic OEM ODM Partner
```

Description:

```txt
O_NEWOL COMPANY is a cosmetic OEM/ODM partner connecting formula development, concept planning, package design, manufacturing, delivery, and export support.
```

## Additional SEO

- Add Open Graph meta tags
- Add language alternate links if possible
- Add semantic section tags
- Use proper heading hierarchy
- Avoid multiple H1s on one page
- Use descriptive alt text for images/placeholders

---

# 12. Accessibility Requirements

- Use semantic HTML
- Ensure sufficient color contrast
- Buttons must have clear labels
- Navigation must be keyboard accessible
- Mobile menu should be accessible
- Form fields should be connected to labels
- Error messages should be readable
- Do not rely only on color to communicate status

---

# 13. Important Content Decisions

## Pricing / MOQ

Do not publish detailed price tables.

Reason:

- Exact price tables can reduce negotiation flexibility
- Pricing may change depending on quantity, container, ingredients, and specification
- The website should guide users to consultation instead

Use consultation-oriented copy instead.

## Partner Logos

Do not use actual logos unless image assets and usage rights are available.

Use a text-based partner wall first.

## Uncertain Source Text

Some source labels may contain typos or unclear Korean terms.  
Keep all category text editable from the content file so it can be corrected later.

---

# 14. Implementation Checklist

Before finishing, check:

- [ ] Korean route `/` works
- [ ] English route `/en` works
- [ ] Header navigation works
- [ ] Smooth anchor scrolling works
- [ ] Mobile layout works from 360px width
- [ ] Tablet layout works
- [ ] Desktop layout works
- [ ] Contact form UI works
- [ ] Form validation works
- [ ] EmailJS placeholders are prepared
- [ ] No actual backend is required
- [ ] `npm run build` passes
- [ ] Design feels premium and cosmetic
- [ ] Price tables are not displayed
- [ ] All main text is editable in `content.js`
- [ ] SEO title and description are applied
- [ ] Accessibility basics are covered

---

# 15. Final Output Expected

Implement the full responsive bilingual website.

Do not only create a skeleton.  
Build a complete first version with all sections, responsive styling, and interaction details.

The final result should be stable enough for Vercel deployment and easy to refine visually afterward.

