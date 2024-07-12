import { Container, Row, H2 } from "./styles";
import WearCard from "@/components/Wear/Card";
import WearCardList from "./Wear/CardList";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { calculateRating } from "@/lib/helpers";
import ViewButton from "./ViewButton";

const ShowCase = ({ title, button, cards }) => {
  const t = useTranslations("ShowCase");
  return (
    <section>
      <Container className="container">
        <Row className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center">
            <H2 className=" text-center">{title}</H2>
            <WearCardList>
              {cards && cards.length > 0 ? (
                cards.slice(0, 4).map((card) => {
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
                })
              ) : (
                <div>{t("productsAreNotFound")}</div>
              )}
              {button && cards.length > 4 && (
                <ViewButton data={cards} type="wear" />
              )}
            </WearCardList>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ShowCase;
