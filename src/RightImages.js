import React from "react";
import "./RightImages.css";
import Textbox from "./TextBox";
function RightImages() {
  return (
    <div className="rightimages">
      <img
        src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/10-October/colours-assets/Widget2x1.jpg"
        alt="img2"
      />
      <Textbox
        title="Legyen vidámabb a stilusod"
        text="Szinesitsd gyűjteményed olyan ékszerrel,amik tükrözik az egyedi stilusod"
      />
      <div className="rightimages__text">
        <div className="rightimages__title">
          <h4>Melyik oldalon állsz?</h4>
          <br />
          <p className="rightimages__continue">Tovább</p>
        </div>
        <img
          src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/10-October/SW_story-assets/Widget1x1.jpg"
          alt="img"
        />
      </div>
      <img
        src="https://www.pandora.net/-/media/Images/Consumer/SPOTS/Campaigns/2020/09-September/Voices_of_Pandora/Widget2x2.jpg"
        alt="img"
      />
      <Textbox
        title="A Pandora hangjai"
        text="Ünnepeld velünk 20 év gyűjtőmunkáját azzal, hogy megosztod az emlékezetes első alkalmakat."
      />
    </div>
  );
}

export default RightImages;
