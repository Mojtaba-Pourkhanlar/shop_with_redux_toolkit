import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner01 from "frontEnd/assets/baner/baner01.webp";
import banner02 from "frontEnd/assets/baner/baner02.gif";
import banner03 from "frontEnd/assets/baner/baner03.webp";
import banner04 from "frontEnd/assets/baner/baner04.webp";
import banner05 from "frontEnd/assets/baner/baner05.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { autoplayProgress, autoplayProgressSvg, swiperSlideImg } from "./style";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div style={{ marginTop: "159px" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner01} alt="banner01" style={swiperSlideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner02} alt="banner01" style={swiperSlideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner03} alt="banner01" style={swiperSlideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner04} alt="banner01" style={swiperSlideImg} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner05} alt="banner01" style={swiperSlideImg} />
        </SwiperSlide>
        <div style={autoplayProgress} slot="container-end">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            style={autoplayProgressSvg}
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
