import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import "./Header.css";
import Navbar from "./Navbar";
import DropNavbar from "./DropNavbar";

function Header() {
  const [size, setsize] = useState(false);
  const [show, setshow] = useState(false);
  const [text, settext] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setsize(true);
      } else setsize(false);
    });
    //E nélkül is fut a progi
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className="header">
      <div className={`header_nav ${size && "small"}`}>
        <div></div>
        <div className="header__logo">
          <img
            className={`header__img ${size && "small"}`}
            src="https://logos-world.net/wp-content/uploads/2020/09/Pandora-Logo.png"
            alt="pandora"
          />
        </div>
        <div className="header__icons">
          <div className="header__icon">
            <FavoriteBorderIcon fontSize="large" />
          </div>
          <div className="header__icon">
            <LocationOnOutlinedIcon fontSize="large" />
          </div>
          <div className="header__icon">
            <PermIdentityOutlinedIcon fontSize="large" />
          </div>
        </div>
      </div>
      <hr className="header__line"/>
      <Navbar setshow={setshow} settext={settext} />
      {show && <DropNavbar text={text} />}
    </div>
  );
}

export default Header;
