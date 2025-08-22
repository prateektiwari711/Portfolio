import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const bannerRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 80;
    window.scrollTo({
      top: ref.current.offsetTop - offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[rgb(30,30,30)] text-white">
      <Navbar
        onNavigate={(section) => {
          if (section === "banner") scrollToSection(bannerRef);
          if (section === "skills") scrollToSection(skillsRef);
          if (section === "projects") scrollToSection(projectsRef);
          if (section === "contact") scrollToSection(contactRef);
        }}
      />

      <div ref={bannerRef}>
        <Banner />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
