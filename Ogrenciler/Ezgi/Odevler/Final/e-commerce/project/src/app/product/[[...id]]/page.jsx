import { getProduct } from '../../../app/product/Api';
import ProductDetailPage from '../../components/ProductDetailPage';
export default async function page({ params }) {
    const { id } = params;
    const product = await getProduct(id);
    console.log("Product:", product);

    if (!product) {
        return <div className='text-center'>Ürün bulunamadı</div>;
    }
    return (
        <ProductDetailPage product={product} /> 
    );
}
