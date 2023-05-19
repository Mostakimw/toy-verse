import React, { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyImg = form.toyImg.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = `$${form.price.value}`;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const subCategory = form.subCategory.value;
    const description = form.description.value;

    const toys = {
      toyName,
      toyImg,
      sellerName,
      sellerEmail,
      price,
      rating,
      availableQuantity,
      subCategory,
      description,
    };
    console.log(toys);

    fetch("http://localhost:5000/toys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Your Toy Added Successfully_Yoo",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto mt-12">
      <div className="form-control grid grid-cols-2 gap-8">
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Toy Name
            </span>
            <input
              name="toyName"
              type="text"
              placeholder="Toy Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Toy Picture
            </span>
            <input
              name="toyImg"
              type="text"
              placeholder="picture url"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Seller Name
            </span>
            <input
              name="sellerName"
              type="text"
              placeholder="Seller Name"
              className="input input-bordered w-full"
              value={user.displayName}
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Seller Email
            </span>
            <input
              name="sellerEmail"
              type="text"
              placeholder="Seller Email"
              className="input input-bordered w-full"
              value={user.email}
            />
          </label>
        </div>

        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Price
            </span>
            <input
              name="price"
              type="text"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Rating
            </span>
            <input
              name="rating"
              type="text"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="input-group">
            <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
              Available Quantity
            </span>
            <input
              name="availableQuantity"
              type="text"
              placeholder="Available quantity"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="input-group"></label>
          <select
            name="subCategory"
            required
            className="input input-bordered w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
          >
            <option value="" className="text-sm font-medium text-gray-700">
              Select sub-category
            </option>
            <option value="cricket">Cricket</option>
            <option value="football">Football</option>
            <option value="tennis">Tennis</option>
            {/* Add more sub-categories here */}
          </select>
        </div>
        <div>
          <label>
            <span className="flex flex-shrink-0 mb-2 text-sm font-medium text-gray-700">
              Description
            </span>
            <textarea
              name="description"
              className="textarea w-full border border-gray-300"
              placeholder="Write detail description for this toy"
            ></textarea>
          </label>
        </div>
      </div>
      <label className="flex justify-center">
        <input
          type="submit"
          value="Submit"
          className="my-btn mt-8 hover:cursor-pointer"
        />
      </label>
    </form>
  );
};

export default AddToy;
