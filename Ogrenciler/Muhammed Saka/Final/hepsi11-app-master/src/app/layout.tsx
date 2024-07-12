import './globals.css';
import '../../public/styles/bootstrap.min.css';
import '../../public/styles/bootstrap-icons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'SHOP.CO',
  description: 'Hepsi11',
  charset: 'UTF-8'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </head>
      <body>
        <div className="main-preloader">
          <div className="loader"></div>
        </div>
        <div className="container-fluid p-0">
          <div className="header-notice w-100 d-flex py-2 fs-6 position-relative">
            <div className="text-center flex-grow-1">
              Sign up and get up to 20% off.
              <a href="profile" className="text-white"> Sign up!</a>
            </div>
            <div className="px-2 text-white pointer-cursor signup-dismiss">
              <span className=""><i className="bi bi-x-lg"></i></span>
            </div>
          </div>

          <header className="container main-header py-3">
            <div className="d-flex align-items-center justify-content-between w-100">
              <a href="/" className="text-black fw-bold text-decoration-none fs-3">SHOP.CO</a>
              <div className="flex-grow-1 mx-2">
                <form action="" className="d-inline w-100">
                  <div className="d-flex rounded-pill search-form-main p-2">
                    <i className="bi bi-search fs-5 text-secondary d-inline-block"></i>
                    <input type="search" className="search-input px-2" placeholder="Search..."/>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center">
                <ul className="header-menu-list d-flex align-items-center">
                  <li className="mx-2">
                    <a className="text-decoration-none text-black main-menu-link position-relative" href="#">Brands</a>
                  </li>
                  <li className="mx-2">
                    <a className="text-decoration-none text-black main-menu-link position-relative" href="#">Discounts</a>
                  </li>
                  <li className="mx-2">
                    <a className="text-decoration-none text-black main-menu-link position-relative" href="#">New products</a>
                  </li>
                  <li className="mx-2">
                    <a className="text-decoration-none text-black main-menu-link position-relative shop-link" href="shop">Shop &nbsp;</a>
                  </li>
                  <li className="mx-2">
                    <a href="cart" className="fw-bolder text-decoration-none text-black fs-5">
                      <i className="bi bi-cart"></i>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="profile" className="fw-bolder text-decoration-none text-black fs-5">
                      <i className="bi bi-person-circle"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {children}
          <div className="newsletter px-3">
            <div className="container px-3 py-4 rounded-4">
              <div className="row">
                <div className="flex-grow-1 col-md-8 my-3">
                  <h1 className="text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                <div className="col-md-4 my-3">
                  <div className="w-100 my-2">
                    <input
                      type="email"
                      className="form-control rounded-pill px-5 py-2"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="w-100 my-100">
                    <button className="btn bg-white rounded-pill px-5 w-100 py-2">
                      Join newsletter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="py-5">
            <div className="container position-relative">
              <div className="row">
                <div className="my-2 col-12 col-md-4">
                  <a href="#" className="text-black fw-bold text-decoration-none fs-3">SHOP.CO</a>
                  <p className="text-secondary mb-3">
                    We have clothes that will give you a new style and you will be
                    proud of yourself and your purchase. From female to male.
                  </p>
                  <div className="social d-flex mt-5">
                    <a
                      href="https://sarvanss.github.io/"
                      target="_blank"
                      className="social-icon d-flex text-black bg-white rounded-circle justify-content-center align-items-center fs-5"
                    ><i className="bi bi-globe"></i></a>
                    <a
                      href="https://github.com/sarvanss"
                      target="_blank"
                      className="mx-2 social-icon d-flex text-black bg-white rounded-circle justify-content-center align-items-center fs-5"
                    ><i className="bi bi-github"></i></a>
                    <a
                      href="https://t.me/thesarvanss"
                      target="_blank"
                      className="mx-2 social-icon d-flex text-black bg-white rounded-circle justify-content-center align-items-center fs-5"
                    ><i className="bi bi-telegram"></i></a>
                    <a
                      href="https://instagram.com/thesarvanss"
                      target="_blank"
                      className="mx-2 social-icon d-flex text-black bg-white rounded-circle justify-content-center align-items-center fs-5"
                    ><i className="bi bi-instagram"></i></a>
                  </div>
                </div>
                <div className="footer-links my-2 col-6 col-md-2">
                  <h1 className="fs-3 mb-3">Company</h1>
                  <ul className="list-unstyled p-0">
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">About us</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Feature</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Jobs</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links my-2 col-6 col-md-2">
                  <h1 className="fs-3 mb-3">Help</h1>
                  <ul className="list-unstyled p-0">
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Call center</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Shipment methods</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Privacy</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Terms of use</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links my-2 col-6 col-md-2">
                  <h1 className="fs-3 mb-3">FAQ</h1>
                  <ul className="list-unstyled p-0">
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Account</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Track orders</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Orders</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Payments</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-links my-2 col-6 col-md-2">
                  <h1 className="fs-3 mb-3">Resources</h1>
                  <ul className="list-unstyled p-0">
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Blog</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Counseling</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">youtube channel</a>
                    </li>
                    <li className="my-2">
                      <a className="text-secondary text-decoration-none" href="shop">Info</a>
                    </li>
                  </ul>
                </div>

                <hr className="my-3" />
                <div className="d-flex justify-content-center text-secondary">
                  All Rights Reserverd 2024 &copy;
                </div>
              </div>
            </div>
          </footer>
        </div>
        <ToastContainer />
      </body>
      <script async src={'/js/utils/popper.min.js'}></script>
      <script async src={'/js/utils/jquery-3.7.1.min.js'}></script>
      <script async src={'/js/utils/bootstrap.min.js'}></script>
      <script async src={'/js/utils/bootstrap.bundle.min.js'}></script>
      <script async src={'/js/app.js'}></script>
      <script async type="module" src={'/js/main.js'}></script>
    </html>
  )
}
