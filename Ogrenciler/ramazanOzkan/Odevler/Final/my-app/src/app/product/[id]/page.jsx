// src/app/category/page.jsx
import TopBanner from "@/components/TopBanner";
import Section4 from "@/components/Section4";
import ProductArea from "@/components/ProductArea";
import Footer from "@/components/Footer";
import ProductDetail from "@/components/ProductDetail";
import SectionFive from "@/components/Section5";
import "../../style.css";
import Header from "@/components/Header";
import CommentDetail from "@/components/CommentDetail";

const getData = async (id) => {
  try {
    const productResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?_limit=4`
    );

    const productRes = await productResponse.json();

    const detailResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?id=${id}`
    );

    const detailRes = await detailResponse.json();

    const commentsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comments?productId=${id}=&_limit=3`
    );

    const commentRes = await commentsResponse.json();

    return {
      products: productRes,
      detail: detailRes?.[0] || {},
      comments: commentRes || [],
    };
  } catch (err) {
    return { products: [], detail: {}, comments: [] };
  }
};

export default async function ProductDetailPage({ params }) {
  const { products, detail, comments } = await getData(params.id);
  return (
    <div>
      <TopBanner />
      <div className="container">
        <Header></Header>
      </div>
      <div className="col-lg-12 container">
        <ProductDetail productDetail={detail}></ProductDetail>
      </div>
      <CommentDetail comments={comments}></CommentDetail>
      {/* <Section4 comments={comments}></Section4> */}
      <ProductArea products={products}></ProductArea>
      <SectionFive></SectionFive>
      <div className="footer-bg">
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
