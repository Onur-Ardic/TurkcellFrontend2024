import Image from "next/image";
import versace from "@/assets/brand-companies/versace.png";
import zara from "@/assets/brand-companies/zara.png";
import gucci from "@/assets/brand-companies/gucci.png";
import prada from "@/assets/brand-companies/prada.png";
import calvin from "@/assets/brand-companies/calvin.png";

const Brand = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-md-between align-items-center">
          <Image
            className="my-md-5 me-md-5"
            src={versace}
            alt="versace"
            width={166}
            height={33}
          />
          <Image
            className="my-md-5 me-md-5"
            src={zara}
            alt="zara"
            width={91}
            height={38}
          />
          <Image
            className="my-md-5 me-md-5"
            src={gucci}
            alt="gucci"
            width={156}
            height={36}
          />
          <Image
            className="my-md-5 me-md-5"
            src={prada}
            alt="prada"
            width={194}
            height={32}
          />
          <Image
            className="my-md-5 "
            src={calvin}
            alt="calvin"
            width={206}
            height={33}
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
