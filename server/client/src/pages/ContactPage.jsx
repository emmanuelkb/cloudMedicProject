import React from "react";
import "../styles/ContactPage.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";

const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <div className="contactInfo">
        <h1>Contact Information</h1>
        <p>Email: kaabutu@gmail.com</p>
        <p>Phone: +233249979880</p>
        <p>Github: github.com/emmanuelkb</p>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactPage;
