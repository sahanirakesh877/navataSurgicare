import React from "react";

const DeviceDetails = ({
  title,
  image,
  paragraph,
  subtitle,
  backgroundColor,
}) => {
  return (
    <>
      <div className="colors " style={{ backgroundColor: backgroundColor }}>
        <div className="container details px-4 ">
          <div className="row ">
            <div className="col-lg-6">
              <div className="d-flex flex-column align-items-lg-between justify-items-lg-start">
                <h2 className="text-white pb-4">{title}</h2>
                <h4 className="pb-3">{subtitle}</h4>
                <p className="text-sm-start  pb-2 ptext">{paragraph}</p>
                <div className="d-flex justify-content-start gap-5  pb-4   align-items-center">
                  <button className="btn btn1 rounded-pill text-white">
                    Get Details
                  </button>
                  <button className="btn btn2  rounded-pill text-white">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 pt-4 d-flex justify-content-center align-items-center">
              <img
                src={image}
                alt=""
                style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }} // Adjust width and height as per your requirement
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeviceDetails;
