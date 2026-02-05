import Header from "../components/layout/header/header";
import Footer from "../components/layout/footer";
import { portfolio as portfolioData } from "@/data";
import styles from "./portfolio.module.scss";
import PortfolioContent from "./PortfolioContent";
import CTASection from "../components/sections/CTASection";
import ContactSection from "../components/sections/ContactSection";

export const metadata = {
  title: "Portfolio — Akhundova Karina",
  description: "Selected projects: web development, design, branding.",
};

export default function PortfolioPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <PortfolioContent data={portfolioData} />
      </main>
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
