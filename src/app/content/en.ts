import type { SiteContent } from './types';

export const en: SiteContent = {
  htmlLang: 'en',
  meta: {
    title: 'onewwol company | Cosmetic OEM ODM Partner',
    description:
      'onewwol company is a cosmetic OEM/ODM partner connecting formula development, concept planning, package design, manufacturing, delivery, and export support.',
    ogTitle: 'onewwol company — Cosmetic OEM/ODM Partner',
    ogDescription:
      'From small-batch production to complete brand development, we connect cosmetic OEM/ODM processes into one seamless flow.',
  },
  nav: {
    about: 'About',
    services: 'Services',
    capabilities: 'Capabilities',
    process: 'Process',
    partners: 'Partners',
    contact: 'Contact',
    cta: 'Contact',
    langLabel: 'KR',
  },
  hero: {
    eyebrow: 'onewwol company',
    title:
      'From small-batch production to complete brand development,\nwe connect cosmetic OEM/ODM into one seamless flow.',
    body: 'From formula development and concept planning to package design,\nmanufacturing, delivery, and export support,\nwe help brands reach their desired outcome.',
    primaryCta: 'Start a Project',
    secondaryCta: 'View Capabilities',
  },
  about: {
    eyebrow: 'About',
    title: 'One-stop Brand Partner',
    body: 'From product development and concept planning to package design,\nmanufacturing, delivery, and export support,\nwe connect the fragmented brand-building process into one seamless flow.',
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
    body: 'Three collaboration modes tailored to your brand stage and goals.',
    cardCta: 'Go to contact',
    items: [
      {
        key: 'odm',
        label: 'ODM',
        description:
          'We analyze market trends and brand direction, then lead the process from concept proposal to product development and manufacturing.',
        tags: ['Concept', 'Formula', 'Design', 'Manufacturing'],
      },
      {
        key: 'oem',
        label: 'OEM',
        description:
          'Based on the specifications and direction provided by the brand, we collaborate throughout the development and manufacturing process.',
        tags: ['Specification', 'Sampling', 'Production', 'Aftercare'],
      },
      {
        key: 'consulting',
        label: 'Consulting',
        description:
          'We help define practical execution standards, including early brand planning, product lineup, package direction, and production conditions.',
        tags: ['Planning', 'MOQ', 'Package', 'Launch'],
      },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Production Capabilities',
    body: 'We support development and production across a wide range of cosmetic categories.',
    groups: [
      {
        key: 'skincare',
        title: 'Skincare',
        items: ['Skin / Toner', 'Essence / Serum / Ampoule', 'Cream / Lotion', 'Mist / Oil'],
      },
      {
        key: 'cleanser',
        title: 'Cleanser / Peeling',
        items: [
          'Cleansing Foam / Gel',
          'Oil / Balm',
          'Water / Milk',
          'Peeling / Scrub',
          'Tissue / Pad',
          'Lip / Eye Remover',
        ],
      },
      {
        key: 'suncare',
        title: 'Suncare',
        items: ['Sun Cream', 'Sun Stick', 'Sun Cushion', 'Sun Spray', 'Sun Patch', 'Tanning / After Sun'],
      },
      {
        key: 'mens',
        title: "Men's Care",
        items: ['Skin / Toner', 'All-in-one Lotion', "Men's Grooming", 'Shaving / Waxing'],
      },
      {
        key: 'body',
        title: 'Body Care',
        items: [
          'Body Lotion / Cream / Oil / Mist',
          'Body Wash / Scrub',
          'Hair Removal / Wax',
          'Hand Cream / Hand Wash',
          'Foot Care',
          'Deodorant',
        ],
      },
      {
        key: 'hair',
        title: 'Hair Care',
        items: [
          'Shampoo / Rinse / Conditioner / Treatment',
          'Hair Pack / Scalp Care Pack',
          'Hair Tonic / Scalp Tonic',
          'Hair Essence / Serum / Oil',
          'Wax / Gel / Mousse / Spray / Fixer',
        ],
      },
      {
        key: 'eyelash',
        title: 'Eyelash / Nail',
        items: [
          'Eyelash Perm',
          'Eyelash Essence / Serum / Ampoule',
          'Eyelash Nutrition Care',
          'Nail Care',
        ],
      },
      {
        key: 'pigment',
        title: 'Semi-permanent Pigment',
        items: ['Semi-permanent Makeup Pigment', 'Semi-permanent Care', 'Regeneration Cream'],
      },
    ],
  },
  process: {
    eyebrow: 'Process',
    title: 'Step-by-step Process',
    body: 'From consultation to delivery and aftercare,\nwe guide each project through a step-by-step process tailored to the brand’s situation.',
    steps: [
      { step: '01', title: 'Consultation & Planning', body: 'We clarify the project goal, product category, and brand direction.' },
      { step: '02', title: 'Formula Development & Sampling', body: 'We develop formulas and adjust direction through sampling.' },
      { step: '03', title: 'Design & Package Design', body: 'We refine container, label, and package design direction.' },
      { step: '04', title: 'Quotation & MOQ Confirmation', body: 'We confirm quotation and MOQ conditions based on product and quantity.' },
      { step: '05', title: 'Materials / Production / Packing', body: 'We proceed with materials, production, filling, and packing.' },
      { step: '06', title: 'Delivery & Aftercare', body: 'We support delivery and necessary aftercare after production.' },
    ],
  },
  productionGuide: {
    eyebrow: 'Production Guide',
    title: 'Small-batch to Large-scale',
    body: 'We propose production conditions suited to each brand stage.\nMOQ and quotation may vary depending on product type, container, ingredients, and quantity.\nPlease contact us for an accurate consultation.',
    cards: [
      { title: 'Small-batch Production', body: 'Start small to validate the market and launch faster.' },
      { title: 'Custom Formula / Package', body: 'Formula and package designed around your brand concept.' },
      { title: 'Consultation-based Quotation', body: 'A reasonable quotation tailored to product and quantity.' },
    ],
    cta: 'Consult My MOQ',
  },
  partners: {
    eyebrow: 'Partners',
    title: 'Business Partners',
    body: 'We have worked with a wide range of brands, institutions, and beauty-related partners.',
    list: [
      'Rahel', 'Induk University', 'onewwol company Pigment', 'Korea Pedi Association', 'Seojeong University',
      'Mulibly', 'Puscore', 'Evier', 'PBS', 'Celgin Cosmetic', 'CHA Univ. of Medicine', 'GLK Bio',
      'Celcos', 'Dr. Pim', 'Aribel', 'Sookmyung Women’s Univ.', 'Erika', 'Lina Korea',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Start Your Project',
    body: 'Share your product idea and brand direction.\nWe will review production feasibility and guide you through the next steps.',
    fields: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      serviceType: 'Service Type',
      productCategory: 'Product Category',
      quantity: 'Expected Quantity',
      brandStatus: 'Brand Status',
      message: 'Message',
      agreement: 'I agree to the collection and use of personal information.',
    },
    serviceOptions: ['OEM', 'ODM', 'Consulting', 'Other'],
    brandOptions: ['Existing brand', 'New brand', 'Preparing'],
    submit: 'Send Inquiry',
    placeholderNotice:
      'The inquiry function is being prepared. Please contact us by email or phone for now.',
    successNotice: 'Your inquiry has been received.',
    validation: {
      name: 'Please enter your name.',
      email: 'Please enter a valid email.',
      message: 'Please enter your message.',
      agreement: 'Please agree to the privacy policy.',
    },
  },
  footer: {
    description: 'Cosmetics | Cosmeceutical | Derma Cosmetics | Semi-permanent Pigment | OEM/ODM',
    biz: 'Business Registration No.: TBD',
    address: 'Address: TBD',
    email: 'Email: TBD',
    phone: 'Phone: TBD',
    nav: ['About', 'Services', 'Capabilities', 'Process', 'Partners', 'Contact'],
    rights: '© onewwol company. All rights reserved.',
  },
};
