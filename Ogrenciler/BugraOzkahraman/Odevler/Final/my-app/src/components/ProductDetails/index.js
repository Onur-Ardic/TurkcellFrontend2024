const ProductDetails = ({ details }) => {
  return (
    <div className="productDetails d-flex flex-column align-items-center text-center gap-3">
      <div>
        <h2>Product Details</h2>
      </div>
      <div>
        <ul className="list-unstyled">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
