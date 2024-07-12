import Image from "next/image";
import { StyledCard, StyledLink } from "./styles";

const DressCard = ({ col, title, value, src }) => {
  return (
    <StyledLink
      href={`/category?dressStyle_like=${value}`}
      className={`col-${col} text-decoration-none text-black`}
    >
      <StyledCard className="bg-white position-relative rounded-4 mb-3">
        <h3 className="z-2 position-relative pt-4 ps-4 fw-bold">{title}</h3>
        <Image
          src={src}
          alt={title}
          fill
          className="object-fit-cover rounded-4"
          sizes="300px"
        />
      </StyledCard>
    </StyledLink>
  );
};

export default DressCard;
