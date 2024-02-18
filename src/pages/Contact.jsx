import React from "react";

const Contact = () => {
    return (
        <>
            <div
                id="contact"
                className="contact-area section-padding  py-5  mt-0"
            >
                <div className="container">
                    <div className="section-title text-center">
                        <h1>Get in Touch</h1>
                        <p>
                            Explore our advanced medical equipment for superior
                            patient care. Contact us for details.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact">
                                <form
                                    className="form"
                                    name="enq"
                                    method="post"
                                    onsubmit="return validation();"
                                >
                                    <div className="row">
                                        <div className="form-group col-md-6 pb-3">
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                placeholder="Name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group col-md-6 pb-3">
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 pb-3">
                                            <input
                                                type="text"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Subject"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group col-md-12 pb-3">
                                            <textarea
                                                rows={6}
                                                name="message"
                                                className="form-control"
                                                placeholder="Your Message"
                                                required="required"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-md-12 text-center">
                                            <button
                                                type="submit"
                                                value="Send message"
                                                name="submit"
                                                id="submitButton"
                                                className="btn btn-contact-bg"
                                                title="Submit Your Message!"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*- END COL */}
                        <div className="col-lg-5">
                            <div className="single_address">
                                <i className="fa fa-map-marker" />
                                <h4>Our Address</h4>
                                <p>Naya Thimi, Bhaktapur</p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-envelope" />
                                <h4>Send your message</h4>
                                <p>teamnavatagroup@gmail.com</p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-phone" />
                                <h4>Call us on</h4>
                                <p>
                                    (+977) 9704501230 <br />{" "}
                                    <p>(+977) 9704501220</p>
                                </p>
                            </div>
                            <div className="single_address">
                                <i className="fa fa-clock-o" />
                                <h4>Work Time</h4>
                                <p>
                                    Mon - Fri: 08.00 - 16.00. <br />
                                    Sat: 10.00 - 14.00
                                </p>
                            </div>
                        </div>
                        {/*- END COL */}
                    </div>
                    {/*- END ROW */}
                </div>
                {/*- END CONTAINER */}
            </div>
        </>
    );
};

export default Contact;
