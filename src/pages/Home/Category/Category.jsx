import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);
  return (
    <div className="w-[90%] mx-auto text-center mt-12">
      <h1 className="text-3xl font-bold text-gray-800">Category</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis,
        itaque?
      </p>
      <div>
        <p className="text-center font-medium mt-8">Filter Toys by Category</p>
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal mt-6">
          <button className="btn">Cricket</button>
          <button className="btn">Football</button>
          <button className="btn">Tennis</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Category;
