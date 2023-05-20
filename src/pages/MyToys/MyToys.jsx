import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaRegStar, FaStar, FaTrashAlt } from "react-icons/fa";
import Rating from "react-rating";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/mytoys?email=${user?.email}&sort=${sortOption}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user, sortOption]);

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
  };

  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount > 0) {
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
        Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
      }
    });
  };

  useTitle(`My-Toy - ${user.email}`);

  return (
    <div className="max-w-[90%] mx-auto mt-8">
      <h1 className="my-title">My all Toys</h1>
      <div>
        <select value={sortOption} onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
      <div className="overflow-x-auto mt-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub-Category</th>
              <th>Description</th>
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
                <td>
                  <img src={toy.toyImg} alt="" className="w-80 h-80 px-4" />
                </td>
                <td className="whitespace-pre-line">{toy.toyName}</td>
                <td>{toy.sellerName}</td>
                <td>{toy.subCategory}</td>
                <td>
                  <p className="whitespace-pre-line pr-6">{toy.description}</p>
                </td>
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
                  <Link to={`/my-toys/${toy._id}`}>
                    <button
                      title="Edit this toy"
                      className="text-xl text-[#CF4B5A]"
                    >
                      <FaEdit />
                    </button>
                  </Link>
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
