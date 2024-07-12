import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  position: relative;
  background: #f9f9f9;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 8px;
`;

const Price = styled.p`
  font-size: 16px;
  color: #0070f3;
  margin: 0;
`;

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`} passHref>
      <a>
        <Card>
          <ImageContainer>
            <Image src={product.image} alt={product.name} />
          </ImageContainer>
          <Info>
            <Title>{product.name}</Title>
            <Price>${product.price}</Price>
          </Info>
        </Card>
      </a>
    </Link>
  );
}
