import React, { useState } from "react";

const ThemeSwitcher = () => {
  const htmlElement = document.getElementsByTagName("html")[0];
  const [currentClass, setClass] = useState(htmlElement.className);
  const onToggle = (className) => {
    htmlElement.classList.remove(currentClass);
    htmlElement.classList.add(className);
    setClass(className);
  };
  return (
    <div className="themeSwitcher">
      {" "}
      {currentClass === "theme-dark" ? (
        <i className="gg-sun" onClick={() => onToggle("theme-light")}></i>
      ) : (
        <i className="gg-moon" onClick={() => onToggle("theme-dark")}></i>
      )}
    </div>
  );
};

export default ThemeSwitcher;
