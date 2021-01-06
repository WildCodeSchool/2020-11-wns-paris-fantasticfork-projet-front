import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-line"></div>
      <h4 className="h4-footer">
        © Stud-Connect, 2021. Fantastique-fork from WCS
        </h4>
      <div className="footer-links">
        <ul>
          <li>Contact</li>
          <li>About us</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li><FacebookIcon /></li>
          <li><InstagramIcon /></li>
          <li><TwitterIcon /></li>
        </ul>
      </div>

    </div>
  );
};

export default Footer;
