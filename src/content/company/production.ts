import type { CompanyPage } from '@/types/company';

export const productionPage: CompanyPage = {
  title: 'Production',
  metaTitle: 'Production – Made in Germany | ultrafilter',
  metaDescription: 'ultrafilter manufactures filtration and gas treatment components at its Hilden, Germany facility — with in-house design, quality management, and all relevant certifications.',
  heroTitle: 'Production',
  intro: 'Every ultrafilter product is designed, manufactured, and quality-assured at our Hilden facility — giving us complete control over quality at every stage of production.',
  sections: [
    {
      heading: 'Production in Germany',
      body: '<p>ultrafilter manufactures the complete product range at its headquarters in Hilden, North Rhine-Westphalia. Manufacturing in Germany allows us to maintain close control over quality, respond quickly to customer requirements, and ensure short delivery times. All production equipment is regularly calibrated and maintained to ensure consistent output quality.</p>',
      image: '/images/company/production-floor.jpg',
      imagePosition: 'right',
    },
    {
      heading: 'Construction & Design',
      body: '<p>Our in-house design and construction team develops new products and adapts existing designs for special customer requirements. Using modern CAD tools and close collaboration with the R&D and manufacturing teams, we can move from concept to production prototype rapidly — and ensure that design intent is correctly translated into manufactured product.</p>',
    },
    {
      heading: 'Quality Management',
      body: '<p>ultrafilter operates an integrated quality management system certified to ISO 9001:2015. Every product leaving our facility is inspected against documented acceptance criteria. Batch records and test results are retained to provide full traceability. Our quality team conducts regular internal audits and manages supplier qualification to ensure consistent input material quality.</p>',
    },
    {
      heading: 'Certifications & Approvals',
      body: '<p>ultrafilter products carry the approvals required for their intended markets and applications:</p>',
      items: [
        'ISO 9001:2015 — Quality Management System',
        'ISO 14001:2015 — Environmental Management System',
        'CE marking — Pressure Equipment Directive (PED 2014/68/EU)',
        'ATEX — Selected products certified for hazardous area use',
        'ISO 12500 — Filter element test standard',
        'ISO 8573-1 — Compressed air quality standard',
      ],
    },
  ],
};
