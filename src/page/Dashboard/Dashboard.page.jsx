import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import LeftSideDashboardPage from "./module/component/LeftSide.dashboard.page";

const DashboardPage = () => {

  const nav = useNavigate();

  const { state } = useLocation();

  const user = state?.user;

  useEffect(()=>{
    const data = localStorage.getItem("auth");

    if(!data) {
       nav('/admin')
    }
  },[])
  
  return (
    <div className=" container-layout bg-white">
      <div className=" grid grid-cols-10 min-h-screen mt-20">
        <div className=" col-span-2 p-4">
          <LeftSideDashboardPage user ={user}/>
        </div>
        <div className=" col-span-8 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
