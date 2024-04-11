import {
    //   mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    nodejs,
    git,
    figma,
    meta,
    tesla,
    carrent,
    threejs,
    dotnet,
    sql,
    backbone,
    tortoiseSVN,
    copyright,
    youtube,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },

    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Database Management System",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS/Nexet JS",
        icon: reactjs,
    },
    {
        name: "Backbone",
        icon: backbone,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },

    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: ".NET (ASP.NET, .NET Core, WPF)",
        icon: dotnet,
    },
    {
        name: "Micrsoft SQL server",
        icon: sql,
    },

    {
        name: "figma",
        icon: figma,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Tortoise SVN",
        icon: tortoiseSVN,
    },
];

const experiences = [
    {
        title: "IT",
        company_name: "Ton Duc Thang",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2012 - 2013",
        points: [
            "Support and consult for custome requirements",
            "Coding by .NET winform, webform by MVC pattern.",
            "Using SQL server",
            "Update new technologies, solutions and report to manager",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Ton Duc Thang",
        icon: web,
        iconBg: "#383E56",
        date: "Jan 2013 - Jan 2015",
        points: [
            "Build the website of Course Registration",
            "Analysis requirements & Design Database",
            "Coding by ASP.NET.",
            "Using SQL server to manage data",
            "Using HTML, CSS",
        ],
    },
    {
        title: "Fullstack Developer",
        company_name: "Ton Duc Thang",
        icon: meta,
        iconBg: "#383E56",
        date: "Jan 2015 - Present",
        points: [
            "Build the software to manage mark, course of student",
            "Build the software to manage leturers",
            "Build the website of lecturer ",
            "Build the website of enrollment ",

            "Coding by .NET core.",
            "Using SQL server to manage data",
            "Using HTML, CSS, javascript, backbone",
        ],
    },
    {
        title: "ReactJS/NextJS Developer",
        company_name: "Freelancer",
        icon: reactjs,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "nextjs",
                color: "green-background",
            },
            {
                name: "typescript",
                color: "pink-background ",
            },
            {
                name: "tailwind",
                color: "violet-background",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/ntthuyvy73/car.git",
    },
    {
        name: "Clone Youtube",
        description: "Clone similar youtube",
        tags: [
            {
                name: "react",
                color: "green-background",
            },
            {
                name: "rapidapi",
                color: "pink-background ",
            },
            {
                name: "axios",
                color: "gray-background",
            },
            {
                name: "mui",
                color: "violet-background",
            },
        ],
        image: youtube,
        source_code_link: "https://github.com/ntthuyvy73/youtube_clone.git",
    },
    {
        name: "Enrollment",
        description: "Pupils register major for university.",
        tags: [
            {
                name: ".net",
                color: "green-background",
            },
            {
                name: "sql",
                color: "pink-background ",
            },
            {
                name: "backbone",
                color: "orange-background ",
            },
            {
                name: "bootstrap",
                color: "violet-background",
            },
            {
                name: "javascript",
                color: "gray-background",
            },
        ],
        image: copyright,
        source_code_link: "",
    },

    {
        name: "Registration Course",
        description: "Student register subject and application for manager",
        tags: [
            {
                name: ".net",
                color: "green-background",
            },
            {
                name: "sql",
                color: "pink-background ",
            },
            {
                name: "css",
                color: "violet-background",
            },
            {
                name: "javascript",
                color: "orange-background",
            },
        ],
        image: copyright,
        source_code_link: "",
    },

    {
        name: "Manage Course Program",
        description:
            "Application for manager manage data of student, courses, finacial",
        tags: [
            {
                name: "wpf",
                color: "green-background",
            },
            {
                name: "wpf",
                color: "pink-background",
            },
            {
                name: "sql",
                color: "violet-background ",
            },
            {
                name: "css",
                color: "orange-background",
            },
            {
                name: "javascript",
                color: "gray-background",
            },
        ],
        image: copyright,
        source_code_link: "",
    },

    {
        name: "Student Portal",
        description: "Website of student",
        tags: [
            {
                name: ".net core",
                color: "green-background",
            },

            {
                name: "sql",
                color: "pink-background ",
            },
            {
                name: "html",
                color: "violet-background",
            },
            {
                name: "css",
                color: "orange-background",
            },
            {
                name: "javascript",
                color: "gray-background",
            },
        ],
        image: copyright,
        source_code_link: "",
    },

    {
        name: "Teacher Portal",
        description: "Website of teacher",
        tags: [
            {
                name: ".net core",
                color: "green-background",
            },

            {
                name: "sql",
                color: "pink-background ",
            },
            {
                name: "html",
                color: "violet-background",
            },
            {
                name: "css",
                color: "gray-background",
            },
            {
                name: "javascript",
                color: "orange-background",
            },
        ],
        image: copyright,
        source_code_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };
