import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Neon from "./components/Neon/Neon";
import { motion } from "framer-motion";
import Stars from "./components/Stars/Stars";

const App = () => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const knowledgeSection = document.getElementById("Knowledge");
      const knowledgePosition = knowledgeSection.getBoundingClientRect();

      if (knowledgePosition.top <= window.innerHeight / 2 && knowledgePosition.bottom >= 0) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0, transition: { duration: 1 } });
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.video
        src="stars.mp4"
        autoPlay
        loop
        muted
        initial={{ opacity: 0 }}
        animate={controls}
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          objectFit: "cover",
        }}
      />

      <Header />

      <main>
        <section id="Me" className="container">
          <AboutMe />
        </section>

        <section id="Knowledge">
          <Skills />
        </section>

        <section id="Projects">
          <Projects />
        </section>
      </main>

      <section id="Contacts">
        <div className="container">Contacts</div>
      </section>
    </>
  );
};

export default App;
