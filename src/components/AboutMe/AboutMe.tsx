import { useRef } from "react";
import "./aboutMe.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  let arr = [1, 2, 3, 4, 5];
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Примерно 20% расстояния прокрутки для задержки в центре
  const xLeftBox = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["-100%", "0%", "0%", "-100%"]);
  const xRightBox = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["100%", "0%", "0%", "100%"]);

  const yText = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);
  const rotateText = useTransform(scrollYProgress, [0, 0.5], ["0deg", "90deg"]);
  const opacityText = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <div className="aboutMe" ref={ref}>
      <motion.h2
        style={{
          y: yText,
          rotate: rotateText,
          opacity: opacityText,
          left: "10px",
          transformOrigin: "left top",
        }}>
        What We Do?
      </motion.h2>

      <motion.div
        style={{
          x: xLeftBox,
        }}
        className="aboutMe__Boxholder">
        {arr.map((e) => (
          <div className="aboutMe__Boxholder__Box" key={e}>
            {e}
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{
          x: xRightBox,
        }}
        className="aboutMe__Boxholder">
        {arr.map((e) => (
          <div className="aboutMe__Boxholder__Box" key={e}>
            {e}
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{
          x: xLeftBox,
        }}
        className="aboutMe__Boxholder">
        {arr.map((e) => (
          <div className="aboutMe__Boxholder__Box" key={e}>
            {e}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutMe;
