export interface Project {
  year: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubLink?: string; // Optional GitHub link for each project
  fullDescription: string; // Detailed description
}

const projects: Project[] = [
  {
    year: 2024,
    title: 'color-house.eu',
    description: 'E-shop management and administration.',
    thumbnail: 'files/images/colorhouse.png',
    technologies: ['SEO', 'JavaScript', 'CSS', 'HTML'],
    githubLink: 'https://github.com/username/project-b',
    fullDescription: 'This project',
  },
  {
    year: 2023,
    title: 'HC Košice - Ticketing Portal',
    description: "A ticketing portal for a Košice's hockey club",
    thumbnail: 'files/images/hckosice.png',
    technologies: [
      'React',
      'Node.js',
      'TypeScript',
      'Express.js',
      'PostgreSQL',
      'TypeORM',
    ],
    githubLink: '',
    fullDescription:
      'I worked on this project during my internship, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology. ' +
      'I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. ' +
      'The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL with TypeORM for the database.',
  },
  {
    year: 2022,
    title: 'ChadList',
    description:
      'A Semester project during my studies at VIA, where we designed and developed a platform for people to sell/give away unused items.',
    thumbnail: 'files/imgaes/via_logo.png',
    technologies: [
      'C#',
      '.NET',
      'Blazor',
      'Java',
      'gRPC',
      'JPA/Hibernate',
      'HTTP',
      'RestAPI',
    ],
    githubLink: 'https://github.com/dragoselul/SEP3',
    fullDescription:
      'This project was developed by myself and my schoolmates as a Semester Project. The goal of the project was' +
      'to create a system with a 3-tier architecture. Our project consisted of a Presentation Tier (made with Blazor and C#),' +
      ' Business Tier (made with C#/.NET and HTTP with RestFul API) and Data Tier (made with Java, JPA/Hibernate and gRPC).',
  },

  {
    year: 2022,
    title: 'Winter Store',
    description:
      'One of my semester projects, which was a management system for an imaginary company renting winter-season equipment',
    thumbnail: 'files/images/via_logo.png',
    technologies: ['Java', 'JavaFX', 'RMI'],
    githubLink: 'https://github.com/YoUnGi102/WinterRentalStore',
    fullDescription:
      'This project was developed by myself and my schoolmates as a Semester Project. The goal of the project was' +
      'to create a system with a 3-tier architecture. Our project consisted of a Presentation Tier (made with Blazor and C#),' +
      ' Business Tier (made with C#/.NET and HTTP with RestFul API) and Data Tier (made with Java, JPA/Hibernate and gRPC).',
  },
];

export default projects;
