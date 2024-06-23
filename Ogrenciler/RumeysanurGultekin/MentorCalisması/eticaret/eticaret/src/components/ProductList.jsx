import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readProducts } from '../redux/slice/Productslice';
import { setCategory, setSortBy, filterProducts } from '../redux/slice/Filterslice';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import styles from '../App';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  const { filteredProducts, selectedCategory, sortBy } = useSelector((store) => store.filter);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(readProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterProducts(products));
  }, [selectedCategory, sortBy, products, dispatch]);

  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

  const handleSortChange = (sortType) => {
    dispatch(setSortBy(sortType));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', textAlign: 'start'}  }>
      <div style={{ flex: '1', padding: '10px' }}>
          <h3>Filtrele</h3>
          <div>
            <p key="all" onClick={() => handleCategoryClick('')}>Tümü</p>
            {uniqueCategories.map((category, index) => (
              <p key={index} onClick={() => handleCategoryClick(category)}>
                <a href="#" style={{ cursor: 'pointer' , color:'#003459'}}>{category}</a>
              </p>
            ))}
          </div>
      </div>

      <div style={{ flex: '4' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
          <h1 style={{ textAlign: 'center' }}>Tüm Ürünler</h1>
          <div className="dropdown">
            <button className="dropbtn">Sırala</button>
            <div className="dropdown-content">
              <a href="#" onClick={() => handleSortChange('descending')}>Fiyata göre (azalan)</a>
              <a href="#" onClick={() => handleSortChange('ascending')}>Fiyata göre (artan)</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
