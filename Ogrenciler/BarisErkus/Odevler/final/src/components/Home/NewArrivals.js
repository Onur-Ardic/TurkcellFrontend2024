import ShowCase from "../ShowCase";
import { getNewArrivals } from "@/server/product";
import { getTranslations } from "next-intl/server";

const NewArrivals = async () => {
  const data = await getNewArrivals();
  const t = await getTranslations("Home");

  return (
    <div id="newArrivals">
      <ShowCase title={t("newArrivals")} button cards={data} />
    </div>
  );
};

export default NewArrivals;
