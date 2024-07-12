import {
  DiscountlessPrice,
  DiscountPercent,
  Price,
} from "@/components/Wear/styles";
import { Rating } from "@smastrom/react-rating";
import Form from "./Form";

const Content = ({
  id,
  title,
  price,
  discount,
  description,
  stock,
  sizes,
  rating,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="fs-1 d-none d-lg-block">{title}</h1>
          <h1 className="fs-3 d-block d-lg-none">{title}</h1>
          <Rating
            value={rating}
            style={{ maxWidth: 150 }}
            className="my-2 fs-1"
            readOnly
          />
          <div className="d-flex align-items-center gap-2">
            <Price className="fs-2">${price}</Price>
            {discount !== 0 && (
              <>
                <DiscountlessPrice className="fs-2">
                  ${Math.round(price / (1 - discount / 100))}
                </DiscountlessPrice>
                <DiscountPercent className="fs-6">{discount}%</DiscountPercent>
              </>
            )}
          </div>
          <p className="mt-2 pb-4 border-bottom text-secondary">
            {description}
          </p>
          <Form productId={id} dbSizes={sizes} stock={stock} />
        </div>
      </div>
    </div>
  );
};

export default Content;
