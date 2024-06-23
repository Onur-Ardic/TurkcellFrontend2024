import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = styled.div`
  width: 20%;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background-color: white;
  overflow: hidden;
`;

const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/productdetail/${product.id}`);
  };

  return (
    <Card>
      <div style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' , overflow: 'hidden'}}>
        <img src={product.image} alt={product.title} style={{ width: '100%', objectFit: 'contain', height: '300px' , padding: '10px'}} />
      </div>
      <div style={{ flex: 1 }}>
        <h3>{product.title}</h3>
        <h3>{product.price} $ </h3>
        
      </div>
      <div style={{ display:'flex', alignItems:'end' , justifyContent:'center', marginBottom: '20px'}}>
        <button onClick={handleDetailClick}>Ürün Detayları</button>
      </div>
    </Card>
  );
};

export default Product;
