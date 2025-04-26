export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "Evogym - Fitness Platform",
    desc: "Gym web app like no other. Highest quality fitness and training classes. Best equipment to get exactly the body goals you are looking for. Get your best body version now.",
    subdesc:
      "Built as a responsive web app with React, Typescript, Vite, Tailwind, Hero Icons, Framer Motion, Evogym is designed for optimal performance and fast access.",
    href: "https://evogym-be7.pages.dev/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "PitchDeck - Discover and explore exciting startups",
    desc: "Discover the next big thing with PitchDeck — a dynamic showcase of emerging startups, featuring innovative ideas, inspiring founders, and opportunities to connect, invest, and collaborate.",
    subdesc:
      "Built with Next.js, TypeScript, Tailwind, ShadCN/UI, and Sanity, PitchDeck highlights innovative startups with a sleek UI, lightning performance, and dynamic, easily managed content.",
    href: "https://pitchdeck-sigma.vercel.app/",
    texture: "/textures/project/pitchdeck-video.mp4",
    logo: "/assets/pitchdeck-icon.png",
    logoStyle: {
      backgroundColor: "#06111c",
      border: "0.2px solid #1A253B",
      boxShadow: "0px 0px 60px 0px #0f2740",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "ShadCN/UI",
        path: "/assets/shadcnui.png",
      },
    ],
  },
  {
    title: "MyPress - Admin Dashboard",
    desc: "MyPress is a modern admin dashboard that helps to manage posts with ease. It features a clean, intuitive interface and a range of options to streamline your workflow.",
    subdesc:
      "A powerful admin dashboard built with React, Next.js, TypeScript, and ShadCN/UI for managing posts. Features a sleek UI, seamless CRUD operations, and efficient content management for a smooth and intuitive experience.",
    href: "https://mypress.pages.dev/",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0F1623",
      border: "0.2px solid #1A253B",
      boxShadow: "0px 0px 60px 0px #1A253B",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Next.js",
        path: "assets/nextjs.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "ShadCN/UI",
        path: "/assets/shadcnui.png",
      },
    ],
  },
  {
    title: "Altitud - MTB and Cycling Ecommerce",
    desc: "Altitud is an e-commerce platform that offers a wide range of mountain biking and cycling products. It provides a seamless shopping experience.",
    subdesc:
      "Built with Angular, Bootstrap, and Node.js, Altitud is designed to be fast, responsive, and user-friendly. It features a clean, modern design that showcases products effectively.",
    href: "",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Angular",
        path: "/assets/angular.png",
      },
      {
        id: 2,
        name: "Bootstrap",
        path: "assets/bootstrap.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.png",
      },
    ],
  },
  {
    title: "AimJobs - Job Search Platform",
    desc: "AimJobs is a job search platform for developers that connects job seekers with employers. It features a user-friendly interface.",
    subdesc:
      "A React and Tailwind powered job platform connecting employers and job seekers. Features admin functionality to add new jobs, and a seamless application process for efficient hiring and job searching.",
    href: "",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#001006",
      border: "0.2px solid #032300",
      boxShadow: "0px 0px 60px 0px #022D00",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [10, -5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-15, -12, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Independent Work",
    pos: "Web Developer",
    duration: "Feb. 2024 - Present",
    title:
      "Development of projects such as Ecommerce (Altitud), a jobs listing website (Aim Jobs), a gym web app (Evogym), an admin posts dashboard (MyPress), among others.",
    icon: "/assets/webdev-logo.png",
  },
  {
    id: 2,
    name: "Kiura",
    pos: "Junior Web Developer",
    duration: "July 2024 - Sept. 2024",
    title:
      "Worked in the development of Whatclick, a web app for centralizing, organizing, and sending corporate, and promotional chat messages.",
    icon: "/assets/kiura-logo.png",
  },
  {
    id: 3,
    name: "BIT",
    pos: "Junior Web Developer",
    duration: "Aug. 2023 - Feb. 2024",
    title:
      "Altitud ecommerce website model planning, frontend design to be attractive and user friendly, web server development and launch, classification and authentication of user sessions.",
    icon: "/assets/bit-logo.png",
  },
];
