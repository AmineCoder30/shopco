import React from "react";

import { Title } from "../ui";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ReviewCard } from "../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import reviews from "../../Constants/reivews";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <div className="py-20 px-5  rounded-xl w-full ">
      <div className="flex justify-between items-center container mx-auto">
        <Title title="our happy customers" />
        <div className="space-x-4">
          <button className="p-2 rounded-full cursor-pointer bg-gray-200 hover:bg-blue-600 hover:text-white swiper-prev">
            <FaArrowLeft />
          </button>
          <button className="p-2 rounded-full cursor-pointer bg-gray-200 hover:bg-blue-600 hover:text-white swiper-next">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper"
      >
        {reviews.slice(0, 6).map((testimonial, index) => (
          <SwiperSlide key={index}>
            <ReviewCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
