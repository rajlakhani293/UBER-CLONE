import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import uberlogo from "../assets/img/UberLogo.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const ridePopupPanelRef = useRef(null);
  const [ridePopupPanel, setRidePopupPanel] = useState(true);

  const confirmRidePopupPanelRef = useRef(null);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  // ride popup
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopupPanel]
  );
  // confirm ride popup
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePopupPanel]
  );
  return (
    <div className="h-screen overflow-hidden">
      <div className="fixed py-2 px-4 top-0 flex items-center justify-between  w-screen">
        <img className="w-16" src={uberlogo} alt="Uber Logo" />
        <Link
          to="/home"
          className="h-10 w-10 flex items-center justify-center rounded-full"
        >
          <i className="text-2xl font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      {/* first part */}
      <div className="h-[65%] rounded-lg overflow-hidden shadow-lg">
        <img
          className="h-full w-full object-cover"
          src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/86db4648-a6c2-4ced-bfcd-2a71aab17b16.png?f=webp&w=1920&q=85&fit=shrink-cover&extend-bottom=120&image=%2Fwatermark%2F1.0%2Fbf66090d-f83f-452c-8b87-6eb356fed961&gravity=bottom&v=1.0"
          alt="Uber Map"
        />
      </div>
      {/* Ride Details Section */}
      <div className="h-[35%] bg-white p-4 flex flex-col">
        <CaptainDetails />
      </div>
      {/* Ride Popup Pane */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 bg-white px-3 py-3"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      {/* Confirm Ride Popup Pane */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full translate-y-full z-10 bottom-0 bg-white"
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
