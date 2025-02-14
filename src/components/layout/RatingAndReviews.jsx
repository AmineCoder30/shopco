import React from "react";
import { ReviewCard } from "../ui";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import reviews from "../../Constants/reivews";
import Button from "../ui/Button";

function RatingAndReviews({ setShowForm }) {
  const [visibleReviews, setVisibleReviews] = useState(6);

  return (
    <div className="container mx-auto p-6">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-3xl font-medium   text-gray-800 leading-[48px] ">
          All Reviews ({reviews.length})
        </h2>
        <div className="flex  items-center gap-3">
          <button
            className="bg-black border hover:border-gray-200 hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-md text-white px-4 py-2 rounded-full cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            Add Review
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <ReviewCard testimonial={review} />
        ))}
      </div>
      {visibleReviews < reviews.length && (
        <div className="w-full mt-8 flex justify-center">
          <Button
            title="load more reviews"
            classes="bg-white text-gray-500 border border-gray-200 hover:bg-black hover:text-white"
            handleClick={() => setVisibleReviews(visibleReviews + 3)}
          />
        </div>
      )}
    </div>
  );
}

export default RatingAndReviews;
