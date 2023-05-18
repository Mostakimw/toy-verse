import React from "react";

const MyToys = () => {
  fetch("http://localhost:5000/toys")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <h1>My all Toys</h1>
    </div>
  );
};

export default MyToys;
