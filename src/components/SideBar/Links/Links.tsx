import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Me", "Knowledge", "Projects", "Contacts"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((el, index) => (
        <motion.a href={`#${el}`} key={index} variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          {el}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
