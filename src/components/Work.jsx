import { Swiper, SwiperSlide } from "swiper/react";
import { PrevBtn, NextBtn } from "../Common/Icon";
import ComnHeading from "../Common/ComnHeading";
import upper_layer_work from "../assets/images/webp/work_upper_layer.webp";
import bottom_layer_work from "../assets/images/webp/work_bottom_layer.webp";
import slide_1 from "../assets/images/webp/slider-1.webp";
import slide_2 from "../assets/images/webp/slider-2.webp";
import slide_3 from "../assets/images/webp/slider-3.webp";
import slide_4 from "../assets/images/webp/slider-4.webp";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

function Work() {
  return (
    <>
      <div className=" bg_color_ice_blast position-relative">
        <img className=" w-100" src={upper_layer_work} alt="upper_layer_work" />
        <div className="container pb-5">
          <div className=" text-center">
            <ComnHeading color=" text-white" text="See Our Latest Work" />
          </div>
          <Swiper
            className=" mt-5 pt-2"
            slidesPerView={2.5}
            spaceBetween={0}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            effect={"coverflow"}
            navigation={{
              nextEl: ".swiper-btn-next",
              prevEl: ".swiper-btn-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 150,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              992: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
            }}
          >
            <SwiperSlide className=" gallery-slide">
              <img src={slide_1} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide className=" gallery-slide">
              {" "}
              <img src={slide_2} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide className=" gallery-slide">
              {" "}
              <img src={slide_3} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide className=" gallery-slide">
              {" "}
              <img src={slide_4} alt="slide_1" />
            </SwiperSlide>
            <SwiperSlide className=" gallery-slide">
              {" "}
              <img src={slide_3} alt="slide_1" />
            </SwiperSlide>
          </Swiper>
          <div className="d-none d-lg-block">
            <div className="swiper-btn-prev  position-absolute btn_prev_pos d-flex justify-content-center align-items-center">
              <PrevBtn />
            </div>
          </div>
          <div className="d-none d-lg-block">
            <div className="swiper-btn-next  d-flex btn_prev_pos2 position-absolute justify-content-center align-items-center">
              <NextBtn />
            </div>
          </div>
        </div>
        <img
          className=" w-100"
          src={bottom_layer_work}
          alt="upper_layer_work"
        />
      </div>
    </>
  );
}

export default Work;
