import React, { useContext } from "react";
import { DrawerContext } from "../Store/DrawerContextProvider";

const Drawer = () => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  

  const closeDrawerHandler = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={` h-screen bg-slate-200 shadow w-[400px] fixed top-0 z-50 duration-700 ${
        isOpen ? "-left-0" : "-left-full"
      }`}
    >
      <div className=" p-10 ">
        <div className=" flex items-center justify-between">
          {/* title drawer */}
          <div>
            <h1 className=" text-2xl font-bold ">Favourite Books is Here</h1>
            <span className=" text-sm">Read More Books</span>
          </div>

          {/* close slide btn */}
          <div
            onClick={closeDrawerHandler}
            className=" border-2 active::scale-105 duration-150 border-slate-500 rounded shadow cursor-pointer px-2 py-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
