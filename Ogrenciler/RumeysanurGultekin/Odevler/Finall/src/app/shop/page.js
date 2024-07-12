import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/main.css";
import { fetchData } from "@/app/lib/data";
import Link from "next/link";
import "../../app/globals.css";
const Shop = async () => {
  const data = await fetchData();
  console.log(data[0]);

  const allCategories = data.flatMap(({ categories }) => categories);
  const uniqueCategories = [...new Set(allCategories)];

  const allColors = data.flatMap(({ colors }) => colors);
  const uniqueColors = [...new Set(allColors)];

  const allSizes = data.flatMap(({ sizes }) => sizes);
  const uniqueSizes = [...new Set(allSizes)];

  const allStyle = data.flatMap(({ style }) => style);
  const uniqueStyle = [...new Set(allStyle)];

  return (
    <div className="d-flex gap-5 contpad shoppage ">
      <div className="filters">
        <p className="mt-3 pb-3 border-bottom">Filters</p>
        <div className="border-bottom pb-4">
          {uniqueCategories.map((category, index) => (
            <div key={index}>
              <button className="bg-white btn text-secondary">
                {category}
              </button>
            </div>
          ))}
        </div>
        <div>
          <p className="text-dark py-3 border-bottom">Price</p>
        </div>
        <div>
          <p>Colors</p>
          <div className="border-bottom pb-4 d-flex gap-2">
            {uniqueColors.map((colors, index) => (
              <div key={index} className="">
                <button
                  className=" color-circle"
                  style={{ backgroundColor: colors.toLowerCase() }}
                ></button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <p>Size</p>
          <div className="border-bottom pb-4 d-flex gap-2">
            {uniqueSizes.map((sizes, index) => (
              <div key={index} className="flex-wrap">
                <button className="bg-light px-3">{sizes}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3">
          <p>Dress Style</p>
          <div className=" pb-4">
            {uniqueStyle.map((style, index) => (
              <div key={index} className="flex-wrap">
                <button className="bg-white btn text-secondary">{style}</button>
              </div>
            ))}
          </div>
          <div>
            <button className="btn btn-dark text-white px-5 rounded-ill">
              {" "}
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div className="categories">
        <h1>Categories</h1>
        <div className="row justify-content-center">
          {data.map(({ id, title, price, img, discount, rating }) => (
            <Link
              href={`/products/${id}`}
              key={id}
              className="col-md-4 product-card"
            >
              <div className="card border-0">
                <Image
                  src={`/${img}`}
                  className="card-img-top"
                  width={295}
                  height={298}
                  alt={title}
                />
                <div className="card-body">
                  <h3 className="newtitle">{title}</h3>
                  <p className="">{rating}</p>
                  <div className="d-flex align-items-center">
                    <h3 className="price me-2">${price}</h3>
                    <h3 className="discount">{discount}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
