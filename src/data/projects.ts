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
    year: 2023,
    title: 'HC Košice - Ticketing Portal',
    description: "A ticketing portal for a Košice's hockey club",
    thumbnail: '/thumbnails/hckosice.png',
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
    title: 'Project B',
    description: 'A brief description of Project B.',
    thumbnail:
      'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    githubLink: 'https://github.com/username/project-b',
    fullDescription:
      'This project was developed to streamline data analysis and processing workflows. ' +
      'Using Python and Django, I built RESTful APIs and integrated them with a PostgreSQL database. ' +
      'I also focused on optimizing database queries and implemented user authentication using Django’s built-in features. ' +
      'The project allowed me to deepen my understanding of backend development and database optimization.',
  },
  {
    year: 2021,
    title: 'Project C',
    description: 'A brief description of Project C.',
    thumbnail: '/thumbnails/project-c.png',
    technologies: ['React', 'Firebase', 'JavaScript'],
    githubLink: 'https://github.com/username/project-c',
    fullDescription:
      'Project C was a personal project to build a task management application using React and Firebase. ' +
      'The goal was to create a fully responsive web application where users could add, edit, and delete tasks, with real-time synchronization using Firebase Realtime Database. ' +
      'I implemented authentication using Firebase Auth and used Firebase Hosting to deploy the application. ' +
      'This project enhanced my knowledge of React and Firebase ecosystem.',
  },
  {
    year: 2020,
    title: 'Project D',
    description: 'A brief description of Project D.',
    thumbnail: '/thumbnails/project-d.png',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    githubLink: 'https://github.com/username/project-d',
    fullDescription:
      'Project D was a university project to develop a library management system. ' +
      'Using Java and Spring Boot, I created a backend service that handled book inventory, user management, and borrowing records. ' +
      'The application used a MySQL database to store data, and I implemented a RESTful API for front-end integration. ' +
      'This project improved my skills in Java and Spring Boot, as well as my ability to design and implement REST APIs.',
  },
];

export default projects;
