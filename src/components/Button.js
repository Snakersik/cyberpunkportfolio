import React, { useState } from "react";

const Button = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [hovered, setHovered] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  let interval = null;

  const handleMouseEnter = () => {
    setHovered(true);
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    clearInterval(interval);
    setDisplayText(text);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="309"
      height="81"
      viewBox="0 0 309 81"
      fill="none"
      id="my-svg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <path
        d="M8.5 1H71.5L77 5.5H308V70.5L298.5 80H8.5H1V69.5L3 67.5V49.5L1 48V1H8.5Z"
        fill="#0E0E17"
        fillOpacity="0.8"
      />

      <path
        d="M8.5 1H71.5L77 5.5H308V70.5L298.5 80H8.5M8.5 1V80M8.5 1H1V48L3 49.5V67.5L1 69.5V80H8.5"
        stroke="#133E7C"
        strokeWidth="2"
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="#0ABDC6"
        fontSize="28"
        fontFamily="Audiowide"
      >
        {hovered ? displayText : text}
      </text>
    </svg>
  );
};

export default Button;
