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
  return <div></div>;
};

export default MyToy;
