import { getMightLike, getProduct } from "@/server/product";
import ShowCase from "../ShowCase";
import Content from "./Content";
import Details from "./Details";
import ImagesContainer from "./ImagesContainer";
import { getTranslations } from "next-intl/server";
import { calculateRating } from "@/lib/helpers";

const ProductDetail = async ({ slug, searchParams }) => {
  const data = await getMightLike();
  const product = await getProduct(slug);
  const comments = product.comments;
  const t = await getTranslations("ProductDetail");
  const rating = calculateRating(comments);

  const sortKey = searchParams._sort || "created_at";
  const sortOrder = searchParams._order || "desc";

  const sortedComments = [...comments].sort((a, b) => {
    if (sortKey === "created_at") {
      if (sortOrder === "asc") {
        return new Date(a[sortKey]) - new Date(b[sortKey]);
      } else {
        return new Date(b[sortKey]) - new Date(a[sortKey]);
      }
    } else {
      if (sortOrder === "asc") {
        return a[sortKey] - b[sortKey];
      } else {
        return b[sortKey] - a[sortKey];
      }
    }
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-12">
          <ImagesContainer productImage={product.image} />
        </div>
        <div className="col-xl-6 col-12">
          <Content
            id={product.id}
            title={product.title}
            price={product.price}
            discount={product.discount}
            description={product.description}
            stock={product.stock}
            sizes={product.sizes}
            color={product.color}
            comments={product.comments}
            rating={rating}
          />
        </div>
        <Details comments={sortedComments} product={product} />
        <ShowCase title={t("youMightAlsoLike")} cards={data} />
      </div>
    </div>
  );
};

export default ProductDetail;
