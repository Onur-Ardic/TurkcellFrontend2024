"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { calculateRating } from "@/lib/helpers";
import WearCard from "./Wear/Card";
import StyledButton from "@/components/Button";
import CommentCard from "./CommentCard";
import { Link } from "@/navigation";

const ViewButton = ({ data, type }) => {
  const [click, setClick] = useState(false);
  const t = useTranslations("ShowCase");

  return (
    <>
      {click && type === "wear"
        ? data.slice(4).map((item) => {
            const rating = calculateRating(item.comments);
            return (
              <Link key={item.id} href={`/product/${item.id}`}>
                <WearCard
                  src={item.image}
                  title={item.title}
                  rating={rating}
                  price={item.price}
                  discount={item.discount}
                />
              </Link>
            );
          })
        : click &&
          type === "comment" &&
          data
            .slice(6)
            .map((comment) => (
              <CommentCard
                key={comment.id}
                username={comment.username}
                rating={comment.rating}
                content={comment.content}
                createdAt={comment.created_at}
                postedDate
              />
            ))}
      <div className="col-12 d-flex justify-content-center">
        {click ? (
          <StyledButton
            className="mt-0"
            onClick={() => {
              setClick(false);
            }}
          >
            {t("viewLess")}
          </StyledButton>
        ) : (
          <StyledButton
            className="mt-0"
            onClick={() => {
              setClick(true);
            }}
          >
            {t("viewAll")}
          </StyledButton>
        )}
      </div>
    </>
  );
};

export default ViewButton;
