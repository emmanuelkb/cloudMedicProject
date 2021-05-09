import "../styles/Account.css";
import React, { useState, useEffect } from "react";

const Account = () => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  useEffect(async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    let result = await fetch(
      "http://localhost:4000/user/userCheck",
      requestOptions
    );
    const data = await result.json();
    setUser(data["user"]);
    console.log(user);
  }, []);
  return (
    <div>
      <h1>Account Details</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
    </div>
  );
};

export default Account;
