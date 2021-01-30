import React, { useState, useEffect } from "react";
import "./DropNavbar.css";
import db from "./firebase/firebase";

function DropNavbar({ text }) {
  const [navbar, setnavbar] = useState([]);
  useEffect(() => {
    db.collection("Navbar").onSnapshot((snapshot) =>
      setnavbar(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  if (text === "AJÁNDÉKOK") {
    text = "AJÁNDÉK";
  }
  if (text[0] === "PANDORA") {
    text = "PANDORAKLUB";
  }
  return (
    <div>
      <div className="dropnavbar">
        <div className="dropnavbar__textblokk">
          {navbar.map(({ FirstTexts, Id }) =>
            Id === text
              ? FirstTexts.map((text) => (
                  <p className="dropnavbar__text" key={Math.random()}>
                    {text}
                  </p>
                ))
              : ""
          )}
        </div>
        <div className="dropnavbar__textblokk">
          {navbar.map(({ SecondTexts, Id }) =>
            Id === text && SecondTexts != null
              ? SecondTexts.map((text) => (
                  <p className="dropnavbar__text" key={Math.random()}>
                    {text}
                  </p>
                ))
              : ""
          )}
        </div>
        <div className="dropnavbar__textblokk">
          {navbar.map(({ ThirdTexts, Id }) =>
            Id === text && ThirdTexts != null
              ? ThirdTexts.map((text) => (
                  <p className="dropnavbar__text" key={Math.random()}>
                    {text}
                  </p>
                ))
              : ""
          )}
        </div>
        <div className="dropnavbar__textblokk">
          {navbar.map(({ FourthTexts, Id }) =>
            Id === text && FourthTexts != null
              ? FourthTexts.map((text) => (
                  <p className="dropnavbar__text" key={Math.random()}>
                    {text}
                  </p>
                ))
              : ""
          )}
        </div>
        <div>
          {navbar.map(({ Pictures, Id }) =>
            Id === text
              ? Pictures.map((src) => (
                  <img
                    className="dropnavbar__img"
                    key={Math.random()}
                    src={src}
                    alt="pandora_img"
                  />
                ))
              : ""
          )}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default DropNavbar;
