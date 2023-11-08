import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="HeroContainer">
      <div id="blob1" className="blobRose"></div>
      <div id="blob2" className="blobRose"></div>
      <div id="blob3" className="blobBlue"></div>

      <div className="adjustment">
        <h2>CZEŚĆ, JESTEM</h2>
        <h1>KONRAD TRATWAL</h1>
        <h2 className="gradient">Frontend Developer</h2>
      </div>
      <Button text={"PROJEKTY"} />
    </div>
  );
};

export default Hero;
