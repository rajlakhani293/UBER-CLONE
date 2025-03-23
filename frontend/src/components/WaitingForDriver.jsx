import React from "react";

const WaitingForDriver = (props) => {
  return (
    // <div className="  bg-white ">
    //   <div className="flex justify-between items-center mb-4">
    //     <h2 className="text-xl font-semibold ">Meet at the pickup point</h2>
    //     <div className="bg-black text-white px-3 py-1  text-sm font-semibold w-14 text-center">
    //       2 min
    //     </div>
    //   </div>

    //   <hr className="" />
    //   <div className="">
    //     {/* User image */}
    //     <div className="text-center p-4 rounded-full ">
    //       <i className="text-9xl ri-account-box-fill "></i>
    //     </div>
    //     <div className="text-lg font-medium  mt-4 text-center">
    //       <p className="text-2xl font-bold ">Raj Lakhani</p>
    //       <p className=" text-lg">GJ21 HJ 7777</p>
    //       <p className=" text-lg font-semibold">Rolls Royce</p>
    //       <p className="flex items-center justify-center gap-1  font-semibold ">
    //         <i className="ri-star-fill text-lg"></i>{" "}
    //         <span className="">4.9</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="  bg-white ">
      <h5
        className="p-3 text-center absolute top-0 right-6 text-2xl "
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="ri-close-circle-line"></i>
      </h5>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ">Meet at the pickup point</h2>
        <div className="bg-black text-white px-3 py-1  text-sm font-semibold w-14 text-center">
          2 min
        </div>
      </div>

      <hr className="" />
      <div className="">
        {/* User image */}
        <div className="flex items-center justify-between py-4 pr-4">
          <i className="text-9xl ri-account-box-fill "></i>
          <div className="text-right">
            <p className="text-lg font-normal">Raj Lakhani</p>
            <p className=" text-2xl font-bold">GJ21 HJ 7777</p>
            <p className=" text-lg">Rolls Royce</p>
            <p className=" ">
              <i className="ri-star-fill text-lg"></i>{" "}
              <span className="">4.9</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
