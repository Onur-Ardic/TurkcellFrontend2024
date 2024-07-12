// components/ProductCard.js

import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${(props) => props.theme.cardBackground};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </CardContainer>
  );
};

export default ProductCard;
