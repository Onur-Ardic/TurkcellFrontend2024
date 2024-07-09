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
import Image from 'next/image';


const Footer = () => {
    return (

        <footer className="bd-footer footerArea py-4 py-md-5">

            <div className="container-xxl footerContain">
                <div className='subscribeArea row p-4'>
                    <div className='col-lg-7 p-4'>
                        <h2 className='footerTitle'>{i18next.t('newsletterTitle')}</h2>
                    </div>
                    <div className='col-lg-5'>

                    </div>
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
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>{i18next.t('companyLinks')}</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/">{i18next.t('about')}</a></li>
                            <li className="mb-2"><a href="/">{i18next.t('features')}</a></li>
                            <li className="mb-2"><a href="/">{i18next.t('works')}</a></li>
                            <li className="mb-2"><a href="https://icons.getbootstrap.com/">{i18next.t('career')}</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Guides</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/docs/5.3/getting-started/">Getting started</a></li>
                            <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Starter template</a></li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Webpack</a></li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Parcel</a></li>
                            <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Vite</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Projects</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
                            <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
                            <li className="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
                            <li className="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
                            <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
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