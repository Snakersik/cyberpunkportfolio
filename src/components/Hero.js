import React from "react";
import Button from "./Button";
import { Link as Scroll } from "react-scroll";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div id="blob1" className="blobRose "></div>
      <div id="blob2" className="blobRose"></div>
      <div id="blob3" className="blobBlue"></div>
      <div>
        <div className="adjustment">
          <h2>CZEŚĆ, JESTEM</h2>
          <h1>KONRAD TRATWAL</h1>
          <h2 className="gradient">Frontend Developer</h2>
        </div>
        <Scroll to="ProjectsSection" spy={true} smooth={true} duration={500}>
          <Button text={"PROJEKTY"} />
        </Scroll>
      </div>
    </div>
  );
};

export default Hero;
