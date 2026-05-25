import {About, Blog, Gallery, Home, Newsletter, Person, Social, Work} from "@/types";
import {Line, Row, Text} from "@once-ui-system/core";

const person: Person = {
  firstName: "حسن",
  lastName: "حلاجی",
  name: `حسن حلاجی`,
  role: "مهندس طراحی",
  avatar: "/images/avatar.jpg",
  email: "halaji96@gmail.com",
  location: "Asia/Tehran",
  languages: ["English", "Persian"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>عضویت در خبرنامه {person.firstName}</>,
  description: <>خبرنامه هفتگی من درباره خلاقیت و مهندسی</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
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
  label: "خانه",
  title: `پورتفولیوی ${person.name}`,
  description: `وب‌سایت پورتفولیو برای نمایش پروژه‌ها و فعالیت‌های ${person.role}`,
  headline: <>ساختن پلی میان طراحی و کدنویسی</>,
  featured: {
    display: true,
    title: (
        <Row gap="12" vertical="center">
          <strong className="ml-4">اپلیکیشن بنیان</strong>
          <Line background="brand-alpha-strong" vert height="20" />
          <Text marginRight="4" onBackground="brand-medium">
            پروژه برجسته
          </Text>
        </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
      <>
        من حسن هستم، مهندس طراحی در{" "}
        <Text as="span" size="xl" weight="strong">
          ONCE UI
        </Text>
        ، جایی که تجربه‌های کاربری ساده و کاربردی طراحی می‌کنم.
        <br />
        خارج از ساعات کاری هم روی پروژه‌های شخصی خودم کار می‌کنم.
      </>
  ),
};

const about: About = {
  path: "/about",
  label: "درباره من",
  title: `درباره من – ${person.name}`,
  description: `آشنایی با ${person.name}، ${person.role} از ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "معرفی",
    description: (
        <>
          حسن یک مهندس طراحی با علاقه‌ به تبدیل چالش‌های پیچیده به راهکارهای
          ساده و زیباست. فعالیت‌های او شامل طراحی رابط کاربری، تجربه‌های
          تعاملی و تلفیق طراحی با تکنولوژی می‌شود.
        </>
    ),
  },
  work: {
    display: true,
    title: "سوابق کاری",
    experiences: [
      {
        company: "FLY",
        timeframe: "۲۰۲۲ - اکنون",
        role: "مهندس ارشد طراحی",
        achievements: [
          <>
            بازطراحی رابط و تجربه کاربری پلتفرم FLY که منجر به افزایش ۲۰ درصدی
            تعامل کاربران و ۳۰ درصد بهبود سرعت بارگذاری شد.
          </>,
          <>
            هدایت فرایند استفاده از ابزارهای هوش مصنوعی در طراحی که باعث شد
            سرعت انجام طراحی‌ها تا ۵۰ درصد افزایش پیدا کند.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "۲۰۱۸ - ۲۰۲۲",
        role: "طراح ارشد",
        achievements: [
          <>
            توسعه یک دیزاین سیستم یکپارچه که هماهنگی برند را در پلتفرم‌های
            مختلف تا ۴۰ درصد بهبود داد.
          </>,
          <>
            رهبری تیم میان‌رشته‌ای برای عرضه یک محصول جدید که باعث افزایش
            ۱۵ درصدی درآمد شرکت شد.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "تحصیلات",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>تحصیل در رشته مهندسی نرم‌افزار.</>,
      },
      {
        name: "Build the Future",
        description: <>مطالعه در زمینه بازاریابی آنلاین و برندسازی شخصی.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "مهارت‌های فنی",
    skills: [
      {
        title: "Figma",
        description: (
            <>
              توانایی طراحی و ساخت پروتوتایپ در Figma با استفاده از Once UI با
              سرعت بالا.
            </>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
            <>
              توسعه اپلیکیشن‌های مدرن با Next.js، Once UI و Supabase.
            </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "بلاگ",
  title: "نوشته‌هایی درباره طراحی و تکنولوژی...",
  description: `مطالب و فعالیت‌های اخیر ${person.name} را بخوانید`,
};

const work: Work = {
  path: "/work",
  label: "پروژه‌ها",
  title: `پروژه‌ها – ${person.name}`,
  description: `پروژه‌های طراحی و توسعه توسط ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "گالری",
  title: `گالری تصاویر – ${person.name}`,
  description: `مجموعه‌ای از تصاویر ثبت شده توسط ${person.name}`,
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
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };