import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center h-[400px] items-center">
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loader;
