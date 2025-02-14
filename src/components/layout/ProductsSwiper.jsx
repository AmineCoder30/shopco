import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard, Title, Button } from "../ui";
import { Link } from "react-router-dom";
import "swiper/css";

const ProductsSwiper = ({ products, title }) => {
  return (
    <section className="px-10 py-16 bg-white">
      <Title title={title} />

      <Swiper
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          820: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="products-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-8">
        <Link to="categories/casual">
          <Button
            title="view all"
            classes="bg-white text-black hover:text-white hover:bg-black border border-gray-200"
          />
        </Link>
      </div>
    </section>
  );
};

export default ProductsSwiper;
