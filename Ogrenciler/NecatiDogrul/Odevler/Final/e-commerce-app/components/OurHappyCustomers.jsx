import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/ourHappyCustomers.css";
import Image from "next/image";

const OurHappyCustomers = () => {
  return (
    <div className="happy-customers-container container-fluid">
      <h2 className="happy-customers-title">OUR HAPPY CUSTOMERS</h2>
      <div className="happy-customers-carousel">
        <div className="happy-customer-item blurred">
          <div className="customer-review">
            <div className="stars-container">
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
            </div>
            <p className="customer-name">
              Sarah M. <span className="verified">&#x2714;</span>
            </p>
            <p className="customer-text">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>
        <div className="happy-customer-item">
          <div className="customer-review">
            <div className="stars-container">
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
            </div>
            <p className="customer-name">
              Alex K. <span className="verified">&#x2714;</span>
            </p>
            <p className="customer-text">
              "Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.”
            </p>
          </div>
        </div>
        <div className="happy-customer-item">
          <div className="customer-review">
            <div className="stars-container">
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
            </div>
            <p className="customer-name">
              James L. <span className="verified">&#x2714;</span>
            </p>
            <p className="customer-text">
              "As someone who's always on the lookout for unique fashion pieces,
              I'm thrilled to have stumbled upon Shop.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.”
            </p>
          </div>
        </div>
        <div className="happy-customer-item blurred">
          <div className="customer-review">
            <div className="stars-container">
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
              <Image
                src="/images/star.png"
                alt="Star"
                className="star-img"
                width={22.58}
                height={22.58}
              />
            </div>
            <p className="customer-name">
              Sarah M. <span className="verified">&#x2714;</span>
            </p>
            <p className="customer-text">
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHappyCustomers;
