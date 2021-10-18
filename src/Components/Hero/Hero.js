import React from "react";
import Cover1 from "../../img/cover1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="d-block w-100" src={Cover1} alt="" />
      <div className="text">
        <h1 className="fw-bold" style={{ fontSize: "4vw" }}>
          Appointments
        </h1>
        <h4 style={{ fontSize: "1.5vw" }} className="py-lg-2">
          Booking an appointment at our dental clinic is as easy as it gets...
        </h4>
        <button
          type="button"
          className="btn btn-primary px-4 py-2 my-lg-2"
          style={{ fontSize: "1.2vw" }}
        >
          Book An Apointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
