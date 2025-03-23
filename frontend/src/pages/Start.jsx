import React from "react";
import uberimg from "../assets/img/Uber.jpg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center bg-no-repeat pt-8  flex justify-between flex-col"
        style={{ backgroundImage: `url(${uberimg})` }}
      >
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uber_logo_2018.png/1200px-Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 pb-8 px-4">
          <h2 className="text-[30px] font-semibold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
