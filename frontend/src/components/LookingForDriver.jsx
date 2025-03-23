import React from "react";
import confirmcar from "../assets/icon/confirmcar.png";

const LookingForDriver = (props) => {
  return (
    <div>
      {/* close icon */}
      <h5
        className="p-3 text-center absolute top-0 right-4 text-2xl"
        onClick={() => {
          props.setVehicleFound(false);
        }}
      >
        <i className="ri-close-circle-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">
        Looking for nearby drivers
      </h3>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-2"></div>
      <div className="flex justify-center flex-col items-center">
        {/* image */}
        <img className="w-56" src={confirmcar} alt="Car" />
        <div className="w-full">
          <div className="flex items-center gap-2  my-2">
            <i className="text-lg ri-map-pin-2-line w-[10%]"></i>
            <div className="w-[90%]">
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p>Kaikondrahalli, Bengaluru, Karnataka</p>
            </div>
          </div>
          {/* line */}
          <hr className=" border-gray-300 my-2" />
          <div className="flex items-center gap-2 my-2">
            <i className="text-lg w-[10%] ri-square-fill"></i>
            <div className="w-[90%]">
              <h3 className=" text-lg font-semibold">Third Wave Coffee</h3>
              <p className="">
                17th Cross Rd, PWD Quarters, HSR Layout, Bengaluru, Karnataka
              </p>
            </div>
          </div>
          {/* line */}
          <hr className=" border-gray-300 my-2" />
          <div className="flex items-center gap-2 my-2">
            <i className="text-lg w-[10%] ri-bank-card-2-fill"></i>
            <div className="w-[90%]">
              <h3 className="text-lg font-semibold">₹193.20</h3>
              <p className="text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;
