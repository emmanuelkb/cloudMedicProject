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

    setUser(data.user);
  }, []);
  return (
    <div>
      <h1>Account Details</h1>
      <form className="userInfo">
        <input
          className="updateInput"
          type="text"
          value={user.currentSubscription}
        />
        <input className="updateInput" type="text" value={user.email} />
        <input className="updateInput" type="text" value={user.firstName} />
        <input className="updateInput" type="text" value={user.lastName} />
        <input className="updateInput" type="text" value={user.blood} />
        <input className="updateInput" type="text" value={user.gender} />
        <input className="updateInput" type="text" value={user.height} />
        <input className="updateInput" type="text" value={user.weight} />
        <input className="updateInput" type="text" value={user.phoneNumber} />
        <button className="updateButton">Update</button>
      </form>
    </div>
  );
};

export default Account;
