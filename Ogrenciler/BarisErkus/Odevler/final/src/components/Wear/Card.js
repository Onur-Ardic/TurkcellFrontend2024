import { Rating } from "@smastrom/react-rating";
import {
  Card,
  CardTitle,
  DiscountlessPrice,
  DiscountPercent,
  ImageContainer,
  Price,
  StyledImage,
} from "./styles";

const WearCard = ({ src, title, price, discount = 0, rating }) => {
  const discountlessPrice =
    discount !== 0 ? Math.round(price / (1 - discount / 100)) : 0;

  return (
    <Card className="card">
      <ImageContainer>
        <StyledImage
          src={`/images/wears/${src}.png`}
          className="object-fit-cover"
          alt="Wear"
          fill
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </ImageContainer>
      <div className="card-body px-0">
        <CardTitle className="card-title p-0">{title}</CardTitle>
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          className="my-2"
          readOnly
        />
        <div className="d-flex align-items-center">
          <Price>${price}</Price>
          {discount !== 0 && (
            <>
              <DiscountlessPrice>${discountlessPrice}</DiscountlessPrice>
              <DiscountPercent>{discount}%</DiscountPercent>
            </>
          )}
        </div>
      </div>
    </Card>
  );
};

export default WearCard;
