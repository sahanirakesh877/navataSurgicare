import React from "react";

import homeImg from "/homeimg.png";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="banner container mx-auto">
            <div className="row d-flex flex-column-reverse flex-lg-row justify-content-between align-items-center">
                <div className="col-lg-6 mb-3 mb-lg-0 ">
                    <h1 className="fw-bolder head">
                        {" "}
                        The Only Make In
                        <br /> India 4K Laproscopic
                        <br /> System
                    </h1>
                    <p className="mb-3">
                        It's time to change your old laproscopic system into new
                        gen 4k system
                    </p>
                    <div className="d-flex  flex-lg-row gap-2">
                        <Link to="product">
                            <button className="btn btn1 rounded-pill text-light px-4  py-2">
                                Shop Now
                            </button>
                        </Link>
                        <Link to="product">
                            <button className="btn btn2 rounded-pill text-light  px-4 py-2">
                                Get More
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="bannerimg d-flex justify-content-center ">
                        <img
                            src={homeImg}
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
