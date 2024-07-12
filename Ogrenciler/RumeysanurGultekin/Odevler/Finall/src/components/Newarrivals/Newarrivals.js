import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/globals.css";
import "../../../css/main.css";
import { fetchData } from "@/app/lib/data";
import Link from "next/link";

const Newarrivals = async () => {
  const data = await fetchData();
  console.log(data[0]);
  return (
    <div className="newarrivals text-center">
      <h1 className="text-center Integf ">NEW ARRIVALS</h1>
      <div className="row justify-content-center">
        {data.slice(0, 4).map(({ id, title, price, img, discount, rating }) => (
          <Link
            href={`/products/${id}`}
            key={id}
            className="col-md-3 product-card"
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
      <div className="border-bottom">
        <button className="viewall">View All</button>
      </div>
    </div>
  );
};
export default Newarrivals;
