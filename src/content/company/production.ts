import type { CompanyPage } from '@/types/company';

export const productionPage: CompanyPage = {
  title: 'Production',
  metaTitle: 'Production & Quality | ultrafilter India',
  metaDescription: 'How Ultrafilter (India) Pvt. Ltd. ensures product quality, traceability, and support for the ultrafilter range supplied to the Indian market.',
  heroTitle: 'Production',
  intro: 'Ultrafilter (India) Pvt. Ltd. works with the global ultrafilter supply chain and certified manufacturing partners so customers in India receive genuine products, documented quality, and dependable performance.',
  sections: [
    {
      heading: 'Quality & Supply Chain',
      body: '<p>Products supplied through Ultrafilter (India) Pvt. Ltd. are sourced and controlled to meet ultrafilter specifications. We maintain traceability, documented acceptance criteria, and alignment with the same engineering standards that define the ultrafilter range worldwide.</p>',
      image: '/images/company/production-floor.jpg',
      imagePosition: 'right',
    },
    {
      heading: 'Construction & Design',
      body: '<p>Our in-house design and construction team develops new products and adapts existing designs for special customer requirements. Using modern CAD tools and close collaboration with the R&D and manufacturing teams, we can move from concept to production prototype rapidly — and ensure that design intent is correctly translated into manufactured product.</p>',
    },
    {
      heading: 'Quality Management',
      body: '<p>ultrafilter operates an integrated quality management system certified to ISO 9001:2015. Products supplied through our channels are inspected against documented acceptance criteria. Batch records and test results are retained to provide traceability. Our quality team conducts audits and manages supplier qualification to ensure consistent material and product quality.</p>',
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
