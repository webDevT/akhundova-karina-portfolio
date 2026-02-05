/**
 * Контент сторінки Portfolio: проєкти.
 *
 * cardCategory — короткий підзаголовок над назвою картки. Можна писати:
 *   • тип проєкту: "Landing", "E-Commerce", "Mobile App", "Web App", "Redesign"
 *   • ніша/тема: "Brand & Logo", "UI/UX Design", "Social & Content", "SaaS"
 *   • клієнт: "Client: [назва]", "Upwork Client", "Personal"
 *   • рік: "2024", "2023–2024"
 *   • комбінація: "Landing · 2024", "Brand & Web · Client X"
 *
 * title — головний заголовок картки (на що клікають). Підходить:
 *   • назва бренду/проєкту: "Nike Redesign", "Coffee Shop App"
 *   • назва клієнта: "Studio XYZ", "Startup ABC"
 *   • опис проєкту: "E-Commerce for Fashion", "Landing for SaaS"
 *   Уникати занадто довгих фраз — 1–4 слова ідеально.
 *
 * tags — з списку filters; по ним працює фільтрація.
 */

export const portfolio = {
  heroSubtitle: "Portfolio",
  heroTitleLine1: "Exploring My Portfolio",
  heroTitleLine2: "Creative Solution",
  filters: [
    "All",
    "Front-end Development",
    "WordPress",
    "UI/UX Design",
    "Mobile App",
    "Brand Identity",
    "Social Posts",
    // "Portfolio Sites",
    // "E-Commerce",
    "Logo Design",
    "React/Next.js",
    "Design to Code",
    "Landing page",
  ],
  items: [
    {
      id: "1",
      cardCategory: "UI/UX Design & Front-end Development",
      title: "OneAccord",
      description: "Web app and visual identity. React, responsive UI, modern stack.",
      image: "/images/portfolio/p1.png",
      url: "https://www.oneaccord.ai/",
      tags: ["UI/UX Design", "Logo Design", "Front-end Development", "Landing page", "Social Posts", "Design to Code", "Brand Identity", "React/Next.js", "Design to Code", "Landing page"],
    },
    {
      id: "3",
      cardCategory: "Design to Code",
      title: "StarBolt",
      description: "Branding and graphics. Logo, social assets, style guide.",
      image: "/images/portfolio/p4.png",
      url: "https://webdevt.github.io/starbolt/",
      tags: ["Front-end Development", "Design to Code"],
    },
    {
      id: "4",
      cardCategory: "WordPress & UI/UX Design",
      title: "Hyperion Defence",
      description: "Branding and graphics. Logo, social assets, style guide.",
      image: "/images/portfolio/p5.png",
      url: "https://hyperion-defence.com/",
      tags: ["Front-end Development", "WordPress", "UI/UX Design", "Design to Code"],
    },
    {
      id: "2",
      cardCategory: "UI/UX Design & Front-end Development",
      title: "MejestyHouse",
      description: "Landing page and marketing site. Fast load, clear conversion path.",
      image: "/images/portfolio/p2.png",
      url: "#",
      tags: ["Front-end Development", "Portfolio Sites", "UI/UX Design", "Mobile App", "Design to Code"],
    },
    
  ],
};
