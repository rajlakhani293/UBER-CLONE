import React from "react";

const RidePopUp = (props) => {
  return (
    <>
      {/* Header */}
      <div className="h-[25%] flex flex-col justify-center items-center ">
        <h3 className="text-2xl font-semibold">New Ride Available!</h3>
        <h5
          className="p-3 text-center absolute top-0 right-4 text-2xl"
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
        >
          <i className="text-3xl ri-close-circle-line"></i>
        </h5>
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
      <div className="h-[55%] flex flex-col ">
        <div className="flex items-center gap-5 p-2 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600">Pickup Location</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-2 border-b-2">
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

      {/* Buttons Section */}
      <div className="h-[20%] flex items-center justify-center gap-5 px-5">
        <button
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="w-1/2 bg-gray-300 text-gray-700 font-semibold p-2 rounded-lg transition-all duration-300 hover:bg-gray-400 active:scale-95"
        >
          Ignore
        </button>
        <button
          onClick={() => {
            props.setConfirmRidePopupPanel(true);
          }}
          className="bg-green-600 w-1/2 text-white font-semibold p-2 rounded-lg transition-all duration-300 hover:bg-green-700 active:scale-95"
        >
          Accept
        </button>
      </div>
    </>
  );
};

export default RidePopUp;
