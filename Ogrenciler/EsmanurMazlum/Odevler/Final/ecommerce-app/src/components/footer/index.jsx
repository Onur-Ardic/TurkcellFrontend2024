import React from "react";
import message from "../../../public/icons/message.svg";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="container mt-5 position-relative">
        <div className="newsletter w-100">
          <div className="row">
            <div className="col-lg-7 col-sm-12">
              <h3 className="text-white">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h3>
            </div>
            <div className="col-5">
              <div className="input-wrapper position-relative">
                <Image
                  src={message}
                  alt="message"
                  className="img-fluid position-absolute message"
                />
                <input
                  type="mail"
                  placeholder="Enter your mail address"
                  className="input px-5 w-100"
                />
              </div>
              <button className="input w-100 mt-3">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary footer-section">
        <div className="container">
          <div className="row">
            <div className="col-3 shopco">
              <h3>SHOP.CO</h3>
              <p className="f-lighter">
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="row w-75 mt-5">
                <div className="col-3">
                  <img src="/icons/twitter.svg" />
                </div>
                <div className="col-3">
                  <img src="/icons/facebook.svg" />
                </div>
                <div className="col-3">
                  <img src="/icons/instagram.svg" />
                </div>
                <div className="col-3">
                  <img src="/icons/github.svg" />
                </div>
              </div>
            </div>
            <div className="col-9 row d-flex justify-content-between align-items-center">
              <div className="col-lg-3 col-sm-6">
                <p className="fw-medium">COMPANY</p>
                <div className="links">
                  <a className="f-lighter">About</a>
                  <a className="f-lighter">Features</a>
                  <a className="f-lighter">Works</a>
                  <a className="f-lighter">Career</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6">
                <p className="fw-medium">HELP</p>
                <div className="links">
                  <a className="f-lighter">Customer Support</a>
                  <a className="f-lighter">Delivery Details</a>
                  <a className="f-lighter">Terms & Conditions</a>
                  <a className="f-lighter">Privacy Policy</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4  col-sm-6">
                <p className="fw-medium">FAQ</p>
                <div className="links">
                  <a className="f-lighter">Account</a>
                  <a className="f-lighter">Manage Deliveries</a>
                  <a className="f-lighter">Orders</a>
                  <a className="f-lighter">Payments</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <p className="fw-medium">RESOURCES</p>
                <div className="links">
                  <a className="f-lighter">Free eBooks</a>
                  <a className="f-lighter">Development Tutorial</a>
                  <a className="f-lighter">How to - Blog</a>
                  <a className="f-lighter">Youtube Playlist</a>
                </div>
              </div>
            </div>
          </div>
          <img src="/icons/line.svg" className="img-fluid"/>
          <div className="d-flex justify-content-between align-items-center">
            <p className="f-lighter">Shop.co © 2000-2023, All Rights Reserved</p>
            <div className="d-flex flex-wrap">
              <img src="/icons/visa.svg" alt="visa" />
              <img src="/icons/mastercard.svg" alt="mastercard" />
              <img src="/icons/paypal.svg" alt="paypal" />
              <img src="/icons/applepay.svg" alt="applepay" />
              <img src="/icons/googlepay.svg" alt="googlepay" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
