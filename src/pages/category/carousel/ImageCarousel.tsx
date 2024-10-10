import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imagecr1 from "../../../assets/imagecr1.jpg";
import imagecr2 from "../../../assets/imagecr2.jpg";
import imagecr3 from "../../../assets/imagecr3.jpg";

const ImageCarousel: React.FC = () => {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src={imagecr1} alt="Image 1" />
      </div>
      <div>
        <img src={imagecr2} alt="Image 2" />
      </div>
      <div>
        <img src={imagecr3} alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
