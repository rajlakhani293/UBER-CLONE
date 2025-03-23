import React, { useRef, useState } from "react";
import uberlogo from "../assets/img/UberLogo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const vehiclePanelRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const confirmRidePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);

  const vehicleFoundPanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);

  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  // location panel
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          //  opacity: 1,
          padding: 20,
        });
        gsap.to(panelCloseRef.current, { opacity: 1 });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          // opacity: 1,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, { opacity: 0 });
      }
    },
    [panelOpen]
  );
  //  choose vehicle panel
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );
  //  confirm ride panel
  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );
  // looking for ride panel
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );
  // waiting for rider
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-3"
        src={uberlogo}
        alt="Uber Logo"
      />
      {/* location Image  */}
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://bytescale.mobbin.com/FW25bBB/image/content/app_screens/86db4648-a6c2-4ced-bfcd-2a71aab17b16.png?f=webp&w=1920&q=85&fit=shrink-cover&extend-bottom=120&image=%2Fwatermark%2F1.0%2Fbf66090d-f83f-452c-8b87-6eb356fed961&gravity=bottom&v=1.0"
          alt="Uber Map"
        />
      </div>
      {/* find a trip */}
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-5 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-3 opacity-0 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <div className="flex flex-col space-y-3">
            <h4 className="text-2xl font-semibold">Find a Trip</h4>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Add a pick-up location"
                className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full"
              />
              <input
                type="text"
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter your destination"
                className="bg-[#eee] px-12 py-3 text-lg rounded-lg w-full"
              />
            </form>
          </div>
        </div>

        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* choose vehicle */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-3 py-3"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      </div>
      {/* confirm ride */}
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px- py-3"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      {/* looking for rider */}
      <div
        ref={vehicleFoundPanelRef}
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-4 py-3"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      {/* waiting fro rider */}
      <div
        className="fixed w-full bottom-0 z-10 translate-y-full bg-white px-4 py-3"
        ref={waitingForDriverRef}
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
