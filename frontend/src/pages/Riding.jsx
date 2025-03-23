import React from "react";
import { Link } from "react-router-dom";
import auto from "../assets/icon/auto.png";

const Riding = () => {
  return (
    <div className="h-screen relative">
      <Link
        to="/home"
        className="bg-gray-200 shadow-md right-4 top-4 fixed h-12 w-12 flex items-center justify-center rounded-full hover:bg-gray-300 transition"
      >
        <i className="text-2xl font-medium ri-home-9-line"></i>
      </Link>

      <div className="h-1/2 rounded-lg overflow-hidden shadow-lg">
        <img
          className="h-full w-full object-cover"
          src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/86db4648-a6c2-4ced-bfcd-2a71aab17b16.png?f=webp&w=1920&q=85&fit=shrink-cover&extend-bottom=120&image=%2Fwatermark%2F1.0%2Fbf66090d-f83f-452c-8b87-6eb356fed961&gravity=bottom&v=1.0"
          alt="Uber Map"
        />
      </div>

      {/* Ride Details Section */}
      <div className="h-1/2 bg-white relative z-10 px-5 py-3">
        {/* Driver Info Card */}
        <div className="flex items-center justify-between ">
          <img className="w-25" src={auto} alt="" />
          <div className="text-right">
            <p className="text-lg font-medium">Raj Lakhani</p>
            <p className="text-2xl font-bold">GJ21 HJ 7777</p>
            <p className="text-lg">Rolls Royce</p>
          </div>
        </div>
        {/* location */}
        <div className="">
          <div className="flex items-center gap-2 ">
            <i className="text-lg w-[10%] text-blue-500 ri-map-pin-2-fill"></i>
            <div className="w-[90%]">
              <h3 className="font-semibold">Third Wave Coffee</h3>
              <p>
                17th Cross Rd, PWD Quarters, HSR Layout, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          {/* line */}
          <hr className="my-3 border-gray-300" />
          <div className="flex items-center gap-2 ">
            <i className="text-lg w-[10%] text-green-500 ri-bank-card-2-fill"></i>
            <div className="w-[90%]">
              <h3 className="text-lg font-semibold">₹193.20</h3>
              <p className="text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full bg-green-500 text-white font-semibold p-3 rounded-lg mt-2 shadow-md hover:bg-green-600 transition">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
