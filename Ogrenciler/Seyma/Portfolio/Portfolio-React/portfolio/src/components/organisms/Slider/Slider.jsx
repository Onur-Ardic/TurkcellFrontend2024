import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Slider {...settings}>
        <div>
         <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />
        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />

        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />

        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />

        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />

        </div>
        <div>
        <img src="https://cdn.pixabay.com/photo/2023/03/15/20/46/background-7855413_1280.jpg" alt="" />

        </div>
      </Slider>
    </div>
  );
}
