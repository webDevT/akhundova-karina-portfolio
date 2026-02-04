import Header from "./components/layout/header/header";
import Footer from "./components/layout/footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CTASection from "./components/sections/CTASection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
