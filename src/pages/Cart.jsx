import React from "react";

import image from "../assets/products/image 7.png";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

import { Title, QuantityCounter, InputField, Button } from "../components/ui";

const cartItems = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    size: "Large",
    color: "White",
    price: 145,
    quantity: 1,
    image: image,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    size: "Medium",
    color: "Red",
    price: 180,
    quantity: 1,
    image: image,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    size: "Large",
    color: "Blue",
    price: 240,
    quantity: 1,
    image: image,
  },
];

function Cart() {
  const [items, setItems] = useState(cartItems);
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  const updateQuantity = (id, amount) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div className="p-5 container mx-auto">
        <Title title="your cart" classes="text-left mb-5" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
          <div className="lg:col-span-3 space-y-4 border p-3 border-gray-200 rounded-lg">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex not-last:border-b border-gray-200 items-center justify-between py-4 "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded"
                />
                <div className="flex-1 ml-4">
                  <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                  <p className="text-sm text-gray-600">Color: {item.color}</p>
                  <p className="font-bold mt-2">${item.price}</p>
                </div>
                <div className="flex flex-col gap-10 items-end">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#FF3333] ml-4 cursor-pointer"
                  >
                    <FaRegTrashCan size={20} />
                  </button>
                  <QuantityCounter currentQuantity={item.quantity} />
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 h-fit lg:sticky top-0 lg:col-span-2 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2 py-2 mb-3 border-b border-gray-200 ">
              <div className="flex justify-between">
                <span className="text-gray-500 font-light ">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span className="text-gray-500 font-light ">
                  Discount (-20%)
                </span>
                <span>-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 font-light ">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex mb-4 justify-between font-medium text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex flex-col md:flex-row gap-2 my-2">
              <InputField placeholder="Add Promo Code" />
              <Button
                title="Apply"
                classes="bg-black text-white w-full md:w-fit"
              />
            </div>
            <button className="w-full rounded-full mt-4 p-3 bg-black text-white flex items-center justify-center ">
              Go to Checkout <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
