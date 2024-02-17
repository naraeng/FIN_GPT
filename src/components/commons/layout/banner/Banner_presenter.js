import { SliderItem, Wrapper } from "./Banner_styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/img/img0.png" />
        </div>
        <div>
          <SliderItem src="/img/img1.png" />
        </div>
        <div>
          <SliderItem src="/img/img2.png" />
        </div>
      </Slider>
    </Wrapper>
  );
}
