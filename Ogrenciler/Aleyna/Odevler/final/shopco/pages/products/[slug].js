

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductBySlug } from '../../redux/slices/productsSlice';
import Layout from '../../components/Layout';
import ProductDetail from '../../components/ProductDetail';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currentProduct);

  useEffect(() => {
    if (slug) {
      dispatch(getProductBySlug(slug));
    }
  }, [slug, dispatch]);

  return (
    <Layout>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </Layout>
  );
};

export default ProductPage;
