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
    <div>
      <div>
        <p>Add Patient</p>
        <input type="text" />
        <button>add</button>
      </div>
      <div>
        <p>My Patients</p>
        <div className="patientsCard">
          {patient.map((patients) => (
            <li>
              <p>{patients.firstName + " " + patients.lastName}</p>
              <p>{patients.gender}</p>
              <p>{patients.phoneNumber}</p>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MdPatients;
