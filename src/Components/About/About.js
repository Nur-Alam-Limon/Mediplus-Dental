import React from "react";
import about from "../../img/about-us.jpg";
import about1 from "../../img/about-01.jpg";
import WhyChoose from "../WhyChoose/WhyChoose";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="text-center fw-bold text-primary py-5">About Us</h1>
      <img className="w-75 pb-5" src={about} alt="" />

      <div className="d-lg-flex justify-content-center align-items-center mx-5 my-5">
        <div>
          <img width="100%" src={about1} alt="" />
        </div>
        <div className="px-lg-5 text-start w-75 mt-3">
          <h1 className="text-primary fs-4 pb-3">
            Our dental clinic has been founded in 2010. The founder is an
            honorable alumni of Dhaka medical school - Nur Alam, MD.
          </h1>
          <p>
            After 8 previous years of practicing, he and his colleagues
            collaborated to found their own clinic. Coming from backgrounds of
            miscellaneous dental institutions of the US, they complement each
            other. Their common clinic became known as BeDentist!
            <br />
            <br />
            The state of Pennsylvania highly appreciates our contribution to
            state's dental healthcare. Just as our local patients in the upstate
            Potter county of Pennsylvania.
            <br /> <br /> We combine extensive record of practical experience
            with an equal focus on customer service approach. In the last 6
            years, our dental clinic grew a list of returning clients!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
