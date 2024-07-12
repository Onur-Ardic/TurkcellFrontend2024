import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  color: #fff;
  background-color: #007bff;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <ButtonLink href={`/product/${product.id}`}>View Details</ButtonLink>
    </Card>
  );
};

export default ProductCard;
