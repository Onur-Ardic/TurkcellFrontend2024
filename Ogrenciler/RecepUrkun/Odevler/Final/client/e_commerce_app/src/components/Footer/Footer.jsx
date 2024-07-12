import Image from "next/image";
import { FaInstagram, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa6";
import credit_cards from "@/assets/footer/credit_card.png";
import {
  AllRightsReserved,
  BgUp,
  EmailInput,
  FooterLinks,
  LatestOffer,
  ShopCoBody,
  ShopCoInformation,
  ShopCoTitle,
  SubscribeButton,
} from "./Styled";
import { useTranslations } from "next-intl";
import { Divider } from "@/styles/GlobalStyled";

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <BgUp className="d-flex flex-column flex-md-row bg-black text-white rounded-4 w-100">
            <div className="col-12 col-md-6 mx-auto pt-4 ps-4 p-md-5">
              <LatestOffer>{t("Offer")}</LatestOffer>
            </div>
            <div className="col-12 col-md-3 mx-auto d-flex flex-column justify-content-center gap-3 p-3">
              <EmailInput
                type="text"
                placeholder="Enter your email address"
              ></EmailInput>
              <SubscribeButton className="btn btn-light" type="submit">
                {t("Subscribe")}
              </SubscribeButton>
            </div>
          </BgUp>
          <ShopCoBody className="d-flex flex-row flex-wrap w-100">
            <div className="col-12 col-md-4">
              <div className="me-3 me-md-5 ">
                <ShopCoTitle> {t("Title")}</ShopCoTitle>
                <ShopCoInformation>{t("Information")}</ShopCoInformation>
                <span className="d-flex mt-4 gap-3">
                  <FaTwitter
                    className="bg-white text-dark rounded-pill p-2"
                    size={28}
                  />
                  <FaFacebookF
                    className="bg-dark text-white p-2 rounded-pill"
                    size={28}
                  />
                  <FaInstagram
                    className="bg-white text-dark rounded-pill p-1"
                    size={28}
                  />
                  <FaGithub
                    className="bg-white text-dark rounded-pill p-1"
                    size={28}
                  />
                </span>
              </div>
            </div>
            <FooterLinks className="col-12 col-md-8 d-flex flex-row flex-wrap">
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("Company")}</h6>
                <ul>
                  <li>{t("About")}</li>
                  <li>{t("Features")}</li>
                  <li>{t("Works")}</li>
                  <li>{t("Career")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("HELP")}</h6>
                <ul>
                  <li>{t("CustomerSupport")}</li>
                  <li>{t("Delivery")}</li>
                  <li>{t("Terms")}</li>
                  <li>{t("Privacy")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("FAQ")}</h6>
                <ul>
                  <li>{t("Account")}</li>
                  <li>{t("ManageDeliveries")}</li>
                  <li>{t("Orders")}</li>
                  <li>{t("Payments")}</li>
                </ul>
              </div>
              <div className="col-6 col-md-3 mt-4 mt-md-0">
                <h6 className="fw-bold mb-4">{t("RESOURCES")}</h6>
                <ul>
                  <li>{t("FreeBooks")}</li>
                  <li>{t("DevTutorial")}</li>
                  <li>{t("HowToBlog")}</li>
                  <li>{t("YTPlaylist")}</li>
                </ul>
              </div>
            </FooterLinks>
          </ShopCoBody>
          <Divider />
          <div className="d-flex flex-md-row flex-column align-items-center justify-content-between w-100 pb-5">
            <AllRightsReserved>{t("AllRightReserved")}</AllRightsReserved>
            <Image src={credit_cards} alt="credit_cards" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
