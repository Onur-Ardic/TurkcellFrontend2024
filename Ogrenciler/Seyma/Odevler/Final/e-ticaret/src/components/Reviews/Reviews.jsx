import i18next from "../../i18n";


const Reviews = (reviews) => {
  return (
    <section className="container-xxl pt-5 mt-2 mt-sm-3 mt-lg-4 mt-xl-5">

    <ul className="nav nav-underline justify-content-around  flex-nowrap border-bottom" role="tablist">
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="description-tab" data-bs-toggle="tab" data-bs-target="#description-tab-pane" role="tab" aria-controls="description-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('productDetail')}
        </button>
      </li>
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews-tab-pane" role="tab" aria-controls="reviews-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('ratingRevies')}
        </button>
      </li>
      <li className="nav-item me-md-1" role="presentation">
        <button type="button" className="nav-link" id="delivery-tab" data-bs-toggle="tab" data-bs-target="#delivery-tab-pane" role="tab" aria-controls="delivery-tab-pane" aria-selected="false" tabindex="-1">
        {i18next.t('faqs')}
        </button>
      </li>
    </ul>
    
    <div className="tab-content pt-4 mt-sm-1 mt-md-3">
    
      {/* <div className="tab-pane fade" id="description-tab-pane" role="tabpanel" aria-labelledby="description-tab">
        <div className="row">
          <div className="col-lg-6 fs-sm">
            <ul className="list-unstyled">
              <li>Model's height: <span className="text-dark-emphasis fw-semibold">176 cm</span></li>
              <li>The model is wearing size: <span className="text-dark-emphasis fw-semibold">S/36</span></li>
            </ul>
            <p>This skirt is designed to fall just below the knee, offering a flattering length that is suitable for various occasions. It is made from a soft and lightweight fabric that drapes beautifully, ensuring comfort and ease of movement. The blue color adds a vibrant touch, making it a standout piece in your wardrobe.</p>
            <ul>
              <li>fitted waistband</li>
              <li>fastened with a hidden zipper</li>
              <li>midi length</li>
            </ul>
            <p className="mb-0">The blue color of the skirt allows for easy pairing with a variety of tops. You can opt for a crisp white blouse for a classNameic and polished outfit, or choose a patterned or contrasting-colored top for a more vibrant and fashion-forward look.</p>
          </div>
          <div className="col-lg-6 col-xl-5 offset-xl-1">
            <div className="row row-cols-2 g-4 my-0 my-lg-n2">
              <div className="col">
                <div className="py-md-1 py-lg-2 pe-sm-2">
                  <i className="ci-feather fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                  <h6 className="fs-sm mb-2">Lightweight</h6>
                  <p className="fs-sm mb-0">Designed with lightweight European fabrics, perfect for life on the go.</p>
                </div>
              </div>
              <div className="col">
                <div className="py-md-1 py-lg-2 ps-sm-2">
                  <i className="ci-hanger fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                  <h6 className="fs-sm mb-2">Perfect fit</h6>
                  <p className="fs-sm mb-0">Our clothing is designed to fit any body type, find your perfect look!</p>
                </div>
              </div>
              <div className="col">
                <div className="py-md-1 py-lg-2 pe-sm-2">
                  <i className="ci-delivery-2 fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                  <h6 className="fs-sm mb-2">Free delivery</h6>
                  <p className="fs-sm mb-0">Get free door-to-door delivery for all orders over $250.</p>
                </div>
              </div>
              <div className="col">
                <div className="py-md-1 py-lg-2 ps-sm-2">
                  <i className="ci-leaf fs-3 text-body-emphasis mb-2 mb-md-3"></i>
                  <h6 className="fs-sm mb-2">Sustainability</h6>
                  <p className="fs-sm mb-0">We are proud to offer a Lifetime Guarantee on all products.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="tab-pane fade active show fs-sm" id="delivery-tab-pane" role="tabpanel" aria-labelledby="delivery-tab">
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col mb-3 mb-md-0">
            <div className="pe-lg-2 pe-xl-3">
              <h6>Delivery</h6>
              <p>We strive to deliver your denim midi skirt with pockets to you as quickly as possible. Our estimated delivery times are as follows:</p>
              <ul className="list-unstyled">
                <li>Standard delivery:  <span className="text-dark-emphasis fw-semibold">Within 3-7 business days</span></li>
                <li>Express delivery: <span className="text-dark-emphasis fw-semibold">Within 1-3 business days</span></li>
              </ul>
              <p>Please note that delivery times may vary depending on your location and any ongoing promotions or holidays. You can track your order using the provided tracking number once your package has been dispatched.</p>
            </div>
          </div>
          <div className="col">
            <div className="ps-lg-2 ps-xl-3">
              <h6>Returns</h6>
              <p>We want you to be completely satisfied with your denim midi skirt with pockets. If for any reason you are not happy with your purchase, you can return it within 30 days of receiving your order for a full refund or exchange.</p>
              <p>To be eligible for a return, the skirt must be unused, unwashed, and in its original condition with tags attached. Please ensure that all packaging is intact when returning the item.</p>
              <p className="mb-0">To initiate a return, please contact our customer service team with your order number and reason for the return. We will provide you with a return shipping label and instructions on how to proceed. Please note that shipping fees are non-refundable.</p>
            </div>
          </div>
        </div>
      </div> */}
    
      <div className="tab-pane fade active show" id="reviews-tab-pane" role="tabpanel" aria-labelledby="reviews-tab">
    
        <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2 pb-sm-3">
          <div className="mb-3 me-sm-3">
            <h2 className="h5 pb-2 mb-1">{i18next.t('reviews')}</h2><span>{reviews.length} </span>
           
          </div>
          <button type="button" className="btn btn-outline-dark mb-3" data-bs-toggle="modal" data-bs-target="#reviewForm">Leave a review</button>
        </div>
    
        <div className="border-bottom py-4">
          <div className="row py-sm-2">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div className="d-flex h6 mb-2">
                Rafael Marquez
                <i className="ci-check-circle text-success mt-1 ms-2" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" aria-label="Verified customer" data-bs-original-title="Verified customer"></i>
              </div>
              <div className="fs-sm mb-2 mb-md-3">June 25, 2024</div>
              <div className="d-flex gap-1 fs-sm">
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <p className="mb-md-4">Absolutely love this chair! It's exactly what I was looking for to complete my Scandinavian-themed living room. The wooden legs add a touch of warmth and the design is timeless. Comfortable and sturdy, couldn't be happier with my purchase!</p>
              <div className="d-sm-flex justify-content-between">
                <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                  <i className="ci-check fs-base me-1"></i>
                  Yes, I recommend this product
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-sm fw-medium text-dark-emphasis me-1">Helpful?</div>
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="ci-thumbs-up fs-sm ms-n1 me-1"></i>
                    0
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="border-bottom py-4">
          <div className="row py-sm-2">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div className="d-flex h6 mb-2">
                Bessie Cooper
                <i className="ci-check-circle text-success mt-1 ms-2" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-sm" aria-label="Verified customer" data-bs-original-title="Verified customer"></i>
              </div>
              <div className="fs-sm mb-2 mb-md-3">April 8, 2024</div>
              <div className="d-flex gap-1 fs-sm">
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star text-body-tertiary opacity-75"></i>
                <i className="ci-star text-body-tertiary opacity-75"></i>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <p className="mb-md-4">While the design of the chair is nice and it does add a touch of retro vibe to my space, I found the quality to be lacking. After just a few weeks of use, one of the legs started to wobble, and the seat isn't as comfortable as I had hoped. Disappointed with the durability. Additionally, the assembly process was a bit frustrating as some of the screws didn't align properly with the holes, requiring extra effort to secure them in place. Overall, while it looks good, I expected better quality for the price.</p>
              <div className="d-sm-flex justify-content-between">
                <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                  <i className="ci-close fs-base me-1"></i>
                  No, I don't recommend this product
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-sm fw-medium text-dark-emphasis me-1">Helpful?</div>
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="ci-thumbs-up fs-sm ms-n1 me-1"></i>
                    3
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="border-bottom py-4">
          <div className="row py-sm-2">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div className="d-flex h6 mb-2">Savannah Nguyen</div>
              <div className="fs-sm mb-2 mb-md-3">March 30, 2024</div>
              <div className="d-flex gap-1 fs-sm">
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star text-body-tertiary opacity-75"></i>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <p className="mb-md-4">Great addition to our dining room! The chair looks fantastic and is quite comfortable for short sits. Assembly was a breeze, and the quality seems decent for the price. Overall, satisfied with the purchase.</p>
              <div className="d-sm-flex justify-content-between">
                <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                  <i className="ci-check fs-base me-1" ></i>
                  Yes, I recommend this product
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-sm fw-medium text-dark-emphasis me-1">Helpful?</div>
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="ci-thumbs-up fs-sm ms-n1 me-1"></i>
                    7
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="border-bottom py-4">
          <div className="row py-sm-2">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div className="d-flex h6 mb-2">Daniel Adams</div>
              <div className="fs-sm mb-2 mb-md-3">March 16, 2024</div>
              <div className="d-flex gap-1 fs-sm">
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <p className="mb-md-4">Couldn't be happier with this chair! It's not only stylish but also incredibly comfortable. The size is perfect for our space, and the wooden legs feel sturdy. Definitely recommend it to anyone looking for a chic and functional seating option.</p>
              <div className="d-sm-flex justify-content-between">
                <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                  <i className="ci-check fs-base me-1"></i>
                  Yes, I recommend this product
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-sm fw-medium text-dark-emphasis me-1">Helpful?</div>
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="ci-thumbs-up fs-sm ms-n1 me-1"></i>
                    14
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <div className="border-bottom py-4">
          <div className="row py-sm-2">
            <div className="col-md-4 col-lg-3 mb-3 mb-md-0">
              <div className="d-flex h6 mb-2">Kristin Watson</div>
              <div className="fs-sm mb-2 mb-md-3">February 7, 2024</div>
              <div className="d-flex gap-1 fs-sm">
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star-filled text-warning"></i>
                <i className="ci-star text-body-tertiary opacity-75"></i>
              </div>
            </div>
            <div className="col-md-8 col-lg-9">
              <p className="mb-md-4">The chair is nice, but it's not the most comfortable for extended periods of sitting. The wooden legs give it a nice aesthetic, but they seem a bit fragile. It's a decent chair for occasional use, but I wouldn't recommend it for daily use or long sitting sessions.</p>
              <div className="d-sm-flex justify-content-between">
                <div className="d-flex align-items-center fs-sm fw-medium text-dark-emphasis pb-2 pb-sm-0 mb-1 mb-sm-0">
                  <i className="ci-check fs-base me-1"></i>
                  Yes, I recommend this product
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="fs-sm fw-medium text-dark-emphasis me-1">Helpful?</div>
                  <button type="button" className="btn btn-sm btn-secondary">
                    <i className="ci-thumbs-up fs-sm ms-n1 me-1"></i>
                    9
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <nav className="mt-3 pt-2 pt-md-3" aria-label="Reviews pagination">
          <ul className="pagination">
            <li className="page-item active" aria-current="page">
              <span className="page-link">
                1
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">2</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">3</a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">4</a>
            </li>
            <li className="page-item">
              <span className="page-link pe-none">...</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#!">6</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </section>
  )
}

export default Reviews