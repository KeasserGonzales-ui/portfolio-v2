// src/App.tsx
import { Fragment } from "react";
import NavBar from "./components/Navbar";
import Logo from "./components/Logo";
import HeroV2 from "./components/hero/HeroV2";
import AboutSection from "./components/about/AboutSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import ContactSection from "./components/contact/ContactSection";
import SkillsSection from "./components/skills/SkillsSection";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Fragment>
      <NavBar>
        <Logo />
      </NavBar>

      <HeroV2 />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

      <Footer />
    </Fragment>
  );
}