import Image from "next/image";

const brands = [
  {
    id: 1,
    src: "/images/brands/versace.png",
    alt: "Versace",
  },
  {
    id: 2,
    src: "/images/brands/zara.png",
    alt: "Zara",
  },
  {
    id: 3,
    src: "/images/brands/gucci.png",
    alt: "Gucci",
  },
  {
    id: 4,
    src: "/images/brands/prada.png",
    alt: "Prada",
  },
  {
    id: 5,
    src: "/images/brands/calvin-klein.png",
    alt: "Calvin Klein",
  },
];

const Brands = () => {
  return (
    <div className="container-fluid" id="brands">
      <div className="row">
        <div className="col-lg-12 bg-black py-5">
          <ul className="d-flex flex-wrap align-items-center justify-content-center gap-5 col-md:gap-1">
            {brands.map((brand) => (
              <li
                key={brand.id}
                className="col-md-4 col-lg-2 d-flex justify-content-center"
              >
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={170}
                  height={40}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
