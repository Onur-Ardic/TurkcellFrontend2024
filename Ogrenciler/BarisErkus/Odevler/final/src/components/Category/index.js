import { Link } from "@/navigation";
import { getProducts } from "@/server/product";
import { calculateRating } from "@/lib/helpers";

import WearCardList from "../Wear/CardList";
import WearCard from "../Wear/Card";
import FilterComponent from "./Filter";
import Header from "./Header";
import Pagination from "./Pagination";

const Category = async ({ searchParams }) => {
  const query = new URLSearchParams(searchParams).toString();
  const page = searchParams["_page"] ?? "1";
  const limit = searchParams["_limit"] ?? "9";
  const data = await getProducts(`${query}&_page=${page}&_limit=${limit}`);

  return (
    <div className="container ps-0">
      <div className="row m-0 p-0">
        <div className="col-lg-3 d-xxl-block d-none m-0 p-0">
          <FilterComponent />
        </div>
        <div className="col-lg-9 m-0 p-0">
          <Header length={data.length} />
          <WearCardList className="align-items-center justify-content-center justify-content-start mt-4">
            {data.map((card) => {
              const rating = calculateRating(card.comments);
              return (
                <Link key={card.id} href={`/product/${card.id}`}>
                  <WearCard
                    src={card.image}
                    title={card.title}
                    price={card.price}
                    discount={card.discount}
                    rating={rating}
                  />
                </Link>
              );
            })}
          </WearCardList>
          <Pagination hasNextPage={data.length >= 9} hasPrevPage={page > 1} />
        </div>
      </div>
    </div>
  );
};

export default Category;
