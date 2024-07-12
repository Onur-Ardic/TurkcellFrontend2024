import React from "react";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/browseDressStyle.css";

const BrowseDressStyle = () => {
  return (
    <div className="browse-container container-fluid">
      <h2 className="browse-title">BROWSE BY DRESS STYLE</h2>
      <div className="row browse-row">
        <div className="col-md-4 col-12 browse-item">
          <div className="browse-img-container">
            <Link href="/category/Casual">
              <Image
                src="/images/image 11.svg"
                alt="Casual"
                className="browse-img"
                width={407}
                height={300}
              />
            </Link>
            <p className="browse-text">Casual</p>
          </div>
        </div>
        <div className="col-md-8 col-12 browse-item">
          <div className="browse-img-container">
            <Link href="/category/Formal">
              <Image
                src="/images/image 13.svg"
                alt="Formal"
                className="browse-img"
                width={684}
                height={289}
              />
            </Link>
            <p className="browse-text">Formal</p>
          </div>
        </div>
        <div className="col-md-7 col-12 browse-item">
          <div className="browse-img-container">
            <Link href="/category/Party">
              <Image
                src="/images/image 12.svg"
                alt="Party"
                className="browse-img"
                width={684}
                height={289}
              />
            </Link>
            <p className="browse-text">Party</p>
          </div>
        </div>
        <div className="col-md-5 col-12 browse-item">
          <div className="browse-img-container">
            <Link href="/category/Gym">
              <Image
                src="/images/image 14.svg"
                alt="Gym"
                className="browse-img gym"
                width={407}
                height={289}
              />
            </Link>
            <p className="browse-text">Gym</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseDressStyle;
