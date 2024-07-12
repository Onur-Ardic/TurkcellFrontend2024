// components/ProductDetail.js

import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ProductDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductDetail = ({ product }) => {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <ProductDetailContainer>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </ProductDetailContainer>
  );
};

export default ProductDetail;
