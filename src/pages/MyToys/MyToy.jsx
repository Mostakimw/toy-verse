import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditToy from "../EditToy/EditToy";

const MyToy = ({ toy }) => {
  const { _id, toyName, toyImg, subCategory, sellerName, rating, price } = toy;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Seller Name</th>
              <th>Sub-Category</th>
              <th>Rating</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{toyImg}</td>
              <td>{toyName}</td>
              <td>{sellerName}</td>
              <td>{subCategory}</td>
              <td>4.5</td>
              <td>{price}</td>
              <td>
                <button
                  onClick={openModal}
                  title="Edit this toy"
                  className="text-xl text-[#CF4B5A]"
                >
                  <FaEdit />
                </button>

                {/* Render the modal component */}
                {isModalOpen && <EditToy closeModal={closeModal} />}
              </td>
              <td>
                <button
                  className="text-xl text-red-500"
                  title="Remove this toy"
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
