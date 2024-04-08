import React from "react";

import aboutImg from "/aboutImage.png";

import { BiCheckboxChecked } from "react-icons/bi";

const About = () => {
  return (
    <div className="container pb-5">
      <h2 className="fs-1 text-success pb-2 text-center mt-4 fw-semibold ">
        About Us
      </h2>
      {/* <div id="aboutContainer">
        <div>
          <h5 className="text-success fw-semibold ">Why Choose Us?</h5>
          <img src={aboutImg} alt="AboutUS" id="aboutImg" />
        </div>
        <div id="aboutText">
          <div>
            <li>
              <BiCheckboxChecked size={30} color="green" />
              All in one Hospital Services
            </li>
            <li>
              <BiCheckboxChecked size={30} color="green" />
              Superior Quality & Competitive Pricing
            </li>
          </div>
          <div>
            <li>
              <BiCheckboxChecked size={30} color="green" />
              Wide Range of Products
            </li>
            <li>
              <BiCheckboxChecked size={30} color="green" />
              Delivery All Over Nepal
            </li>
            <li>
              <BiCheckboxChecked size={30} color="green" />
              Paid / Warrenty Services
            </li>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <h5 className="text-success fw-semibold py-4">Why Choose Us?</h5>
        </div>
        <div className="row d-flex justify-content-between  align-items-center  gap-3 ">
          <div className="col-lg-6">
            <img src={aboutImg} alt="AboutUS" id="aboutImg" />
          </div>
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              obcaecati quisquam minus officia dolorem nemo neque? Suscipit,
              doloremque ipsa? Aliquid cupiditate qui numquam quia et dolore at
              repellendus cumque,
            </p>
            <ul className="list-unstyled">
              <li>
                <BiCheckboxChecked size={30} color="green" />
                All in one Hospital Services
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Superior Quality & Competitive Pricing
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Wide Range of Products
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Delivery All Over Nepal
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Paid / Warrenty Services
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Superior Quality & Competitive Pricing
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Wide Range of Products
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Delivery All Over Nepal
              </li>
              <li>
                <BiCheckboxChecked size={30} color="green" />
                Paid / Warrenty Services
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
