"use client";
import { CategoryName, DressTitle, DressWrapper } from "./Styled";
import image11 from "@/assets/DressStyle/image_11.png";
import image12 from "@/assets/DressStyle/image_12.png";
import image13 from "@/assets/DressStyle/image_13.png";
import image14 from "@/assets/DressStyle/image_14.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DressStyle = () => {
  const t = useTranslations("DressStyle");
  const pathname = usePathname();

  return (
    <DressWrapper className="container">
      <div className="row">
        <DressTitle>{t("title")}</DressTitle>
        <div className="d-flex flex-column justify-content-center px-6">
          <div className="d-flex flex-column flex-md-row">
            <div className="col-12 col-md-4 mb-3 mb-md-0 pe-md-3_5 pe-0">
              <Link href={`${pathname}/category/casual`}>
                <CategoryName
                  className="position-absolute z-1"
                  style={{ paddingTop: "25px", paddingLeft: "36px" }}
                >
                  {t("Casual")}
                </CategoryName>
                <Image
                  src={image11}
                  alt="image11"
                  className="rounded-4 w-100"
                  width={407}
                  height={289}
                  priority
                  sizes="(max-width: 425px) 190px, 310px"
                />
              </Link>
            </div>
            <div className="col-12 col-md-8 mb-3 mb-md-0">
              <Link href={`${pathname}/category/formal`}>
                <CategoryName
                  className="position-absolute z-1"
                  style={{ paddingTop: "25px", paddingLeft: "36px" }}
                >
                  {t("Formal")}
                </CategoryName>
                <Image
                  src={image13}
                  alt="image13"
                  className="rounded-4 w-100"
                  width={684}
                  height={289}
                  priority
                  sizes="(max-width: 425px) 190px, 310px"
                />
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row mt-0 mt-md-3_5 mb-6_5">
            <div className="col-12 col-md-8 mb-3 mb-md-0 pe-md-3_5 pe-0">
              <Link href={`${pathname}/category/party`}>
                <CategoryName
                  className="position-absolute z-1"
                  style={{ paddingTop: "25px", paddingLeft: "36px" }}
                >
                  {t("Party")}
                </CategoryName>
                <Image
                  src={image12}
                  alt="image12"
                  className="rounded-4 w-100"
                  width={684}
                  height={289}
                  priority
                  sizes="(max-width: 425px) 190px, 310px"
                />
              </Link>
            </div>
            <div className="col-12 col-md-4">
              <Link href={`${pathname}/category/gym`}>
                <CategoryName
                  className="position-absolute z-1"
                  style={{ paddingTop: "25px", paddingLeft: "36px" }}
                >
                  {t("Gym")}
                </CategoryName>
                <Image
                  src={image14}
                  alt="image14"
                  className="rounded-4 w-100"
                  width={407}
                  height={289}
                  priority
                  sizes="(max-width: 425px) 190px, 310px"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DressWrapper>
  );
};

export default DressStyle;
