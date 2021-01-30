import React from "react";
import "./TextBox.css";
function TextBox({ title, text }) {
  return (
    <div className="textbox">
      <div>
        <h4>{title}</h4>
        <br />
        <p className="textbox__text">{text}</p>
        <br />
        <p className="textbox__continue">Tovább</p>
      </div>
    </div>
  );
}

export default TextBox;
