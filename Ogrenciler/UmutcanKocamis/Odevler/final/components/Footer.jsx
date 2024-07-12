import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
const Footer = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex flex-wrap  justify-content-between">
        <div>
          <h2 className="bold">SHOP.CO</h2>
          <p className="text-black-50">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="d-flex gap-3 fs-2">
            <AiFillTwitterCircle />
            <RiFacebookCircleFill />
            <BsInstagram />
            <SiGithub />
          </div>
        </div>
        <div className="mt-4">
            <h6 className="fw-bold subtitle">COMPANY</h6>
            <div>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
            </div>
        </div>
        <div className="mt-4">
            <h6 className="fw-bold subtitle">HELP</h6>
            <div>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="mt-4">
            <h6 className="fw-bold subtitle">FAQ</h6>
            <div>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payment</p>
            </div>
        </div>
        <div className="mt-4">
            <h6 className="fw-bold subtitle">RESOURCES</h6>
            <div>
                <p>Free eBook</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
            </div>
        </div>
      </div>
      <hr />
      <div className="d-flex text-center flex-column justify-content-center">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>
        <div>
            <img src="/icons/visa.png" alt="" width={50} />
            <img src="/icons/mastercard.png" alt="" width={50}/>
            <img src="/icons/paypal.png" alt="" width={50} />
            <img src="/icons/applepay.png" alt="" width={50} />
            <img src="/icons/googlepay.png" alt="" width={50} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
