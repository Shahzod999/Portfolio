import "./paralax.scss";
import { motion } from "framer-motion";

const backTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-60%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 50,
    },
  },
};

const Paralax = () => {
  return (
    <div className="paralax">
      <motion.div className="overlay-2" variants={backTextVariants} initial="initial" animate="animate"></motion.div>

      <div className="banner-text">
        <h1>Serenity</h1>
        <p>Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
  );
};

export default Paralax;
