import React from "react";
import { notFound } from "next/navigation";
import productsData from "../../../datas/db.json";
import dynamic from "next/dynamic";

const FilterCategoryCard = dynamic(
  () => import("../../../components/FilterCategoryCard/index"),
  {
    ssr: false,
  }
);

const CategoryCard = dynamic(
  () => import("../../../components/CategoryCard/index"),
  {
    ssr: false,
  }
);

export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    params: { slug: [product.style.toLowerCase()] },
  }));
}

export async function generateMetadata({ params }) {
  const product = productsData.products.find(
    (p) => p.style.toLowerCase() === params.slug[0]
  );
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${
      product.style.charAt(0).toUpperCase() + product.style.slice(1)
    } Products`,
  };
}

export default function CategoryPage({ params }) {
  const style = params.slug[0];

  const product = productsData.products.find(
    (p) => p.style.toLowerCase() === style
  );

  if (!product) {
    notFound();
  }

  return (
    <>
      <div>
        <div className="text-center mt-3">
          <h2>{style.charAt(0).toUpperCase() + style.slice(1)}</h2>{" "}
        </div>
        <CategoryCard style={style} />
      </div>
    </>
  );
}
