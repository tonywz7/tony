import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Apeksha",
  lastName: "Nanda",
  name: `Apeksha Nanda`,
  role: "Software Engineer",
  avatar: "/images/apeksha.jpeg",
  email: "apekshananda51@gmail.com",
  location: "America/Toronto", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false, // Set to false since no newsletter info was provided in the resume
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/apekshananda",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/apeksha-nanda-197977214/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building impactful, user-centric technology</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">STEM Minds</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured Capstone
        </Text>
      </Row>
    ),
    href: "/work/stem-minds-ai-crop-health-assistant",
  },
  subline: (
    <>
      I'm a <Text as="span" size="xl" weight="strong">Software Engineering</Text> graduate with hands-on experience building user-facing web and mobile applications using React, Next.js, and TypeScript.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Disabled by default unless you have a cal.com link
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Detail-oriented Software Engineering graduate with approximately one year of hands-on experience building user-facing web and mobile applications using React, JavaScript, and TypeScript. Skilled in developing scalable, component-based frontend architectures, responsive UI designs, and smooth asynchronous workflows in Agile environments.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Human City",
        timeframe: "May 2024 – Aug 2024 & Jan 2025 – Apr 2025",
        role: "Development Intern",
        achievements: [
          <>
            Built and iterated on user-facing features using React.js, Next.js, and TypeScript, improving load times by up to 25% and increasing user engagement metrics.
          </>,
          <>
            Developed 10+ reusable UI components, reducing frontend development time for new features by 30%.
          </>,
          <>
            Integrated REST APIs and managed asynchronous data flows to ensure seamless user interactions.
          </>,
          <>
            Participated in 15+ code reviews, incorporating feedback that improved code coverage and reduced bugs in production by 20%.
          </>,
          <>
            Contributed to frontend architecture discussions and documentation, enhancing scalability for future feature additions.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Seneca Polytechnic, Toronto, ON",
        description: <>Bachelor of Engineering (Software Engineering) — Graduated August 2025</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend & Mobile Development",
        description: (
          <>Building highly responsive, component-based systems using modern web frameworks.</>
        ),
        tags: [
          { name: "React.js", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "TypeScript", icon: "typescript" },
          { name: "JavaScript", icon: "javascript" },
          { name: "React Native", icon: "react" },
        ],
        images: [],
      },
      {
        title: "Backend & Machine Learning",
        description: (
          <>Developing predictive models and building robust backends with Python, Node.js, and Express.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "Node.js", icon: "node" },
          { name: "TensorFlow", icon: "tensorflow" },
          { name: "Scikit-learn", icon: "scikit-learn" },
        ],
        images: [],
      },
      {
        title: "Databases & DevOps",
        description: (
          <>Managing relational and non-relational database architectures alongside standard CI/CD tooling.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MySQL", icon: "mysql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "Firestore", icon: "firebase" },
          { name: "GitHub Actions", icon: "github" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Note: For Once UI, you will want to add .mdx files inside app/work/posts/ 
  // matching these paths for details to render completely on your work route:
  // - stem-minds-ai-crop-health-assistant.mdx
  // - car-price-prediction-regression.mdx
  // - renthub-rental-property-management.mdx
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };