import React from "react";

const ToyCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white border shadow-lg rounded-lg mt-12">
      <img
        src="https://m.media-amazon.com/images/I/51trXYalHHL._SL1500_.jpg"
        className="w-full object-cover"
      />
      <div className="p-4 bg-purple-300">
        <h3 className="text-gray-800 font-semibold text-2xl">
          Cricket Bat for Kids
        </h3>
        <div className="mt-2 flex items-center justify-around">
          <p className="text-gray-600">$500</p>
          <p className="text-gray-600 ml-1 justify-end">rating</p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ToyCard;
