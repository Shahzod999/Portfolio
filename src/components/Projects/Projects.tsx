import { useRef } from "react";
import "./projects.scss";
import { useScroll, useTransform, motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="projects">
      <ProjectItems />
    </div>
  );
};

const ProjectItems = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: "1.jpg",
      scale: scale4,
    },
    {
      src: "2.jpg",
      scale: scale5,
    },
    {
      src: "3.jpg",
      scale: scale6,
    },
    {
      src: "4.jpg",
      scale: scale5,
    },
    {
      src: "5.jpg",
      scale: scale6,
    },
    {
      src: "6.jpg",
      scale: scale8,
    },
    {
      src: "1.jpg",
      scale: scale9,
    },
  ];

  return (
    <div ref={container} className="projectItem">
      {/* 300vh */}
      <div className="sticky">
        {/* 100vh */}
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale: scale }} className="element">
              {/* 100% */}
              <div className="imageContainer">
                {/* 25vh */}
                <img src={src} alt="" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
