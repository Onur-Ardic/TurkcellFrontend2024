import React from "react";
import ProductDetail from "../productDetail";
import CommentDashboard from "@/components/comments";

function ProductNavTabs({product}) {
  return (
    <div className="my-5">
      <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Product Details
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Rating & Reviews
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            FAQs
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <ProductDetail product={product}/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <CommentDashboard />
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          <div className="accordion accordion-flush" id="accordionFAQ">
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What payment methods do you accept?
                </button>
              </h3>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">
                    We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment methods.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How can I track my order?
                </button>
              </h3>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFAQ"
              >
                <div class="accordion-body">
                    Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or through the shipping carrier's tracking page.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  What is your return policy?
                </button>
              </h3>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFAQ"
              >
                <div class="accordion-body">
                We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange. Items must be in their original condition and packaging.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How long does shipping take?
                </button>
              </h3>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">
                    Standard shipping typically takes 5-7 business days. We also offer expedited shipping options at checkout for faster delivery.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h3 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Can I change or cancel my order after it has been placed?
                </button>
              </h3>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFAQ"
              >
                <div className="accordion-body">
                If you need to change or cancel your order, please contact our customer service team as soon as possible. We will do our best to accommodate your request, but please note that once an order has been processed, we may not be able to make changes.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductNavTabs;
