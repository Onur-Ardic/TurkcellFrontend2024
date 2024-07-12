import Image from "next/image";
import {
  BigImageContainer,
  DetailsBody,
  DetailsCounter,
  DetailsDiscount,
  DetailsPerDisc,
  DetailsPerDiscButton,
  DetailsPrice,
  DetailsProductName,
  DetailsSizeButton,
  SmallImageContainer,
} from "./Styled";
import { Rating } from "../Rating/Rating";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Ranking } from "@/containers/Products/Styled";
import BreadCrumb from "../Breadcrumb";
import { useTranslations } from "next-intl";
import { DetailsDivider } from "@/styles/GlobalStyled";
import CartButton from "./CartButton";

const MainDetail = ({ product }) => {
  const {
    name,
    rating,
    img,
    price,
    discount,
    definition,
    category,
    gender,
    color,
    size,
  } = product;
  const altTexts = ["Front View", "Back View", "All Views"];
  const t = useTranslations("MainDetails");

  return (
    <div className="container">
      <div className="row">
        <DetailsDivider />
        <BreadCrumb category={category} gender={gender} />
        <div className="d-flex flex-column flex-md-row">
          <div className="d-flex flex-row flex-md-column order-2 order-md-1 me-md-3 mt-2 mt-md-0">
            {altTexts.map((alt, index) => (
              <SmallImageContainer key={index}>
                <Image
                  src={img}
                  alt={alt}
                  fill
                  priority
                  style={{ borderRadius: "20px", objectFit: "cover" }}
                />
              </SmallImageContainer>
            ))}
          </div>
          <div className="d-flex order-1 order-md-2">
            <BigImageContainer>
              <Image
                src={img}
                alt="image_front"
                fill
                priority
                style={{ borderRadius: "20px", objectFit: "cover" }}
                sizes="(max-width: 425px) 190px, 295px"
              />
            </BigImageContainer>
          </div>
          <div className="d-flex flex-column flex-wrap ms-md-4_8 order-3">
            <DetailsProductName>{name}</DetailsProductName>
            <div className="d-flex mt-3">
              <Rating value={rating} readOnly={true} />
              <Ranking className="ms-3">{rating}/5</Ranking>
            </div>
            <div className="d-flex flex-row align-items-center mt-3">
              {discount && discount.available ? (
                <div className="d-flex flex-row align-items-center">
                  <DetailsPrice className="me-2">
                    {discount.discount_price}
                  </DetailsPrice>
                  <DetailsDiscount className="me-2">{price}</DetailsDiscount>
                  <DetailsPerDiscButton>
                    <DetailsPerDisc>{discount.percentage}</DetailsPerDisc>
                  </DetailsPerDiscButton>
                </div>
              ) : (
                <DetailsPrice>{price}</DetailsPrice>
              )}
            </div>
            <DetailsBody className="mt-3">{definition}</DetailsBody>
            <DetailsDivider />
            <div>
              <h6>{t("Color")}</h6>
              <div className="d-flex flex-row mt-3">
                {color.map((renk, index) => (
                  <div
                    key={index}
                    className="rounded-pill me-3"
                    style={{
                      backgroundColor: renk,
                      width: 37,
                      height: 37,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <DetailsDivider />
            <div>
              <h6>{t("Size")}</h6>
              <div className="d-flex flex-row mt-3">
                {size.map((beden) => (
                  <DetailsSizeButton key={beden}>
                    <p>{beden}</p>
                  </DetailsSizeButton>
                ))}
              </div>
            </div>
            <DetailsDivider />
            <div className="d-flex align-items-center">
              <DetailsCounter>
                <FaMinus /> 1 <FaPlus />
              </DetailsCounter>
              <CartButton product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
