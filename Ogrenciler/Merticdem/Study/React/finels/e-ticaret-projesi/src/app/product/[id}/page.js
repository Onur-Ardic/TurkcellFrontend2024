import styled from "styled-components";

const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #0070f3;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: 18px;
`;

async function fetchProduct(id) {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await fetchProduct(params.id);

  return (
    <ProductDetailContainer>
      <Image src={product.image} alt={product.name} />
      <Info>
        <Title>{product.name}</Title>
        <Price>${product.price}</Price>
        <Description>{product.description}</Description>
      </Info>
    </ProductDetailContainer>
  );
}
