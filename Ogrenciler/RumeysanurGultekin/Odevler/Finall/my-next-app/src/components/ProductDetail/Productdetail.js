import React from "react";
import Image from "next/image";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import "../../../css/main.css";
import { fetchProduct } from "@/app/lib/data";

const Productdetail = ({ data }) => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </Head>

      <div className="container my-5 ">
        <div className="products row">
          <div className="pimage col-lg-5 ">
            <Image src={`/${data.img}`} width={444} height={530} alt="image" />
          </div>
          <div className="pdetail col-lg-5">
            <h3 className="mt-3">{data.title}</h3>
            <icon star className="mt-3">
              {data.rating}
            </icon>
            <div className="d-flex gap-3 align-items-center mt-3">
              <h1 className="pprice fs-2">${data.price}</h1>
              <h1 className="pdiscount fs-2">${data.discount}</h1>
              <h3 className="pdiscountp">-{data.discountpercentage}%</h3>
            </div>
            <p className="border-bottom pb-3 my-3">{data.description}</p>
            <p>Select Color</p>
            <div className="colors">
              {data.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-circle"
                  style={{ backgroundColor: color.toLowerCase() }}
                ></div>
              ))}
            </div>
            <p className="border-top mt-3 pt-3">Choose Size</p>
            <div className="border-radius">
              {data.sizes.map((size, index) => (
                <span key={index} className="size-option">
                  {size}
                </span>
              ))}
            </div>
            <div className="d-flex align-items-center mt-4">
              <div className="btn bg-body-secondary rounded-pill">
                <button className="btn btn-outline-secondary me-2">-</button>
                <span>..</span>
                <button className="btn btn-outline-secondary ms-2">+</button>
              </div>

              <button className="btn btn-dark ms-4 px-5 rounded-pill">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="container">
        <p className="d-inline-flex gap-5 text-decoration-none text-dark border-bottom pb-3">
          <a
            className="text-decoration-none menu"
            data-bs-toggle="collapse"
            href="#details"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            Product Detail
          </a>
          <a
            className="text-decoration-none menu"
            data-bs-toggle="collapse"
            href="#rewiews"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            Rating & Reviews
          </a>
          <a
            className="text-decoration-none menu"
            data-bs-toggle="collapse"
            href="#faqdetail"
            role="button"
            aria-expanded="true"
            aria-controls="collapseExample"
          >
            FAQs
          </a>
        </p>
        <div className="collapse show" id="details">
          <div>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
        <div className="collapse show" id="rewiews">
          <div>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
        <div className="collapse show" id="faqdetail">
          <div>
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Productdetail;
