import React from "react";
import "./components.css";
import FooterPayment from "./FooterPayment";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="newsletter">
        <div className="newsletter_left">
          <h1 className="newsletter_title">
            STAY UPTO DATE ABOUT
            <br /> OUR LATEST OFFERS
          </h1>
        </div>
        <div className="newsletter_right">
          <input
            className="newsletter_right_bg"
            type="text"
            placeholder="Enter your email address"
          />
          <button className="newsletter_right_bg">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="rectangle">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3">
              <h1 className="footer_title">Shop.co</h1>
              <p className="footer_text">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="social">
                <i className="bi bi-twitter"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-github"></i>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className="footer_subtitle">COMPANY</h1>
              <div className="footer_list">
                <p className="footer_list_item">Home</p>
                <p className="footer_list_item">Shop</p>
                <p className="footer_list_item">Blog</p>
                <p className="footer_list_item">FAQ</p>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className="footer_subtitle">HELP</h1>
              <div className="footer_list">
                <p className="footer_list_item">Customer Support</p>
                <p className="footer_list_item">Delivery Details</p>
                <p className="footer_list_item">Terms & Conditions</p>
                <p className="footer_list_item">Privacy Policy</p>
              </div>
            </div>
            <div className="col-lg-2">
              <h1 className="footer_subtitle">FAQ</h1>
              <div className="footer_list">
                <p className="footer_list_item">Account</p>
                <p className="footer_list_item">Manage Deliveries</p>
                <p className="footer_list_item">Orders</p>
                <p className="footer_list_item">Payments</p>
              </div>
            </div>
            <div className="col-lg-3">
              <h1 className="footer_subtitle">RESOURCES</h1>
              <div className="footer_list">
                <p className="footer_list_item">Free eBooks</p>
                <p className="footer_list_item">Development Tutorial</p>
                <p className="footer_list_item">How to - Blog</p>
                <p className="footer_list_item">Youtube Playlist</p>
              </div>
            </div>
          </div>
          <hr className="footer_line" />
          <div className="row d-flex justify-content-between">
            <div className="col-lg-6">
              <p className="footer_end_text">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-end">
              <FooterPayment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
