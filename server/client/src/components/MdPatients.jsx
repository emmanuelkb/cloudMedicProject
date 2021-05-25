import React, { useState, useEffect } from "react";
import "../styles/MdPatients.css";
import axios from "axios";

const MdPatients = () => {
  const [medic, setMedic] = useState([]);
  const [patient, setPatient] = useState([]);

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
        setPatient(result.data.patient);
      } catch (error) {
        console.log(error);
      }
    };
    getMedic();
  }, []);
  return (
    <div className="patients">
      <div className="topLevel">
        <div className="flexOne">
          <p>My Patients</p>
          <div className="patientsCard">
            {patient.map((patients) => (
              <li className="patientsList">
                <p>{patients.firstName + " " + patients.lastName}</p>
                <p>{patients.gender}</p>
                <p>{patients.blood}</p>
                <p>{patients.weight}</p>
                <p>{patients.height}</p>
                <p>{patients.currentSubscription}</p>
              </li>
            ))}
          </div>
        </div>

        <div className="diagnosis">
          <p>Diagnosis/Report</p>
          <input type="text" placeholder="Patient Id" className="reportInput" />
          {/* <p>Date</p> */}
          <textarea
            className="reportTextAreas"
            name=""
            id=""
            cols="50"
            rows="8"
            placeholder="Diagnosis"
          ></textarea>
          <textarea
            className="reportTextAreas"
            name=""
            id=""
            cols="50"
            rows="5"
            placeholder="Lab Tests"
          ></textarea>
          <textarea
            className="reportTextAreas"
            name=""
            id=""
            cols="50"
            rows="8"
            placeholder="Prescription"
          ></textarea>
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default MdPatients;
