import { fetchProduct } from "@/app/lib/data";
import Productdetail from "@/components/ProductDetail/Productdetail";
import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../globals.css";
import "../../../../css/main.css";

const page = async ({ params }) => {
  console.log(params);
  const data = await fetchProduct(params.id);
  return (
    <div>
      <Productdetail data={data} />
    </div>
    // <div>
    //   {/* <div>
    //     <div className="products">
    //       <div className="pimage">
    //         <Image src={`/${data.img}`} width={295} height={298} alt="image" />
    //       </div>
    //       <div className="pdetail">
    //         <h3>{data.title}</h3>
    //         <icon star></icon>
    //         <div className="">
    //           <h1 className="pprice">{data.price}</h1>
    //           <h1 className="pdiscountp">{data.discount}</h1>
    //           {/* <h3 className="pdiscount">{data.discountpercentage}</h3> */}
    //         {/* </div> */}
    //   {/* //       <p className="border-bottom mb-3">{data.description}</p>
    //   //       <p>Select Color</p>
    //   //       <div className="colors">
    //   //         {data.colors.map((color, index) => ( */}
    //   {/* //           <div */}
    //   {/* //             key={index}
    //   //             className="color-circle"
    //   //             style={{ backgroundColor: color.toLowerCase() }}
    //   // //           ></div> */}
    //   // //         ))}
    //   //       </div>
    //   //       <p className="border-top mt-3">Choose Size</p>
    //   //       <div className="border-radius">
    //   //         {data.sizes.map((size, index) => (
    //   //           <span key={index} className="size-option">
    //   //             {size}
    //   //           </span>
    //   //         ))}
    //   //       </div>
    //   //       <div>
    //   //         <div></div>
    //   //         <button>Add to Cart</button>
    //   //       </div>
    //   //     </div>
    //   //   </div>
    //   // </div> */}
    // </div>
  );
};

export default page;
