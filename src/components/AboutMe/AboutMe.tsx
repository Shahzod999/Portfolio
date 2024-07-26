import { useRef } from "react";
import "./aboutMe.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.h1 style={{ y: yText }}>What We Do?</motion.h1>
      <motion.div
        className="planets"
        style={{
          y: yBg,
        }}></motion.div>
    </div>
  );
};

export default Parallax;
