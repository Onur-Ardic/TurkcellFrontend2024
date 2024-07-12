import { notFound } from "next/navigation";
import productsData from "../../../datas/db.json";
import { MdOutlineStar } from "react-icons/md";
import dynamic from "next/dynamic";
import ColorSelector from "@/components/ColorSelector";
import ProductTabs from "../../../components/ProductTabs/productTabs";
import ProductSizeSelector from "../../../components/ProductSizeSelector";
import MightAlso from "../../../components/MightAlso/index";

const Counter = dynamic(() => import("../../../components/Counter/counter"), {
  ssr: false,
});

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    id: [product.id.toString()],
  }));
}

export async function generateMetadata({ params }) {
  const product = productsData.products.find(
    (p) => p.id.toString() === params.id[0]
  );
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.name,
  };
}

export default function ProductDetail({ params }) {
  const productId = params.id[0];
  const product = productsData.products.find(
    (p) => p.id.toString() === productId
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <div className="productDetail px-5">
        <div className="detail d-flex row">
          <div className="productImages d-flex row col-md-6">
            <div className="littleImages row gap-2 py-5 col-md-4">
              {[...Array(3)].map((_, index) => (
                <div key={index}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "152px", height: "167px" }}
                    className="rounded"
                  />
                </div>
              ))}
            </div>
            <div className="bigImage py-5 col-md-6">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "444px", height: "530px" }}
                className="rounded"
              />
            </div>
          </div>
          <div className="productContent d-flex col-md-6 py-5 row">
            <h1 className="fw-bold">{product.name}</h1>
            <div className="productRating d-flex align-items-center fs-4">
              {Array.from({ length: product.rating }, (_, index) => (
                <MdOutlineStar
                  key={index}
                  className="star-icon"
                  style={{ color: "#FFD700" }}
                />
              ))}
              <span className="ms-2">{product.rating.toFixed(1)} / 5</span>
            </div>
            <div className="productPrice d-flex column gap-2">
              <h4 className="fw-bold">${product.price}</h4>
              {product.originalPrice && (
                <span className="ml-2 text-decoration-line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <p className="productDiscount bg-danger bg-opacity-25 text-danger fs-6 rounded-pill px-2">
                  {product.discount}%
                </p>
              )}
            </div>
            <p>
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <ColorSelector />
            <ProductSizeSelector />
            <hr />
            <div className="productQuantity d-flex col gap-2">
              <div className="counter row-3">
                <Counter />
              </div>
              <div className="w-100">
                <button className="btn rounded-5 w-100 bg-black text-white">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProductTabs product={product} />
      </div>
      <div>
        <MightAlso products={productsData.products} />
      </div>
    </>
  );
}
