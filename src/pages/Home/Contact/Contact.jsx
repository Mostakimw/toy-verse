import React from "react";
import {
  FaPhone,
  FaPhoneAlt,
  FaRegNewspaper,
  FaRocketchat,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 mt-10 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Contact Us
      </h1>
      <div className="lg:flex justify-around max-w-7xl mx-auto mt-10 space-y-10">
        <div className=" space-y-3">
          <div className="flex justify-center mb-8">
            <FaPhone className="text-6xl text-[#CF4B5A] " />
          </div>
          <h3 className="font-medium text-2xl mb-6 text-center">By Phone</h3>
          <div className="flex justify-between gap-4 px-5 mt-2">
            <div>
              <p className="font-medium text-gray-700 bg-gray-50 inline-block rounded-lg">
                Bangladesh
              </p>
              <p className="text-[#757575]">01792965487</p>
            </div>
            <div>
              <p className="font-medium text-gray-700 bg-gray-50 inline-block rounded-lg">
                Over World
              </p>
              <p className="text-[#757575]">1-604-502-520</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <FaRegNewspaper className="text-6xl text-[#CF4B5A] " />
          </div>
          <h3 className="font-medium text-2xl mb-6">Start a New Case</h3>
          <p className="text-[#757575] max-w-xs mx-auto text-center">
            Just send us your question or concerns by starting a new case and we
            will give you the help you need
          </p>
          <button className="px-8 py-2 bg-white mt-6 font-medium">
            Start Here
          </button>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <FaRocketchat className="text-6xl text-[#CF4B5A] " />
          </div>
          <h3 className="font-medium text-2xl mb-6">Live Chat</h3>
          <p className="text-[#757575] max-w-xs mx-auto text-center">
            Chat with a member in our House-team
          </p>
          <button className="px-8 py-2 bg-white mt-6 font-medium">
            Start Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
