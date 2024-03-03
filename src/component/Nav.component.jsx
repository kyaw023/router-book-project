import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DrawerContext } from "../Store/DrawerContextProvider";

const NavComponent = () => {
  const { drawerHandler } = useContext(DrawerContext);

  const [change,setChange] = useState({})

  const {state} = useLocation();

  const data = JSON.parse(localStorage.getItem("auth"))

   useEffect(() => {

    setChange(data)
     
   },[state?.user])

  return (
    <div className="fixed top-0 w-full z-50 bg-slate-100 shadow py-1 border-b border-b-blue-200">
      <div className=" container-layout">
        <div className=" flex items-center justify-between ">
          <Link to={"/"}>
            <div className="flex items-center gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
                  />
                </svg>
              </div>
              <p className=" text-slate-900 text-2xl font-semibold">
                Boo<span className=" text-red-500">Va</span>
              </p>
            </div>
          </Link>
          <div>
            <input
              type="text"
              placeholder="search books"
              className=" outline-none border border-slate-700 px-3 py-1.5 rounded w-96"
            />
          </div>
          <div className=" flex items-center gap-3">
            {change ? (
              <h1>{change.name}</h1>
            ) : (
              <div>
                <Link to={"/register"}>
                  <button className=" bg-blue-700 text-slate-100 px-4 py-2 rounded text-sm cursor-pointer active:scale-110">
                    Sign Up
                  </button>
                </Link>
                <Link to={"/admin"}>
                  <button className=" border bg-red-700 px-4 py-2 rounded text-slate-100 text-sm cursor-pointer active:scale-110">
                    LogIn
                  </button>
                </Link>
              </div>
            )}
            <div
              onClick={drawerHandler}
              className=" border border-red-600 px-3 py-2 rounded cursor-pointer active:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-red-600"
              >
                <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
