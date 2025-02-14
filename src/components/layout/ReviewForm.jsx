import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Button } from "../ui";
function ReviewForm({ showForm, setShowForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    review: "",
  });
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ...formData, rating });
  };

  return (
    <div
      className={`fixed inset-0 bg-black/30 p-5 z-100 flex items-center justify-center ${
        showForm ? "block" : "hidden"
      }`}
    >
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl">
        <h2 className="text-2xl font-semibold mb-6">Write a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-700">Rating:</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                  className="text-2xl"
                >
                  {star <= (hover || rating) ? (
                    <AiFillStar className="text-yellow-400" />
                  ) : (
                    <AiOutlineStar className="text-gray-400" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Review Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Your Review</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-black resize-none"
              required
            ></textarea>
          </div>
          <div className="w-full flex gap-2 justify-end">
            <button
              className="hover:bg-black text-md bg-white text-black border border-gray-200 transition-all duration-300 hover:border-black hover:text-white px-4 py-2 rounded-full cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              Cancel Review
            </button>
            <button
              className="bg-black border hover:border-gray-200 hover:bg-white hover:text-black transition-all duration-300 text-md text-white px-4 py-2 rounded-full cursor-pointer"
              onClick={() => setShowForm(false)}
            >
              Save Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
