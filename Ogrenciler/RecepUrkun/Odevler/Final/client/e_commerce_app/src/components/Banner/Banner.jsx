import { getTranslations } from "next-intl/server";
import { BannerTitle, BannerSignUpNow } from "./Styled";

const Banner = async () => {
  const t = await getTranslations("Banner");

  return (
    <div className="bg-black d-flex justify-content-center text-light p-2">
      <div className="col-10 mx-auto text-center">
        <BannerTitle>
          {t("Title")}
          <BannerSignUpNow href="#">{t("SignUp")}</BannerSignUpNow>
        </BannerTitle>
      </div>
      <div className="col-2 text-start d-none d-md-block">
        <h6>X</h6>
      </div>
    </div>
  );
};

export default Banner;
