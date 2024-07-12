"use client"

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection.jsx";
import WriteReview from "../../components/WriteReview/WriteReview.jsx";
import YouMightAlsoLike from "../../components/YouMightAlsoLike/YouMightAlsoLike.jsx";
import { addItemToCart } from "../../../redux/slice/cartSlice.js";
import {
  ProductContainer,
  ProductDetails,
  ProductDescription,
  ProductImages,
  ProductMainImage,
  ProductName,
  ProductPrice,
  QuantityAdjust,
  ProductThumbnail,
  ProductThumbnailContainer,
  ProductRating,
  DiscountAmount,
  DiscountPrice,
  DiscountPercent,
  ReviewTitle,
  ReviewButton,
  ReviewsContainer,
  AddProduct,
  AddToCartButton,
  ColorCircle,
  SelectColor,
  SelectSize,
  ButtonContainer,
} from "./page.style.jsx";

const ProductDetail = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedThumbnail, setSelectedThumbnail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [discountPercent, setDiscountPercent] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setDiscountPercent(data.discount ? data.discount.percent : null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedThumbnail(thumbnail);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size.");
      return;
    }

    const productToAdd = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      discount: discountPercent,
      quantity,
      color: selectedColor,
      size: selectedSize,
    };

    dispatch(addItemToCart(productToAdd));

   
    toast.success("Ürün Sepetinize Başarıyla Eklendi", {
      position: "top-right",
      autoClose: 3000, 
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <ProductContainer className="container">
        <ProductImages className="col-6 d-flex justify-content-center">
          <ProductThumbnailContainer className="px-3">
            <ProductThumbnail
              src={product.thumbnail1}
              alt="Thumbnail 1"
              onClick={() => handleThumbnailClick(product.thumbnail1)}
            />
            <ProductThumbnail
              src={product.thumbnail2}
              alt="Thumbnail 2"
              onClick={() => handleThumbnailClick(product.thumbnail2)}
            />
            <ProductThumbnail
              src={product.thumbnail3}
              alt="Thumbnail 3"
              onClick={() => handleThumbnailClick(product.thumbnail3)}
            />
          </ProductThumbnailContainer>
          <ProductMainImage
            src={selectedThumbnail || product.image}
            alt={product.name}
          />
        </ProductImages>
        <ProductDetails>
          <ProductName>{product.name}</ProductName>
          <ProductRating>{product.rating}</ProductRating>
          <ProductPrice>
            ${product.price}
            {product.discount && (
              <DiscountPrice>
                <DiscountAmount>${product.discount.amount}</DiscountAmount>
                <DiscountPercent>{product.discount.percent}</DiscountPercent>
              </DiscountPrice>
            )}
          </ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          <SelectColor>
            <p>Select Colors</p>
            {product.colors &&
              product.colors.map((color) => (
                <ColorCircle
                  key={color}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  className={selectedColor === color ? "selected" : ""}
                />
              ))}
          </SelectColor>
          <SelectSize>
            <p>Choose Size</p>
            {product.sizes &&
              product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? "selected" : ""}>
                  {size}
                </button>
              ))}
          </SelectSize>
          <AddProduct>
            <QuantityAdjust>
              <ButtonContainer>
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </ButtonContainer>
            </QuantityAdjust>
            <AddToCartButton onClick={addToCart} className="col-8">
              Add to Cart
            </AddToCartButton>
          </AddProduct>
        </ProductDetails>
      </ProductContainer>
      <ReviewTitle className="text-center">Rating & Reviews</ReviewTitle>
      <ReviewsContainer className="container">
        <p>
          All Reviews <span>(8)</span>
        </p>
        <ReviewButton onClick={handleModalShow}>Write a Review</ReviewButton>
      </ReviewsContainer>

      <ReviewsSection productId={id} />

      <WriteReview
        showModal={showModal}
        handleModalClose={handleModalClose}
        productId={id}
      />
      <YouMightAlsoLike />
      <Footer />
    </>
  );
};

export default ProductDetail;
