import React from "react";

const Banner = () => {
  return (
    <div className="banner container mx-auto">
      <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center">
        <div className="col-lg-6 mb-3 mb-lg-0 border-end  border-2  ">
          <h1 className="text-capitalize"> The only made in india 4k laparoscopic system</h1>
          <p className="mb-3">
          It's time to change  your old laproscopic system into new gen 4k system
          </p>
          <div className="d-flex  flex-lg-row gap-2">
            <button className="btn btn1 rounded-pill text-light px-4  py-2">
              Shop Now
            </button>
            <button className="btn btn2 rounded-pill text-light  px-4 py-2">
              Get More
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="bannerimg d-flex justify-content-center ">
            <img
              src="/homeimg.png"
              alt="Surgicare Equipment"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
