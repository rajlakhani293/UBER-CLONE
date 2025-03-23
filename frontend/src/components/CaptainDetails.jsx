import React from "react";

const CaptainDetails = () => {
  return (
    <>
      {/* captain details */}
      <div className="h-[40%] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"
            alt="User"
          />
          <div>
            <h4 className="text-lg font-semibold">Jeremiah Curtis</h4>
            <p className="text-sm text-gray-500">Basic level</p>
          </div>
        </div>
        <div className="text-right">
          <h4 className="text-xl font-bold">₹325.00</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>

      {/* Stats Section  */}
      <div className="h-[60%] mt-2 rounded-lg flex justify-between text-center border-1 gap-2">
        <div className="flex-1 flex flex-col items-center justify-center ">
          <i className="ri-time-line text-xl"></i>
          <h5 className="text-lg font-semibold">10.2</h5>
          <p className="text-sm">Hours Online</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center ">
          <i className="ri-speed-up-line text-xl"></i>
          <h5 className="text-lg font-semibold">30 KM</h5>
          <p className="text-sm">Total Distance</p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center ">
          <i className="ri-article-fill text-xl"></i>
          <h5 className="text-lg font-semibold">20</h5>
          <p className="text-sm">Total Jobs</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
