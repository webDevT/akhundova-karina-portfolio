/**
 * Контактні дані: одна точка зміни для пошти та мітки контакту.
 * Використовується в CTA-кнопці, хедері (Contact Me) тощо.
 */

export const contact = {
  email: "karinadesyatnik27@gmail.com",
  label: "Contact Me",
  form: {
    photo: { src: "/images/photo4.png", alt: "Karina" },
    title: "Let's chat",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "What's on your mind?",
    submit: "Send it",
    success: "You're awesome — message received! I'll get back to you soon.",
    error: "Something went wrong. Try again or reach out directly by email.",
    close: "Sounds good",
    validation: {
      nameRequired: "Hey, I'd love to know your name!",
      emailRequired: "Drop your email so I can hit you back.",
      emailInvalid: "Hmm, that doesn't look like an email — double-check?",
      messageRequired: "Don't leave me hanging — what's up?",
    },
  },
};
