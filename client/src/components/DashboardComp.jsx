import React, { useState, useEffect } from "react";
import "../styles/DashboardComp.css";
import drugImg from "../images/drugImg.png";

const DashboardComp = () => {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    // fetch("http://localhost:4000/user/userCheck", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => setUser(data));

    let result = await fetch(
      "http://localhost:4000/user/userCheck",
      requestOptions
    );
    const data = await result.json();

    console.log(data);
    localStorage.setItem("user", data.user);
    setUser(data.user);
  }, []);

  return (
    <div className="Dashmain">
      <div className="DashmainTopText">
        <h1>Hello, {user.firstName} !</h1>
        <h2>How are you feeling today?</h2>
      </div>
      <div className="middleCards ">
        <div className="middleCard DoctorCard">
          <p>Your dedicated Medic is :</p>
          <p className="doctorName">Doctor name</p>
          <p className="doctorSpeciality">"Type of Practice"</p>
        </div>
        <div className="middleCard DataCard">
          <div className="dataTitle">
            <p>Your data:</p>
          </div>
          <div className="Vitals">
            <p>
              Weight <div className="vitalsDet">{user.weight}</div>
            </p>
            <p>
              Height <div className="vitalsDet">{user.height}</div>
            </p>
            <p>
              Blood <div className="vitalsDet">{user.blood}</div>
            </p>
          </div>
        </div>
      </div>
      <div className="BottomSection">
        <div className="BottomImage"></div>
        <div className="BottomCards">
          <div className="BottomCard">
            <div className="bottomDiagnosisImg"></div>
            <div className="BottomCardText">
              <p>Diagnosis</p>
              <p>Archive of Diagnosis</p>
            </div>
          </div>
          <div className="BottomCard">
            <div className="bottomDrugImg"></div>
            <div className="BottomCardText">
              <p>Drugs</p>
              <p>Prescribed Medications</p>
            </div>
          </div>
          <div className="BottomCard">
            <div className="bottomTestImg"></div>
            <div className="BottomCardText">
              <p>Test</p>
              <p>Archive of Tests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
