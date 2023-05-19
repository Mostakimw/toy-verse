import React from "react";
import { FaMobile, FaPaypal, FaRunning, FaShippingFast } from "react-icons/fa";

const Information = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold text-center">
        Most Important Attraction
      </h1>
      <div className=" bg-[#CF4B5A] py-10 text-gray-100 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-r-2 flex flex-col items-center space-y-4">
            <FaShippingFast className="text-4xl" />
            <p className="uppercase font-medium text-lg">Fast Shipping</p>
          </div>
          <div className="border-r-2 flex flex-col items-center space-y-4">
            <FaPaypal className="text-4xl" />
            <p className="uppercase font-medium text-lg">
              Online Payment Method
            </p>
          </div>
          <div className="border-r-2 flex flex-col items-center space-y-4">
            <FaMobile className="text-4xl" />
            <p className="uppercase font-medium text-lg">24/7 Support</p>
          </div>
          <div className="border-r-2 flex flex-col items-center space-y-4">
            <FaRunning className="text-4xl" />
            <p className="uppercase font-medium text-lg">On Time Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
