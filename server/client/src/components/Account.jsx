import "../styles/Account.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Account = () => {
  const [user, setUser] = useState([]);
  const [medic, setMedic] = useState("");
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
          "http://localhost:4000/user/userCheck",
          options
        );
        setUser(data.data.user);
        setPatchId(data.data.user._id);
        console.log(data);
        setMedic(data.data.medic.firstName + " " + data.data.medic.lastName);
      };
      getUser();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
      phoneNumber: user.phoneNumber,
      blood: user.blood,
      height: user.height,
      weight: user.weight,
    };
    console.log(user.firstName);
    console.log(newUser);
    // const requestOptions = {
    //   body: JSON.stringify(newUser),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const updateUser = async (id) => {
    // const data = await axios.patch(
    //   "http://localhost:4000/user/edit/" + user._id,
    //   requestOptions
    // );
    // console.log(data);
    // setCheck(data);
    // updateUser();
    const response = await fetch("http://localhost:4000/user/edit/" + patchId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
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
              value={user.email}
              onChange={handleChange}
            />
            <label htmlFor="firstName">First Name:</label>
            <input
              id="firstName"
              className="updateInput"
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              id="lastName"
              className="updateInput"
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
            />
            <label htmlFor="gender">Gender:</label>
            <input
              id="gender"
              className="updateInput"
              type="text"
              name="gender"
              value={user.gender}
              onChange={handleChange}
            />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              id="phoneNumber"
              className="updateInput"
              type="text"
              name="phoneNumber"
              value={user.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <hr className="hr" />
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
              value={user.blood}
              onChange={handleChange}
            />

            <label htmlFor="height">Height:</label>
            <input
              id="heigth"
              className="updateInput"
              type="text"
              name="height"
              value={user.height}
              onChange={handleChange}
            />
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              className="updateInput"
              type="text"
              name="weight"
              value={user.weight}
              onChange={handleChange}
            />

            <label htmlFor="currentSubscription">Current Subscription:</label>
            <input
              id="currentSubscription"
              className="updateInput"
              type="text"
              name="currentSubscription"
              value={user.currentSubscription}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="updateButton" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default Account;
