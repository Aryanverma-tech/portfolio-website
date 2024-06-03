import elitceler from '../assets/elitceler.svg';
import ivoyant from '../assets/ivoyant-logo.png';
import nfc from '../assets/nfclogo.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import wonderlust from '../assets/wonderlust.png';
import fooddelivery from '../assets/fooddelivey.png';
import Nutrifit from '../assets/Nutrifit.png';
import weather from '../assets/weather.png';
import javascript from '../assets/javascript.png';
import git from '../assets/git.png';
import youtube from '../assets/youtube.svg';
import rapid from '../assets/rapidapi.svg';
import java from '../assets/java.png';
import html from '../assets/html.png';
import css from '../assets/css.png';



import github from '../assets/github.png';
import vscode from '../assets/vscode.svg';
// import tailwind from "../assets/t"

export const nfcInfo = [
  {
    key: 1,
    text: "Successfully completed 4 projects, including the company's main website",
  },
  {
    key: 3,
    text: 'Collaborated closely with team members to ensure project delivery within expected timelines',
  },
  {
    key: 4,
    text: 'Contributed to the development of new features and functionalities',
  },
  {
    key: 5,
    text: 'Implemented responsive design principles, ensuring optimal user experiences across various devices and screen sizes.',
  },
  {
    key: 6,

    text: 'Engaged in code reviews, providing constructive feedback and adhering to best practices to maintain code quality and consistency.',
  },
  {
    key: 7,

    text: 'Participated in user testing and feedback sessions, refining features based on user input and contributing to a user-centric development approach.',
  },
  {
    key: 8,
    text: 'Gained valuable hands-on experience with relevant technologies and received positive feedback for my work and learning ability.',
  },
];
export const ivoyantInfo = [
  {
    key: 1,
    text: 'Played a key role in developing a dynamic decision table component, contributing to its functionality and optimizing user interactions.',
  },
  {
    key: 2,
    text: 'Implemented key features, optimizing user interactions and decision-making processes.',
  },
  {
    key: 3,
    text: 'Contributed to the design and implementation of a metadata extractor, streamlining data retrieval and organization.',
  },
  {
    key: 4,

    text: 'Worked closely with a senior developers, gaining valuable insights and guidance in the intricacies of software development.',
  },
  {
    key: 5,

    text: 'Utilized languages and frameworks such as TypeScript, React.js, Nest.js, PostgreSQL, Zustand and Unit Testing  for the development of software applications.',
  },
  {
    key: 6,

    text: 'Collaborated in the design and documentation of software architectures, ensuring clarity and maintainability of codebases.',
  },
];
export const elitcelerInfo = [
  {
    key: 0,
    text: "Successfully delivered four projects Till date. This includes the development of custom backend solutions tailored to each client's unique requirements",
  },
  {
    key: 1,
    text: 'Designed and implemented scalable backend architectures, ensuring optimal performance and flexibility to accommodate future growth',
  },
  {
    key: 2,
    text: 'Demonstrated proficiency in a range of technologies, including  Node.js, Express.js, MongoDb, Redis, AWS S3, Docker to create robust and efficient backend systems',
  },
  {
    key: 3,
    text: 'Successfully navigated through different project categories, demonstrating adaptability and a deep understanding of unique industry requirements. Projects ranged from Ed-Tech, E-Commerce, healthcare and Service Marketplace] showcasing versatility and a broad skill set',
  },
  {
    key: 4,
    text: 'Worked closely with cross-functional teams, including frontend developers(App & Web), QA engineers and Devops Engineer',
  },
  {
    key: 5,
    text: 'Established a reputation for delivering projects on time and within budget, leading to high levels of client satisfaction and positive testimonials',
  },
];

