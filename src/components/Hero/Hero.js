import React from "react";
import "./Hero.scss";
import backgroundImage from "../../assets/images/heroImg.jpg";

const Hero = () => {
    return(
        <div className="hero">
            <img className="hero__background" src={backgroundImage}></img>
        </div>
    )
}

export default Hero;