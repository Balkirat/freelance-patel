import React from "react";
import "./Hero.scss";
import backgroundImage from "../../assets/images/heroImg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img className="hero__background" src={backgroundImage}></img>
        <motion.div
          className="hero__info"
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: "20%", opacity: 1 }}
          transition={{
            duration: 2.5,
            type: "spring",
            stiffness: 120,
            delay: 1,
          }}
        >
          <h1 className="hero__info--heading">
            EXCELLENT <span>VISION</span> CARE
          </h1>
          <h3 className="hero__info--subheading">
            We Provide Best Customer Services In GTA
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
