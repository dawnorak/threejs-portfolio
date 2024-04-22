import { meta, tesla, effigo, onward } from "../assets/images";
import {
    car,
    contact,
    css,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    summiz,
    threads,
    pytorch,
    springboot,
    python,
    unity3d,
    tensorflow,
    cprogramming,
    java,
    golang
} from "../assets/icons";

export const skills = [
    {
        imageUrl: cprogramming,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Porgramming Language",
    },
    {
        imageUrl: python,
        name: "Python Programming",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
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
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Java Framework",
    },
    {
        imageUrl: golang,
        name: "Go",
        type: "Programming Language",
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
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "AI/ML Library",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "AI/ML",
    },
    {
        imageUrl: unity3d,
        name: "Unity Engine",
        type: "Game Dev Engine",
    }
];

export const experiences = [
    {
        title: "MLOps Intern",
        company_name: "Onward Assist",
        icon: onward,
        iconBg: "#accbe1",
        date: "Jan 2024 - Present",
        points: [
            "Ensuring the efficiency of ML models using load balancing techniques on AWS.",
            "Management of docker containers and their respective AWS instances for a seamless workflow.",
            "Implementing cluster network using AWS for the efficient scaling of multiple algorithms.",
            "Integration of DICOM workflow compatibility into the organization's pathology applications.",
            "Leveraging Google Healthcare API for improved productivity and data management."
        ],
    },
    {
        title: "Software Developer Intern",
        company_name: "EffiGo",
        icon: effigo,
        iconBg: "#fbc3bc",
        date: "Jan 2023 - July 2023",
        points: [
            "Modernization of legacy Spring Boot applications, crafting APIs to meet client requirements.",
            "Automated build processes using Jenkins, streamlining workflows and ensuring timely updates through Microsoft Teams notifications.",
            "Actively monitored CI/CD pipelines, fostering efficient collaboration between development and operations teams.",
            "Collaborated with the front-end team to optimize the repsonsiveness of JSP applications and synchronize them with API calls.",
            "Managed AWS instances of the organization's applications, ensuring optimal performance."
        ],
    }
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
        link: 'https://github.com/dawnorak',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vaigaraisathi',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-red',
        name: 'Skin Cancer Early Detection System',
        description: 'Developed a web application that uses a custom EfficientNet-i1 model, which uses involution for the classification of melanoma. Combined with a multi-criteria decision block, the final model estimates the severity of skin cancer.',
        link: 'https://github.com/dawnorak/SCED-Skin-Cancer-Analysis',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'JavaScript Maze Solver',
        description: 'Worked on multiple JavaScript-based web games, including a car racing game created for the HitScan hackathon and a unique maze-solving application that utilizes the BFS and A* algorithms to navigate through provided mazes.',
        link: 'https://github.com/dawnorak/maze-solver',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Cooperation Dynamics in Multi-Agent Systems',
        description: "Explores strategies to promote cooperation in Multi-Agent Systems and Multi-Agent Reinforcement Learning, focusing on game-theoretic scenarios like the Iterated Prisoner's Dilemma. It addresses challenges of balancing individual and group rewards for fostering cooperation among agents in a multi-agent system.",
        link: 'https://github.com/dawnorak/marl-kart-simulator',
    }
];