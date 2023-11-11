import React from "react";
import Stack from "./Stack";
import { Fade } from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about">
      <div className="aboutMeContainer">
        <h3>O MNIE</h3>
        <div id="blob4" className="blobRose"></div>
        <Fade cascade damping={1} triggerOnce>
          <p className="aboutP">
            Jestem Frontend Web Developerem, specjalizującym się w tworzeniu
            stron internetowych przy wykorzystaniu frameworka React. Obecnie
            jestem studentem informatyki na piątym semestrze, gdzie skupiam się
            na specjalizacji dotyczącej aplikacji internetowych.
          </p>
          <p className="aboutP">
            Każdy projekt strony internetowej, który tworzę, zaczynam od
            projektowania w programie Figma, a następnie precyzyjnie koduję
            stronę, testując ją na różnych urządzeniach. Ostatecznie hostuję ją
            na jednym z dostawców, takich jak Hostinger, Netlify, Microsoft
            Azure Static Web App lub Heroku.
          </p>
          <p className="aboutP">
            Mogę pochwalić się już zrealizowanymi projektami zarówno na własny
            rachunek, jak i w ramach zleceń komercyjnych. Jestem otwarty na
            oferty pracy gdzie mogę wnieść swoją wiedzę oraz doświadczenie i
            ciągle się rozwijąć
          </p>
        </Fade>
      </div>
      <div className="StackList">
        <div>
          <h3> TECH-STACK</h3>
          <Stack ListName={"tech"} />
        </div>
        <div id="blob5" className="blobBlue"></div>

        <div>
          <h3> DESIGN-STACK</h3>
          <Stack ListName={"design"} />
        </div>
      </div>
    </div>
  );
};

export default About;
