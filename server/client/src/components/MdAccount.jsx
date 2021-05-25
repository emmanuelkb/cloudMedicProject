import "../styles/Account.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [medic, setMedic] = useState([]);
  const [patchId, setPatchId] = useState("");

  const token = localStorage.getItem("token");

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    try {
      const getUser = async () => {
        const data = await axios.get(
          "http://localhost:4000/medic/verify",
          options
        );
        setMedic(data.data.doctor);
        setPatchId(data.data.doctor._id);
        console.log(data.data.doctor);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setMedic({ ...medic, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMedic = {
      firstName: medic.firstName,
      lastName: medic.lastName,
      email: medic.email,
      gender: medic.gender,
      phoneNumber: medic.phoneNumber,
      blood: medic.blood,
      height: medic.height,
      weight: medic.weight,
    };
    console.log(newMedic);

    const response = await fetch("http://localhost:4000/user/edit/" + patchId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMedic),
    });
    const data = await response.json();
  };
  return (
    <div className="accountMain">
      <form>
        <div className="userInfo">
          <div className="personalInfo">
            <h2 className="accounth2">Personal Information</h2>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="updateInput"
              type="text"
              name="email"
              value={medic.email}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              className="updateInput"
              type="text"
              name="firstName"
              value={medic.firstName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              className="updateInput"
              type="text"
              name="lastName"
              value={medic.lastName}
              onChange={handleChange}
            />
            <label htmlFor="gender">Gender:</label>
            <input
              id="gender"
              className="updateInput"
              type="text"
              name="gender"
              value={medic.gender}
              onChange={handleChange}
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              className="updateInput"
              type="text"
              name="phoneNumber"
              value={medic.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {/* <hr className="hr" />
          <div className="healthInfo">
            <h2 className="accounth2">Health Information</h2>
            <label htmlFor="medic">Medic</label>
            <input
              id="medic"
              className="updateInput"
              type="text"
              name="medic"
              value={medic}
              onChange={handleChange}
            />
            <label htmlFor="blood">Blood:</label>
            <input
              id="blood"
              className="updateInput"
              type="text"
              name="blood"
              value={medic.blood}
              onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
              id="heigth"
              className="updateInput"
              type="text"
              name="height"
              value={medic.height}
              onChange={handleChange}
            />
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              className="updateInput"
              type="text"
              name="weight"
              value={medic.weight}
              onChange={handleChange}
            />

            <label htmlFor="currentSubscription">Current Subscription:</label>
            <input
              id="currentSubscription"
              className="updateInput"
              type="text"
              name="currentSubscription"
              value={medic.currentSubscription}
              onChange={handleChange}
            />
          </div> */}
        </div>
        <button type="submit" className="updateButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Account;
