import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import uberlogo from "../assets/img/UberLogo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const finishRidePanelRef = useRef(null);
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishRidePanel]
  );
  return (
    <>
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
        <div className="h-[80%] rounded-lg overflow-hidden shadow-lg">
          <img
            className="h-full w-full object-cover"
            src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/86db4648-a6c2-4ced-bfcd-2a71aab17b16.png?f=webp&w=1920&q=85&fit=shrink-cover&extend-bottom=120&image=%2Fwatermark%2F1.0%2Fbf66090d-f83f-452c-8b87-6eb356fed961&gravity=bottom&v=1.0"
            alt="Uber Map"
          />
        </div>
        <div
          className="h-[20%] bg-yellow-400"
          onClick={() => {
            setFinishRidePanel(true);
          }}
        >
          <h5 className="h-[20%] text-center w-full">
            <i className="ri-arrow-up-wide-line text-3xl"></i>
          </h5>
          <div className="h-[80%] flex items-center justify-center  gap-5">
            <h4 className="text-xl font-semibold">4 KM away</h4>
            <button className="bg-green-600 text-white font-semibold text-lg py-2 px-8 rounded-lg">
              Confirm
            </button>
          </div>
        </div>

        <div
          ref={finishRidePanelRef}
          className="fixed w-full translate-y-full z-10 bottom-0 bg-white"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </>
  );
};

export default CaptainRiding;
