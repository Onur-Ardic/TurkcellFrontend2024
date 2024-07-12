import Filters from "@/app/components/Filters";
import { getProductByCategory } from "../api";
import FilteredProducts from "@/app/components/FilteredProducts";


const ProductsPage = async ({ params }) => {
  const { category } = params;
  const products = await getProductByCategory(category);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Filters products={products} initialCategory={category} />
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between">
            <h3 className="fw-medium mb-4 text-capitalize">{category}</h3>
          </div>
          <div className="row">
            <FilteredProducts products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
