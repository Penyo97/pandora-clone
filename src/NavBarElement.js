import React from "react";
import "./NavBarElement.css";

function NavBarElement({ setshow, text, settext }) {
  return (
    <div
      className="navbar__elements"
      onMouseEnter={() => {
        setshow(true);
        settext(text);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setshow(false);
          settext("");
        }, 4000);
      }}
    >
      <p>{text}</p>
    </div>
  );
}

export default NavBarElement;
