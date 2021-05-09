import React, { useState, useEffect } from "react";
import "../styles/DashboardComp.css";

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

    localStorage.setItem("user", data.user);
    setUser(data.user);
  }, []);

  return (
    <div className="Dashmain">
      <div>
        <h1>Hello, {user.firstName} !</h1>
        <h2>How are you feeling today</h2>
      </div>
      <div className="middleCards ">
        <div className="middleCard DoctorCard">
          <p>Your doctor</p>
          <p>Doctor name</p>
          <p>"Type of Practice"</p>
        </div>
        <div className="middleCard DataCard">
          <div>
            <p>Your data</p>
          </div>
          <div className="Vitals">
            <p>
              Weight <div>{user.weight}</div>
            </p>
            <p>
              Height <div>{user.height}</div>
            </p>
            <p>
              Blood <div>"blood"</div>
            </p>
          </div>
        </div>
      </div>
      <div className="BottomSection">
        <div className="BottomImage"></div>
        <div className="BottomCards">
          <div className="BottomCard">
            <p>Diagnosis</p>
            <p>Archive of Diagnosis</p>
          </div>
          <div className="BottomCard">
            <p>Drugs</p>
            <p>Prescribed medications</p>
          </div>
          <div className="BottomCard">
            <p>Test</p>
            <p>Archive of Tests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