export const experiences = [
  {
    id: '1',
    company: 'Eliceler Technologies',
    logo: elitceler,
    location: 'Hyderabad, Telangana, India',
    role: 'Backend Developer',
    duration: 'JULY 2023 - Present',
    description: elitcelerInfo,
  },
  {
    id: '2',
    company: 'Ivoyant ',
    logo: ivoyant,
    location: 'bengaluru, Karnataka, India',
    role: 'Software Engineer Intern',
    duration: 'APR 2023 - AUG 2023',
    description: ivoyantInfo,
  },
  {
    id: '3',
    company: 'NFC Solution',
    logo: nfc,
    location: 'Hyderabad, Telangana, India',
    role: 'Front End Developer Intern',
    duration: 'JUNE 2022 - DEC 2022',
    description: nfcInfo,
  },
];

export const projects = [
  {
    id: '1',
    name: 'WonderLust',
    coverImage: wonderlust,
    workedOn: ['Website'],
    description: [
      'Developed ”Wonderlust,” a comprehensive hostel booking platform utilizing Node.js, Express.js, and MongoDB. Designed to provide seamless hostel booking experiences worldwide, the project showcases my proficiency in backend development and database management within the MERN stack. Implemented features include user authentication, hostel listings, booking functionalities, and robust data storage mechanisms, highlighting my ability  to deliver scalable and user-centric web applications.',
      
      
    ],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      
      
      

      {
        logo: node,
        name: 'Node.js',
      },
      {
        logo: express,
        name: 'Express.js',
      },
      {
        logo: mongodb,
        name: 'MongoDB',
      },
      
      
    ],
    link: 'https://talk-time.netlify.app/',
  },
  {
    id: '2',
    name: 'Hunger Hopper',
    coverImage: fooddelivery,
    description: [
      'Developed a dynamic food-delivery website with user-friendly interfaces and responsive design for seamless navigation across devices. Implemented real-time order tracking and payment processing to enhance user experience and streamline the ordering process using React, JavaScript, and CSS.',
      

    ],
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
        
      },
      
      
    ],
    link: 'https://youtu.be/3OosYaPqqdA',
  },


  {
    id: '3',
    name: 'Nutrifit',
    coverImage: Nutrifit,
    description: [
      'Assisted in developing NutriFit, an app that tracks the nutrition of food to promote healthy eating habits. Contributed to the design and implementation of features for logging meals, analyzing nutritional content, and providing personalized recommendations. Utilized technologies such as Kotlin, API integrations, Roboflow, and object detection to enhance functionality and user experience.',
      

    ],
    workedOn: ['App'],
    technologies: [
     
      
      
    ],
    link: 'https://youtu.be/3OosYaPqqdA',
  },

  {
    id: '3',
    name: 'Weather-App',
    coverImage: weather,
    description: [
      'Crafted a responsive weather application leveraging React.js and Material-UI, seamlessly integrating with a third-party API for real-time weather updates. Implemented user-centric features such as city search, temperature unit toggling, and dynamic weather icons. Utilized React hooks for efficient state management and ensured robust error handling.',
      

    ],
    workedOn: ['Website'],
    technologies: [
      {
        logo: javascript,
        name: 'Javascript',
      },
      {
        logo: react,
        name: 'React.js',
        
      },
      
     
      
      
    ],
    link: 'https://youtu.be/3OosYaPqqdA',
  },
  
  
  
];

export const frontend = [
  {
    logo: html,
    name: 'HTML',
  },
  {
    logo: css,
    name: 'CSS',
  },
  {
    logo: javascript,
    name: 'Javascript',
  },
  
  {
    logo: react,
    name: 'React.js',
  },
  
  
  
  
  
];
export const backend = [
  {
    logo: node,
    name: 'Node.js',
  },
  {
    logo: express,
    name: 'Express.js',
  },
  
 
  {
    logo: mongodb,
    name: 'MongoDB',
  },
  
  
  
  
];
export const other = [
  {
    logo: java,
    name: 'Java',
  },
  
  {
    logo: git,
    name: 'Git',
  },
  {
    logo: github,
    name: 'Github',
  },
  
  {
    logo: vscode,
    name: 'VS Code',
  },
  
];
