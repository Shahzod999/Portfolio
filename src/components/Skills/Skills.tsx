import "./skills.scss";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Skills = () => {
  const arr = [
    { numb: "AutoLider", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.", img2: "./projects/iPhoneAutoLider.png", img: "./projects/MacbookAutoLider.png" },
    {
      numb: "FirebaseMovieApi",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.",
      img2: "./projects/iPhoneFirebasemovieapi.png",
      img: "./projects/MacbookFirebasemovieapi.png",
    },
    { numb: "Messanger", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.", img2: "./projects/iPhoneTelegramshoha.png", img: "./projects/MacbookTelegramshoha.png" },
    {
      numb: "SRM Restaurant",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.",
      img2: "./projects/iPhoneSRMrestaurant.png",
      img: "./projects/MacbookSRMrestaurant.png",
    },
    { numb: "EcoMax.uz", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.", img2: "./projects/iPhoneEcoMax.png", img: "./projects/MacbookEcoMax.png" },
    {
      numb: "Belcore E-Commerce",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate amet neque expedita exercitationem consectetur.",
      img2: "./projects/iPhoneBelcor.png",
      img: "./projects/MacbookBelcor.png",
    },
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div className="skills" ref={container}>
      {arr.map((item, index) => {
        const targetScale = 1 - (arr.length - index) * 0.05;
        return <SkillItem key={index} item={item} index={index} range={[index * 0.2, 1]} targetScale={targetScale} progress={scrollYProgress} />;
      })}
    </div>
  );
};

//

const SkillItem = ({ item, index, range, targetScale, progress }) => {
  const { img, text, numb, img2 } = item;
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
        <h2>{numb}</h2>
        <div className="skills__holder__box__textHolder">
          <div className="skills__holder__box__textHolder__text">
            <p className="mainHelloText">{text}</p>

            <span>
              <a href="#" target="_blank">
                See more
              </a>
              <IoMdArrowRoundForward />
            </span>
          </div>

          <div className="skills__holder__box__textHolder__img">
            <motion.div style={{ scale: imageScale }}>
              <div className="skills__holder__box__textHolder__img__phone">
                <img src={img2} alt="" />
              </div>
              <div className="skills__holder__box__textHolder__img__mac">
                <img src={img} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
