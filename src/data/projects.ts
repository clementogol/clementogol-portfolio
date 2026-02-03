export type ProjectType =
  | 'default'
  | 'absolute'
  | 'featured'
  | 'mini'
  | 'compact'
  | 'full'
  | 'carousel'
  | 'overlay'
  | 'inline'
  | 'grid'
  | 'list'
  | 'timeline'
  | 'gallery'
  | 'tableau'
  | 'powerbi'
  | 'interactive'
  | 'split';

export interface Project {
  title: string;
  tag: string; // Used for unique ID
  description: string;
  thumbnail: string;
  thumbnail2?: string; // Optional second image for overlay effects
  theme: string;
  type: ProjectType;
  sourceUrl?: string; // We will use this for "View Details" or NULL
  liveUrl: string; // We will use this for "Book Call"
}

const projects: Project[] = [
  {
    title: 'Administrative & Operations Support',
    tag: 'admin-ops',
    description: 'Stop drowning in chaos. I handle inbox management, calendar coordination, travel booking, and SOP creation. I organize your business logic into structured workflows so you can focus on growth, not admin.',
    thumbnail: 'pexels-leeloothefirst-5408918.jpg', // Placeholder: Will be replaced with Admin Dashboard image
    theme: 'purple',
    type: 'full', 
    sourceUrl: '', // No source code for a service
    liveUrl: 'https://calendly.com/your-link', // Link to your booking page
  },
  {
    title: 'Technical Virtual Assistant',
    tag: 'tech-va',
    description: 'The "IT Guy" for your business. I manage WordPress websites, update plugins, troubleshoot software issues, and set up CRM automations. I ensure your digital assets have zero downtime and your systems talk to each other.',
    thumbnail: 'pexels-kevin-ku-92347-577585.jpg', // Placeholder: Will be replaced with Coding/Tech image
    theme: 'blue', 
    type: 'overlay', // Using the overlay style for a "Tech" feel
    sourceUrl: '',
    liveUrl: 'https://calendly.com/your-link',
  },
  {
    title: 'Social Media & Digital Marketing',
    tag: 'social-media',
    description: 'Grow your brand without the headache. I handle content scheduling, community engagement, hashtag research, and Canva graphic design. I provide monthly analytics reports to track your ROI and engagement growth.',
    thumbnail: 'pexels-walls-io-440716388-15595051.jpg', // Placeholder: Will be replaced with Social Media image
    thumbnail2: 'pexels-darlene-alderson-7970815.jpg',
    theme: 'orange',
    type: 'overlay',
    sourceUrl: '',
    liveUrl: 'https://calendly.com/your-link',
  },
];

export default projects;
