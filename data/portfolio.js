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
 *
 * url — optional. Live site link (must start with http/https). Omit, or set to null/empty/"#"
 *   for projects with no live link; then "Visit site" button and sticky bar will not show.
 *
 * Optional for project detail page template:
 *   heroImage — image for the main screen (90vh hero). If omitted, image (card preview) is used.
 *   featureImage — optional separate image block between Overview and Story blocks. If omitted, block is hidden.
 *   overviewTitle — heading for the Overview section. If omitted, "{title}: project overview" is used.
 *   services — array of strings for "Scope" list (e.g. ["Brand Enhancement", "Website Design"]).
 *     If omitted, tags are used.
 *   overview — longer text for Overview section (supports "\n" for paragraphs). If omitted, description is used.
 *   result — text for "Results" section (supports "\n"). If omitted, Results block is hidden.
 *   storyBlocks — optional array of { title, description, image } for alternating content blocks
 *     (text left/image right, then image left/text right). If omitted, section is hidden.
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
      title: "OneAccord Website + App",
      overviewTitle: "OneAccord - Live AI Translation for churches with a human touch",
      description: "Web app and visual identity. React, responsive UI, modern stack.",
      image: "/images/portfolio/p1.png",
      heroImage: "/images/portfolio/oa8.png",
      featureImage: "/images/portfolio/oneaccord-responsive.png",
      url: "https://www.oneaccord.ai/",
      tags: ["UI/UX Design", "Logo Design", "Front-end Development", "Landing page", "Social Posts", "Design to Code", "Brand Identity", "React/Next.js"],
      gallery: [
       
      ],
      services: ["Product design", "Front-end development", "Brand identity", "Logo & visual system", "Marketing website", "Ongoing support & content"],
      overview: "From the initial concept to a live product and its public presence — this project covers the full cycle: product design and development, brand creation, and the marketing website that represents it.\n\nI led the product from day one: defining structure and functionality, designing the web app experience, then building the front end and testing the flow. Once the app was validated, I established the brand — logo, colour palette, typography — and carried it through to the marketing site's design and development. The project continues with ongoing evolution, support, and content: social imagery and YouTube assets that keep the product visible and consistent.",
      result: "A complete digital product with a clear brand and a marketing site that supports growth.’s positioning. OneAccord is live, maintained, and presented consistently across product, web, and social channels.",
      storyBlocks: [
        { title: "Brand & visual identity", description: "With the product in place, I created the brand from scratch: logo, colour system, and typography. This identity became the foundation for the website, app UI, and all future marketing materials.", image: "/images/portfolio/brand.png" },
        { title: "Product design & development", description: "The work started with the product idea and user flow. I designed the web app's structure and functionality, then implemented the front end. After testing and validation, the app became the core product that the rest of the project would support and promote.", image: "/images/portfolio/product-image.png" },
        
        { title: "Marketing website", description: "The marketing site was designed and built to present OneAccord clearly and persuasively. It reflects the brand, explains the product, and guides visitors toward trying the app — with ongoing updates and support as the product evolves.", image: "/images/portfolio/web-portfolio-mockup_10.png" },
        { title: "Growth & ongoing presence", description: "Beyond launch, I support the product with continuous visual content: social media imagery and YouTube thumbnails that keep the brand consistent and the product visible to its audience.", image: "/images/portfolio/inst.png" },
      ],
    },
    {
      id: "2",
      cardCategory: "Next.js application",
      title: "Kelley Blue Book® Price Advisor",
      description: "Branding and graphics. Logo, social assets, style guide.",
      image: "/images/portfolio/p7.png",
      heroImage: "/images/portfolio/kb3.png",
      featureImage: "/images/portfolio/kbb-responsive.png",
      url: "https://kbb-price-advisor.vercel.app/",
      tags: ["Front-end Development", "Design to Code", "Landing page", "React/Next.js"],
      gallery: [
        "/images/portfolio/p7.png",
        
      ],
      services: ["Front-end Development", "React/Next.js", "Responsive UI", "Design to Code"],
      overview: "The Kelley Blue Book® Price Advisor tool needed a clear, trustworthy interface for users to explore vehicle pricing and insights.\n\nBuilt with Next.js for fast navigation and SEO, the app presents complex data in simple steps. The layout is responsive and follows existing KBB visual guidelines while improving clarity and conversion paths.\n\nEmphasis was placed on component reusability, performance, and a smooth user flow from entry to result.",
      result: "A live Next.js application that delivers a smooth experience across devices. The project demonstrates strong front-end architecture and alignment with brand standards.",
    },
    {
      id: "5",
      cardCategory: "WordPress custom theme",
      title: "Hyperion Defence",
      description: "Branding and graphics. Logo, social assets, style guide.",
      image: "/images/portfolio/p5.png",
      heroImage: "/images/portfolio/hiperion-hero2.png",
      featureImage: "/images/portfolio/hp2.png",
      url: "https://hyperion-defence.com/",
      tags: ["Front-end Development", "WordPress", "UI/UX Design", "Design to Code"],
      gallery: [
        "/images/portfolio/hp2.png",
      ],
      services: ["WordPress Theme Development", "UI/UX Design", "Custom Theme", "Design to Code", "Content Structure"],
      overview: "Hyperion Defence required a professional, authoritative web presence on WordPress with a custom theme tailored to their sector.\n\nThe design balances clarity and trust: clear navigation, readable content blocks, and a structure that supports future updates. The theme was built from design to code with attention to WordPress best practices and maintainability.\n\nCustom templates and components ensure the site stands out while staying easy for the client to manage.",
      result: "A custom WordPress site that reflects the brand and supports ongoing content updates. The theme is clean, fast, and ready for long-term use.",
    },
    {
      id: "4",
      cardCategory: "Design to Code",
      title: "StarBolt",
      description: "Branding and graphics. Logo, social assets, style guide.",
      image: "/images/portfolio/p4.png",
      heroImage: "/images/portfolio/sb2.png",
      featureImage: "/images/portfolio/sb-responsive.png",
      url: "https://webdevt.github.io/starbolt/",
      tags: ["Front-end Development", "Design to Code"],
      gallery: [
        "/images/portfolio/p4.png",
      ],
      services: ["Website Design", "Front-end Development", "Design to Code", "Landing Page"],
      overview: "StarBolt needed a focused landing experience that could be implemented quickly from provided designs.\n\nThe project involved translating the visual concept into clean HTML/CSS and light JavaScript, with responsive behaviour and clear calls to action. The result is a single-page site that loads quickly and works well on all screen sizes.\n\nThis is a strong example of design-to-code workflow with attention to detail and pixel-accurate implementation.",
      result: "A live landing page that matches the design and performs well. The codebase is structured for easy updates and future enhancements.",
    },
    {
      id: "3",
      cardCategory: "UI/UX Design & Front-end Development",
      title: "Live Church Translation Web App",
      description: "Live AI translation for churches in 50+ languages. UI/UX design and front-end development from concept to launch.",
      image: "/images/portfolio/p2.png",
      heroImage: "/images/portfolio/mh-3.png",
      featureImage: "/images/portfolio/mh3.png",
      // url: "https://www.oneaccord.ai/",
      tags: ["Front-end Development", "UI/UX Design", "Mobile App", "Design to Code", "React/Next.js"],
      gallery: [
        "/images/portfolio/p2.png",
        "/images/portfolio/project2.png",
        "/images/portfolio/project3.png",
      ],
      services: ["UI/UX Design", "Front-end Development", "Interface Design", "Mobile-first Design", "Design to Code", "Component Design"],
      overview: "A web app for live AI translation in church services — congregations access real-time translation in 50+ languages from their phones, with no download required.\n\nMy role was design and front-end development: from initial concept to interface implementation. I designed the user flows and interfaces for church teams (session setup, audio input, moderation) and for congregation members (QR access, language selection, playback). The design had to work under real pressure: Sunday morning setup, hectic coordination, and instant access for attendees — so clarity, hierarchy, and minimal steps were essential.\n\nTogether with the team, we keep scaling, improving, and evolving the product. It now serves multiple churches with branded instances and custom URLs, and we continue to refine the experience and expand language support.",
      overviewTitle: "Live Church Translation — UI/UX design and front-end development",
      result: "A product that churches rely on every Sunday. My design and front-end work shaped the core experience. The team continues to scale, improve, and develop the product — it now supports 50+ languages and serves congregations worldwide.",
      storyBlocks: [
        { title: "Product concept & user flows", description: "I designed the core experience for two user groups: church teams who set up and run translation sessions, and congregation members who access translation via QR code and choose their language. The flows prioritise clarity under real conditions — quick setup, minimal steps, intuitive controls.", image: "/images/portfolio/mh5.png" },
        { title: "Session management & admin interface", description: "I designed and implemented the admin interface: creating sessions, connecting audio input, monitoring real-time transcription, and optional moderation. The UI supports both broadcast mode (one-way service translation) and conversation mode for small groups.", image: "/images/portfolio/mh7.png" },
        { title: "Congregation-facing experience", description: "I designed a mobile-first experience for attendees: scan QR code, choose language, hit play. No download, no friction. The design prioritises readability and accessibility — clear typography, contrast, and layout that works in the low-light environments typical of church settings.", image: "/images/portfolio/mh8.png" },
        { title: "Scaling & ongoing evolution", description: "I designed the interface structure for scale. The team continuously scales, improves, and develops the product — we now support 50+ languages and keep refining the experience.", image: "/images/portfolio/mh9.png" },
      ],
    },
    {
      id: "6",
      cardCategory: "Design to Code",
      title: "Website for Amadeo",
      description: "Design-to-code conversion. Pixel-accurate implementation of provided designs into a responsive, production-ready website.",
      image: "/images/portfolio/project6.png",
      heroImage: "/images/portfolio/p98.png",
      featureImage: "/images/portfolio/feature7.png",
      url: "https://amadeo.tech/",
      tags: ["Front-end Development", "Design to Code", "Landing page"],
      gallery: [
        "/images/portfolio/project6.png",
      ],
      services: ["Design to Code", "Front-end Development", "Responsive Layout", "Pixel-accurate Implementation"],
      overview: "I converted the provided Figma designs into a live, responsive website for Amadeo. My role was front-end implementation: turning the visual concept into clean, maintainable code that matches the design specifications.\n\nThe work included building the layout structure, implementing responsive behaviour across breakpoints, and ensuring typography, spacing, and interactions align with the design. Attention was paid to performance, semantic HTML, and a codebase that the client can easily maintain and extend.",
      result: "A production-ready website that accurately reflects the design and performs well across devices. The implementation is clean, responsive, and ready for ongoing updates.",
    },
  ],
};


