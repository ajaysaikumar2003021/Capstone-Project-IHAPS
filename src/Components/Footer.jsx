import React from "react";
import {
  AiFillMail,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container-fluid footer-ihaps">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <ul className="list-group list-group-flush social-links">
              <li className="list-group-item">
                <AiFillMail />
                &nbsp; &nbsp;E-mail
              </li>
              <li className="list-group-item">
                <AiFillLinkedin /> &nbsp; &nbsp;LinkedIn
              </li>
              <li className="list-group-item">
                <AiOutlineTwitter /> &nbsp; &nbsp;Twitter
              </li>
              <li className="list-group-item">
                <AiFillFacebook /> &nbsp; &nbsp;Facebook
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <img
              src="/assets/images/IHAPS-LOGO.png"
              alt="logo"
              className="w-50 mx-auto d-block"
            />
          </div>
          <div className="col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <h5 className="fw-bold contact-head">Contact Us</h5>
            <p className="fw-bold">University of Houston Clear Lake</p>
            <p className="fw-bold">
              Institute for Human and Planetary Sustainability
            </p>
            <p className="fw-bold">Phone: 281-283-2055</p>
            <p className="fw-bold">Email: ihaps@uhcl.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
