import React from "react";
import "../styles/Newsletter.css";
const Newsletter = () => {
  return (
    <div className="NewsletterComp">
      <div className="SubscribeText">
        <h1>
          Get helpful, doctor-prescribed health news & tips, delivered weekly.
        </h1>
      </div>

      <form action="" className="subscribeForm">
        <select name="" id="">
          <option selected disabled value="">
            I'm interested in
          </option>
          <option value="Heart Health">Heart Health & Metabolism</option>
          <option value="Optimization">Optimization & Performance</option>
          <option value="Mental">Mental Health</option>
          <option value="Hormones">Hormones & Fertility</option>
          <option value="Autoimmune">Autoimmune & Inflammatory</option>
          <option value="All">All of the Above</option>
        </select>
        <input
          type="text"
          placeholder="Your email"
          className="subscribeInput"
        />
        <button> Submit</button>
      </form>
    </div>
  );
};

export default Newsletter;
