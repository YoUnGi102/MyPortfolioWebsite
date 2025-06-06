import {
  faGithub,
  faLinkedin,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';

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
      description:
        'I worked on this project during my internship at Ness KE, where I was in a team of around 7 developers, utilizing a modified SCRUM methodology.' +
        ' I was tasked with designing new features, implementing said features, finding and fixing bugs as well as documenting the system. ' +
        'The technologies we used during development were React & Redux on the front-end, Node.js & Express.js on the back-end, and PostgreSQL' +
        ' with TypeORM for the database.',
      techStack: [
        'ReactJs',
        'Redux',
        'Node.js',
        'TypeScript',
        'Express.js',
        'PostgreSQL',
        'TypeORM',
        'WebSockets',
      ],
      projectLinks: [
        {
          icon: faGlobe,
          title: 'Live Website',
          url: 'https://vstupenky.hckosice.sk/',
        },
      ],
    },
    {
      logo: 'files/images/nodejs-logo.svg',
      title: 'NodeJS/Express Template',
      description:
        'A production-ready Node.js/Express backend template built with TypeScript and designed for scalability, testability, and clean architecture. It includes robust authentication with refresh tokens, full test coverage (unit & integration), Docker support, CI/CD pipeline, and a decoupled TypeORM setup for easy persistence swapping. Created to demonstrate backend engineering best practices and real-world application structure.',
      techStack: [
        'Node.js',
        'RESTApi',
        'TypeScript',
        'Express.js',
        'Jest',
        'Supertest',
        'PostgreSQL',
        'TypeORM',
        'Docker',
        'CI/CD',
      ],
      projectLinks: [
        {
          icon: faGithub as IconDefinition,
          title: 'Repository',
          url: 'https://github.com/YoUnGi102/NodeJS-Express-Template',
        },
      ],
    },
    {
      logo: 'files/images/mealprep-tracker-logo.svg',
      title: 'MealPrepTracker',
      description:
        'I have a great passion for working-out and eating healthy and so I decided to build a project that would help me.' +
        ' MealPrepTracker is my project, which I will help me (and possibly others) easily save recipes and track associated macro-nutrients.' +
        'The project is still in the early stages of development, but it is already live and can be used. I am develpoing this project with ' +
        'scalability and maintainability in mind (as if it was a product to be used my many people). The main technologies I chose to use were' +
        ' React (with Redux for state management) on the Front-end and Node.js/Express with PostgreSQL for the RESTFul API.',
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
      projectLinks: [
        {
          icon: faGlobe as IconDefinition,
          title: 'Live Website',
          url: 'https://mealpreptrackerfrontend.onrender.com/',
        },
        {
          icon: faGithub as IconDefinition,
          title: 'Front-end',
          url: 'https://github.com/YoUnGi102/MealPrepTrackerFrontend',
        },
        {
          icon: faGithub as IconDefinition,
          title: 'Back-end',
          url: 'https://github.com/YoUnGi102/MealPrepTrackerBusiness',
        },
      ],
    },
    {
      logo: 'files/images/via-logo.svg',
      title: 'ChadList',
      description:
        'A project I developed in my 3rd semester at VIA, with 3 of my classmates. This was my first experience with a N-tier ' +
        "architecture. It was designed with UN Goals in mind (specifically #12 - Sustainable consumption and production) and it's purpose " +
        'for people to post their unused belongings (whether its kitchen appliances, furniture, tools etc.) for other people who might find' +
        ' use for them rather than throwing it out. It was developed using Blazor on the Presentation layer, .NET for the Bussiness / Logic' +
        ' layer and JAVA with a gRPC API for Database layer.',
      techStack: [
        'Java',
        'JPA/Hibernate',
        'gRPC',
        'RESTApi',
        'C#/.NET',
        'Blazor',
        'JUnit',
      ],
      projectLinks: [
        {
          icon: faGithub,
          title: 'Presentation Layer',
          url: 'https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/PresentationTier',
        },
        {
          icon: faGithub,
          title: 'Business Layer',
          url: 'https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/BusinessLogicTier',
        },
        {
          icon: faGithub,
          title: 'Database Layer',
          url: 'https://github.com/dragoselul/SEP3/tree/main/SEP3/SEP3%20Project/DataAccessTier',
        },
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
