import { getProductDetails } from "@/api/server";
import AlsoLike from "@/components/Products/AlsoLike";
import Breadcrumb from "@/components/Products/Breadcrumb";
import ProductDetail from "@/components/Products/ProductDetail";
import ProductTabs from "@/components/Products/ProductTabs";
import { Container } from "@/styles/LayoutStyle";


const page = async ({ params }) => {
  console.log(params)
  const data = await getProductDetails(params.slug);
 
  return (
    <>
      <Container>
        <div className="row">
          <div className="col-12">
            <Breadcrumb category={data.category} product={data.title} />
            <ProductDetail product={data} />
          </div>
        </div>
        <ProductTabs data={data}/>
        <AlsoLike />
      </Container>
    </>
  )
}

export default page