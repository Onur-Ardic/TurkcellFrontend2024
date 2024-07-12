import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const NewArrivals = async () => {
  const res = await fetch("http://localhost:3001/newArrivals");
  const products = await res.json();

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-warning" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-warning" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-warning" />
        ))}
      </>
    );
  };

  return (
    <div className="container pt-3">
      <div className="d-flex justify-content-center flex-column">
        <p className="bold text-center fs-1">NEW ARRIVALS</p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {products.map((product) => {
            if (product.id <= 2) {
              return (
                <div key={product.id}>
                  <img
                    src={`/images/${product.image}`}
                    alt=""
                    className="product-img"
                  />
                  <div>
                    <p className="fw-bold">{product.name}</p>
                    <div className="fs-6 d-flex align-items-center gap-2">
                      <div className="d-flex">
                        {renderStars(product.rating)}{" "}
                      </div>
                      <div>
                        <span className="fw-medium">{product.rating}</span>/5
                      </div>
                    </div>
                    <div className="fs-2 fw-bold">${product.price}</div>
                  </div>
                </div>
              );
            }
          })}
        </div>
          <button className="btn-view fw-bold m-3">View All</button>
      </div>
      <hr />
    </div>
  );
};

export default NewArrivals;
