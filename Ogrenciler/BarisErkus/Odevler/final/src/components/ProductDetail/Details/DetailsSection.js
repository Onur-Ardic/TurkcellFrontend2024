import { useTranslations } from "next-intl";
import Image from "next/image";

const DetailsSection = ({ product }) => {
  const t = useTranslations("ProductDetail");
  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <h1>{product.title}</h1>
      <p className="opacity-50">{product.description}</p>
      <div className="d-flex gap-5">
        {product.top_selling && (
          <span className="fs-4 fw-bold text-start">
            {t("topSellerProduct")}
          </span>
        )}
        {product.new_arrival && (
          <span className="fs-4 fw-bold text-start">
            {t("newArrivalProduct")}
          </span>
        )}
      </div>
      <Image
        src={`/images/wears/${product.image}.png`}
        alt={product.title}
        width={300}
        height={300}
        className="mt-3"
      />
    </div>
  );
};

export default DetailsSection;
