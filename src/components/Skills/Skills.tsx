import "./skills.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Skills = () => {
  const arr = [1, 2, 3, 4, 5];
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="skills" ref={container}>
      {arr.map((item, index) => {
        const targetScale = 1 - (arr.length - index) * 0.05;
        return <SkillItem key={index} index={index} item={item} range={[index * 0.25, 1]} targetScale={targetScale} progress={scrollYProgress} />;
      })}
    </div>
  );
};

const SkillItem = ({ index, item, range, targetScale, progress }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="skills__holder" key={index} ref={container}>
      <motion.div style={{ scale, top: `calc(-5vh + ${index * 25}px)` }} className="skills__holder__box">
        <h2>{item}</h2>
        <div className="skills__holder__box__textHolder">
          <div className="skills__holder__box__textHolder__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.</p>

            <span>
              <a href="#" target="_blank">
                See more
              </a>
              <IoMdArrowRoundForward />
            </span>
          </div>

          <div className="skills__holder__box__textHolder__img">
            <motion.div style={{ scale: imageScale }}>
              <img src="me.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
