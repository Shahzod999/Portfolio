import "./paralax.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const backTextVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-60%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 500,
    },
  },
};

const Paralax = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);

  return (
    <div className="paralax" style={{ backgroundColor: `${darkMode ? "rgb(37, 40, 47)" : "rgb(121, 121, 121, 0.6)"}` }}>
      <motion.div className="overlay-2" variants={backTextVariants} initial="initial" animate="animate"></motion.div>
    </div>
  );
};

export default Paralax;
