import React from "react";
import Banner from './../components/Banner';
import Details from './../components/Details';
import Contact from "./Contact";
import Dental from "./Dental";

const Home = () => {
  return (
    <>
      <Banner/>
      <Details/>
      <Dental/>
      <Contact/>
    </>
  );
};

export default Home;
