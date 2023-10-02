import {
  aesl,
  ayzer,
  backend,
  blog,
  carrent,
  comfy,
  creator,
  css,
  dalle,
  figma,
  flair,
  git,
  github,
  headphones,
  html,
  instagram,
  javascript,
  jobit,
  jobster,
  kaculoss,
  knust,
  linkedin,
  messenger,
  metaversus,
  mobile,
  mongodb,
  netflix,
  nodejs,
  photoshop,
  reactjs,
  redux,
  space,
  tailwind,
  three,
  threejs,
  tripguide,
  twitter,
  typescript,
  web,
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
    id: "contact",
    title: "Contact",
  },
];

const counters = [
  { value: 50, desc: "satisfied clients" },
  { value: 40, desc: "projects completed" },
  { value: 5, desc: "years of experience" },
];

const services = [
  {
    title: "Web Designer & Developer",
    icon: web,
    desc: "Develop and redevelop websites, e-commerce stores, domain name registration, web hosting and many more.",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    desc: "Develop high quality mobile applications for ios and andriod products.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    desc: "Develop custom databases for web and mobile applications.",
  },
  {
    title: "Graphic Designer",
    icon: creator,
    desc: "Creates business logos, cards, letterheads, flyers, artwork, brochures and many more.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    path: "html.png",
  },
  {
    name: "CSS 3",
    icon: css,
    path: "css.png",
  },
  {
    name: "JavaScript",
    icon: javascript,
    path: "javascript.png",
  },
  {
    name: "TypeScript",
    icon: typescript,
    path: "typescript.png",
  },
  {
    name: "React JS",
    icon: reactjs,
    path: "reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    path: "redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    path: "tailwind.png",
  },
  {
    name: "Node JS",
    icon: nodejs,
    path: "nodejs.png",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    path: "mongodb.png",
  },
  {
    name: "Three JS",
    icon: threejs,
    path: "threejs.svg",
  },
  {
    name: "Git",
    icon: git,
    path: "git.png",
  },
  {
    name: "Figma",
    icon: figma,
    path: "figma.png",
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
    path: "photoshop.png",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Knust",
    icon: knust,
    iconBg: "#E6DEDD",
    date: "Sept 2018 - Oct 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Knust",
    icon: knust,
    iconBg: "#383E56",
    date: "Mar 2020 - Sept 2022",
    points: [
      "Designing, developing and maintaining high-quality mobile apps for iOS and Android platforms using the React Native frameworkDeveloping and maintaining web applications using React.js and other related technologies.",
      "Writing clean, maintainable and efficient code that meets the requirements of clients or end-users.",
      "Leveraging native APIs for deep integrations with both platforms.",
      "Diagnosing and fixing bugs and performance bottlenecks for performance that feels native.",
      "Creating app and UI components from wireframes and prototypes.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Aesl",
    icon: aesl,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Sept 2023",
    points: [
      "Designing and building websites.",
      "Interacting with web and visual designers.",
      "Analyzing website traffic.",
      "Upgrading websites as required.",
      "Handling website issues.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Kaculoss",
    icon: kaculoss,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Designing user interactions on websites.",
      "Developing servers and databases for website functionality.",
      "Writing clean, functional code on the front- and back-end.",
      "Coding for mobile platforms.",
      "Testing and fixing bugs or other coding issues",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sani proved me wrong.",
    name: "Gideon Odoi",
    designation: "CEO",
    company: "Danicom Link Ent.",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sani does.",
    name: "Rudy Manuel",
    designation: "COO",
    company: "Ayzer Group Int.",
    image: "https://randomuser.me/api/portraits/men/83.jpg",
  },
  {
    testimonial:
      "After Sani optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Solomon Kipo",
    designation: "CTO",
    company: "Jimah Enterprise",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
  },
];

const projects = [
  {
    name: "Keezy Messenger",
    description:
      "A real time chat application that allows users to log in or register an account, start a conversation with other users, send images, change profile picture and name and have fun.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    link: "https://messenger.kaculoss.com/",
  },
  {
    name: "Dall-E Clone",
    description:
      "Create imaginative and visually stunning images through DALL-E AI with prompts, share them with the community and browse through a collection of imaginative and visually stunning images generated by DALL-E AI.",
    tags: [
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: dalle,
    link: "https://dall-e.kaculoss.com/",
  },
  {
    name: "Three AI",
    description:
      "A web platform that allows users to create unique and exclusive shirt with 3D customization tool. Unleash your imagination and define your own style.",
    tags: [
      {
        name: "reactjs",
        color: "violet-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: three,
    link: "https://three-ai.kaculoss.com/",
  },
  {
    name: "Metaverse",
    description:
      "A stunning website, created using the latest and greatest of what next 13 has to offer. With the use of complex gradients, layouts and smooth animations using framer-motion, this website gives you a chilling feeling of the metaverse world.",
    tags: [
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "framer_motion",
        color: "violet-text-gradient",
      },
    ],
    image: metaversus,
    link: "https://metaversus.kaculoss.com/",
  },
  {
    name: "Keezy's Comfy",
    description:
      "A dummy wesite created for online shopping of room furnitures and designs. Users are allowed to log in, sort products, filter products, add products to cart, proceed to checkout and make payments using visa or mastercards.",
    tags: [
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "styled_compoments",
        color: "orange-text-gradient",
      },
      {
        name: "react_router_dom",
        color: "violet-text-gradient",
      },
      {
        name: "stripejs",
        color: "green-text-gradient",
      },
    ],
    image: comfy,
    link: "https://comfy.kaculoss.com/",
  },
  {
    name: "Space",
    description:
      "A beautiful space tourism website challenge by frontend mentor, that give users a feel of outer space when visited. It allows users to view each page able to toggle between the tabs to see new information using hover or click effects.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "figma",
        color: "green-text-gradient",
      },
      {
        name: "frontend_mentor",
        color: "pink-text-gradient",
      },
    ],
    image: space,
    link: "https://space-tourism.kaculoss.com/",
  },
  {
    name: "Keezy's Netflix",
    description:
      "A great clone of netflix's website. If the trailer of a movie exists on youtube, this website will allows you to watch the full movie trailer when you click on the movie.",
    tags: [
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "violet-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "movie_trailer",
        color: "blue-text-gradient",
      },
    ],
    image: netflix,
    link: "https://k-netflix.kaculoss.com/",
  },
  {
    name: "K-Flair",
    description:
      "An E-commerce website that allows you to shop for products online and make payments using visa or mastercard. Users can filter products by categories, size and color. Products can also be sorted by price value and date added to inventory.",
    tags: [
      {
        name: "nextjs",
        color: "violet-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "sanity",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "orange-text-gradient",
      },
    ],
    image: flair,
    link: "https://k-flair.kaculoss.com/",
  },
  {
    name: "Keezy's Jobster",
    description:
      "This awesome web application allows users to keep track of their job applications, from pending to inteview to declined. It graphically shows how well the user is doing with the job applications in statistical forms with barcharts and area charts over a period of time.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "styled_compoments",
        color: "blue-text-gradient",
      },
      {
        name: "react_router_dom",
        color: "orange-text-gradient",
      },
      {
        name: "redux_toolkit",
        color: "violet-text-gradient",
      },
    ],
    image: jobster,
    link: "https://k-jobster.kaculoss.com/",
  },
  {
    name: "Keezy Headphones",
    description:
      "An e-commerce website that sells only headphones and headsets. With this website, users can select a product, move to the product's page, view other pictures of the same products on hover effect, add prouct to cart and proceed to checkout the product.",
    tags: [
      {
        name: "nextjs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "sanity",
        color: "violet-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: headphones,
    link: "https://k-headphones.kaculoss.com/",
  },
  {
    name: "Keezy Blog",
    description:
      "A beautifully created web application that allows bloggers to log in, create, post and view other blogers' post.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "slick_carousel",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    link: "https://k-blog.kaculoss.com/",
  },
  {
    name: "Ayzer Group International",
    description:
      "A website for a privately held professional brokerage firm that deals in commodity trading, trade finance, investment advisory and project finance.",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
      {
        name: "framer_motion",
        color: "blue-text-gradient",
      },
    ],
    image: ayzer,
    link: "https://ayzergint.kaculoss.com/",
  },
];

const socials = [
  {
    name: "twitter",
    imgUrl: twitter,
    link: "https://twitter.com/Sani_M_Alhassan",
  },
  {
    name: "linkedin",
    imgUrl: linkedin,
    link: "https://www.linkedin.com/in/kaculoss/",
  },
  {
    name: "instagram",
    imgUrl: instagram,
    link: "https://www.instagram.com/kaculoss/",
  },
  {
    name: "github",
    imgUrl: github,
    link: "https://github.com/Kaculoss",
  },
];

export {
  counters,
  experiences,
  projects,
  services,
  technologies,
  testimonials,
  socials,
};
