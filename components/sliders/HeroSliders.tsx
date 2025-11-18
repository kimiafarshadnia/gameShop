"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="w-full h-[300px] md:h-[450px]">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          className="w-full h-full rounded-xl"
        >
          <SwiperSlide>
            <div className="w-full h-full bg-violet-200 flex items-center justify-center text-4xl">
              1
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-orange-200 flex items-center justify-center text-4xl">
              2
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full bg-sky-200 flex items-center justify-center text-4xl">
              3
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;