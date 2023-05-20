import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const EditToy = () => {
  const toyData = useLoaderData();
  console.log(toyData);
  const {
    _id,
    toyName,
    toyImg,
    subCategory,
    sellerName,
    sellerEmail,
    rating,
    price,
    description,
    availableQuantity,
  } = toyData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    const toyImg = form.toyImg.value;
    const price = `${form.price.value}`;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const toys = {
      _id,
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

    fetch(`http://localhost:5000/toys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Toy Updated Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-medium my-8 text-center bg-gradient-to-r from-red-500 to-[#CF4B5A] text-transparent bg-clip-text">
        My all Toys
      </h1>
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto mt-2">
        <div className="form-control grid lg:grid-cols-2 gap-8">
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
                defaultValue={toyName}
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
                defaultValue={toyImg}
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={availableQuantity}
              />
            </label>
          </div>

          <div className="col-span-2">
            <label>
              <span className="flex flex-shrink-0 text-sm font-medium text-gray-700">
                Description
              </span>
              <textarea
                name="description"
                className="textarea w-full border border-gray-300"
                placeholder="Write detail description for this toy"
                defaultValue={description}
              ></textarea>
            </label>
          </div>
        </div>
        <label className="flex justify-center">
          <input
            type="submit"
            value="Update Toy"
            className="my-btn mt-8 hover:cursor-pointer"
          />
        </label>
      </form>
    </div>
  );
};

export default EditToy;
