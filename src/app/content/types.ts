export type Locale = 'ko' | 'en';

export interface ServiceItem {
  key: 'odm' | 'oem' | 'consulting';
  label: string;
  description: string;
  tags: string[];
}

export interface CapabilityGroup {
  key: string;
  title: string;
  items: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  body: string;
}

export interface SiteContent {
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    keywords: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    services: string;
    capabilities: string;
    brands: string;
    process: string;
    partners: string;
    contact: string;
    cta: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    features: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    items: ServiceItem[];
    cardCta: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    body: string;
    groups: CapabilityGroup[];
  };
;
;
  brands: {
    eyebrow: string;
    title: string;
    body: string;
    scopeLabel: string;
    skuLabel: string;
    yearLabel: string;
    productsLabel: string;
    backToBrands: string;
    backToBrand: string;
    viewDetail: string;
    entries: BrandEntry[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: ProcessStep[];
  };
  productionGuide: {
    eyebrow: string;
    title: string;
    body: string;
    cards: { title: string; body: string }[];
    cta: string;
  };
  partners: {
    eyebrow: string;
    title: string;
    body: string;
    list: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    fields: Record<
      | 'name'
      | 'company'
      | 'email'
      | 'phone'
      | 'serviceType'
      | 'productCategory'
      | 'quantity'
      | 'brandStatus'
      | 'message'
      | 'agreement',
      string
    >;
    serviceOptions: string[];
    brandOptions: string[];
    submit: string;
    placeholderNotice: string;
    successNotice: string;
    errorNotice: string;
    validation: {
      name: string;
      email: string;
      message: string;
      agreement: string;
    };
  };
  footer: {
    description: string;
    biz: string;
    address: string;
    email: string;
    phone: string;
    nav: string[];
    rights: string;
  };
}

/** 브랜드관 — 자사/수행 브랜드 포트폴리오. 브랜드 아래 제품이 달린다. */
export interface BrandProduct {
  slug: string;
  name: string;
  nameEn: string;
  claim: string;
  tags: string[];
  slices: number;
}

export interface BrandEntry {
  slug: string;
  name: string;
  nameEn: string;
  year: string;
  kind: string;
  summary: string;
  scope: string[];
  skuLabel: string;
  products: BrandProduct[];
}
