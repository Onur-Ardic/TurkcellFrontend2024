import i18next from "../../../i18n";
import { getProduct } from '@/api';
import '../../productdetail/productDetail.sass';
import AdviceBanner from '@/components/AdviceBanner/AdviceBanner'
import Reviews from "@/components/Reviews/Reviews";
import { ReviewsForm } from "@/app/ReviewsForm/ReviewsForm";

const page = async ({ params }) => {
  const data = await getProduct(params)
  const selectedProductId = data.id;

  return (
    <section className="productDtl">
      <section>
        <div className="container-xxl">
          <div className="d-flex productDetail">
            {data ? (
              <div className="row productPic">
                <div className="col-lg-6 col-10 d-flex gap-2">
                  <div className="col-lg-3 row">
                    <div className="imgContainerPrd">
                     <img src={data.image} alt="" className="w-100" />
                    </div>
                    <div className="imgContainerPrd">
                <img src={data.image} alt="" className="w-100" />
                    </div>
                    <div className="imgContainerPrd">
                    <img src={data.image} alt="" className="w-100" />
                    </div>
                  </div>
                  <div className="col-lg-8 col-10 biggerImg">
                   <img src={data.image} alt="" className="w-100" />
                  </div>
                </div>
                <div className="col-lg-6 col-10">
                  <div className="ps-md-4 ps-xl-5">
                    <a className="d-none d-md-flex align-items-center gap-2 text-decoration-none mb-3" href="#reviews">
                      <div className="d-flex gap-1 fs-sm">
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star-filled text-warning"></i>
                        <i className="ci-star text-body-tertiary opacity-75"></i>
                      </div>
                    </a>
                    <h1 className="h3">{data.name}</h1>
                    <div className="text-warning">
                      <small>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </small>
                      <span className="ratingShw small">{data.rating}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="price">${data.price}</span>
                      <span className="discountPrice">$24</span>
                      <span className="badge rounded-pill">-45%</span>
                    </div>
                    <p className="fs-sm mb-0">{data.description}</p>
               
                    <ul >
                      <li>colors</li>
                    </ul>
           
                    <div className="mb-3">
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <label className="form-label fw-semibold mb-0">{i18next.t('size')}</label>
                      </div>
                    </div>
                    <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
                      <div className="count-input flex-shrink-0">
                        <button typeof="button" className="btn btn-icon btn-lg" data-decrement="" aria-label="Decrement quantity" disabled="">
                          <i className="ci-minus"></i>
                        </button>
                        <input typeof="number" className="form-control form-control-lg" min="1" value="1" readonly="" />
                        <button typeof="button" className="btn btn-icon btn-lg" data-increment="" aria-label="Increment quantity">
                          <i className="ci-plus"></i>
                        </button>
                      </div>
                      <button typeof="button" className="btn btn-dark w-100">{i18next.t('addtocart')}</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              !error && <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
      <section>
        <Reviews productId={selectedProductId}></Reviews>
        <ReviewsForm productId={selectedProductId}></ReviewsForm>
      </section>
      <section>
        <AdviceBanner></AdviceBanner>
      </section>
    </section>
  )
}

export default page