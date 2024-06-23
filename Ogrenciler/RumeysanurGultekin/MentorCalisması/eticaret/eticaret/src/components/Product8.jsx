import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readProducts, setSelectedProduct } from '../redux/slice/Productslice';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

const ProductEight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(readProducts());
  }, [dispatch]);

  return (
    <div > 
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'20px 40px'}}>
        <div style={{textAlign:'start'}}>
          <p>Yeni Ürünler:</p>
          <h3>Ürünlerimizden bazıları..</h3>
        </div>
        <div>
          <button style={{border:'1px solid black', borderRadius:'20px', padding:'10px 20px'}} onClick={() => navigate("/productlist")}>Daha Fazla Ürün </button>
        </div>
        
      </div>
      <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
        {products && products.slice(0,8).map((product) => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
      
    </div>
  );
};

export default ProductEight;