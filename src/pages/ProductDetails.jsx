import React from "react";
import {
  Product,
  ProductsSwiper,
  MoreProductDeatails,
  ReviewForm,
} from "../components/layout";
import products from "../Constants/products";

function ProductDetails() {
  const [showForm, setShowForm] = React.useState(false);
  return (
    <div>
      <Product />
      <MoreProductDeatails setShowForm={setShowForm} />
      <ProductsSwiper title="you might also like" products={products} />

      <ReviewForm showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
}

export default ProductDetails;
