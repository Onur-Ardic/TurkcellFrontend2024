import {
  ImageContainer,
  PerDisc,
  PerDiscButton,
  Price,
  Discount,
  ProductName,
  Ranking,
} from "./Styled";
import Image from "next/image";
import { Rating } from "@/components/Rating/Rating";
import { Link } from "../../navigation";

const ProductCard = ({ product }) => {
  const { id, name, rating, price, discount, img } = product;

  return (
    <div key={id} className="d-flex mb-3 mb-md-5_5 col-6 col-md-auto ">
      <div className="me-2">
        <Link href={`/shop/products/${id}`}>
          <ImageContainer>
            <Image
              src={img}
              alt={name}
              fill
              priority
              sizes="(max-width: 425px) 190px, 295px"
              style={{ borderRadius: 20 }}
            />
          </ImageContainer>
        </Link>
        <div className="mt-3 d-flex w-100 flex-column flex-wrap">
          <ProductName>{name}</ProductName>
          <div className="d-flex mt-2">
            <Rating value={parseFloat(rating)} readOnly={true} />
            <Ranking className="ms-3">{rating}/5</Ranking>
          </div>
          <div className="d-flex flex-row align-items-center mt-2">
            {product.discount && product.discount.available ? (
              <div className="d-flex flex-row align-items-center">
                <Price className="me-2">{discount.discount_price}</Price>
                <Discount className="me-2">{price}</Discount>
                <PerDiscButton>
                  <PerDisc>{discount.percentage}</PerDisc>
                </PerDiscButton>
              </div>
            ) : (
              <Price>{price}</Price>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
