import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useDispatch } from "react-redux";
import { getProduct } from "@/server/product";
import { notify } from "@/lib/notify";
import {
  decreaseProductCount,
  deleteProductToLocalCart,
  increaseProductCount,
} from "@/redux/slices/cartSlice";

import ProductCountButton from "@/components/ProductCountButton";
import { RiDeleteBin3Fill } from "react-icons/ri";
import {
  CardContainer,
  DiscountPercent,
  ImageWrapper,
  P,
  RiDeleteBin3FillWrapper,
} from "./styles";

const Card = ({ id, productId, size, color, count }) => {
  const t = useTranslations("ProductDetail");
  const [product, setProduct] = useState({});
  const [productCount, setProductCount] = useState(count);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProduct(productId);
      setProduct(data);
    };
    fetchProduct();
  }, [productId]);

  const deleteProduct = () => {
    dispatch(deleteProductToLocalCart(id));
    notify(t("productHasBeenDeleted"), "error");
  };

  const cartDec = async () => {
    if (product?.stock < productCount) {
      notify(t("stockError"), "error");
      return;
    }
    dispatch(decreaseProductCount(id));
    setProductCount((prev) => prev + 1);
  };
  const cartInc = async () => {
    dispatch(increaseProductCount(id));
    if (productCount <= 1) {
      notify(t("productHasBeenDeleted"), "error");
      return;
    }
    setProductCount((prev) => prev - 1);
  };

  return (
    <CardContainer className="card mb-3 border-0 border-bottom">
      <div className="row g-0">
        <div className="col-xxl-2 d-flex align-items-center justify-content-center">
          <ImageWrapper>
            {product?.image && (
              <Image
                src={`/images/wears/${product.image}.png`}
                className="card-img-left object-fit-cover"
                alt="product"
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            )}
          </ImageWrapper>
        </div>
        <div className="col-xxl-10">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title fw-bold mb-0">{product?.title}</h5>
              <RiDeleteBin3FillWrapper>
                <RiDeleteBin3Fill
                  className="fs-5 text-danger"
                  onClick={deleteProduct}
                />
              </RiDeleteBin3FillWrapper>
            </div>
            <div className="mb-4">
              <P className="card-text pb-0 mb-0">
                {t("size")}: <span className="opacity-50">{size}</span>
              </P>
              <P className="card-text">
                {t("color")}: <span className="opacity-50">{color}</span>
              </P>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-2 align-items-center justify-content-center">
                <p className="card-text fs-4 fw-bold mb-0">${product?.price}</p>
                <DiscountPercent className="card-text">
                  %{product?.discount}
                </DiscountPercent>
              </div>
              <ProductCountButton
                count={productCount}
                cartDec={cartDec}
                cartInc={cartInc}
              />
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Card;
