import { store } from "@/stores";
import { fetchProduct, fetchProducts } from "@/stores/products-store";
import { AddBasketButton } from "@/components/basket/add-basket-button";
import React from "react";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { calculateDiscount } from "../../../../src/components/products/productCard";
import ProductsColor from "@/components/products/productsColor";
import ProductSize from "@/components/products/productsSize";
import BasketAmount from "@/components/basket/basketAmount";
import ProductNavTabs from "@/components/products/productNavTabs";
import ProductList from "@/components/products/productList";
import Image from "next/image";
import BasketClientComponent from "@/components/basket/basketClientComponent";

const thinStarStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#f59e0b",
  inactiveFillColor: "#ffedd5",
};

const ProductDetail = async ({ params: { id } }) => {
  await store.dispatch(fetchProduct(id));
  const { product } = store.getState().products;

  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();
  console.log(products);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="row">
            <div className="col-md-3">
              <div className="product-detail-card-sm mb-3">
                <div className="product-img img-fluid mb-3">
                  <Image src={`/${product.imgUrl}`} alt="T-shirt 1" fill />
                </div>
              </div>
              <div className="product-detail-card-sm mb-3">
                <div className="product-img img-fluid mb-3">
                  <Image src={`/${product.imgUrl}`} alt="T-shirt 1" fill />
                </div>
              </div>
              <div className="product-detail-card-sm">
                <div className="product-img img-fluid mb-3">
                  <Image src={`/${product.imgUrl}`} alt="T-shirt 1" fill />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="product-detail-card">
                <div className="product-img img-fluid mb-3">
                  <Image src={`/${product.imgUrl}`} alt="T-shirt 1" fill />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div>
            <h3>{product.name}</h3>
            <div className="w-25 d-flex align-items-center justify-content-center">
              <Rating
                value={product.rating}
                itemStyles={thinStarStyles}
                readOnly
              />
              {product.rating}/5
            </div>
            <div className="d-flex align-items-center mb-3">
              <p className="fs-4 fw-bold m-0">${product.price}</p>
              {product.original_price > product.price && (
                <>
                  <span className="ms-2 fs-4 fw-bold text-decoration-line-through discount-color">
                    ${product.original_price}
                  </span>
                  <span className="ms-2 fs-6 text-danger discount-badge">
                    -
                    {calculateDiscount(
                      product.price,
                      product.original_price
                    ).toFixed(0)}
                    %
                  </span>
                </>
              )}
            </div>
            <p className="transparent-6">{product.description}</p>
            <img
              src="/icons/category-line.svg"
              alt="category-line"
              className="img-fluid"
            />
            <div className="mb-1">
              <ProductsColor product={product} />
            </div>
            <img
              src="/icons/category-line.svg"
              alt="category-line"
              className="img-fluid"
            />
            <div>
              <ProductSize product={product} />
            </div>
            <img
              src="/icons/category-line.svg"
              alt="category-line"
              className="img-fluid"
            />
            <div className="d-flex justif-content-between align-items-center gap-4">
              <BasketClientComponent product={product} />
            </div>
          </div>
        </div>
      </div>
      <ProductNavTabs product={product} />
      <div>
        <h2 className="text-center">YOU MIGHT ALSO LIKE</h2>
        <ProductList data={products.slice(0, 5)} />
      </div>
    </div>
  );
};

export default ProductDetail;
