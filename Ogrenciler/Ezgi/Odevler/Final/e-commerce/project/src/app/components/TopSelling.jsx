import ProductCard from './ProductCard';
import { ViewAllBtn } from './styles/styled';

const TopSelling = ({ products }) => {
  return (
    <div className="container pb-4">
      <h2 className="text-center fw-bold fs-1 pb-5">TOP SELLING</h2>
      <div className="d-flex justify-content-center gap-4 pb-5">
        {products && products.length > 0 ? (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className='text-center'>No top-selling found.</p>
        )}
      </div>
      <div className='text-center mb-5'>
        <ViewAllBtn className='ps-5 pe-5 py-2 border border-1 rounded-5 fw-semibold bg-white'>View All</ViewAllBtn>
      </div>
    </div>
  );
};

export default TopSelling;
