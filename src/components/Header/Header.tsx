import { motion } from "framer-motion";
import "./header.scss";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import Neon from "../Neon/Neon";
import Navbar from "../Navbar/Navbar";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const Header = () => {
  return (
    <Neon>
      <header>
        <section id="Home">
          <Navbar />
          <div className="container">
            <motion.div className="header" variants={textVariants} initial="initial" animate="animate">
              <motion.h1 variants={textVariants} className="mainHelloText">
                Shahzod Ibragimov
              </motion.h1>
              <motion.span variants={textVariants}>I am very pleased to tell you about myself</motion.span>
            </motion.div>
            <div className="scrollButton">
              <a href="#Me">
                <RiArrowDownDoubleLine className="icon" />
              </a>
            </div>
          </div>
        </section>
      </header>
    </Neon>
  );
};

export default Header;
