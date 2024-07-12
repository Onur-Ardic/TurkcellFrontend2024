import React from "react";
import {
  H1,
  Paragraph,
  StatsItem,
  StatsNum,
  StatsParagraph,
  StatsWrapper,
} from "./styles";
import Button from "@/components/Button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const Content = () => {
  const t = useTranslations("Home");
  return (
    <>
      <H1>{t("findClothes")}</H1>
      <Paragraph className="text-gray">{t("contentDesc")}</Paragraph>
      <Link href="/category">
        <Button theme="dark" className="bg-black text-white">
          {t("shopNow")}
        </Button>
      </Link>
      <StatsWrapper className="d-flex flex-wrap gap-4">
        <StatsItem>
          <StatsNum>200+</StatsNum>
          <StatsParagraph>{t("internationalBrands")}</StatsParagraph>
        </StatsItem>
        <StatsItem>
          <StatsNum>2,000+</StatsNum>
          <StatsParagraph>{t("highQualityProducts")}</StatsParagraph>
        </StatsItem>
        <StatsItem>
          <StatsNum>30,000+</StatsNum>
          <StatsParagraph>{t("happyCustomers")}</StatsParagraph>
        </StatsItem>
      </StatsWrapper>
    </>
  );
};

export default Content;
