export interface Job {
  id: string;
  title: string;
  company: string;
  logoUrl: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Remote' | 'Contract';
  salary: string;
  experience: 'Entry-level' | 'Mid-level' | 'Senior';
  description: string;
  postedAt: string;
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full-Stack Engineer',
    company: 'TechVibe Solutions',
    logoUrl: '⚡',
    location: 'Remote (US/Canada)',
    type: 'Remote',
    salary: '$130,000 - $160,000',
    experience: 'Senior',
    description: 'We are seeking a Senior Full-Stack Engineer proficient in Next.js, TypeScript, and AWS. You will own the architecture of our core user-facing analytics engine.',
    postedAt: '1 day ago'
  },
  {
    id: '2',
    title: 'Product UI/UX Designer',
    company: 'CreativeFlow Studio',
    logoUrl: '🎨',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$95,000 - $115,000',
    experience: 'Mid-level',
    description: 'Join our design collective. You will shape the visual language and user journeys for international platforms. Proficiency in Figma is required.',
    postedAt: '2 days ago'
  }
];