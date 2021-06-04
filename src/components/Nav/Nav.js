import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../../Assents/logo.png";
function Nav() {
    const navStyle = {
        color:"white",
    }
  return (
    <nav>
        <img src={Logo} style={{height:100}} alt="Oğuzcan Uzunöner Logo"/>
      <ul className="navLinks">
          <Link style={navStyle} to ="/">
              <li>Calculator</li>
              </Link>
          <Link style={navStyle} to = "/bmihistory">
              <li>Bmi History</li>
              </Link>
          <Link style={navStyle} to = "/dietlist">
              <li>Diet List</li>
              </Link>
      </ul>
    </nav>
  );
}

export default Nav;
