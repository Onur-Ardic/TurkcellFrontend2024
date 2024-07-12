import Newsletter from "./Newsletter";
import CompanyInfos from "./CompanyInfos";
import Infos from "./Infos";
import FooterBottom from "./Bottom";
import { FooterContainer } from "./styles";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const companyList = [t("about"), t("features"), t("works"), t("career")];
  const helpList = [
    t("customerSupport"),
    t("deliveryDetails"),
    t("terms"),
    t("privacy"),
  ];
  const faqList = [
    t("account"),
    t("manageDeliveries"),
    t("orders"),
    t("payments"),
  ];
  const resourcesList = [
    t("freeEbooks"),
    t("developmentTutorial"),
    t("howToBlog"),
    t("youtubePlaylist"),
  ];

  return (
    <FooterContainer>
      <Newsletter />
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="col-lg-2 mb-4 mb-lg-0 text-center">
            <CompanyInfos />
          </div>
          <Infos title={t("company")} list={companyList} />
          <Infos title={t("help")} list={helpList} />
          <Infos title={t("faq")} list={faqList} />
          <Infos title={t("resources")} list={resourcesList} />
        </div>
      </div>
      <FooterBottom />
    </FooterContainer>
  );
};

export default Footer;
