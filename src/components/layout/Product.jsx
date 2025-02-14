import product from "../../assets/products/image 7.png";
import {
  SizeButton,
  QuantityCounter,
  Title,
  Button,
  StarsRating,
  ColorsList,
} from "../ui";
const Product = () => {
  const colors = ["olive", "navy", "black"];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <div className="flex container mx-auto px-5 flex-col md:flex-row gap-10 py-8">
      {/* Left Section - Images */}
      <div className=" w-full md:w-1/2 flex flex-col-reverse lg:flex-row gap-4">
        <div className="flex w-full lg:w-fit flex-row lg:flex-col gap-2">
          <img
            src={product}
            alt="Thumb 1"
            className="w-16 h-16 object-cover border rounded-md cursor-pointer"
          />
          <img
            src={product}
            alt="Thumb 2"
            className="w-16 h-16 object-cover border rounded-md cursor-pointer"
          />
          <img
            src={product}
            alt="Thumb 3"
            className="w-16 h-16 object-cover border rounded-md cursor-pointer"
          />
        </div>
        <img
          src={product}
          alt="Main"
          className="flex-1 h-110 object-cover rounded-lg"
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="w-full md:w-1/2 flex flex-col ">
        <Title title="ONE LIFE GRAPHIC T-SHIRT" classes="mb-2" />
        <StarsRating rating={5} showRating={true} />

        <div className="flex items-center gap-3 mt-2 text-lg">
          <span className="text-black font-bold">$260</span>
          <span className="text-gray-400 line-through">$300</span>
          <span className="text-red-500 rounded-full text-xs bg-red-100 p-1">
            -40%
          </span>
        </div>

        <p className="text-gray-600 mt-2 pb-4 border-b border-gray-200">
          This graphic t-shirt is perfect for any occasion. Crafted from a soft
          and breathable fabric, it offers superior comfort and style.
        </p>

        <div className="mt-4 pb-4 border-b border-gray-200">
          <h3 className="text-xs text-gray-400 capitalize mb-2">
            Select Colors
          </h3>
          <ColorsList colors={colors} />
        </div>

        <div className="mt-4 pb-4 border-b border-gray-200">
          <h3 className="text-xs text-gray-400 mb-2 capitalize ">
            Choose Size
          </h3>
          <SizeButton sizes={sizes} />
        </div>

        <div className="flex items-center gap-4 mt-4">
          <QuantityCounter currentQuantity={1} />
          <Button title="add to cart" classes="bg-black text-white" />
        </div>
      </div>
    </div>
  );
};

export default Product;
