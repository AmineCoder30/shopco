import React from "react";
import { SidebarFilter } from "../components/layout";
import { ProductCard, Button } from "../components/ui";
import { Pagination } from "../components/ui";
import products from "../Constants/products";
import { FaSlidersH } from "react-icons/fa";
function Categories() {
  const [showSideBar, setshowSideBar] = React.useState(false);
  return (
    <div className="container relative  mx-auto px-5 flex gap-10 ">
      <SidebarFilter
        setshowSideBar={setshowSideBar}
        showSideBar={showSideBar}
      />
      <div className="flex-1">
        <div className="w-full flex justify-between items-center ">
          <h1 className="text-2xl font-semibold ">T-shirts</h1>

          <button
            onClick={() => setshowSideBar(true)}
            className="flex  items-center gap-1 bg-gray-100 cursor-pointer hover:bg-black hover:text-white text-gray-400 rounded-full md:hidden py-2 px-3 "
          >
            <FaSlidersH /> filter
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-6 mt-5">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="w-full mt-10 py-5 border-t border-gray-200">
          <Pagination cards={products} />
        </div>
      </div>
    </div>
  );
}

export default Categories;
