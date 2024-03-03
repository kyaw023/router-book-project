import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ApiContext } from "../../../Store/ApiContextProvider";
import StarRatingComponent from "../../../component/StarRating.component";

const AllBookPage = () => {
  const { data } = useContext(ApiContext);

  return (
    <div>
      <h1 className=" text-xl font-semibold">Inventory</h1>

      <div className=" grid grid-cols-3 gap-x-3 gap-y-10 mt-10">
        {data?.map(({ id, title, author, slug, image, rating }) => {
          return (
            <div key={id} className=" relative border max-w-sm">
              <div className=" w-full h-28 rounded-sm bg-yellow-200"></div>

              <div className=" absolute -top-5 left-8">
                <img
                  className=" w-44 h-24 object-cover rounded border border-red-500 mx-auto"
                  src={image}
                  alt=""
                />
              </div>

              <div className=" text-center flex flex-col items-center justify-center mt-3">
                <h1 className=" font-semibold">{title}</h1>
                <p className=" text-sm text-slate-500">{author}</p>

                <StarRatingComponent rating={rating} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBookPage;
