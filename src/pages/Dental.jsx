import React from "react";

const Dental = () => {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-6">
            <div className="d-flex justify-content-start align-items-start flex-column ">
              <h2 className="fs-1 text-success pb-2">
                Best Dental Setup Dealer In Nepal
              </h2>
              <p>
                At Navata Surgicare, we pride ourselves on being the premier
                provider of dental setup solutions in Nepal. With a commitment
                to excellence and a passion for innovation, we strive to offer
                top-notch equipment and services tailored to meet the unique
                needs of dental professionals across the country. Whether you're
                establishing a new practice or upgrading your current setup,
                trust Navata Surgicare to deliver cutting-edge solutions that
                elevate your dental experience. Our team of experts is dedicated
                to providing unparalleled support every step of the way,
                ensuring your success and satisfaction. Discover why we're the
                trusted choice for dental professionals nationwide.
              </p>
              <div className="d-flex gap-5 py-4 justify-content-lg-start   align-items-center">
                <button className="btn btn1 rounded-pill text-white">
                  Get Details
                </button>
                <button className="btn btn2 rounded-pill text-white">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 justify-content-end   d-flex">
            <div style={{ width: "500px", height: "450px" }}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.21 PM (1).jpeg"
                alt="Sample Dental Setup"
                className="img-fluid"
                style={{ width: "100%", height: "100%", borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <h2 className="text-center pt-2 pb-4 text-capitalize text-success  ">Related Products</h2>
        <div className="row d-flex flex-row  justify-content-between      align-items-center gap-4 py-2 pb-5 ">
          <div className="col-lg-2   col-md-4  col-sm-6  d-flex justify-content-center">
          <div style={{ width: "200px", height: "180px" }}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.19 PM.jpeg"
                alt="Sample Dental Setup"
                className="img-fluid"
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4  col-sm-6 d-flex justify-content-center">
          <div style={{ width: "200px", height:"180px"}}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.20 PM (1).jpeg"
                alt="Sample Dental Setup"
                className="img-fluid"
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4  col-sm-6 d-flex justify-content-center">
          <div style={{ width: "200px", height:"180px"}}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.20 PM.jpeg"
                alt="Sample Dental Setup"
                className="img-fluid"
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4  col-sm-6 d-flex justify-content-center ">
          <div style={{ width: "200px", height:"180px"}}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.21 PM.jpeg"
                alt="Sample Dental Setup"
                className="img-fluid "
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
          <div className="col-lg-2 col-md-4   col-sm-6 d-flex justify-content-center ">
          <div style={{ width: "200px", height:"180px"}}>
              <img
                src="/WhatsApp Image 2024-02-13 at 1.10.22 PM.jpeg"
                alt="Sample Dental Setup"
                className="img-fluid"
                style={{ width: "100%", height: "100%", borderRadius: "5px" }}
              />
            </div>
          </div>
        
         
        </div>
      </div>
    </>
  );
};

export default Dental;
