import './Banner.sass';
import Image from 'next/image';
import i18next from '../../i18n';
import manBanner from '../../../public/manBanner.png';
import girlBanner from '../../../public/girlBanner.png';
import manBanner3 from '../../../public/ManBanner3.png';
import manBanner2 from '../../../public/manBanner2.png'


const Banner = () => {
    return (
        <section>
            <div className="container-xxl p-4">
                <div className='gridPlace row'>
                    <h4 className='bannerTitle'>{i18next.t('dressStyle')}</h4>
                    <div className='gridPlaceContent d-flex justify-content-center flex-wrap'>
                        <div className='imageContainerLgt1 m-2 col-lg-4 col-10'>
                            <h5 className='imgTitle'>{i18next.t('casual')}</h5>
                            <Image className="w-100 second" src={manBanner} alt={"casual"} />
                        </div>
                        <div className='imageContainerLgt1 m-2 col-lg-7 col-10'>
                            <h5 className='imgTitle'>{i18next.t('formal')}</h5>
                            <Image className="w-100 second" src={manBanner2} alt={"formal"} />
                        </div>
                        <div className='imageContainerLgt col-lg-7 col-10 m-2 '>
                            <h5 className='imgTitle'>{i18next.t('party')}</h5>
                            <Image className="w-100" src={girlBanner} alt={"party"} />
                        </div>
                        <div className='imageContainerLgt col-10 col-lg-4 m-2'>
                            <h5 className='imgTitle'>{i18next.t('gym')}</h5>
                            <Image className="w-100" src={manBanner3} alt={"gym"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner