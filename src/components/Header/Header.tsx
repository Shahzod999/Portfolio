import { motion } from "framer-motion";
import "./header.scss";
import { RiArrowDownDoubleLine } from "react-icons/ri";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const backTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <motion.div variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Пример порт</motion.h2>
          <motion.span variants={textVariants}>Losrem ipsum dolor sit, amet consectetur adipisicing elit. At, praesentium!</motion.span>
          <motion.p variants={textVariants}>Losrem ipsum dolor sit, amet consectetur adipisicing elit. At, praesentium!Losrem ipsum dolor sit, amet consectetur adipisicing elit. At, praesentium!</motion.p>
          <motion.div variants={textVariants} animate="scrollButton">
            <RiArrowDownDoubleLine className="icon" size={35} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="header__backText" variants={backTextVariants} initial="initial" animate="animate">
        Lorem ipsum dolor
      </motion.div>

      <div className="headerRight"></div>
    </div>
  );
};

export default Header;
