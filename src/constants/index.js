

const words = [
    { text: "Curiosity", imgPath: "/images/ideas.svg" },
    { text: "Learning", imgPath: "/images/concepts.svg" },
    { text: "Practice", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];


const navLinks = [
    {
        name: "Projects",
        link: "#project",
    },
    {
        name: "Journey",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
];


const counterItems = [
    { value: 1, suffix: "+", label: "Year Exploring Development" },
    { value: 3, suffix: "+", label: "Mini Projects Built" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Eagerness to Learn" },
];

const logoIconsList = [
    {imgPath: "/images/logos/company-logo-1.png",},
    {imgPath: "/images/logos/company-logo-2.png",},
    {imgPath: "/images/logos/company-logo-3.png",},
    {imgPath: "/images/logos/company-logo-4.png",},
    {imgPath: "/images/logos/company-logo-5.png",},
    {imgPath: "/images/logos/company-logo-6.png",},
    {imgPath: "/images/logos/company-logo-7.png",},
    {imgPath: "/images/logos/company-logo-8.png",},
    {imgPath: "/images/logos/company-logo-9.png",},
    {imgPath: "/images/logos/company-logo-10.png",},
    {imgPath: "/images/logos/company-logo-11.png",},
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Always Learning",
        desc: "I may be at the beginning of my journey, but I’m committed to learning and improving every day.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Open Communication",
        desc: "I believe in asking questions, seeking feedback, and growing with guidance from others.",
    },
    {
        imgPath: "/images/time.png",
        title: "Consistent Effort",
        desc: "While I may be new, I show up consistently to build, experiment, and keep progressing.",
    },
];



const techStackIcons = [
    {
        name: "React Enthusiast",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Java Explorer",
        modelPath: "/models/java-transformed.glb",
        scale: 1.15,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Basics",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Trying 3D Stuff",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Git Learner",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Still at the start of my journey, but excited to gain real-world experience and grow with every project.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer (Beginner)",
        date: "Learning Phase - Present",
        responsibilities: [
            "Building small projects with React and HTML/CSS.",
            "Following tutorials and creating clone UIs to sharpen skills.",
            "Practicing responsive design and code organization.",
        ],
    },
    {
        review: "Looking forward to working on real-world backend systems and understanding full-stack development better.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer (In Progress)",
        date: "Still Exploring",
        responsibilities: [
            "Exploring Node.js and Express for backend basics.",
            "Creating REST APIs and learning about database integration.",
            "Trying to deploy projects using services like Render and Vercel.",
        ],
    },
    // {
    //     review: "Currently experimenting with React Native and learning how to build mobile UIs with reusable components.",
    //     imgPath: "/images/exp3.png",
    //     logoPath: "/images/logo3.png",
    //     title: "React Native Learner",
    //     date: "Early 2024 - Present",
    //     responsibilities: [
    //         "Practicing building screens with React Native components.",
    //         "Learning about navigation, styling, and performance.",
    //         "Aiming to publish my first personal app soon!",
    //     ],
    // },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/prashanttt__214",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    navLinks,
};
