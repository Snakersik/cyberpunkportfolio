import React from "react";
import { Slide } from "react-awesome-reveal";
import Button from "./Button";
import KamilStrona from "../images/kamilstrona.png";
import SzwedPorfolio from "../images/szwedportfolio.png";
import Filmbase from "../images/filmbase.png";
import Traveler from "../images/traveler.png";
import Ecommerce from "../images/ComfyShop.png";

const ProjectsSection = () => {
  return (
    <div className="ProjectsSection">
      <h3 id="SectionTitle">PROJEKTY</h3>
      <Project
        Title={"STRONA FIRMOWA KAMIL BŁĘDOWSKI"}
        Description={
          "Jest  to projekt komercyjny. Projekt powstał dla firmy budowlano-remontowej. Wykorzystane technologie: React, HTML, CSS. Strona mimo braku optymalizacji pod SEO z wyboru klienta poprzez promowanie na Facebooku pozwoliła na  znaczne zwiększenie ilości klientów, a firma zdołała zabezpieczyć zlecenia na okres 6 miesięcy do przodu."
        }
        background={KamilStrona}
        link={"https://bledowskiremonty.pl"}
      />
      <Project
        Title={"PORTFOLIO  JAKUB SZWED"}
        background={SzwedPorfolio}
        link={"https://www.jakubszwed.com.pl"}
        Description={
          "Jest to projekt komercyjny. Projekt powstał dla klienta chcącego zaprezentować swoje portfolio filmowe. Wykorzystywane technologie React, HTML, CSS. Dzięki temu portfolio klient zyskał możliwość skutecznej prezentacji swoich dotychczasowych projektów filmowych. Projekt umożliwił mu również nawiązywanie większych współprac filmowych dzięki profesjonalnemu i nowoczesnemu wizerunkowi online."
        }
      />
      <Project
        Title={" Strona E-commerce"}
        background={Ecommerce}
        link={"https://github.com/Snakersik/ReactShoppFront"}
        Description={
          "Projekt grupowy zrealizowany podczas studiów, oparty na technologiach HTML, CSS, React, Rest API oraz narzędzie Postman do testowania endpointów. W moim zakresie obowiązków znajdowało się opracowanie warstwy frontendowej dla sklepu e-commerce oraz implementacja połączeń z endpointami backendu. Strona umożliwia użytkownikom logowanie i rejestrację, a po autentyfikacji generuje unikalny zakodowany token, który jest zapisywany w bazie danych podczas rejestracji. Podczas logowania token ten jest pobierany i przechowywany w pamięci przeglądarki, umożliwiając użytkownikowi dodawanie, usuwanie i edytowanie przedmiotów w trakcie trwania sesji."
        }
        buttonName={"GitHub"}
      />
      <Project
        Title={"FILMBASE"}
        background={Filmbase}
        link={"https://filmbasekt.netlify.app/"}
        Description={
          "Jest to projekt samorozwojowy, w którym wykorzystano technologie React, HTML, CSS oraz interakcję z API OMDB. Aplikacja umożliwia użytkownikowi przeszukiwanie bazy danych filmów OMDB, dodawanie wybranych filmów do listy obejrzanych, czytanie krótkich opisów i wystawianie ocen. Za pomocą tego projektu rozwijałem umiejętności programowania, korzystania z interfejsów API oraz pracy nad interaktywnymi interfejsami użytkownika."
        }
      />
      <Project
        Title={"TRAVELER"}
        background={Traveler}
        link={"https://travelerprojectkt.netlify.app/"}
        Description={
          "Jest to projekt samorozwojowy. Wykorzystane technologie HTML, CSS, JavaScript. Jest to prosty projekt który miał za zadanie imitować stronę dla eksluzywnego biura podróży.   "
        }
      />
    </div>
  );
};

const Project = ({
  Title,
  Description,
  background,
  link,
  buttonName,
  blob,
}) => {
  return (
    <div className="ProjectItemContainer ">
      <Slide direction="left" triggerOnce delay="1" duration={"2000"}>
        <div className="ProjectDescribtionContainer">
          <h4>{Title}</h4>

          <p>{Description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {buttonName ? (
              <Button text={buttonName} />
            ) : (
              <Button text={"LIVE VIEW"} />
            )}
          </a>
        </div>
      </Slide>
      <Slide direction="right" triggerOnce delay="1" duration={"2000"}>
        <div
          className="ProjectImage"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
      </Slide>
    </div>
  );
};

export default ProjectsSection;
