import ShowCase from "../ShowCase";
import { getTopSelling } from "@/server/product";
import { getTranslations } from "next-intl/server";

const TopSelling = async () => {
  const data = await getTopSelling();
  const t = await getTranslations("Home");

  return (
    <div id="topSelling">
      <ShowCase title={t("topSellers")} button cards={data} />
    </div>
  );
};

export default TopSelling;
