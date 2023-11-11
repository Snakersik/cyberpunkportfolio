import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [NavView, setNavView] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 650);

  const Navshow = () => {
    setNavView((prevNavView) => !prevNavView);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 650);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  return (
    <div className="navContainer">
      <nav
        className="nav"
        style={
          scrolled
            ? {
                background: "#060606",
                transition: "background 0.5s ease-in",
              }
            : {}
        }
      >
        <Scroll
          className="NavBarElementFirst linkHover"
          to="HeroContainer"
          spy={true}
          smooth={true}
          duration={500}
          onClick={isSmallScreen ? Navshow : undefined}
        >
          Konrad Tratwal
        </Scroll>

        {isSmallScreen && (
          <i
            className={`fa-solid fa-${
              NavView ? "xmark" : "bars"
            } fa-xl linkHover`}
            onClick={Navshow}
          ></i>
        )}

        <ul
          className="active"
          style={{
            animation: NavView
              ? "slideIn 0.5s ease"
              : "slideOut 0.5s ease forwards",
            opacity: isSmallScreen ? (NavView ? "1" : "0") : "1",
          }}
        >
          <li>
            <Scroll
              className="NavBarElement linkHover"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              onClick={NavView ? Navshow : undefined}
            >
              O mnie
            </Scroll>
          </li>
          <li>
            <Scroll
              to="ProjectsSection"
              spy={true}
              smooth={true}
              duration={500}
              className="NavBarElement linkHover"
              onClick={NavView ? Navshow : undefined}
            >
              Projekty
            </Scroll>
          </li>
          <li>
            <Scroll
              className="NavBarElement linkHover"
              to="ContactSection"
              spy={true}
              smooth={true}
              duration={500}
              onClick={NavView ? Navshow : undefined}
            >
              Kontakt
            </Scroll>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
