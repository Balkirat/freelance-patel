import React from "react";
import "./Hero.scss";
import backgroundImage from "../../assets/images/heroImg.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <img className="hero__background" src={backgroundImage}></img>
        <div className="hero__info">
          <h1 className="hero__info--heading">EXCELLENT <span>VISION</span> CARE</h1>
          <h3 className="hero__info--subheading">We Provide Best Customer Services In GTA</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
