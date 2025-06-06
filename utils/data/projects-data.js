export const projectsData = [
  {
    id: 1,
    name: "goDoctor",
    description:
      "I have developed a full-stack web app for a doctor appointment booking system, where users and doctors can login and update their profile i have also included google authentication so user can also login uisng Google and an admin panel where admin can control all appointments and doctors and also included the RAZORPAY payment gateway. I created the UI using React, Tailwind css, and other necessary npm libraries, updating doctor availability status. I developed the API using Express, MongoDB, and other necessary npm libraries. I deployed the front-end and backend using render.",
    tools: [
      "Express",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Nodejs",
      "JWT",
      "Bcrypt",
      "Toastify",
      "razorpay",
      "Oauth",
    ],
    role: "Full stack Developer",
    code: "https://github.com/suryaNoble/godoctor.git",
    demo: "https://godoctor-frontend.onrender.com",
  },
  {
    id: 2,
    name: "goTalk",
    description:
      "I have developed a Real time chat application using sockets.io where users can communicate in real time, updating user status and profile picture live dynamically. I created UI using DaisyUI, Tailwind CSS, and other necessary npm libraries. Implemented signup and Login functionality using JWT and Bcrypt. users can also send images alongwith text messages where images are stored in cloudinary. I developed the API using Nodejs, Express, MongoDB, and other necessary npm libraries.",
    tools: [
      "Express",
      "MongoDB",
      "React",
      "Tailwind CSS",
      "Nodejs",
      "JWT",
      "Bcrypt",
      "Toastify",
      "Cloudinary",
      "Sockets.io",
    ],
    role: "Full Stack Developer",
    code: "https://github.com/suryaNoble/goChat.git",
    demo: "https://smalltalk-d18r.onrender.com/",
  },
  {
    id: 3,
    name: "E-commerce",
    description:
      "A fully functional e-commerce using full stack where user can become seller and sell their products and also buy products. I created the UI using React, Bootstrap, SCSS, and other necessary npm libraries. I developed the API using Express, MongoDB, and other necessary npm libraries. I deployed the front-end and backend using Azure Blob. I integrated Stripe for payment gateway. I used OpenAI API for product description generation and Replicate AI for product image generation. I used cronjob for scheduling tasks and JWT for authentication.",
    tools: [
      "React",
      "Bootstrap",
      "SCSS",
      "Stripe",
      "Express",
      "TypeScript",
      "MongoDB",
      "Azure Blob",
      "OpenAI API",
      "Replicate AI",
      "Cronjob",
      "JWT",
    ],
    code: "",
    role: "Full Stack Developer",
    demo: "",
  },
  {
    id: 4,
    name: "product showcase",
    description:
      "A simple and very basic product showcase where users can show-case their products with rating and other details so users can know about the product.",
    tools: ["Reactjs", "Tailwind CSS"],
    code: "",
    demo: "",
    role: "Frontend Developer",
  },
  {
    id: 5,
    name: "hiveGallery",
    description:
      "An interactive and responsive image gallery section for any website  using html and css. It is a simple and  basic image gallery where users can see the images and can also add/delete images and sections(rows and cloumns) can be adjusted accordingly.",
    tools: ["Html", "Css"],
    code: "https://github.com/suryaNoble/hiveGallery.git",
    demo: "https://suryanoble.github.io/hiveGallery/",
    role: "Frontend Developer",
  },
  {
    id: 6,
    name: "DigiTails",
    description:
      "A digital literacy chatbot built into the Pet-Friendly City Campaign website. Helps volunteers master tech tools (WhatsApp, PayTM, Maps) while supporting pet welfare initiatives – making cities smarter and more paw-some!",
    tools: ["Html", "Css", "javascript"],
    code: "https://github.com/suryaNoble/pet-campaign.git",
    demo: "https://suryanoble.github.io/pet-campaign/",
    role: "Frontend Developer",
  },
];

//everytime you add a new project, please go to index.jsx in projects and change the slicing number to include the new project.

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
