import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/MdSignInPage.css";

const MdSigninPage = () => {
  let history = useHistory();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDoctor = {
        email: email,
        password: password,
      };

      const data = await axios.post("/medic/login", newDoctor);
      console.log(data.data);
      setTimeout(() => {
        localStorage.setItem("token", data.data.token);
        history.push("/md/dashboard");
      }, 500);
    } catch (error) {
      alert("Incorrect email or password");
    }
  };

  return (
    <div>
      <div className="signInMain">
        <h1>My Cloud Medic MD</h1>
        <form className="signInForm" onSubmit={handleSubmit}>
          <input
            className="signInInput signInInputA"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="signInInput signInInputB"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="signInButton">Log in</button>
        </form>
        <a href="#">Lost your Password?</a>
      </div>
      <p className="signInFooter">&copy; 2021 Cloud Medic Privacy Help</p>
    </div>
  );
};
export default MdSigninPage;
