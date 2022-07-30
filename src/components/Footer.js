import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        <img src={HeartIcon} alt="love icon" />
      </p>
    </footer>
  );
}

export default Footer;
