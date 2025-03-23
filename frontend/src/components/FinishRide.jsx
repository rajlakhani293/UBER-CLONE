import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {
  return (
    <>
      <div className="h-screen py-4 px-7">
        {/* Header */}
        <h5
          className="p-3 text-center absolute top-1 right-4 text-2xl"
          onClick={() => {
            props.setFinishRidePanel(false);
          }}
        >
          <i className="ri-close-circle-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-3">Finish Ride</h3>
        <div className=" flex flex-col justify-center items-center ">
          <div className="w-full flex items-center justify-between p-2 border-2 border-yellow-400 rounded-lg mt-4">
            <div className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                alt="Driver"
              />
              <h2 className="text-lg font-medium">John Doe</h2>
            </div>
            <h5 className="text-lg font-semibold">2.2 KM</h5>
          </div>
        </div>

        {/* Details Section */}
        <div className=" flex flex-col py-5">
          <div className="flex items-center gap-5 p-2 border-b-1">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-600">Pickup Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-1">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">456/22-B</h3>
              <p className="text-sm text-gray-600">Drop Location</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹150</h3>
              <p className="text-sm text-gray-600">Cash Payment</p>
            </div>
          </div>
        </div>

        {/* button */}
        <div className="flex items-center justify-center ">
          <Link
            to="/captain-home"
            type="submit"
            className="bg-green-600 w-full text-lg  flex justify-center text-white font-semibold p-3 rounded-lg transition-all duration-300 hover:bg-green-700 active:scale-95"
          >
            Finish Ride
          </Link>
        </div>
      </div>
    </>
  );
};

export default FinishRide;
