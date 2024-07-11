import './main.sass';
import Image from 'next/image';
import i18next from '../i18n';
import pic from "../../public/pic.svg";
import stars from "../../public/stars.svg";
import zara from "../../public/zara.svg";
import calvin from "../../public/calvin.svg";
import prada from "../../public/prada.svg";
import gucci from "../../public/gucci.svg";
import littlestar from "../../public/littlestar.svg";
import NewArrivals from "@/components/NewArrivals/NewArrivals.jsx"
import TopSellings from '@/components/TopSellings/TopSellings';
import Banner from '@/components/Banner/Banner';


export default function Home() {
  return (
    <main>
      <section className="main">
      <div className="container-xxl">
        <div className="row">
          <div className="home-banner-title col-lg-6 pt-5">
            <h1 className="home-title">
              {i18next.t('findClothes')}
            </h1>
            <p className="">{i18next.t('browse')}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a href="/categories"
                typeof="button"
                className="btn shopBtn fs-6 btn-lg px-5 py-3 me-md-2"
              >
                {i18next.t('shopnow')}
              </a>
            </div>
            <div className="d-flex gap-3">
              <div className="homeNumbers">
              <h3 className="d-block">200+</h3>
                <span className="">{i18next.t('internationalBrandas')}</span>
              </div>
              <div className="homeNumbers">
              <h3 className="">2,000+</h3>
                <span className="">{i18next.t('highqualty')}</span>
              </div>
              <div className="homeNumbers">
              <h3 className="">30,000+</h3>
                <span className="">{i18next.t('happyCustomers')}</span>
              </div>
            </div>
          </div>
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/homeimage.png"
              className="img-fluid"
              loading="lazy"
              width={700}
              height={800}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <Image className="absolute1" src={littlestar} alt={""}/>
      <Image className="absolute" src={stars} alt={""}/>
      <div className='brandbanner'>
       <div className='brandbannerContent flex-wrap container-xxl d-flex align-items-center'>
      <div className="brand-item">
        <Image src={pic} alt="Brand 1" layout="responsive" />
      </div>
      <div className="brand-item">
        <Image src={zara} alt="Brand 2" layout="responsive" />
      </div>
      <div className="brand-item">
        <Image src={gucci} alt="Brand 3" layout="responsive" />
      </div>
      <div className="brand-item">
        <Image src={prada} alt="Brand 4" layout="responsive" />
      </div>
      <div className="brand-item">
        <Image src={calvin} alt="Brand 5" layout="responsive" />
      </div>
    </div>
      </div>
      </section>
      <section className='mainCnt'>
      <NewArrivals></NewArrivals>
      <TopSellings></TopSellings>
      <Banner></Banner>
      </section>
    </main>
  );
}
