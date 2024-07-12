import React from "react";

function ProductDetail({ product }) {
  return (
    <div>
      <h4>{product.name} </h4>
      <div>
        <p>{product.description}</p>
      </div>
      <div>
        <h5>Key Features:</h5>
      </div>
      <ul>
        <li>
          {" "}
          <h6>Material:</h6> Made from 100% pure, combed cotton for a soft and
          smooth texture.
        </li>
        <li>
          <h6>Fit:</h6> Available in a regular fit that flatters all body types,
          offering a relaxed and comfortable silhouette.{" "}
        </li>
        <li>
          <h6>Design:</h6> Features a classic crew neckline and short sleeves
          for a timeless look. The shirt is available in a variety of solid
          colors and can be easily paired with jeans, shorts, or joggers.
        </li>
        <li>
          <h6>Durability:</h6> Reinforced stitching on the seams ensures
          long-lasting durability, even after multiple washes.{" "}
        </li>
        <li>
          <h6>Comfort:</h6> The fabric is lightweight and breathable, making it
          ideal for both casual and active wear.
        </li>
        <li>
          <h6>Sizes:</h6> Available in a range of sizes from Small to XXL,
          catering to different body shapes and sizes.{" "}
        </li>
      </ul>
      <div>
        <h5>Additional Details: </h5>
        <ul>
          <li>
            <h6>Tagless Design:</h6> The t-shirt features a tagless design to
            prevent irritation and provide additional comfort.{" "}
          </li>

          <li>
            <h6>Eco-Friendly:</h6> Made with eco-friendly dyes and processes,
            ensuring a sustainable and environmentally conscious product.
          </li>

          <li>
            <h6>Versalitily:</h6> Perfect for layering under jackets or
            sweaters, or wearing on its own during warmer weather.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
