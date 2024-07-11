// import Image from "next/image";
import i18next from "../../../i18n";
// import pic from '../../../public/darkgreentshirt.png';
import { getProduct } from '@/api';
import '../../productdetail/productDetail.sass';
import AdviceBanner from '@/components/AdviceBanner/AdviceBanner'
import BreadCrumbs from '@/components/Breadcrumbs/BreadCrumbs';
import Reviews from "@/components/Reviews/Reviews";
import { ReviewsForm } from "@/app/ReviewsForm/ReviewsForm";



const page  = async({params}) => {
    const data = await getProduct(params)
    const selectedProductId = data.id;
    
  return (
    <div>
      <section>
        <div className="container-xxl">
          <BreadCrumbs></BreadCrumbs>
          <div className="d-flex productDetail">
          {data ? (
            <div className="row productPic">
              <div className="col-lg-6 col-10 d-flex gap-2">
                <div className="col-lg-3 row">
                   <div className="imgContainerPrd">
                        <a href="#">
                          <img src={data.image} alt="" className="w-100"/></a>
                    </div>
                    <div className="imgContainerPrd">
                        <a href="#"><img src={data.image} alt="" className="w-100"/></a>
                    </div>
                    <div className="imgContainerPrd">
                        <a href="#"><img src={data.image} alt="" className="w-100"/></a>
                    </div>
                </div>
                <div className="col-lg-8">
                <div className="">
                                <a href="#"><img src={data.image}alt="" className="w-100"/></a>
                        </div>
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
                    <span className="text-muted small">4.5</span>
                  </div>
                  <div className="d-flex align-items-center">
                      <span className="price">${data.price}</span>
                      <span className="discountPrice">$24</span>
                      <span className="badge rounded-pill">-45%</span>
                    </div>
                    <p className="fs-sm mb-0">{data.description}</p>

                    <ul class="list-inline mb-0 colours-wrapper">
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_sidebar_Blue" data-allow-multiple=""> </label>
                    <input class="input-invisible" type="checkbox" name="colour" value="value_sidebar_Blue" id="colour_sidebar_Blue"/>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_sidebar_White"  data-allow-multiple=""> </label>
                    <input class="input-invisible" type="checkbox" name="colour" value="value_sidebar_White" id="colour_sidebar_White"/>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_sidebar_Violet"  data-allow-multiple=""> </label>
                    <input class="input-invisible" type="checkbox" name="colour" value="value_sidebar_Violet" id="colour_sidebar_Violet"/>
                  </li>
                  <li class="list-inline-item">
                    <label class="btn-colour" for="colour_sidebar_Red" data-allow-multiple=""> 
                    </label>
                    <input class="input-invisible" type="checkbox" name="colour" value="value_sidebar_Red" id="colour_sidebar_Red"/>
                  </li>
                </ul>
                  <div className="mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <label className="form-label fw-semibold mb-0">{i18next.t('size')}</label>
                      <div className="nav">
                        <a className="nav-link animate-underline fw-normal px-0" href="#sizeGuide" data-bs-toggle="modal">
                          <i className="ci-ruler fs-lg me-2"></i>
                          <span className="animate-target">{i18next.t('sizeguide')}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 pb-3 pb-lg-4 mb-3">
                    <div className="count-input flex-shrink-0">
                      <button type="button" className="btn btn-icon btn-lg" data-decrement="" aria-label="Decrement quantity" disabled="">
                        <i className="ci-minus"></i>
                      </button>
                      <input type="number" className="form-control form-control-lg" min="1" value="1" readonly="" />
                      <button type="button" className="btn btn-icon btn-lg" data-increment="" aria-label="Increment quantity">
                        <i className="ci-plus"></i>
                      </button>
                    </div>

                    <button type="button" className="btn btn-dark w-100">{i18next.t('addtocart')}</button>
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
    </div>
  )
}

export default page