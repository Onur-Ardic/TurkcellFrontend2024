import Image from "next/image";
import {
  BigImage,
  BigImageContainer,
  LitteImages,
  LittleImageContainer,
  Row,
} from "./styles";

const images = [
  {
    id: 1,
    src: "/images/detail/image-1.png",
  },
  {
    id: 2,
    src: "/images/detail/image-2.png",
  },
  {
    id: 3,
    src: "/images/detail/image-3.png",
  },
];

const ImagesContainer = ({ productImage }) => {
  return (
    <div className="container ps-0">
      <Row className="row">
        <LitteImages className="col-lg-3 col-12 gap-3 px-0">
          {images.map((image) => (
            <LittleImageContainer key={image.id} className="position-relative">
              <Image
                src={image.src}
                alt="product"
                className="obejct-fit-cover rounded-4"
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </LittleImageContainer>
          ))}
        </LitteImages>
        <BigImage className="col-lg-9 col-12">
          <BigImageContainer>
            <Image
              src={`/images/wears/${productImage}.png`}
              alt="product"
              className="obejct-fit-cover rounded-4"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </BigImageContainer>
        </BigImage>
      </Row>
    </div>
  );
};

export default ImagesContainer;
