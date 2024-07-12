

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import ProductList from '../../components/ProductList';
import Filter from '../../components/Filter';
import { fetchProducts } from '../../redux/slices/productsSlice';

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products.filter(product => product.category === slug));
    }
  }, [products, slug]);

  const handleFilterChange = (name, value) => {
    let filteredList = [...products];

    if (name === 'sortBy') {
      if (value === 'price') {
        filteredList.sort((a, b) => a.price - b.price);
      } else if (value === 'date') {
        filteredList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }
    } else if (name === 'category') {
      filteredList = filteredList.filter(product => product.category === value);
    } else if (name === 'searchTerm') {
      filteredList = filteredList.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
    }

    setFilteredProducts(filteredList);
  };

  return (
    <Layout>
      <h2>{slug} Category</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </Layout>
  );
};

export default CategoryPage;
