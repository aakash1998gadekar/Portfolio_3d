import { meta, shopify, starbucks, tesla,logo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Mentorship",
        company_name: "Teaching Assistant ",
        icon: logo,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Engaging and interactive teaching sessions form the core of my approach when instructing students on various topics within the realm of algorithms. ",
            " My aim was to create an environment where students actively participate in the learning process, fostering a dynamic exchange of ideas.",
            "To enhance understanding, I incorporate real-world examples and practical applications, illustrating how algorithms are employed to solve tangible problems. ",
            "Visual aids and interactive demonstrations are integral components of my teaching methodology, promoting a multi-sensory learning experience.",
        ],
    },
    {
        title: "Advertising Committee head of  CSESA Committee SSGMCE",
        company_name: "SSGMCE,Shegaon",
        icon: logo,
        iconBg: "#fbc3bc",
        date: "Jan 2018 - Feb 2020",
        points: [
            "As the head of the Advertising Committee at the Computer Science and Engineering Student Association (CSESA) at Shri Sant Gajanan Maharaj College of Engineering (SSGMCE), my role encompasses a range of responsibilities aimed at promoting and enhancing the visibility of our committee's activities.",
            "In this leadership position, I am entrusted with developing and executing comprehensive advertising strategies for various events and initiatives organized by CSESA. ",
            "Implementing responsive design and ensuring cross-browser compatibilityUtilizing various communication channels, both online and offline, is integral to reaching a diverse audience.",
            "Overall, as the head of the Advertising Committee at CSESA, my goal is to enhance the overall visibility and participation in our initiatives through strategic and creative promotional efforts.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/aakash1998gadekar',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/aakash-gadekar-751819158',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Hotel booking Website using Devops',
        description: 'I created a hotel booking web application offering users the flexibility to either book accommodations or facilitate rentals for others. Employing a DevOps approach, I utilized Jenkins for pipeline scripting, Docker-compose for containerization, and Ansible for automated deployment. The technology stack includes Node.js, MongoDB, and React, ensuring a seamless and feature-rich user experience in this innovative hospitality platform.',
        link: 'https://github.com/aakash1998gadekar/MAJOR-PROJECT',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Banking Management',
        description: 'I designed a simulated banking transaction system using C and Linux system calls, incorporating key functionalities such as file management, locking mechanisms, process management, and inter-process communication (IPC). Leveraging socket programming, I established seamless communication channels between the server and clients, ensuring a robust and secure implementation of common banking operations within a Linux environment.',
        link: 'https://github.com/aakash1998gadekar/Banking-System',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'ChatBot',
        description: 'I developed a dynamic chatbot using the MERN stack (MongoDB, Express.js, React, Node.js) with WebSocket integration. This real-time communication system enables interactive and responsive conversations between users and the chatbot, enhancing user engagement. The MERN stack provides a scalable and efficient foundation for building the frontend and backend components, while WebSockets facilitate instant communication, creating a seamless and interactive chat experience.',
        link: 'https://github.com/aakash1998gadekar/ChatBot',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Scientific Calculator using Devops',
        description: 'Designed a scientific calculator using C++ where we can perform basic functionality of addition,subtraction,power,multiplication and division',
        link: 'https://github.com/aakash1998gadekar/CALCULATOR',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];

