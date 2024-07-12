import DressCard from "./DressCard";
import { useTranslations } from "next-intl";
import { Main } from "./styles";

const casual = "/images/dress/casual.png";
const formal = "/images/dress/formal.png";
const party = "/images/dress/party.png";
const gym = "/images/dress/gym.png";

const Browse = () => {
  const t = useTranslations("Home");
  return (
    <Main className="container-xl py-5 rounded-5 px-5">
      <h2 className="text-center">{t("browse")}</h2>
      <div className="row mt-5">
        <DressCard col={4} title={t("casual")} value="casual" src={casual} />
        <DressCard col={8} title={t("formal")} value="formal" src={formal} />
        <DressCard col={8} title={t("party")} value="party" src={party} />
        <DressCard col={4} title={t("gym")} value="gym" src={gym} />
      </div>
    </Main>
  );
};

export default Browse;
