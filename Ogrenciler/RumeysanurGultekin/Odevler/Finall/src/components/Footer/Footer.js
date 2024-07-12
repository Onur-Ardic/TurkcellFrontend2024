import React from "react";
import "../../app/globals.css";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { FaCcApplePay, FaGooglePay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blackboard">
        <div className="footerheader d-flex">
          <h1 className="footerhead">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          <div className="d-flex align-items-center">
            <form className="d-flex flex-column">
              <input
                className="mb-2 px-5"
                placeholder="Enter your email address"
              />
              <button className="btn bg-white px-5">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="footerbody">
        <div className="border-bottom d-flex gap-5">
          <div>
            <h1 className="brand-font">SHOP.CO</h1>
            <p className="footerdesc">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="d-flex gap-5">
            <div>
              <h2 className="head">COMPANY</h2>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h2 className="head">HELP</h2>
              <ul>
                <li>Customer Support</li>
                <li>Delivary Details</li>
                <li>Terms&Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="head">FAQ</h2>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div>
              <h2 className="head">RESOURCES</h2>
              <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-content-between d-flex">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="payment-icons">
            <FaCcVisa className="icon" />
            <FaCcMastercard className="icon" />
            <FaCcPaypal className="icon" />
            <FaCcApplePay className="icon" />
            <FaGooglePay className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
