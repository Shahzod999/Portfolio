import { useRef } from "react";
import "./aboutMe.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightning from "./Lightning";

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
  const rotateText = useTransform(scrollYProgress, [0, 0.4], ["0deg", "90deg"]);
  const opacityText = useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  const lightningAnimation = useTransform(scrollYProgress, [0.3, 0.6], ["none", "draw 10s ease-in-out forwards"]);
  return (
    <div className="aboutMe" ref={ref}>
      <motion.h2
        style={{
          y: yText,
          rotate: rotateText,
          opacity: opacityText,
          left: "100px",
          transformOrigin: "left top",
        }}
        className="mainHelloText">
        What i Did?
      </motion.h2>

      <div className="aboutMe__boxholder">
        <motion.div className="lightning" style={{ animation: lightningAnimation }}>
          <Lightning />
        </motion.div>

        <motion.div className="aboutMe__boxholder__text">
          <motion.h3
            style={{
              x: xRightBox,
              color: "white",
            }}>
            Empowering Your Business for Rapid Growth
          </motion.h3>
          <motion.div
            style={{
              x: xLeftBox,
            }}
            className="aboutMe__boxholder__text__border__bottom"></motion.div>
        </motion.div>

        <motion.div
          style={{
            x: xRightBox,
          }}
          className="aboutMe__boxholder__box">
          {arr.map((e) => (
            <div className="aboutMe__boxholder__box__item" key={e}>
              {e}
            </div>
          ))}
        </motion.div>
        <motion.div
          style={{
            x: xLeftBox,
          }}
          className="aboutMe__boxholder__box">
          {arr.map((e) => (
            <div className="aboutMe__boxholder__box__item" key={e}>
              {e}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
