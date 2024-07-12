import Request from "@/app/request";
import Image from "next/image";
import "@/app/details/[[...detail]]/page.scss";
import ProductCard from "@/components/productCard/ProductCard";
import CommentCard from "@/components/commentCard/CommentCard";
import Link from "next/link";

const Detail = async ({ params }) => {
  const detail = await Request.get(
    "http://localhost:3000/products/" + params.detail
  );

  const comments = await Request.get(
    "http://localhost:3000/comments?_start=3&_end=10"
  );

  const products = await Request.get(
    "http://localhost:3000/products?_start=8&_end=13"
  );

  return (
    <div className="container">
      <hr />
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link href="/" className="link text-decoration-none">
              Home
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link href="/" className="link text-decoration-none">
              Shop
            </Link>
          </li>
          <li class="breadcrumb-item">
            <Link href="/" className="link text-decoration-none">
              Men
            </Link>
          </li>
          <li
            class="breadcrumb-item active link text-black"
            aria-current="page"
          >
            T-shirts
          </li>
        </ol>
      </nav>
      <div className="detail-card d-flex gap-4">
        <div className="dc-images d-flex gap-3">
          <div className="d-flex flex-column justify-content-between">
            <Image
              src={`/product-images/${detail.image}`}
              alt="Product"
              width="152"
              height="167"
            />
            <Image
              src={`/product-images/${detail.image}`}
              alt="Product"
              width="152"
              height="168"
            />
            <Image
              src={`/product-images/${detail.image}`}
              alt="Product"
              width="152"
              height="167"
            />
          </div>
          <div>
            <Image
              src={`/product-images/${detail.image}`}
              alt="Product"
              width="444"
              height="530"
            />
          </div>
        </div>
        <div className="card-body">
          <h1>{detail.name}</h1>
          <p>Point: {detail.point}/5</p>
          <p className="price fw-bold text-black">{detail.price}</p>
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </div>
      </div>
      <section className="titles d-flex justify-content-evenly">
        <h1>Product Details</h1>
        <h1 className="fw-medium text-black">Rating & Reviews</h1>
        <h1>FAQs</h1>
      </section>
      <hr />
      <section className="rating-reviews">
        <div className="d-flex justify-content-between align-items-center py-4">
          <h1 className="fw-bold">All Reviews</h1>
          <div className="d-flex align-items-center gap-2">
            <Image src="/filter.png" alt="Filter" width="48" height="48" />
            <select class="select-form fw-medium text-center">
              <option selected>Sort</option>
              <option value="1">Latest</option>
              <option value="2">Rating</option>
            </select>
            <div>
              <button className="write-button fw-medium text-center bg-black text-white">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-3">
          {comments.map((comment, index) => (
            <CommentCard
              className="review-card"
              key={index}
              comment={comment}
            />
          ))}
        </div>
        <div className="text-center">
          <button className="load-button fw-medium">Load More Reviews</button>
        </div>
      </section>
      <section className="like">
        <h1 className="text-center">YOU MIGHT ALSO LIKE</h1>
        <div className="d-flex justify-content-between flex-wrap">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Detail;
