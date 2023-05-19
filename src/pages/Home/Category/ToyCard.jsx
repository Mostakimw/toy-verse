import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  return (
    <div className="max-w-xs mx-auto bg-white border shadow-lg rounded-lg mt-12">
      <img
        src="https://m.media-amazon.com/images/I/51trXYalHHL._SL1500_.jpg"
        className="w-full object-cover"
      />
      <div className="p-4 bg-purple-300 space-y-4">
        <h3 className="text-gray-800 font-semibold text-2xl">
          Cricket Bat for Kids
        </h3>
        <div className="mt-2 flex items-center justify-around">
          <p className="text-gray-600">Price: $500</p>
          <p className="text-gray-600 ml-1 justify-end">
            Rating:{" "}
            <Rating
              placeholderRating={toy.rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-[#CF4B5A]"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
        </div>
        <Link to={`/toys/${toy._id}`}>
          <button className="mt-6 bg-[#CF4B5A] hover:bg-[#e64255] text-white py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
