import { BlackBar } from "./Footer.style";

const Footer = () => {
  return (
    <>
      <BlackBar>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <p className="text-white mb-0">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </p>
            </div>
            <div className="col-md-3 text-right">
              <input
                type="email"
                placeholder="Enter your email address"
                className="form-control"
              />
              <button className="btn btn-light mt-3 mt-md-0 ml-md-2 mt-md-3">
                Subscribe to NewsLetter
              </button>
            </div>
          </div>
        </div>
      </BlackBar>
      <footer className="footer py-5 bg-light">
        <div className="container py-5 m-0-auto">
          <div className="row py-5">
            <div className="col-md-4 px-5">
              <h3 className=" fs-1 fw-bold">SHOP.CO</h3>
              <p className="text-body">
                We have clothes that suit your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="social-icons">
                <a href="#">
                  <img
                    src="https://r.resimlink.com/Nxz8g2XM.png"
                    alt="twitter"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://r.resimlink.com/mpOob1L.png"
                    alt="facebook"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://r.resimlink.com/N4P80hzfXon.png"
                    alt="instagram"
                  />
                </a>
                <a href="#">
                  <img
                    src="https://r.resimlink.com/7ghTAaudI1jG.png"
                    alt="github"
                  />
                </a>
              </div>
            </div>

            <div className="col-md-8 d-flex py-3 py-md-0 justify-content-end ">
              <div className="row g-5">
                <div className="col-md-3 col-6">
                  <h5>Company</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <h5>Help</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Delivery Details
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Terms&Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <h5>FAQs</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Manage Deliveries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Payments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-6">
                  <h5>Resources</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Free eBooks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Development Tutorial
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        How to - Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-body text-decoration-none">
                        Youtube Playlist
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4 container m-0-auto">
            <div className=" col-md-12 text-left text-md-right d-flex justify-content-between">
              <p className="text-body px-3">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className=" justify-content-end">
                <img
                  src="https://r.resimlink.com/Lxv7rjA.png"
                  alt="payment-method"
                  className="mr-2"
                />
                <img
                  src="https://r.resimlink.com/2CSyX.png"
                  alt="payment-method"
                  className="mr-2"
                />
                <img
                  src="https://r.resimlink.com/6zH8f.png"
                  alt="payment-method"
                  className="mr-2"
                />
                <img
                  src="https://r.resimlink.com/-YcS2ANFb.png"
                  alt="payment-method"
                  className="mr-2"
                />
                <img
                  src="https://r.resimlink.com/u9c3vT.png"
                  alt="payment-method"
                  className="mr-2"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
