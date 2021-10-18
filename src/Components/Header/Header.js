import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Welcome from "../Welcome/Welcome";
import WhyChoose from "../WhyChoose/WhyChoose";

const Header = () => {
  return (
    <div>
      <Hero></Hero>
      <Welcome></Welcome>
      <WhyChoose></WhyChoose>
      <Services></Services>
    </div>
  );
};

export default Header;
