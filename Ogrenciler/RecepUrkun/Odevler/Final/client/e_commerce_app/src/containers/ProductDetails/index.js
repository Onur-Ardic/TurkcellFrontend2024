import AlsoLike from '@/components/AlsoLike/AlsoLike';
import MainDetail from '@/components/MainDetail/MainDetail';
import ProductComments from '@/components/ProductComments/ProductComments';

const ProductDetailsContainer = ({ product }) => {
    return (
        <>
            <MainDetail product={product} />
            <ProductComments product={product} />
            <AlsoLike />
        </>
    );
};

export default ProductDetailsContainer;
