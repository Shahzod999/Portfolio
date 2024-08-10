import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import AboutMe from "./components/AboutMe/AboutMe";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Paralax from "./components/Paralax/Paralax";
import Skills from "./components/Skills/Skills";

const App = () => {
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const knowledgeSection = document.getElementById("Knowledge");
      const knowledgePosition = knowledgeSection.getBoundingClientRect();

      // Определяем, когда пользователь приближается к секции Knowledge
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
      <Paralax />
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          pointerEvents: "none",
        }}
      />

      <header>
        <section id="Home">
          <Navbar />
          <div className="container">
            <Header />
          </div>
        </section>
      </header>

      <main>
        <section id="Me" className="container">
          <AboutMe />
        </section>
        <section id="Knowledge">
          <div className="container">
            <Skills />
          </div>
        </section>
        <section id="Projects">
          <div className="container"></div>
        </section>
        <section id="About">
          <div className="container">About Me</div>
        </section>
      </main>
      <section id="Contacts">
        <div className="container">Contacts</div>
      </section>
    </>
  );
};

export default App;
