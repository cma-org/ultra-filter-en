import type { CompanyPage, JobPosting } from '@/types/company';

export const careersPage: CompanyPage = {
  title: 'Careers',
  metaTitle: 'Careers at ultrafilter | Join Our Team',
  metaDescription: 'Join the ultrafilter team — an owner-operated manufacturer of compressed air filtration equipment in Hilden, Germany. View current job openings.',
  heroTitle: 'Careers at ultrafilter',
  intro: 'We are looking for motivated people who want to shape the future of compressed air treatment technology with us. At ultrafilter, you will find a collaborative, owner-operated environment where personal responsibility and expertise are valued.',
  sections: [
    {
      heading: 'Why ultrafilter?',
      body: '<p>At ultrafilter you work in a medium-sized, owner-operated company with short decision paths and a genuine team culture. We value personal responsibility, mutual respect, and continuous professional development. Our employees enjoy a stable, secure environment with the dynamics of a growing international business.</p>',
    },
    {
      heading: 'Our Values',
      body: '<ul><li><strong>Personal responsibility</strong> — we trust our employees to own their work and drive results</li><li><strong>Teamwork</strong> — collaboration across departments is central to how we operate</li><li><strong>Mutual respect</strong> — every colleague\'s contribution is valued equally</li><li><strong>Continuous learning</strong> — we invest in development through training, seminars, and on-the-job experience</li></ul>',
    },
  ],
};

export const openPositions: JobPosting[] = [
  {
    title: 'Service Technician (m/f/d)',
    location: 'Hilden, Germany (field-based)',
    type: 'Full-time, permanent',
    description: 'We are looking for a qualified service technician to join our growing field service team. You will carry out maintenance, inspection, repair, and commissioning of ultrafilter compressed air treatment equipment at customer sites throughout Germany and neighbouring countries.',
  },
];
