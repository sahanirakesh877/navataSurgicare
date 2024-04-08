import React from "react";

const Endovision = () => {
  return (
    <div className="container py-2">
      <div className="row d-flex justify-content-between  align-items-center ">
        {/* Left Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h2 className="mb-4">
            Endovision System: Revolutionizing Medical Imaging
          </h2>
          <p className="mb-4">
            Endovision Systems represent a revolutionary leap forward in medical
            imaging technology. With their advanced capabilities and precision,
            they empower healthcare professionals to visualize intricate
            anatomical structures in real-time, facilitating accurate diagnosis
            and precise interventions.
          </p>
          <p className="mb-4">
            From cardiovascular procedures to neurosurgery, Endovision Systems
            offer unparalleled clarity and detail, providing clinicians with the
            insights they need to deliver exceptional patient care.
          </p>
          <p>
            Explore the possibilities with Endovision Systems and unlock new
            horizons in healthcare.
          </p>
        </div>
        {/* Right Section */}
        <div className="col-lg-6 bannerimg d-flex justify-content-center  align-align-items-center  ">
          <img
            src="https://static.wixstatic.com/media/e91413_8f7170b237304b8ab1f6ffb72f7aaa92~mv2.gif"
            alt="Endovision System"
            className="img-fluid "
          />
        </div>
      </div>
    </div>
  );
};

export default Endovision;
