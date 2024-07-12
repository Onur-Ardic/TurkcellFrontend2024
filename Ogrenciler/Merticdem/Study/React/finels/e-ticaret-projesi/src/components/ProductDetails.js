import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const Info = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 20px;
  color: #0070f3;
  margin-bottom: 10px;
`;

export default function ProductDetails({ product }) {
  return (
    <Container>
      <Image src={product.image} alt={product.name} />
      <Info>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
      </Info>
    </Container>
  );
}
