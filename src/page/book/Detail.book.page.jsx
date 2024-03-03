import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../Store/ApiContextProvider";
import StarRatingComponent from "../../component/StarRating.component";

const DetailBookPage = () => {
  const { slug } = useParams();

  const [detailBook, setDetailBook] = useState([]);

  const { loading, data, error } = useContext(ApiContext);

  useEffect(() => {
    const book = data?.filter((d) => {
      return d.slug === slug;
    });
    setDetailBook(book);

    console.log(book);
  }, [slug, data]);

  return (
    <div className=" container-layout mt-20">
      {detailBook?.map(({id,image,title,description,sub_images,rating,price}) => {
        return (
          <div key={id} className="flex gap-10">
            <div>
              <img className=" w-full h-[400px]" src={image} />
              <div className=" flex items-center gap-2 mt-4">
                {sub_images?.map((img, index) => {
                  return (
                    <div key={index} className="">
                      <img
                        className=" w-20 h-20 rounded object-cover"
                        src={img}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className=" text-2xl font-semibold text-slate-800 mb-4">
                {title}
              </h1>
              <div>
                 <StarRatingComponent rating={rating}/>
              </div>
              <p className=" text-slate-500">{description}</p>
              <div className=" mt-3  flex items-center gap-3 select-none">
                <button className=" bg-red-700 text-slate-100 px-4 py-2 rounded text-sm active:scale-105">
                {price === "free" ? "Free Download" : `$ ${price}` }
                </button>
                <button className=" border border-red-700 px-4 py-2 rounded text-slate-800 text-sm active:scale-105">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DetailBookPage;
