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
      duration: 70,
    },
  },
};

const Paralax = () => {
  return (
    <div className="paralax">
      <motion.div className="overlay-2" variants={backTextVariants} initial="initial" animate="animate"></motion.div>
    </div>
  );
};

export default Paralax;
