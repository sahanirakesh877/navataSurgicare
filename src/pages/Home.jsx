import React from "react";
import Banner from "./../components/Banner";
import Products from "./../components/Products";
import Contact from "./Contact";
// import Dental from "./Dental";
import About from "./About";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <About />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
