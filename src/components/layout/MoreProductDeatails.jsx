import React, { useState } from "react";
import { RatingAndReviews, Description, Faq } from "./";

function MoreProductDeatails({ setShowForm }) {
  const [visibleDetails, setVisibleDetails] = useState("Description");
  const details = ["Description", "Rating & Reviews", "FAQ"];
  return (
    <div className="container mx-auto py-10 px-5">
      <ul className="grid grid-cols-3 mb-5">
        {details.map((detail, index) => (
          <li
            key={index}
            className="text-center cursor-pointer"
            onClick={() => setVisibleDetails(detail)}
          >
            <p
              className={`py-3 text-gray-500 ${
                visibleDetails === detail
                  ? "border-b border-gray-950 font-medium text-gray-950"
                  : ""
              }`}
            >
              {detail}
            </p>
          </li>
        ))}
      </ul>
      <div>
        {visibleDetails === "Description" && <Description />}
        {visibleDetails === "Rating & Reviews" && (
          <RatingAndReviews setShowForm={setShowForm} />
        )}
        {visibleDetails === "FAQ" && <Faq />}
      </div>
    </div>
  );
}

export default MoreProductDeatails;
