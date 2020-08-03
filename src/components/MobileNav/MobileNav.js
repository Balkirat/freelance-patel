import React from "react";
import { motion } from "framer-motion";
import "./MobileNav.scss";
import { Link } from "react-scroll";
import closeBtn from "../../assets/images/close-btn.svg";

const variants = {
    open: { x: 0 },
    closed: { x: "110%", transition: { delay: 0.5 } },
  };
  
  const liVariants = {
    open: { y: 0, opacity: 1 },
    closed: { y: -20, opacity: 0 },
  };
  
  const ulVariants = {
    open: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "afterChildren",
      },
    },
    closed: {},
  };


const MobileNav = (props) => {

  const { isNavOpen, toggleNav } = props;
  console.log(isNavOpen)
  console.log(toggleNav)
  return (
    <>
      <motion.nav
        className="sideNav"
        variants={variants}
        initial="closed"
        animate={isNavOpen ? "open" : "closed"}
        transition={{ damping: 900 }}
      >
        <button onClick={toggleNav} className="sideNav__close-btn">
          <img src={closeBtn} />
        </button>
        <motion.ul className="sideNav__list" variants={ulVariants}>
          <motion.li className="sideNav__list-item" variants={liVariants}>
            <Link
              className="sideNav__link"
              onClick={toggleNav}
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </motion.li>
          <motion.li className="sideNav__list-item" variants={liVariants}>
            <Link
              className="sideNav__link"
              onClick={toggleNav}
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
             Services
            </Link>
          </motion.li>
          <motion.li className="sideNav__list-item" variants={liVariants}>
            <Link
              className="sideNav__link"
              onClick={toggleNav}
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About Us
            </Link>
          </motion.li>
          <motion.li className="sideNav__list-item" variants={liVariants}>
            <Link
              className="sideNav__link"
              onClick={toggleNav}
              to="main"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact Us
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

export default MobileNav;
