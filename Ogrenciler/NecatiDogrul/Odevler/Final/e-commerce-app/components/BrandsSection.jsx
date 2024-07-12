import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/BrandsSection.css";

const BrandsSection = () => {
  return (
    <div className="brands-section text-center py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <Image
          src="/images/versace-logo-1.png"
          alt="Versace"
          width={166.48}
          height={33.16}
        />
        <Image
          src="/images/zara-logo-1.png"
          alt="Zara"
          width={91}
          height={38}
        />
        <Image
          src="/images/gucci-logo-1.png"
          alt="Gucci"
          width={156}
          height={36}
        />
        <Image
          src="/images/prada-logo-1.png"
          alt="Prada"
          width={194}
          height={32}
        />
        <Image
          src="/images/calvin-klein-logo-1.png"
          alt="Calvin Klein"
          width={206.79}
          height={33.35}
        />
      </div>
    </div>
  );
};

export default BrandsSection;
