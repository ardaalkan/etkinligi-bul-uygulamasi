import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataForSlide } from "../../Data/SliderData.js";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const PopSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="popslider-container-box">
      <h1> Popüler Etkinlikler </h1>
      <div className="popslider-container">
        <Slider {...settings}>
          {dataForSlide.map((item) => (
            <div className="card">
              <div className="card-top">
                <img src={item.linkImg} alt={item.title} />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <p className="category">{item.category}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopSlider;
