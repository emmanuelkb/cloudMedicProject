import React from "react";
import "../styles/PlanPerks.css";
const PlanPerks = (props) => {
  return (
    <div className="PlanPerkCard">
      <p className="PlanPerkCardImg">{props.image}</p>
      <p className="PlanPerkCardTitle">{props.title}</p>
      <p className="PlanPerkCardDesc">{props.description}</p>
    </div>
  );
};

export default PlanPerks;
