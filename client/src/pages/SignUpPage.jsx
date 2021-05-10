import "../styles/SignUpPage.css";
import { Link, useHistory } from "react-router";
import { useState, useContext } from "react";
import { SubState } from "../context/SubState";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const SignUpPage = () => {
  let history = useHistory();

  const { value, setValue } = useContext(SubState);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    height: "",
    weight: "",
    blood: "",
    currentSubscription: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      height: user.height,
      weight: user.weight,
      blood: user.blood,
      currentSubscription: value,
    };
    console.log(value);
    const data = fetchQuery({
      uri: "http://localhost:4000/user/register",
      method: "POST",
      body: newUser,
    });
    history.push("/login");
  };
  return (
    <div>
      <div className="SignUpMain">
        <h1>Enter Details</h1>
        <form className="SignUpForm" onSubmit={handleSubmit}>
          <input
            className="signUpInput"
            type="text"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
          <input
            className="signUpInput"
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <input
            className="signUpInput"
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="signUpInput"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            className="signUpInput"
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
          <input
            className="signUpInput"
            type="tel"
            placeholder="Phone Number"
            maxLength="12"
            minLength="10"
            // pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleChange}
          />
          <div className="shortFields">
            <select
              className="signUpInput shortField"
              id=""
              name="gender"
              value={user.gender}
              onChange={handleChange}
            >
              <option selected disabled="" value="">
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-Binary">Non-Binary</option>
            </select>
            <input
              className="signUpInput shortField"
              type="Number"
              placeholder="Height (cms)"
              min="0"
              max="250"
              name="height"
              value={user.height}
              onChange={handleChange}
            />
            <input
              className="signUpInput shortField"
              type="Number"
              placeholder="Weight (kgs)"
              min="0"
              max="300"
              name="weight"
              value={user.weight}
              onChange={handleChange}
            />
          </div>

          <input
            className="signUpInput "
            type="text"
            placeholder="Blood Type"
            name="blood"
            value={user.blood}
            onChange={handleChange}
          />
          <input
            className="signUpInput "
            type="text"
            placeholder="Subscription Selected"
            name="currentSubscription"
            value={value}
            onChange={handleChange}
          />

          <button className="signUpButton">Register</button>
        </form>
      </div>
      <p className="signUpFooter">&copy; 2021 Cloud Medic Privacy Help</p>
    </div>
  );
};

export default SignUpPage;
