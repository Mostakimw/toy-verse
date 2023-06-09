import React, { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const allToys = useLoaderData() || [];
  useTitle("All-Toys");
  const [toys, setToys] = useState(allToys);
  const [searchText, setSearchText] = useState("");
  const handlerSearch = () => {
    fetch(
      `https://toy-verse-server-mostakimw.vercel.app/toys/toys-name/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div className="max-w-[90%] mx-auto mt-8">
      <div className="flex justify-center mb-5">
        <div className="form-control">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              style={{ outline: "none" }}
            />
            <button onClick={handlerSearch} className="my-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <h1 className="my-title">My all Toys</h1>
      <div className="overflow-x-auto mt-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          {toys.map((toy, index) => (
            <tbody key={toy._id}>
              <tr>
                <td>{index}</td>
                <td>
                  <img src={toy.toyImg} alt="" className="w-60 h-60" />
                </td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.availableQuantity}</td>
                <td>
                  <Link to={`/toys/${toy._id}`}>
                    <button className="my-btn">
                      View Details{" "}
                      <FaArrowAltCircleRight className="inline-block ml-2 " />
                    </button>
                  </Link>
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
