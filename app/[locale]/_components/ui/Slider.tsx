"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

// Slider
const sliders = [
  { img: "/slider-1.png" },
  { img: "/slider-2.png" },
  { img: "/slider-3.png" },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="max-w-5xl mx-auto rounded-xl"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] flex justify-center items-center">
              <Image
                src={slide.img}
                alt="Transia Technology"
                fill
                className="object-cover mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
