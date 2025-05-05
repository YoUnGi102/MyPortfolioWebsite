import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const data = {
  aboutMe:
    'A dedicated Software Engineer with a passion for back-end development, always eager to learn and grow in the field. I take pride in my adaptability, which enables me to quickly acquire new skills and become familiar with new codebases with ease.',
  skills: [
    {
      name: 'Java',
      level: 4,
    },
    {
      name: 'Python',
      level: 4,
    },
    {
      name: 'TypeScript',
      level: 5,
    },
    {
      name: 'ReactJS',
      level: 4,
    },
    {
      name: 'Redux',
      level: 4,
    },
  ],
  workExperience: [
    {
      logo: 'files/images/ness-ke.svg',
      position: 'Full Stack Developer',
      company: 'Ness KE s.r.o.',
      website: 'https://www.ness.com/ness-slovakia/',
      description:
        'Developed features for React frontend and Node.js backend. Integrated Redux for state management and TypeORM for database operations.',
      start: 'August 2023',
      end: 'January 2024',
    },
  ],
  education: [
    {
      logo: 'files/images/via-logo.svg',
      institution: 'VIA University College',
      major: 'Software Technology Engineering',
      type: 'Bachelor Degree',
      location: 'Horsens, Denmark',
      start: 'September 2021',
      end: 'January 2025',
    },
    {
      logo: 'files/images/spse-logo.svg',
      institution: 'Secondary Vocational School of Electrical Engineering',
      major: 'Information and Networking technologies',
      type: 'High School Degree',
      location: 'Prešov, Slovakia',
      start: 'September 2017',
      end: 'May 2021',
    },
  ],
  courses: [
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Application Development using Microservices and Serverless',
      file: 'files/certificates/img/Coursera - Application Development using Microservices and Serverless.jpg',
      verify: 'https://coursera.org/verify/7JXTB9S73TO8',
      achieved: '2025',
    },
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Introduction to Agile Development and Scrum',
      file: 'files/certificates/img/Coursera - Introduction to Agile Development and Scrum.jpg',
      verify: 'https://coursera.org/verify/T06DBX0D6YN8',
      achieved: '2025',
    },
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Continuous Integration and Continuous Delivery (CI-CD)',
      file: 'files/certificates/img/Coursera - Continuous Integration and Continuous Delivery (CI-CD).jpg',
      verify: 'https://coursera.org/verify/204XW3ECNUXN',
      achieved: '2025',
    },
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Introduction to Containers w Docker, Kubernetes',
      file: 'files/certificates/img/Coursera - Introduction to Containers w Docker, Kubernetes.jpg',
      verify: 'https://coursera.org/verify/4S5I2UQUUX6E',
      achieved: '2025',
    },
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Introduction to DevOps',
      file: 'files/certificates/img/Coursera - Introduction to DevOps.jpg',
      verify: 'https://coursera.org/verify/8H8Q6LSB7NJB',
      achieved: '2025',
    },
    {
      institution: 'Coursera',
      logo: 'files/images/coursera-logo.svg',
      title: 'IBM - Introduction to Test and Behavior Driven Development',
      file: 'files/certificates/img/Coursera - Introduction to Test and Behavior Driven Development.jpg',
      verify: 'https://coursera.org/verify/YUWOJ2IWIDNX',
      achieved: '2025',
    },
    
  ],
  projects: [
    {
      logo: 'files/images/hckosice.png',
      title: 'HcKošice',
      url: 'https://vstupenky.hckosice.sk/',
      description:
        'I worked on this project during my internship, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology. I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL with TypeORM for the database.',
      techStack: [
        'ReactJs',
        'Redux',
        'Node.js',
        'TypeScript',
        'Express.js',
        'PostgreSQL',
        'TypeORM',
      ],
    },
    {
      logo: '',
      title: 'MealPrepTracker',
      url: 'https://mealpreptrackerfrontend.onrender.com/',
      githubLink: '',
      description: '',
      techStack: [
        'ReactJS',
        'Redux',
        'Node.js',
        'RESTApi',
        'TypeScript',
        'Express.js',
        'Jest',
        'PostgreSQL',
        'TypeORM',
        'Docker',
        'CI/CD',
      ],
    },
    {
      logo: '',
      title: 'ChadList',
      url: '',
      githubLink: '',
      description: '',
      techStack: [
        'Java',
        'JPA/Hibernate',
        'gRPC',
        'RESTApi',
        'C#/.NET',
        'Blazor',
        'JUnit',
      ],
    },
  ],
  socialLinks: [
    {
      icon: faLinkedin,
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/tomas-gres',
    },
    {
      icon: faGithub,
      title: 'GitHub',
      url: 'https://github.com/Youngi102',
    },
    {
      icon: faEnvelope,
      title: 'G-mail',
      url: 'mailto:tomasgres2001@gmail.com',
    },
  ],
};

export default data;
