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

export interface MoqColumn {
  key: string;
  label: string;
  highlight?: boolean;
  minOrder: string;
  materials: string;
  sample: string;
  reorder: string;
}

export interface PriceRow {
  item: string;
  values: string[];
}

export interface QuoteRow {
  item: string;
  qty: string;
  amount: string;
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
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    services: string;
    capabilities: string;
    moq: string;
    pricing: string;
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
  moq: {
    eyebrow: string;
    title: string;
    body: string;
    rowLabels: { minOrder: string; materials: string; sample: string; reorder: string };
    columns: MoqColumn[];
    note: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    body: string;
    tableHead: string[];
    rows: PriceRow[];
    exampleTitle: string;
    exampleHead: string[];
    exampleRows: QuoteRow[];
    note: string;
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
