import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const singleToys = useLoaderData();
  console.log(singleToys);
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
  } = singleToys;
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-medium">{toyName} details</h1>
      <div className="grid grid-cols-12 mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="col-span-4">
          <img
            src="https://m.media-amazon.com/images/I/51trXYalHHL._SL1500_.jpg"
            alt="Toy"
            className="w-full rounded-t-lg"
          />
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
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Rating: </span> {rating}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-medium">Available: </span>
            {availableQuantity}
          </p>
          <hr className="my-2" />
          <p>
            <span className="font-medium">Description: </span> Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nullam in turpis id est
            rutrum hendrerit Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Architecto, alias. .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
