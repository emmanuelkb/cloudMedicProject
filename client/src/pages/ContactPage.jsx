import React from "react";
import "../styles/ContactPage.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Newsletter from "../components/Newsletter";

const ContactPage = () => {
  return (
    <div>
      <Navigation />
      <div></div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactPage;
