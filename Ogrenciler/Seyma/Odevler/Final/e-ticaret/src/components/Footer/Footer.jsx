import './footer.sass'
import i18next from '../../i18n';
import visa from "../../../public/visa.svg";
import mastercard from "../../../public/mastercard.svg";
import applepay from "../../../public/applepay.svg";
import paypal from "../../../public/paypal.svg";
import googlepay from "../../../public/googlepay.svg";
import instagram from "../../../public/instagram.svg";
import github from "../../../public/github.svg";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import email from "../../../public/email.svg";
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="bd-footer footerArea py-4 py-md-5">
            <div className="container-xxl footerContain">
                <div className='subscribeArea d-flex flex-wrap p-4 justify-content-around'>
                    <div className='col-lg-6 titleArea'>
                        <h2 className='footerTitle'>{i18next.t('newsletterTitle')}</h2>
                    </div>
                    <div className='col-lg-4 row rightArea'>
                        <form className='subEmail text-left d-flex align-items-center' action="">
                            <Image src={email}></Image> <input className='emailInput' placeholder={i18next.t('subscribePlaceholder')}></input></form>
                       <button typeof='button' className='subscribeBtn btn'>{i18next.t('subscribeButton')}</button>
                    </div>*
                </div>
                <div className="row gridArea gap-2">
                    <div className="col-6 col-lg-3 mb-3">
                        <a className="d-inline-flex align-items-center mb-3 text-body-emphasis text-decoration-none" href="/" aria-label="SHOP.CO">
                            <h2 className="footerBrand">{i18next.t('shopCo')}</h2>
                        </a>
                        <p className="mb-5 footerDescription">{i18next.t('description')}</p>
                        <div className='d-flex gap-2'>
                            <Image src={twitter} alt={""} />
                            <Image src={facebook} alt={""} />
                            <Image src={instagram} alt={""} />
                            <Image src={github} alt={""} />
                        </div>
                    </div>
                    <div className="col-4 col-lg-2 mb-3">
                        <h5 className="titleofFooter">{i18next.t('companyLinks')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('about')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('features')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('works')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('career')}</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-lg-2 mb-3">
                        <h5 className="titleofFooter">{i18next.t('helpLinks')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('customerSupport')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('deliveryDetails')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('termsConditions')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('privacyPolicy')}</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-lg-2 mb-3">
                        <h5 className="titleofFooter">{i18next.t('faqLinks')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('account')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('manageDeliveries')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('orders')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('payments')}</a></li>
                        </ul>
                    </div>
                    <div className="col-4 col-lg-2 mb-3">
                        <h5 className="titleofFooter">{i18next.t('resourcesLinks')}</h5>
                        <ul className="list-unstyled ">
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('freeEbooks')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('developmentTutorial')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('howToBlog')}</a></li>
                            <li className="mb-2 liStyleFooter"><a href="#">{i18next.t('youtubePlaylist')}</a></li>
                        </ul>
                    </div>
                </div>
                <div className='d-flex pt-3 justify-content-between'>
                    <div><p>{i18next.t('copyright')}</p></div>
                    <div >
                        <Image src={visa} alt={""} />
                        <Image src={mastercard} alt={""} />
                        <Image src={paypal} alt={""} />
                        <Image src={applepay} alt={""} />
                        <Image src={googlepay} alt={""} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer