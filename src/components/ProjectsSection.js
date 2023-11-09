import React from "react";
import Button from "./Button";
import KamilStrona from "../images/kamilstrona.png";
import SzwedPorfolio from "../images/szwedportfolio.png";
import Filmbase from "../images/filmbase.png";
import Traveler from "../images/traveler.png";

const ProjectsSection = () => {
  return (
    <div className="ProjectsSection">
      <h3 id="SectionTitle">PROJEKTY</h3>
      <Project
        Title={"STRONA FIRMOWA KAMIL BŁĘDOWSKI"}
        Description={
          "Opis o tej stronce. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis nibh orci. Duis sit amet orci turpis. Nam semper, velit nec aliquam eleifend, mi nisi volutpat nisi, sit amet lacinia urna magna quis dolor. Mauris et quam quis lacus vehicula egestas at  eu turpis. Cras lectus est, porttitor sit amet. "
        }
        background={KamilStrona}
      />
      <Project Title={"PORTFOLIO  JAKUB SZWED"} background={SzwedPorfolio} />
      <Project Title={"FILMBASE"} background={Filmbase} />
      <Project Title={"TRAVELER"} background={Traveler} />
    </div>
  );
};

const Project = ({ Title, Description, background }) => {
  return (
    <div className="ProjectItemContainer">
      <div className="ProjectDescribtionContainer">
        <h4>{Title}</h4>
        <p>
          Opis o tej stronce. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vivamus quis nibh orci. Duis sit amet orci turpis. Nam semper,
          velit nec aliquam eleifend, mi nisi volutpat nisi, sit amet lacinia
          urna magna quis dolor. Mauris et quam quis lacus vehicula egestas at
          eu turpis. Cras lectus est, porttitor sit amet.
        </p>
        <Button text={"LIVE VIEW"} />
      </div>
      <div
        className="ProjectImage"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
    </div>
  );
};

export default ProjectsSection;
