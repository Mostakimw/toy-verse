import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
        setToys(data);
        AOS.init();
      });
  }, [activeTab]);

  const handlerByCategory = (tabName) => {
    setActiveTab(tabName);
    console.log(tabName, "clicked");
  };
  return (
    <div className="w-[90%] mx-auto text-center mt-12">
      <h1 className="my-title">Category</h1>
      <p>Playful Sporting Excursions: Explore Our Toy Categories</p>
      <div>
        <p className="text-center font-medium mt-8">Filter Toys by Category</p>
        <div className="btn-group lg:btn-group-horizontal mt-6">
          <button
            onClick={() => handlerByCategory("cricket")}
            className={`btn ${
              activeTab == "cricket" ? "bg-[#CF4B5A] border-none" : "default"
            }`}
          >
            Cricket
          </button>
          <button
            onClick={() => handlerByCategory("tennis")}
            className={`btn ${
              activeTab == "tennis" ? "bg-[#CF4B5A] border-none" : "default"
            }`}
          >
            Tennis
          </button>
          <button
            onClick={() => handlerByCategory("football")}
            className={`btn ${
              activeTab == "football" ? "bg-[#CF4B5A] border-none" : "default"
            }`}
          >
            Football
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Category;
