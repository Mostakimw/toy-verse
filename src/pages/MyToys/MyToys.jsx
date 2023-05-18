import React, { useEffect, useState } from "react";
import MyToy from "./MyToy";
import EditToy from "../EditToy/EditToy";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
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

  return (
    <div className="max-w-[90%] mx-auto">
      <h1>My all Toys</h1>
      {myToys.map((toy) => (
        <MyToy key={toy._id} toy={toy}></MyToy>
      ))}

      <div>
        {/* The button to open modal */}
        <button
          onClick={openModal}
          title="Edit this toy"
          className="text-xl text-[#CF4B5A]"
        >
          Open Modal
        </button>
        {isModalOpen && <EditToy closeModal={closeModal} />}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      </div>
    </div>
  );
};

export default MyToys;
