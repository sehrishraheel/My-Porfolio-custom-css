"use client";

import { useEffect } from "react";
import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import AOS from "aos";
import "aos/dist/aos.css"; // Custom AOS styles can be overridden here if needed

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);

  return (
    <main className="main-container">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
