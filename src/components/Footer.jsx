import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Navata Surgicare</h5>
                            <p>.</p>
                        </div>
                        <div className="col-md-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/products">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h5>Features Product</h5>
                            <ul className="list-unstyled ">
                                <li>Services</li>
                                <li>Privacy Policy</li>
                                <li>Help</li>
                                <li>Orders</li>
                                <li>Pricing</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Contact Us</h5>
                            <address>
                                <strong>Navata Surgicare</strong>
                                <br />
                                Bhaktpur, Kathmandu
                                <br />
                                Nepal
                                <br />
                                <abbr title="Phone">P:</abbr>(+977) 9704501220
                            </address>
                        </div>
                    </div>
                    <div className="row">
                        <hr />
                        <div className="col-md-6 text-center">
                            <p>© 2024 Navata Surgicare. All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <ul className="d-flex list-unstyled justify-content-center  align-items-center gap-4 fs-5 ">
                                <li>
                                    <i class="bi bi-facebook"></i>
                                </li>
                                <li>
                                    {" "}
                                    <i class="bi bi-whatsapp"></i>
                                </li>
                                <li>
                                    {" "}
                                    <i class="bi bi-instagram"></i>
                                </li>
                                <li>
                                    <i class="bi bi-youtube"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
