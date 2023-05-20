import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center bg-[#9873FF1A]">
      <img
        className="w-full lg:w-6/12 px-6 rounded-lg mb-6"
        src="https://image.cnbcfm.com/api/v1/image/102863010-legoimage.jpg?v=1437763125&w=1920&h=1080"
        alt="Showing when something error happen"
      />

      <Link to="/">
        <button className="rounded border-2 border-[#CF4B5A] px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-gray-800 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-50 hover:bg-opacity-10 hover:text-gray-400 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-50 dark:hover:bg-opacity-10">
          Go To Homepage
        </button>
      </Link>
    </div>
  );
};

export default Error;
