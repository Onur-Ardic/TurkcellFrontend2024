"use client";

import { useState } from "react";
import styled from "styled-components";
import { useTranslations } from "next-intl";
import CommentDetail from "./CommentDetail";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const ThumbnailImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

const DetailsSection = styled.div`
  margin-top: 20px;
  max-width: 500px;

  @media (min-width: 768px) {
    margin-left: 20px;
    margin-top: 0;
  }
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5em;
  margin-top: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: gray;
  margin-left: 10px;
`;

const Discount = styled.span`
  color: red;
  margin-left: 10px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Star = styled.span`
  color: gold;
`;

const Description = styled.p`
  margin-top: 10px;
`;

const SelectColors = styled.div`
  margin-top: 20px;
`;

const ColorOption = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
  border: 3px solid ${(props) => (props.selected ? "black" : "transparent")};
`;

const SelectSize = styled.div`
  margin-top: 20px;
`;

const SizeOption = styled.button`
  border: 1px solid #ddd;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
`;

const QuantitySection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const QuantityButton = styled.button`
  border: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;
`;

const QuantityDisplay = styled.span`
  margin: 0 10px;
  font-size: 1.2em;
`;

const AddToCartButton = styled.button`
  margin-top: 20px;
  padding: 15px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1.2em;
  border-radius: 10px;
`;

const renderStars = (rate) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star key={index}>{index < rate - 1 ? "⭐️" : "☆"}</Star>
  ));
};

const ProductDetail = ({ productDetail }) => {
  const [selectedSize, setSelectedSize] = useState(productDetail.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(productDetail.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/carts`, {
      method: "POST",
      body: JSON.stringify({
        ...productDetail,
        id: Math.random().toString(16).slice(2),
        productId: productDetail.id,
        quantity,
        selectedColor,
        selectedSize,
      }),
    })
      .then(() => alert("Sepete Eklendi"))
      .catch((err) => alert(err?.message || "Bir hata oluştu"));
  };
  // ++++++++++++++++++++
  const idComment = productDetail.id;
  console.log("id comment" + idComment);
  async function getCommentsByProductId(idComment) {
    try {
      const response = await fetch(
        `http://localhost:3000/comments?productId=${idComment}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const comments = await response.json();
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  }

  getCommentsByProductId(4).then((comments) => console.log(comments));

  // ++++++++++++++++++++++++++++
  const t = useTranslations("ProductDetail");
  return (
    <Container>
      <ImageSection>
        <MainImage src={productDetail.img} />
        <ThumbnailContainer>
          <ThumbnailImage src={productDetail.img} />
          <ThumbnailImage src={productDetail.img} />
          <ThumbnailImage src={productDetail.img} />
        </ThumbnailContainer>
      </ImageSection>
      <DetailsSection>
        <Title>{productDetail.name}</Title>
        <Rating>
          {renderStars(productDetail.rate)}
          <span>{productDetail.rate}/5</span>
        </Rating>
        <Price>
          ${productDetail.price}
          {productDetail.priceOld && (
            <>
              <OldPrice>${productDetail.priceOld}</OldPrice>
              <Discount>
                -
                {(
                  ((productDetail.priceOld - productDetail.price) /
                    productDetail.priceOld) *
                  100
                ).toFixed(2)}
                %
              </Discount>
            </>
          )}
        </Price>
        <Description>{productDetail.description}</Description>
        <SelectColors>
          <div>{t("colorTit")}</div>
          {productDetail.colors.map((color) => (
            <ColorOption
              key={color}
              color={color}
              selected={color === selectedColor}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </SelectColors>
        <SelectSize>
          <div>{t("sizeTit")}</div>
          {productDetail.sizes.map((size) => (
            <SizeOption
              key={size}
              selected={size === selectedSize}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeOption>
          ))}
        </SelectSize>
        <QuantitySection>
          <QuantityButton
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity - 1)}
          >
            -
          </QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={() => setQuantity(quantity + 1)}>
            +
          </QuantityButton>
        </QuantitySection>
        <AddToCartButton onClick={addToCart}>{t("buttonTit")}</AddToCartButton>
      </DetailsSection>
    </Container>
  );
};

export default ProductDetail;
