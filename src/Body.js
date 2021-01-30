import React from "react";
import "./Banner.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Carousel from "./Carousel";
import ButtonSection from "./ButtonSection";
import Images from './Images'

function Body() {
  return (
    <div>
    <div className="banner">
      <div className="banner__img">
      <div className="banner__textbox">
        <h3>Fedezd fel az új világunkat</h3>
        <br/>
        <p>Az erő legyen veled az új Star Wars x Pandora kollekció ékszereivel</p>
        <br/>
        <div className="banner_continue">
          <div>
          <h5>Tovább</h5>
          </div>
          <div className={`banner__arrow`}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
      </div>
    </div>
    <div className="banner__title">
      <div>
      <h2>Fedezd fel a galaxist</h2>
      <br />
      <p>Szerezz új stílusokat a Star Wars x Pandora kollekcióból, és mutasd meg, mennyire rajongsz az ikonikus filmekért.</p>
      </div>
    </div>
    <Carousel/>    
    <ButtonSection/>
    <Images/>
    </div>
  );
}

export default Body;
