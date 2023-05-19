import React, { useEffect, useState } from "react";
import { FaEdit, FaRegStar, FaStar, FaTrashAlt } from "react-icons/fa";
import EditToy from "../EditToy/EditToy";
import Rating from "react-rating";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  // const { _id, toyName, toyImg, subCategory, sellerName, rating, price } = myToys || {};
  //   console.log(myToys);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteToy = (id) => {
    fetch(`http://localhost:5000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("delete successful");
        if (data.deletedCount > 0) {
          const remaining = myToys.filter((toy) => toy._id !== id);
          setMyToys(remaining);
        }
      });
  };

  const handleToysEdit = (data) => {
    console.log(data);
    // fetch(`http://localhost:5000/updateJob/${data._id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    // if (result.modifiedCount > 0) {
    //   setControl(!control);
    // }
    // console.log(result);
    //   });
  };

  return (
    <div className="max-w-[90%] mx-auto mt-8">
      <h1 className="text-4xl font-medium text-center bg-gradient-to-r from-red-500 to-[#CF4B5A] text-transparent bg-clip-text">
        My all Toys
      </h1>
      <div className="overflow-x-auto mt-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub-Category</th>
              <th>Rating</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          {myToys.map((toy, index) => (
            <tbody key={toy._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{toy.toyImg}</td>
                <td>{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>
                  <Rating
                    placeholderRating={toy.rating}
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={
                      <FaStar className="text-[#CF4B5A]"></FaStar>
                    }
                    fullSymbol={<FaStar></FaStar>}
                  />
                </td>
                <td>{toy.price}</td>
                <td>
                  <button
                    onClick={openModal}
                    title="Edit this toy"
                    className="text-xl text-[#CF4B5A]"
                    // eslint-disable-next-line react/no-unknown-property
                    // toy={toy}
                    // eslint-disable-next-line react/no-unknown-property
                    // handleToysEdit={handleToysEdit}
                  >
                    <FaEdit />
                  </button>

                  {/* Render the modal component */}
                  {isModalOpen && <EditToy closeModal={closeModal} />}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteToy(toy._id)}
                    className="text-xl text-red-500"
                    title="Remove this toy"
                  >
                    <FaTrashAlt />
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

export default MyToys;
