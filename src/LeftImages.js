import React from "react";
import "./LeftImages.css";
import TextBox from "./TextBox";

function LeftImages() {
  return (
    <div className="leftimages">
      <img
        src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/10-October/Club_Charm/Widget2x2.jpg"
        alt="img"
      />
      <TextBox
        title="Limitált kiadású Club Charm"
        text="Emlékezz arra, hogy mindig köved az álmaidat a Pandora 2020-as Club Charmmal"
      />
      <img
        src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/10-October/SW_the_child-assets/Widget2x1.jpg"
        alt="img"
      />
      <TextBox
        title="Vissza a kezdetekhez"
        text="Szerezd meg a The Mandalorian cimű Disney+ sorozatból ismert Gyermek Charmot"
      />
      <div className="leftimages__text">
        <div className="leftimages__title">
          <h4>Különleges, gyűjtői kiadás</h4>
          <br />
          <p className="leftimages__continue">Tovább</p>
        </div>
        <img
          src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/10-October/SW_collectors_edition-assets/Widget1x1.jpg"
          alt="img"
        />
      </div>
    </div>
  );
}

export default LeftImages;
