import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../Store/ApiContextProvider";
import { SliderComponent } from "../component";
import StarRatingComponent from "../component/StarRating.component";

const HomePage = () => {
  const { data, loading } = useContext(ApiContext);

  return (
    <div className="container-layout mt-20">
      <SliderComponent />
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {data?.map(({ id, title, image, description, slug ,rating ,price }) => {
          return (
            <div
              key={id}
              className=" border border-slate-500 p-5 rounded relative group select-none"
            >
              <div>
                <div>
                  <Link to={`/detail/${slug}`}>
                    <img
                      className=" w-full object-cover h-[240px]"
                      src={image}
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <h1 className=" text-2xl font-semibold py-3">
                    {title}
                  </h1>
                  <p className=" text-sm text-slate-500">{description}</p>
                  <div>
                     <StarRatingComponent rating={rating}/>
                  </div>
                </div>
                <div className=" mt-3  flex items-center gap-3">
                  <button className=" bg-red-700 text-slate-100 px-4 py-2 rounded text-sm cursor-pointer active:scale-110">
                    {price === "free" ? "Free Download" : `$ ${price}` }
                  </button>
                  <button className=" border border-red-700 px-4 py-2 rounded cursor-pointer text-sm active:scale-105">
                    Read Now
                  </button>
                </div>
              </div>
              <div className=" absolute top-3 right-3 hidden  group-hover:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-red-700 border bg-slate-200 px-1 py-1 rounded "
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
