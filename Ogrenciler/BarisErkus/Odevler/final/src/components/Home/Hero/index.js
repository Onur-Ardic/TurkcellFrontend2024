import Image from "next/image";
import { Container, Section, StyledLandingMobile } from "./styles";
import Content from "./Content";

const HomeBanner = () => {
  return (
    <Section>
      <Image
        src="/images/homebanner/home-banner.png"
        alt="Home Banner"
        fill
        quality={100}
        priority
        className="object-fit-cover d-md-block d-none"
        sizes="100vw"
      />
      <Container className="container">
        <div className="position-relative">
          <div className="col-lg-6 px-3">
            <Content />
          </div>
          <div className="position-absolute bottom-50 start-50 d-xxl-flex d-none">
            <Image
              src="/images/homebanner/small-vector.png"
              alt="Small Vector"
              width={50}
              height={50}
            />
          </div>
          <div className="position-absolute start-100 top-0 d-xxl-flex d-none">
            <Image
              src="/images/homebanner/big-vector.png"
              alt="Big Vector"
              width={50}
              height={50}
            />
          </div>
        </div>
        <StyledLandingMobile className="d-md-none d-block position-relative">
          <Image
            src="/images/homebanner/small-home-banner.png"
            alt="mobile-landing"
            fill
            className="object-fit-cover"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </StyledLandingMobile>
      </Container>
    </Section>
  );
};

export default HomeBanner;
