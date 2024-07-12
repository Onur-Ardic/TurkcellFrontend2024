"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  BsStarFill,
  BsCheckCircleFill,
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import { useTranslations } from "next-intl";

const generateRandomName = () => {
  const firstNames = [
    "Ali", "Ayşe", "Fatma", "Mehmet", "Ahmet", "Emre", "Elif", "Zeynep", "Merve", "Can"
  ];
  const lastNames = [
    "Yılmaz", "Kaya", "Demir", "Çelik", "Arslan", "Aydın", "Şahin", "Bulut", "Koç", "Öztürk"
  ];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
};

const HappyCustomers = ({ comments }) => {
  const t = useTranslations("ourHappyCustomers");

  const [randomNames, setRandomNames] = useState([]);
  const customerContainerRef = useRef(null);
  const leftRButtonRef = useRef(null);
  const rightRButtonRef = useRef(null);

  useEffect(() => {
    setRandomNames(comments.map(() => generateRandomName()));
  }, [comments]);

  const updateBlur = () => {
    const customerContainer = customerContainerRef.current;
    const cards = customerContainer.querySelectorAll(".customer-card");
    const scrollLeft = customerContainer.scrollLeft;
    const containerWidth = customerContainer.clientWidth;

    cards.forEach((card) => {
      const cardLeft = card.offsetLeft - scrollLeft;
      const cardRight = cardLeft + card.clientWidth;
      if (
        cardRight < containerWidth / 4 ||
        cardLeft > containerWidth - containerWidth / 4
      ) {
        card.classList.add("blur");
      } else {
        card.classList.remove("blur");
      }
    });
  };

  const updateButtonState = () => {
    const customerContainer = customerContainerRef.current;
    leftRButtonRef.current.disabled = customerContainer.scrollLeft <= 0;
    rightRButtonRef.current.disabled =
      customerContainer.scrollLeft + customerContainer.offsetWidth >=
      customerContainer.scrollWidth;
  };

  const scrollContainer = (direction) => {
    const customerContainer = customerContainerRef.current;
    customerContainer.scrollBy({
      left: (direction * customerContainer.offsetWidth) / 2,
      behavior: "smooth",
    });
    setTimeout(() => {
      updateBlur();
      updateButtonState();
    }, 500);
  };

  useEffect(() => {
    updateButtonState();
    updateBlur();
    const customerContainer = customerContainerRef.current;
    customerContainer.addEventListener("scroll", updateBlur);
    return () => {
      customerContainer.removeEventListener("scroll", updateBlur);
    };
  }, []);

  return (
    <>
      <section className="happy-customers my-5 py-5">
      <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-8 text-center text-md-start">
            <h2 className="text-uppercase fw-bold">{t("happyTitle")}</h2>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-2 mt-md-0">
              <button
                className="customer-arrow-left me-2 border-0 rounded-pill py-1 px-2"
                ref={leftRButtonRef}
                onClick={() => scrollContainer(-1)}
              >
                <BsArrowLeft />
              </button>
              <button
                className="customer-arrow-right border-0 rounded-pill py-1 px-2"
                ref={rightRButtonRef}
                onClick={() => scrollContainer(1)}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card-slider" ref={customerContainerRef}>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="customer-card rounded-4 border border-1 position-relative"
            >
              <div className="info-row">
                <div className="rating">
                  {[...Array(comment.items[0].rating)].map((_, starIndex) => (
                    <BsStarFill key={starIndex} style={{ color: "#ffcc00" }} />
                  ))}
                </div>
              </div>
              <h5 className="customer-name font-satoshi text-black pt-3">
                {randomNames[index]}
                <BsCheckCircleFill
                  style={{ color: "#01AB31", width: "30px" }}
                />
              </h5>
              <div className="info-container">
                <p>{comment.items[0].comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HappyCustomers;
