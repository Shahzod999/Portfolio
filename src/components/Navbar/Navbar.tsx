import SideBar from "../SideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="container navbar">
      <SideBar />

      <div className="navbar_wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          logo
        </motion.span>
        <nav className="navbar_navig">
          <ul>
            <li>
              <a href="#!">Instgram</a>
            </li>
            <li>
              <a href="#!">Telegram</a>
            </li>
            <li>
              <a href="#!">WhatsApp</a>
            </li>
            <li>
              <a href="#!">LinkedIn</a>
            </li>
            <li>
              <a href="#!">Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
