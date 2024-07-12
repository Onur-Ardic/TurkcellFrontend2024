import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Bottom,
  Paragraph,
  PaymentIcon,
  PaymentIconsContainer,
} from "./styles";

const FooterBottom = () => {
  const t = useTranslations("Footer");
  return (
    <div className="container mt-5">
      <Bottom>
        <Paragraph>{t("shopco")}</Paragraph>
        <PaymentIconsContainer>
          <PaymentIcon href="#">
            <Image
              src="/images/payment/visa.png"
              alt="Visa"
              width={30}
              height={12}
            />
          </PaymentIcon>
          <PaymentIcon href="#">
            <Image
              src="/images/payment/mastercard.png"
              alt="Visa"
              width={30}
              height={12}
            />
          </PaymentIcon>
          <PaymentIcon href="#">
            <Image
              src="/images/payment/paypal.png"
              alt="Visa"
              width={30}
              height={12}
            />
          </PaymentIcon>
          <PaymentIcon href="#">
            <Image
              src="/images/payment/apple.png"
              alt="Visa"
              width={30}
              height={12}
            />
          </PaymentIcon>
          <PaymentIcon href="#">
            <Image
              src="/images/payment/google.png"
              alt="Visa"
              width={30}
              height={12}
            />
          </PaymentIcon>
        </PaymentIconsContainer>
      </Bottom>
    </div>
  );
};

export default FooterBottom;
