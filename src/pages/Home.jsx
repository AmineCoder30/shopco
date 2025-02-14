import React from "react";
import products from "../Constants/products";

import {
  Hero,
  Companies,
  ProductsSwiper,
  DressStyleGrid,
  Testimonials,
} from "../components/layout";
function Home() {
  return (
    <div>
      <Hero />
      <Companies />
      <ProductsSwiper products={products.slice(0, 6)} title="new Arrivals" />
      <ProductsSwiper products={products.slice(5, 11)} title="Top Selling" />
      <DressStyleGrid />
      <Testimonials />
    </div>
  );
}

export default Home;
