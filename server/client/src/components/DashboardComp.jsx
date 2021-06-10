import React, { useState, useEffect } from "react";
import "../styles/DashboardComp.css";
import axios from "axios";
const DashboardComp = () => {
  const [user, setUser] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [medic, setMedic] = useState([]);
  const [appointment, setAppointment] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      try {
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        let result = await fetch("/user/userCheck", requestOptions);
        const data = await result.json();

        setUser(data.user);
        setMedic(data.medic);
        setAppointment(data.user.appointments);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [user.firstName]);

  const validDate = () => {
    var today = new Date().toISOString().split("T")[0];
    var nextWeekDate = new Date(new Date().getTime() + 6 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];
    document.getElementsByName("date")[0].setAttribute("min", today);
    document.getElementsByName("date")[0].setAttribute("max", nextWeekDate);
  };

  // useEffect(() => {
  //   const getAppointment = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:4000/appointment/" + userId
  //       );
  //       setAppointment(res.data.appointment);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getAppointment();
  // }, [userId]);

  const handleClick = () => {
    const postAppointment = async () => {
      try {
        const newAppointment = {
          date: date,
          time: time,
          user: user._id,
          medic: user.medic,
        };
        console.log(newAppointment);
        const res = await axios.post("/appointment/create", newAppointment);
        alert("Successfully Booked");
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Select another date/time");
      }
    };
    postAppointment();
  };
  return (
    <div className="Dashmain">
      <div className="DashmainTopText">
        <h1>Hello, {user.firstName}</h1>
        <h2>How are you feeling today?</h2>
      </div>
      <div className="adjacent">
        <div className="middleCards ">
          <div className="middleCard DoctorCard">
            <p>Your dedicated Medic is :</p>
            <p className="doctorName">
              {medic.firstName + "  " + medic.lastName}
            </p>
            <p className="doctorSpeciality">{medic.speciality}</p>
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
        <div className="sideCards">
          <p>Book Appointment</p>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select
            name=""
            id=""
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option selected disabled="" value="">
              Time
            </option>
            <option value="9:00">9:00am</option>
            <option value="11:00">11:00am</option>
            <option value="1:00">1:00pm</option>
            <option value="3:00">3:00pm</option>
          </select>
          <button onClick={handleClick}>Book</button>
        </div>
      </div>
      <div className="Bottom">
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
        <div>
          <p className="appointmentsTitle">My Appointments</p>
          <div className="appointments">
            {appointment.map((item) => (
              <li className="appointmentItems">
                <p className="appointmentDate">{item.date.split("T")[0]}</p>
                <p>at</p>
                <p className="appointmentTime">{item.time}</p>
                <button className="appointmentButton">Cancel</button>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComp;
