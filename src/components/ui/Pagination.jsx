import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Pagination({ cards, numberOfProducts = 10 }) {
  const [currentPage, setCurrentPage] = useState(3);

  const pages = Math.ceil(1000 / numberOfProducts);
  const pagesArray = Array.from({ length: pages }, (_, index) => index + 1);
  const end = pages > 6 ? 3 : pages;

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full flex justify-center items-center gap-4">
      <button
        onClick={handlePrevPage}
        className="border border-gray-200 px-3 py-2 text-black rounded-md cursor-pointer font-medium hover:bg-black hover:text-white"
      >
        <FaArrowLeft />
      </button>
      <ul
        className="flex gap-1
      "
      >
        {pagesArray.slice(pages > 6 ? setCurrentPage : 0, end).map((page) => (
          <li
            onClick={() => setCurrentPage(page)}
            className={`h-8 w-8 flex items-center justify-center cursor-pointer rounded-md 
                            ${
                              currentPage === page
                                ? "bg-black text-white"
                                : "text-gray-500 hover:bg-gray-100"
                            }`}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
      <button
        onClick={handleNextPage}
        className="border border-gray-200 px-3 py-2 text-black font-medium cursor-pointer rounded-md hover:bg-black hover:text-white"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Pagination;
