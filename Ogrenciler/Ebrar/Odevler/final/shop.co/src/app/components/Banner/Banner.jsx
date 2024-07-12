import {
  BannerContainer,
  ContentWrapper,
  Title,
  Paragraph,
  Button,
  FeatureWrapper,
  FeatureItem,
  ImageWrapper,
  BrandsContainer,
  BrandItem,
} from "./Banner.style";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <ContentWrapper>
          <Title className="text-uppercase">
            Find Clothes That Matches Your Style
          </Title>
          <Paragraph>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Paragraph>
          <Link href={"/category/casual"}>
            {" "}
            <Button>Shop Now</Button>
          </Link>

          <FeatureWrapper>
            <FeatureItem>
              <h3>200+</h3>
              <p>International Brands</p>
            </FeatureItem>
            <FeatureItem>
              <h3>2,000+</h3>
              <p>High Quality Products</p>
            </FeatureItem>
            <FeatureItem>
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </FeatureItem>
          </FeatureWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <img src="https://r.resimlink.com/QyoJjPqg.jpeg" alt="banner-photo" />
        </ImageWrapper>
      </BannerContainer>
      <BrandsContainer>
        <BrandItem>
          <img src="https://i.hizliresim.com/i1rs4mc.png" alt="" />
        </BrandItem>
        <BrandItem>
          <img src="https://i.hizliresim.com/gp3u97q.png" alt="" />
        </BrandItem>
        <BrandItem>
          <img src="https://i.hizliresim.com/t1tyhk7.png" alt="" />
        </BrandItem>
        <BrandItem>
          <img src="https://i.hizliresim.com/mwj04n7.png" alt="" />
        </BrandItem>
        <BrandItem>
          <img src="https://i.hizliresim.com/1lvfplg.png" alt="" />
        </BrandItem>
      </BrandsContainer>
    </>
  );
};

export default Banner;
