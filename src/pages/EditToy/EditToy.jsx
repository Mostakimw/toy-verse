import React from "react";

// eslint-disable-next-line react/prop-types
const EditToy = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg">
          Congratulations random Internet user!
        </h3>
        <p className="py-4">
          Youve been selected for a chance to get one year of subscription to
          use Wikipedia for free!
        </p>
        <div className="modal-action">
          <button onClick={closeModal} className="btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditToy;
