import { useTranslations } from "next-intl";
import Form from "./Form";
import { H2, NewsletterSection, Section } from "./styles";

const Newsletter = () => {
  const t = useTranslations("Footer");
  return (
    <NewsletterSection className="container">
      <Section>
        <H2>{t("stayup")}</H2>
      </Section>
      <Form />
    </NewsletterSection>
  );
};

export default Newsletter;
