import React from "react";
import { FooterContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcPaypal,
  faCcApplePay,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer mt-5">
        <div className="footerTop rounded-5 position-relative  d-flex justify-content-between align-items-center bg-black text-white p-5  ">
          <div className="topLeft">
            <h1>
              STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
            </h1>
          </div>
          <div className="topRight d-flex flex-column flex-md-row ">
            <input
              className="rounded-pill me-2 p-2 mb-2 mb-md-0"
              placeholder="Enter your email address"
            />
            <button className="rounded-pill p-2">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <footer className="footerLower  p-5 d-flex flex-column ">
          <div className="container">
            <div className="row text-dark py-5 mt-5">
              <div className="col-md-3 mb-3">
                <h3>SHOP.CO</h3>
                <p>
                  We have clothes that suit your style and which you’re proud to
                  wear. From women to men.
                </p>
              </div>
              <div className="col-md-2 mb-3">
                <h5>COMPANY</h5>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
              <div className="col-md-2 mb-3">
                <h5>HELP</h5>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <div className="col-md-2 mb-3">
                <h5>FAQ</h5>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
              <div className="col-md-2 mb-3">
                <h5>RESOURCES</h5>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How To - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
              <p className="mb-2 mb-md-0">
                Shop.co © 2000-2023. All Rights Reserved.
              </p>
              <div className="paymentMethods fs-3 d-flex gap-2">
                <FontAwesomeIcon icon={faCcVisa} />
                <FontAwesomeIcon icon={faCcMastercard} />
                <FontAwesomeIcon icon={faCcPaypal} />
                <FontAwesomeIcon icon={faCcApplePay} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FooterContainer>
  );
};

export default Footer;
