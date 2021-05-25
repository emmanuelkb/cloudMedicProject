import React, { useState, useEffect } from "react";
import "../styles/MdDashboardComp.css";
import axios from "axios";
import { VscCallOutgoing } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { VscComment } from "react-icons/vsc";
import { BsPeople } from "react-icons/bs";
import { MdSchedule } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";

const MdDashboardComp = () => {
  //   const [user, setUser] = useState([]);
  const [medic, setMedic] = useState([]);
  const [patient, setPatient] = useState([]);
  const [appointment, setAppointment] = useState([]);

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
        setAppointment(result.data.doctor.appointments);
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
        <h2>An Apple a day keeps You away!</h2>
      </div>
      <div className="mdTopCards">
        <div className="mdTopCard">
          <BsPeople />
          <p>
            patients <span>{patient.length}</span>
          </p>
        </div>
        <div className="mdTopCard">
          <MdSchedule />
          <p>
            Appointments <span>{appointment.length}</span>
          </p>
        </div>
        <div className="mdTopCard">
          <AiOutlineHeart />
          <p>
            Treatments <span>Number of Treatments</span>
          </p>
        </div>
        <div className="mdTopCard">
          <BiDollar />
          <p>
            Income <span>$100,000</span>
          </p>
        </div>
      </div>
      <div className="mdBottomCards">
        <div>
          <p>My Appointments</p>
          <div className="mdBottomCard">
            {appointment.map((item) => (
              <li className="appointmentList">
                <p className="appointmentDate">{item.date.split("T")[0]}</p>
                <p className="appointmentTime">{item.time}</p>
                <p className="appointmentWith"> patient name</p>
              </li>
            ))}
          </div>
        </div>
        <div>
          <p>My Patients</p>
          <div className="mdBottomCard">
            {patient.map((item) => (
              <li className="patientList">
                <div className="patientName">
                  <p>{item.firstName + " " + item.lastName}</p>
                </div>
                <div className="patientIcons">
                  <p>
                    <VscCallOutgoing />
                  </p>
                  <p>
                    <VscComment />
                  </p>
                  <p>
                    <VscMail />
                  </p>
                </div>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdDashboardComp;
