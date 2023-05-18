import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  return (
    <div className="max-w-[90%] mx-auto mt-8">
      <h1 className="text-4xl font-medium text-center bg-gradient-to-r from-red-500 to-[#CF4B5A] text-transparent bg-clip-text">
        My all Toys
      </h1>
      <div className="overflow-x-auto mt-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {toys.map((toy) => (
            <tbody key={toy._id}>
              <tr>
                <td>{toy.toyImg}</td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <button className="my-btn">
                    View Details{" "}
                    <FaArrowAltCircleRight className="inline-block ml-2 " />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllToys;
