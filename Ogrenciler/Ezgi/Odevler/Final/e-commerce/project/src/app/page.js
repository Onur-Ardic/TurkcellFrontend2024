import Brands from "./components/Brands";
import BrowseByStyle from "./components/BrowseByDressStyle";
import Comments from "./components/Comments";
import NewArrivals from "./components/NewArrivals";
import Showcase from "./components/Showcase";
import TopSelling from "./components/TopSelling";


async function getProducts() {
  const res = await fetch('http://localhost:3000/products', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
  const data = await res.json();
  return data;
}

async function getComments() {
  const res = await fetch('http://localhost:3000/customerComments', {
    cache: 'no-store',
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const products = await getProducts();
  const newArrivalsProducts = products.filter(product => product.newArrivals);
  const topSellingProducts = products.filter(product => product.topSelling);
  const allComments = await getComments();
  const fiveStarsComments = allComments.filter(comment => comment.rating === 5);

  return (
    <main>
      <Showcase />
      <Brands />
      <NewArrivals products={newArrivalsProducts} />
      <TopSelling products={topSellingProducts} />
      <BrowseByStyle />
      <Comments allComments={fiveStarsComments} />
    </main>
  );
}
