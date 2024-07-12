import ProductCard from "../components/ProductCard";
import styled from "styled-components";

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #0070f3;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const HeroText = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

async function fetchProducts() {
  const res = await fetch("http://localhost:3000/products");
  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <HeroSection>
        <HeroText>Welcome to Our Store</HeroText>
      </HeroSection>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </>
  );
}
