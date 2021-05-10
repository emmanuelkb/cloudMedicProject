import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterMain">
        <h1>
          <a className="footerItems" href="/">
            Cloud Medic
          </a>
        </h1>
        <p>
          <a className="footerItems" href="/news">
            Health News
          </a>
        </p>
        <p>
          <a className="footerItems" href="/plans">
            Plans & Pricing
          </a>
        </p>
        <p>
          <a className="footerItems" href="/contact">
            Contact us
          </a>
        </p>
        <p>
          <a className="footerItems" href="/login">
            Patient Sign in
          </a>
        </p>
        <p>
          <a className="footerItems" href="/mdlogin">
            MD Sign in
          </a>
        </p>
        <p>
          <a className="footerItems" href="">
            Help & Support
          </a>
        </p>
        <div class="sociali">
          <p>Cloud Medic on Social Media</p>
          <button className="socialiBtn">
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
          </button>
          <button className="socialiBtn">
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
          </button>
          <button className="socialiBtn">
            <a href="">
              <i class="fab fa-facebook-f"></i>
            </a>
          </button>
        </div>
      </div>
      <div className="footerBottom">
        <p>&copy; 2021 Cloud Medic. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
