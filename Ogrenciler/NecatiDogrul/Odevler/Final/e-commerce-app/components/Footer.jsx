import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-newsletter">
        <h2>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div>
          <h4>HELP</h4>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h4>FAQ</h4>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>Shop.co © 2000-2023, All Rights Reserved</div>
        <div className="social-icons">
          <Image
            src="/images/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
          />
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
          />
          <Image
            src="/images/twitter.svg"
            alt="Twitter"
            width={24}
            height={24}
          />
          <Image
            src="/images/pinterest.svg"
            alt="Pinterest"
            width={24}
            height={24}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
