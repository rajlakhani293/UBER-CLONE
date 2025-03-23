import React from "react";
import car from "../assets/icon/car.png";
import bike from "../assets/icon/bike.png";
import auto from "../assets/icon/auto.png";
import pcar from "../assets/icon/pcar.png";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-3 text-center absolute top-0 right-6 text-2xl "
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="ri-close-circle-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-3">Choose a Vehicle</h3>
      {/* car */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full mb-2 bg-white px-2 py-3 rounded-xl border-2 border-gray-400 active:border-black"
        value="car"
      >
        <img className="h-16 w-[25%] object-contain" src={car} alt="car" />
        <div className="w-[50%]">
          <h4 className="font-medium text-xl flex items-center ">
            UberGo <i className="ri-user-3-fill text-sm ml-2" />
            <span className="font-normal text-lg ">4</span>
          </h4>
          <p className="font-medium text-sm text-gray-600">
            5 mins away • 9:14 PM
          </p>
          <p className="font-normal text-xs text-gray-500">
            Affordable, compact rides
          </p>
        </div>
        <div className="w-[25%] flex justify-center items-center">
          <h2 className="text-xl font-semibold">₹193.23</h2>
        </div>
      </div>
      {/* bike */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full mb-2 bg-white px-2 py-3 rounded-xl border-3 border-gray-400 active:border-black "
      >
        <img className="h-16 w-[25%] object-contain" src={bike} alt="Bike" />

        <div className="w-[50%]">
          <h4 className="font-medium text-xl flex items-center ">
            Moto <i className="ri-user-3-fill text-sm ml-2" />
            <span className="font-normal text-lg ">1</span>
          </h4>
          <p className="font-medium text-sm text-gray-600">
            5 mins away • 9:14 PM
          </p>
          <p className="font-normal text-xs text-gray-500">
            Affordable motorcycle rides
          </p>
        </div>

        <div className="w-[25%] flex justify-center items-center">
          <h2 className="text-xl font-semibold">₹65.23</h2>
        </div>
      </div>
      {/* auto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full mb-2 bg-white px-2 py-3 rounded-xl border-3 border-gray-400 active:border-black "
      >
        <img className="h-16 w-[25%] object-contain" src={auto} alt="Auto" />

        <div className="w-[50%]">
          <h4 className="font-medium text-xl flex items-center ">
            Uberauto <i className="ri-user-3-fill text-sm ml-2" />
            <span className="font-normal text-lg ">3</span>
          </h4>
          <p className="font-medium text-sm text-gray-600">
            5 mins away • 9:14 PM
          </p>
          <p className="font-normal text-xs text-gray-500">
            Affordable motorcycle rides
          </p>
        </div>

        <div className="w-[25%] flex justify-center items-center">
          <h2 className="text-xl font-semibold">₹118.23</h2>
        </div>
      </div>
      {/* premier */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
        }}
        className="flex items-center justify-between w-full mb-2 bg-white px-2 py-3 rounded-xl border-3 border-gray-400 active:border-black "
      >
        <img className="h-16 w-[25%] object-contain" src={pcar} alt="" />

        <div className="w-[50%]">
          <h4 className="font-medium text-xl flex items-center ">
            premier <i className="ri-user-3-fill text-sm ml-2" />
            <span className="font-normal text-lg ">4</span>
          </h4>
          <p className="font-medium text-sm text-gray-600">
            5 mins away • 9:14 PM
          </p>
          <p className="font-normal text-xs text-gray-500">
            Affordable motorcycle rides
          </p>
        </div>

        <div className="w-[25%] flex justify-center items-center">
          <h2 className="text-xl font-semibold">₹65.23</h2>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
