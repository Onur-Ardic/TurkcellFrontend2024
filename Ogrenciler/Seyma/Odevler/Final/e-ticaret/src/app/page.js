import './main.sass';
import Image from 'next/image';
import i18next from '../i18n';

export default function Home() {
  return (
    <main className="main">
      <div className="container col-xxl-9">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-10 col-sm-8 col-lg-6">
            <Image
              src="/ccfd8aa5825862cdb9604a4fb4930464.jpeg"
              className="img-fluid"
              loading="lazy"
              alt="Picture of the author"
              width={500}
              height={500}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div className="home-banner-title col-lg-6">
            <h1 className="display-5 fw-bold">
              {i18next.t('findClothes')}
            </h1>
            <p className="">{i18next.t('browse')}
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-secondary fs-6 btn-lg px-5 py-3 me-md-2"
              >
                {i18next.t('shopnow')}
              </button>
             
            </div>
            <div class="d-flex justify-content-center mb-10">
                <div class="px-10">
                  <span class="text-muted fw-semibold fs-7">Sale</span>
                  <span class="text-gray-800 fw-bold fs-3 d-block">$650</span>
                </div>
                <div class="px-10">
                  <span class="text-muted fw-semibold fs-7">Commission</span>
                  <span class="text-gray-800 fw-bold fs-3 d-block">$2,040</span>
                </div>
                <div class="px-10">
                  <span class="text-muted fw-semibold fs-7">Refers</span>
                  <span class="text-gray-800 fw-bold fs-3 d-block">8,926</span>
                </div>
              </div>
          </div>
        </div>
      </div>
      <svg className="absolute" width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z" fill="black" />
      </svg>
    </main>
  );
}
