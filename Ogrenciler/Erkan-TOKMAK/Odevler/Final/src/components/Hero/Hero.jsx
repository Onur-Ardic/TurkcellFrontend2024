import Image from "next/image";

import { useTranslations } from "next-intl";
import { HeroButton, HeroSub, HeroSubText, HeroText, HeroTitle, StyledLandingMobile } from "@/styles/HeroStyle";
import { Link } from "@/navigation";
import { Container } from "@/styles/LayoutStyle";

const Hero = () => {
    const t = useTranslations();
    return (
        <section className="landingPage">
            <Container>
                <div className="col-lg-6 ">
                    <HeroTitle>
                        {t("bannerTitle")}
                    </HeroTitle>
                    <HeroText>
                        {t("bannerText")}
                    </HeroText>
                    <Link href="/shop">
                        <div className="d-none d-md-block">
                            <HeroButton>
                                {t("bannerButton")}
                            </HeroButton>
                        </div>
                        <div className="d-block d-md-none">
                            <HeroButton className="w-100">
                                {t("bannerButton")}
                            </HeroButton>
                        </div>
                    </Link>
                    <div className="pt-4 row">
                        <div className="col-md-4 col-6 text-md-start text-center">
                            <HeroSub>
                                200+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountOneText")}
                            </HeroSubText>
                        </div>
                        <div className="col-md-4 col-6 text-md-start text-center">
                            <HeroSub>
                                2,000+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountTwoText")}
                            </HeroSubText>
                        </div>
                        <div className="col-md-4 col-12 text-md-start text-center">
                            <HeroSub>
                                30,000+
                            </HeroSub>
                            <HeroSubText>
                                {t("bannerCountThreeText")}
                            </HeroSubText>
                        </div>
                    </div>
                </div>
                <StyledLandingMobile className="d-md-none d-block position-relative w-100">
                    <Image
                        src="/assets/banners/banneMobile.png"
                        alt="mobile-banner"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="rounded-4 object-fit-contain"
                    />
                </StyledLandingMobile>
            </Container>
        </section>
    );
};

export default Hero