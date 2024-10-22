import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import "./sideBar.scss";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 15,
    },
  },
  closed: {
    clipPath: "circle(0px at 60px 50px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 40,
    },
  },
};

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className="linksHolder" variants={variants}>
        <Links />
      </motion.div>

      <ToggleBtn setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default SideBar;
