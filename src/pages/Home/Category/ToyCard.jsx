import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, toyName, toyImg, rating, price } = toy;
  return (
    <div className="w-full bg-white border shadow-lg rounded-lg mt-6">
      <img src={toyImg} className="w-full h-80" />
      <hr className="py-2" />
      <div className="p-4 h-auto space-y-4 ">
        <h3 className="text-gray-800 font-semibold text-2xl h-16">{toyName}</h3>
        <div className="mt-2 flex items-center justify-around flex-grow-0 flex-shrink-0">
          <p className="text-gray-600">Price: {price}</p>
          <p className="text-gray-600 ml-1 justify-end">
            Rating:{" "}
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-[#CF4B5A]"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />
          </p>
        </div>
        <Link to={`/toys/${_id}`}>
          <button className=" mt-6 bg-[#CF4B5A] hover:bg-[#e64255] text-white py-2 px-4 rounded">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
