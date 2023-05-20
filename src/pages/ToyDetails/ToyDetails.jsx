import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const singleToys = useLoaderData();
  const {
    _id,
    toyName,
    toyImg,
    subCategory,
    sellerName,
    sellerEmail,
    rating,
    price,
    availableQuantity,
    description,
  } = singleToys;
  useTitle(toyName);
  return (
    <div className="mt-10 max-w-7xl mx-auto">
      <h1 className="my-title">{toyName} Details</h1>
      <div className="lg:grid grid-cols-12 gap-8 mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="col-span-4">
          <img src={toyImg} alt="Toy" className="w-full rounded-t-lg" />
        </div>
        <div className="p-4 col-span-5 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2">{toyName}</h2>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Seller: </span> {sellerName}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Seller Email: </span> {sellerEmail}
          </p>
          <hr className="my-2" />
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Price: </span> {price}
          </p>
          <p className="text-gray-700 mb-2 flex items-center">
            <span className="font-medium mr-2">Rating: </span>{" "}
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-[#CF4B5A]"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            />{" "}
            <span className="font-medium ml-2">{rating}</span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Available: </span>
            {availableQuantity}
          </p>
          <hr className="my-2" />
          <p>
            <span className="font-medium">Description: </span> {description}
          </p>
        </div>
        <div className="col-span-3 flex items-center">
          <img
            className="w-full rounded-lg"
            src="https://junotoys.themerex.net/wp-content/uploads/2020/04/post28-copyright.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
