import React from "react";

const techStackList = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "GIT",
  "Github",
  "Rest API",
  "Wordpress",
  "Azure Static Wen App",
];

const designStackList = ["Figma", "Photoshop", "Canva"];

const Stack = ({ ListName }) => {
  return (
    <div className="AllStack">
      {ListName === "tech"
        ? techStackList.map((name, key) => (
            <StackItem key={key} StackText={name} />
          ))
        : designStackList.map((name, key) => (
            <StackItem key={key} StackText={name} />
          ))}
    </div>
  );
};

const StackItem = ({ StackText }) => {
  return (
    <div className="StackItem">
      <div className="border-gradient">{StackText}</div>
    </div>
  );
};

export default Stack;
