import Image from "next/image";
import {
  HeroContainer,
  HeroTitle,
  HeroP,
  HeroButton,
  HeroNumber,
  HeroInf,
} from "./Styled";
import HeroImg from "@/assets/Hero/hero.png";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <HeroContainer>
      <div className="container mt-4">
        <div className="row flex-row">
          <div className="col-12 col-md-6">
            <HeroTitle>{t("title")}</HeroTitle>
            <HeroP>{t("titleDescription")}</HeroP>
            <HeroButton className="mt-4 mt-md-4_5">
              {t("ShopNowBtn")}
            </HeroButton>
            <div className="d-flex flex-row flex-wrap justify-content-center align-items-center mt-3_5 mt-md-4_5">
              <div className="d-flex flex-column">
                <HeroNumber>200+</HeroNumber>
                <HeroInf>{t("Int_Brands")}</HeroInf>
              </div>
              <div className="vr mx-4"></div>
              <div className="d-flex flex-column">
                <HeroNumber>2,000+</HeroNumber>
                <HeroInf>{t("HQProducts")}</HeroInf>
              </div>
              <div className="vr mx-4 d-none d-md-block"></div>
              <div className="d-flex flex-column">
                <HeroNumber>30,000+</HeroNumber>
                <HeroInf>{t("HappyCustomers")}</HeroInf>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <Image
              src={HeroImg}
              alt="hero"
              priority
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
