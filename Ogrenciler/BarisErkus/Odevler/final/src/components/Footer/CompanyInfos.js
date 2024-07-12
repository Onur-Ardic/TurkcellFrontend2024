import { useTranslations } from "next-intl";
import { Description, Logo, SocialIcon, SocialIconsContainer } from "./styles";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const CompanyInfos = () => {
  const t = useTranslations("Footer");
  return (
    <>
      <Logo>SHOP.CO</Logo>
      <Description>{t("desc")}</Description>
      <SocialIconsContainer>
        <SocialIcon href="#">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="#">
          <FaInstagram />
        </SocialIcon>
        <SocialIcon href="#">
          <FaGithub />
        </SocialIcon>
      </SocialIconsContainer>
    </>
  );
};

export default CompanyInfos;
