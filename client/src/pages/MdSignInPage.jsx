import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/MdSignInPage.css";

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

const MdSigninPage = () => {
  let history = useHistory();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newDoctor = {
      email: email,
      password: password,
    };

    const data = await fetchQuery({
      uri: "http://localhost:4000/medic/login",
      method: "POST",
      body: newDoctor,
    });

    if (data === "Invalid Credentials") {
      alert("succesfful");
    } else alert("incorrect credentials");
    setTimeout(() => {
      localStorage.setItem("token", data.token);
      history.push("/mddashboard");
    }, 1000);
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
