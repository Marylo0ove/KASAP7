import React from "react";
import logo from "../../assets/LOGOwhite.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="logo kasa" className="footer-logo" />
      <p className="footer-text"> © 2020 Kasa. All right reserved</p>
    </div>
  );
};

export default Footer;
