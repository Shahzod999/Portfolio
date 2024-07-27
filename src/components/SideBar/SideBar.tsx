import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";
import ToggleBtn from "./ToggleBtn/ToggleBtn";
import "./sideBar.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
  const darkModeSideBar = useSelector((state: RootState) => state.darkMode.value);
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sideBar" animate={open ? "open" : "closed"}>
      <motion.div className={`${darkModeSideBar ? "darkSideBar" : "lightSideBar"} linksHolder`} variants={variants}>
        <Links />
      </motion.div>

      <ToggleBtn setOpen={setOpen} open={open} darkModeSideBar={darkModeSideBar} />
    </motion.div>
  );
};

export default SideBar;
