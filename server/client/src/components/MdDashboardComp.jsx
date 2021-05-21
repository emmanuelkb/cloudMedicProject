import React, { useState, useEffect } from "react";
import "../styles/MdDashboardComp.css";
import axios from "axios";

const MdDashboardComp = () => {
  //   const [user, setUser] = useState([]);
  const [medic, setMedic] = useState([]);
  const [patient, setpatient] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const getMedic = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await axios(
          "http://localhost:4000/medic/verify",
          requestOptions
        );
        setMedic(result.data.doctor);
        setpatient(result.data.doctor.patients);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMedic();
  }, []);

  return (
    <div className="mdDashmain">
      <div className="mdDashmainTopText">
        <h1>
          Welcome Dr. {medic.firstName} {medic.lastName}
        </h1>
        <h2>How are you feeling today?</h2>
      </div>
      <div className="mdTopCards">
        <div className="mdTopCard">
          <p>
            patients <span>{patient.length}</span>
          </p>
        </div>
        <div className="mdTopCard">
          <p>
            Appointments <span>number</span>
          </p>
        </div>
      </div>
      <div>
        <p>Appointments</p>
        <div className="mdBottomCard"></div>
      </div>
    </div>
  );
};

export default MdDashboardComp;
