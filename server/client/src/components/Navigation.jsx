import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";
const Navigation = () => {
  return (
    <nav className="Navbar">
      <NavLink className=" NavTitle" to="/">
        Cloud Medic
      </NavLink>
      <p>|</p>
      <li>
        <NavLink className="NavbarItems NavNews" to="/news">
          Health News
        </NavLink>
      </li>
      <li>
        <NavLink className="NavbarItems" to="/plans">
          Plans & Pricing
        </NavLink>
      </li>
      <li>
        <NavLink className="NavbarItems" to="/contact">
          Contact us
        </NavLink>
      </li>
      <p>|</p>
      <li>
        <NavLink className="NavbarItems" to="/login">
          Sign in
        </NavLink>
      </li>
      <li>
        <NavLink className="NavbarItems NavbarItemsLast" to="/plans">
          <button className="NavbarButton">Sign Up</button>
        </NavLink>
      </li>
    </nav>
  );
};

export default Navigation;
