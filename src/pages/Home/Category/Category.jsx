import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  useEffect(() => {
    const url = activeTab
      ? `http://localhost:5000/alltoys/${activeTab}`
      : "http://localhost:5000/toys";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [activeTab]);

  const handlerByCategory = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName, "clicked");
  };
  return (
    <div className="w-[90%] mx-auto text-center mt-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Category</h1>
      <p>Playful Sporting Excursions: Explore Our Toy Categories</p>
      <div>
        <p className="text-center font-medium mt-8">Filter Toys by Category</p>
        <div className="btn-group btn-group-vertical lg:btn-group-horizontal mt-6">
          <button onClick={() => handlerByCategory("cricket")} className="btn">
            Cricket
          </button>
          <button onClick={() => handlerByCategory("tennis")} className="btn">
            Tennis
          </button>
          <button onClick={() => handlerByCategory("football")} className="btn">
            Football
          </button>
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
