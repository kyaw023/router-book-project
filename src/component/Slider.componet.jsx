import { motion } from "framer-motion";
import React from "react";
const SliderComponet = () => {
  return (
    <div className="select-none container-layout">
      <div className=" flex items-start justify-between gap-10">
        <div>
          <h1 className=" text-6xl font-semibold">
            <motion.div initial={{ x : -1000}} animate={{ x : 0}}>
              Where Words <span className=" text-red-600">Come Alive</span>
            </motion.div>
          </h1>
          <p className=" mt-4 text-lg text-slate-500">
            Step into the Enchanting Realm of Books. From Time-Honored Classics
            to Contemporary Gems, Find Your Perfect Read Here.
          </p>

          <div className=" mt-5  flex items-center gap-3">
            <button className=" bg-red-700 text-slate-100 px-4 py-2 rounded text-sm cursor-pointer active:scale-110">
              Discover Books
            </button>
            <button className=" border border-red-700 px-4 py-2 rounded cursor-pointer text-sm active:scale-105">
              More
            </button>
          </div>
        </div>

        <div>
          <img
            className=" w-[800px] h-[480px] rounded shadow object-cover"
            src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SliderComponet;
