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
  tag: string;
  description: string;
  thumbnail: string;
  thumbnail2?: string;
  theme: string;
  type: ProjectType; // <--- strict!
  sourceUrl?: string;
  liveUrl: string;
}

const projects: Project[] = [
    {
    title: 'Discover the Thrill of Bouldering',
    tag: 'bouldering',
    description: 'A modern responsive website introducing beginners to the sport of bouldering. Features engaging visuals, easy navigation, and a stylish gallery of the bouldering experience. Built with HTML, Tailwind CSS, and a focus on user experience.',
    thumbnail: 'Bouldering2.png',
    thumbnail2: 'Bouldering1.png',
    theme: 'yellow',
    type: 'overlay',
    sourceUrl: 'https://github.com/clementogol/bouldering-website',
    liveUrl: '#', // replace with your live site if any
  },
  // {
  //   title: 'Nairobi Apartment Price Prediction',
  //   tag: 'nap',
  //   description: 'A data science project using Python and machine learning to predict apartment prices in Nairobi. Features data cleaning, EDA, regression modeling, and an interactive Tableau dashboard.',
  //   thumbnail: 'sales_dashboard-optimize.gif',
  //   theme: 'orange',
  //   type: 'full',
  //   sourceUrl: 'https://github.com/clementogol/nairobi_apartment_prediction',
  //   liveUrl: '#',
  // },
{
  title: 'Weather App',
  tag: 'wa',
  description: 'A responsive weather app that delivers real-time city weather updates with a beautiful mobile-first UI. Built with React and the OpenWeatherMap API.',
  thumbnail: 'weather-app-screenshot1.png', 
  // thumbnail2: 'weather-app-screenshot2.png', 
  theme: 'blue',
  type: 'overlay',
  sourceUrl: 'https://github.com/clementogol/weather-app',
  liveUrl: '#', // Add your live link if you have one
},

  // {
  //   title: 'Jumia Laptop Price Scraper',
  //   tag: 'jlps',
  //   description: 'A web scraping and data analysis tool that collects, cleans, and visualizes laptop pricing data from Jumia Kenya. Built with Python and BeautifulSoup.',
  //   thumbnail: 'nextjs-dashboard-screenshot.webp', // Change this to your actual scraper image if available
  //   thumbnail2: 'nextjs-dashboard-screenshot.webp', // Or remove if you only have one screenshot
  //   theme: 'green',
  //   type: 'split',
  //   sourceUrl: 'https://github.com/clementogol/codealpha_tasks/tree/main/jumia-laptop-scraper',
  //   liveUrl: '#',
  // },
  // Uncomment and update below to add more projects in the future
  {
    title: 'Next.js App Router Dashboard',
    tag: 'next-dash',
    description: 'A full-stack dashboard featuring data fetching, search, pagination, and user authentication with Supabase. Built following the official Next.js Learn Course.',
    thumbnail: 'nextjs-dashboard-screenshot.webp', // Make sure this image is in public/images/works/
    theme: 'green', // A nice color for this project
    type: 'full', // The default layout works well for this
    sourceUrl: 'https://github.com/clementogol/nextjs-dashboard',
    liveUrl: 'https://nextjs-dashboard-omega-blond-34.vercel.app/',
  },
];

export default projects;
