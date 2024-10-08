import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import Image5 from "../../assets/image5.jpg";
import Image6 from "../../assets/image6.jpg";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  return (
    <div className="mb-8">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="outline-none">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-contain rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
