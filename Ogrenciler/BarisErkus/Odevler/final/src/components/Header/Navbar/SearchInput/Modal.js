"use client";
import WearCard from "@/components/Wear/Card";
import WearCardList from "@/components/Wear/CardList";
import { calculateRating } from "@/lib/helpers";
import { getProducts } from "@/server/product";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ModalContent } from "./styles";

const Modal = () => {
  const t = useTranslations("Header");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (text === "") return;
      const data = await getProducts(`title_like=${text}`);
      setData(data);
    };
    fetchData();
  }, [text]);

  return (
    <div
      className="modal fade"
      id="searchModal"
      tabIndex="-1"
      aria-labelledby="searchModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <ModalContent className="modal-content">
          <div className="modal-body">
            <input
              type="search"
              className="form-control"
              placeholder={t("inputPlaceholder")}
              aria-label="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              autoFocus
            />
            <WearCardList>
              {data.length > 0
                ? data.map((wear) => {
                    const rating = calculateRating(wear.comments);
                    return (
                      <Link href={`/product/${wear.id}`} key={wear.id}>
                        <WearCard
                          src={wear.image}
                          title={wear.title}
                          price={wear.price}
                          discount={wear.discount}
                          rating={rating}
                        />
                      </Link>
                    );
                  })
                : null}
            </WearCardList>
          </div>
        </ModalContent>
      </div>
    </div>
  );
};

export default Modal;
