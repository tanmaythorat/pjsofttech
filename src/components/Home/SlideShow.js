import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlideShow.css";
import pjimg from "../images/pjsoft1.jpg";
import pjimg1 from "../images/pjsoft2.jpg"
import pjimg2 from "../images/pjsoft3.jpg";
import pjimg3 from "../images/pjsoft4.jpg";
import pjimg4 from "../images/pjsoft5.jpg";
import pjimg5 from "../images/pjsoft6.jpg";
import pjimg6 from "../images/pjsoft7.jpg";
import pjimg7 from "../images/pjsoft8.jpg";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000 milliseconds)
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {/* Add your slide content here */}
        <div>
          <img src={pjimg} alt="Slide 1" className="size" />
        </div>
        <div>
          <img src={pjimg1} alt="Slide 2" className="size" />
        </div>
        <div>
          <img src={pjimg2} alt="Slide 3" className="size" />
        </div>
        <div>
          <img src={pjimg3} alt="Slide 3" className="size" />
        </div>
        <div>
          <img src={pjimg4} alt="Slide 3" className="size" />
        </div>
        <div>
          <img src={pjimg5} alt="Slide 3" className="size" />
        </div>
        <div>
          <img src={pjimg6} alt="Slide 3" className="size" />
        </div>
        <div>
          <img src={pjimg7} alt="Slide 3" className="size" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;