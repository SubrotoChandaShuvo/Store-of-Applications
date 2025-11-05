import React from "react";
import { Link, Links } from "react-router";

const Apps = ({ app }) => {
  const { title, ratingAvg, downloads, image, id } = app;
  return (
    <Link to={`/AllApps/${id}`}>
    <div className="card p-4 shadow-2xl bg-[#ffffff] h-[335px] hover:scale-105 transition">
      <figure className="h-[316px] overflow-hidden">
        <img className="w-full object-cover" src={image} alt={title} />
      </figure>
      <div className="">
        <h2 className="card-title py-4">{title}</h2>
        <p></p>
        <div className="card-actions justify-between">
          <div className="badge bg-[#F1F5E8] text-[#00D390]">
            <img src="/assets/icon-downloads.png" alt="" className="h-3"/>
            {downloads}
          </div>
          <div className="badge bg-[#FFF0E1] text-[#FF8811]">
            <img src="/assets/icon-ratings.png" alt="" className="h-3"/>
            {ratingAvg}
            </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Apps;
