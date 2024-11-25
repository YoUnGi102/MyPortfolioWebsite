export interface Project {
  year: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubLink?: string; // Optional GitHub link for each project
}

const projects: Project[] = [
  {
    year: 2023,
    title: 'Project A',
    description: 'A brief description of Project A.',
    thumbnail: '/thumbnails/hckosice.png',
    technologies: ['React', 'Node.js', 'TypeScript'],
    githubLink: 'https://github.com/username/project-a',
  },
  {
    year: 2022,
    title: 'Project B',
    description: 'A brief description of Project B.',
    thumbnail:
      'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/username/project-b',
  },
  // Add more projects as needed
];

export default projects;
