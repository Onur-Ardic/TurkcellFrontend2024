// pages/index.js

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../redux/slices/productsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Layout>
      <section>
        <h2>Featured Products</h2>
        <ProductList products={products.slice(0, 4)} />
      </section>
      <section>
        <h2>Popular Products</h2>
        <ProductList products={products.slice(4, 8)} />
      </section>
    </Layout>
  );
};

export default HomePage;
