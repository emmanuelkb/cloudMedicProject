import React from "react";
import "../styles/SideBar.css";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import { VscSignOut, VscEllipsis } from "react-icons/vsc";

const MdSideBar = () => {
  let history = useHistory();
  const handleClick = () => {
    localStorage.removeItem("token");
    history.push("../../");
    window.location.reload();
  };

  return (
    <nav className="Sidebar">
      <div className="SideBarLinks">
        <NavLink className="SideBarTitle" to="#">
          My Cloud Medic
        </NavLink>
      </div>

      <div className="SideBarLinks SideBarDivOne">
        <NavLink className="MainLinks" to="/md/dashboard">
          Dashboard
        </NavLink>
        <NavLink className="MainLinks" to="/md/dashboard/patients">
          Patients
        </NavLink>
        {/* <NavLink className="MainLinks" to="/md/dashboard/schedule">
          Schedule
        </NavLink> */}
        <NavLink className="MainLinks" to="/md/dashboard/chat">
          Chat
        </NavLink>
        {/* <NavLink className="MainLinks" to="/dashboard/calendar">
          Calender
        </NavLink> */}
      </div>

      <div className="SideBarLinks SideBarDivTwo">
        <hr />

        <NavLink className="MainLinks" to="/md/dashboard/account">
          <VscEllipsis />
          Account
        </NavLink>
        <p className="MainLinks LogOut" onClick={handleClick}>
          <VscSignOut />
          Log Out
        </p>
      </div>
    </nav>
  );
};

export default withRouter(MdSideBar);
