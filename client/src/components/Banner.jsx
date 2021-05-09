import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Banner.css";

const Banner = () => {
  let history = useHistory();
  return (
    <div className="Hero">
      <div className="heroInner1">
        <h1>Medical Care on your schedule</h1>
        <button className="BannerButton" onClick={() => history.push("/plans")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Banner;
