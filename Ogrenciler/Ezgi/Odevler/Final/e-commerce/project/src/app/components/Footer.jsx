import { MdOutlineEmail } from "react-icons/md";
import { FaTwitter, FaInstagram, FaGithub, FaCcPaypal, FaGooglePay   } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa6";
import { SiVisa, SiMastercard  } from "react-icons/si";
import { CgFacebook } from "react-icons/cg";
import { FormArea, EmailInput, EmailButton, FooterItemsArea, FooterItems } from "./styles/styled";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FormArea className="d-flex rounded-5 align-items-center justify-content-between ps-5 pe-5">
                    <h1 className="text-white fw-bold">STAY UPTO DATE ABOUT<br /> OUR LATEST OFFERS</h1>
                    <form className="d-flex flex-column gap-3">
                        <EmailInput className="d-flex gap-2 bg-white align-items-center rounded-4 ps-4 pe-4">
                            <MdOutlineEmail className="text-body-secondary" size={30} />
                            <input className="border-0" type="text" placeholder="Enter your email address..." />
                        </EmailInput>
                        <EmailButton className="rounded-4 fw-semibold">Subscribe to Newsletter</EmailButton>
                    </form>
                </FormArea>
            </div>
            <FooterItemsArea className="bg-body-secondary">
                <FooterItems className="d-flex justify-content-between ps-5 pe-5 container mb-5">
                    <div className="d-flex flex-column gap-3">
                        <h1 className="fw-bold">SHOP.CO</h1>
                        <p className="text-body-secondary">We have clothes that suits your style and <br /> which you’re proud to wear. From women to men.</p>
                        <div className="d-flex gap-4">
                            <div><FaTwitter size={24} /></div>
                            <div><CgFacebook size={24}/></div>
                            <div><FaInstagram size={24}/></div>
                            <div><FaGithub size={24}/></div>
                        </div>
                    </div>
                    <div className="d-flex gap-5">
                        <div className="d-flex gap-5">
                            <div className="d-flex flex-column gap-3">
                                <h4>COMPANY</h4>
                                <ul className="ps-0 d-flex flex-column gap-3">
                                    <li><a className="text-body-secondary" href="/">About</a></li>
                                    <li><a className="text-body-secondary" href="/">Features</a></li>
                                    <li><a className="text-body-secondary" href="/">Works</a></li>
                                    <li><a className="text-body-secondary" href="/">Career</a></li>
                                </ul>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                <h4>HELP</h4>
                                <ul className="ps-0 d-flex flex-column gap-3">
                                    <li><a className="text-body-secondary" href="/">Customer Support</a></li>
                                    <li><a className="text-body-secondary" href="/">Delivery Details</a></li>
                                    <li><a className="text-body-secondary" href="/">Terms & Conditions</a></li>
                                    <li><a className="text-body-secondary" href="/">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex gap-5">
                            <div className="d-flex flex-column gap-3">
                                <h4>FAQ</h4>
                                <ul className="ps-0 d-flex flex-column gap-3">
                                    <li><a className="text-body-secondary" href="/">Account</a></li>
                                    <li><a className="text-body-secondary" href="/">Manage Deliveries</a></li>
                                    <li><a className="text-body-secondary" href="/">Orders</a></li>
                                    <li><a className="text-body-secondary" href="/">Payments</a></li>
                                </ul>
                            </div>
                            <div className="d-flex flex-column gap-3">
                                <h4>RESOURCES</h4>
                                <ul className="ps-0 d-flex flex-column gap-3">
                                    <li><a className="text-body-secondary" href="/">Free eBooks</a></li>
                                    <li><a className="text-body-secondary" href="/">Development Tutorial</a></li>
                                    <li><a className="text-body-secondary" href="/">How to - Blog</a></li>
                                    <li><a className="text-body-secondary" href="/">Youtube Playlist</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </FooterItems>
                <div className="container">
                    <hr className="w-100 text-body-secondary" />
                    <div className="d-flex justify-content-between">
                        <p className="text-body-secondary">Shop.co © 2020-2023. All rights reserved.</p>
                        <div className="d-flex gap-5">
                            <div><SiVisa size={40}/></div>
                            <div><SiMastercard size={40}/></div>
                            <div><FaCcPaypal size={40}/></div>
                            <div><FaApplePay size={40}/></div>
                            <div><FaGooglePay size={40}/></div>
                        </div>
                    </div>
                </div>
            </FooterItemsArea>

        </footer>
    )
}

export default Footer;
