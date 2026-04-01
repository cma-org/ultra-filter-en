import type { CompanyPage } from '@/types/company';

export const rdPage: CompanyPage = {
  title: 'Research & Development',
  metaTitle: 'Research & Development | ultrafilter',
  metaDescription: 'ultrafilter R&D — basic research, applied product development, and measurement validation. Advancing compressed air filtration technology in our own laboratory.',
  heroTitle: 'Research & Development',
  intro: 'Innovation is at the core of ultrafilter. Our dedicated R&D department conducts fundamental research, develops new products, and validates measurement techniques — ensuring our technology remains at the forefront of compressed air treatment.',
  sections: [
    {
      heading: 'Basic Research',
      body: '<p>Our basic research programme investigates the fundamental physics and chemistry of aerosol filtration, moisture adsorption, oil vapour behaviour, and condensate treatment. Working with universities and research institutes, we develop the scientific understanding that underpins our product development — including the nanotechnology principles behind our high-performance filter elements.</p>',
      image: '/images/company/laboratory.jpg',
      imagePosition: 'right',
    },
    {
      heading: 'Applied Research & Development',
      body: '<p>Findings from basic research are translated into practical product improvements by our applied R&D team. Working in close collaboration with our engineering and manufacturing departments, the team designs and tests new filter media, housing geometries, desiccant configurations, and measurement sensor technologies — rapidly converting laboratory results into production-ready products.</p>',
    },
    {
      heading: 'Measurement and Validation',
      body: '<p>Validating product performance claims requires precise, reproducible measurement. Our in-house measurement and validation laboratory is equipped with calibrated test rigs for filter performance (ISO 12500), dryer performance (ISO 7183), and instrument verification. All test equipment is maintained under our ISO 9001 quality management system and calibrated against traceable standards. The laboratory also supports our calibration service for customer instruments.</p>',
    },
  ],
};
