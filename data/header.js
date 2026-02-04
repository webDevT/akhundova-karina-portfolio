/**
 * Контент хедера: зображення, контакт.
 * Навігація імпортується з nav.js.
 */

import { navLinks } from "./nav";

export const header = {
  navLinks,
  contact: "Contact Me",
  menuToggleAria: "Toggle menu",
  images: {
    logo: { src: "/images/logo.svg", alt: "logo", width: 50, height: 40 },
    arrowTop: { src: "/images/arrow-top.svg", alt: "arrow top", width: 9, height: 9 },
  },
};
