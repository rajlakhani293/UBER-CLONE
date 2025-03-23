import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="h-screen py-4 px-7">
        {/* Header */}
        <h5
          className="p-3 text-center absolute top-1 right-4 text-2xl"
          onClick={() => {
            props.setConfirmRidePopupPanel(false);
          }}
        >
          <i className="ri-close-circle-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-3">Confirm Ride to Start</h3>
        <div className=" flex flex-col justify-center items-center ">
          <div className="w-full flex items-center justify-between p-2 bg-yellow-400 rounded-lg mt-4">
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
        <div className="mt-6 w-full ">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              type="text"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              placeholder="Enter OTP"
              className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full"
            />
            <Link
              to="/captain-riding"
              type="submit"
              className="bg-green-600 w-full mt-5 mb-2  flex justify-center text-white font-semibold p-2 rounded-lg transition-all duration-300 hover:bg-green-700 active:scale-95"
            >
              Confirm
            </Link>
            <button
              type="button"
              onClick={() => {
                props.setRidePopupPanel(false);
                props.setConfirmRidePopupPanel(false);
              }}
              className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg transition-all duration-300 hover:bg-gray-400 active:scale-95"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmRidePopUp;
