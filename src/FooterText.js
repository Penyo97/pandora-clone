import React from "react";
import "./FooterText.css";
function FooterText({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
  text9,
}) {
  return (
    <div className="footertext">
      <p>
        <b>{title}</b>
      </p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
      <p>{text4}</p>
      <p>{text5}</p>
      <p>{text6}</p>
      <br />
      <p>{text7}</p>
      <p>{text8}</p>
    </div>
  );
}

export default FooterText;
