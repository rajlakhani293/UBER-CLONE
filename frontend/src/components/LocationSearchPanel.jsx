import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    " Nagar Sheths Vando, Gheekanta, Bhadra, Ahmedabad, Gujarat",
    "Swargia Shree H B Kapadiya Chowk, Ahmedabad, GJ 380001",
    "Kapadiya Chowk, Ahmedabad, GJ 381201",
  ];
  return (
    <div className="space-y-2">
      {locations.map((location, index) => (
        <div key={index}>
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center px-3 py-2 hover:bg-gray-300 transition duration-300"
          >
            <div className="w-1/5 flex justify-center">
              <div className="bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-line"></i>
              </div>
            </div>

            <div className="w-4/5">
              <p className="text-base text-gray-600">{location}</p>
            </div>
          </div>
          <hr className="border-t border-gray-200 mx-4" />
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
