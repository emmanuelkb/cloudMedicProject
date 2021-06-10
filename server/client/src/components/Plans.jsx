import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { SubState } from "../context/SubState";
import "../styles/Plans.css";

const Plans = (props) => {
  const { value, setValue } = useContext(SubState);

  let history = useHistory();

  const handleClick = () => {
    setValue(props.type);
    history.push("/register");
  };

  return (
    <div className="planCards">
      <h1 className="planCardsType">{props.type}</h1>
      <div className="planCardsDS">
        <p className="planCardsDuration">{props.duration}</p>
        <p className="planCardsSpecial">{props.special}</p>
      </div>
      <p className="planCardsAmount">
        GH₵ <span className="planCardsAmt">{props.amount}</span>
      </p>
      <p className="planCardsDescription"> {props.description}</p>
      <button className="planCardsButton" onClick={handleClick}>
        Select this Plan
      </button>
    </div>
  );
};

export default Plans;
