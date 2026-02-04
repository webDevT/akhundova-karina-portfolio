import "./scss/globals.scss";
import localFont from "next/font/local";
import { ContactModalProvider } from "./components/ContactModal";

// Підключення шрифту Aeonik
const aeonik = localFont({
  src: [
    {
      path: '../public/fonts/Aeonik Pro Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Aeonik Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aeonik',
  display: 'swap',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'Akhundova Karina Portfolio',
  description: 'Персональне портфоліо на Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={aeonik.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}

