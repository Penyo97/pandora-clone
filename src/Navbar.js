import React from "react";
import "./navbar.css";
import NavBarElement from "./NavBarElement";
import SearchIcon from "@material-ui/icons/Search";
function Navbar({ setshow, settext }) {
  return (
    <div className="navbar">
      <NavBarElement setshow={setshow} settext={settext} text="ÚJDONSÁGOK" />
      <NavBarElement setshow={setshow} settext={settext} text="CHARMOK" />
      <NavBarElement setshow={setshow} settext={settext} text="GYŰRŰK" />
      <NavBarElement setshow={setshow} settext={settext} text="KARKÖTÖK" />
      <NavBarElement setshow={setshow} settext={settext} text="NYAKLÁNCOK" />
      <NavBarElement setshow={setshow} settext={settext} text="FÜLBEVALÓK" />
      <NavBarElement setshow={setshow} settext={settext} text="KOLLEKCIÓK" />
      <NavBarElement setshow={setshow} settext={settext} text="AJÁNDÉKOK" />
      <NavBarElement
        setshow={setshow}
        settext={settext}
        text={["PANDORA", <br />, "KLUB"]}
      />
      <NavBarElement setshow={setshow} settext={settext} text="UNIVERZUM" />
      <p className="navbar__transit">
        <b>Házhozszállítás</b>
      </p>
      <SearchIcon className="navbar__search" fontSize="large" />
    </div>
  );
}

export default Navbar;
