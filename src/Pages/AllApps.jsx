import React, { useState } from "react";
import useApps from "../hooks/useApps";
import { Link } from "react-router";
import Apps from "./Apps";
import AppNotFound from "./AppNotFound";
import LoadingSpinner from "../Components/LoadingSpinner";

const AllApps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  if (loading) return <LoadingSpinner />;
  if (error) return <AppNotFound />;
  // console.log(searchApps);

  return (
    <div className="bg-[#F1F5E8]">
      {
        <div className="p-5 md:p-10 lg:p-20">
          <div className="p-10">
            <h1 className="text-5xl font-bold text-center pb-3">
              Trending Apps
            </h1>
            <p className="text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div>
            <div className="flex items-center gap-4 p-4">
              <p className="text-2xl font-semibold flex-[0_0_70%]">
                ({searchApps.length}) Apps Found
              </p>
              <form className="border border-gray-300 rounded-sm p-2 shadow-md flex-[0_0_30%]">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  placeholder="🔍   Search"
                  className="w-full outline-none text-gray-700 placeholder-gray-400 px-4"
                />
              </form>
            </div>
            {
              console.log(searchApps.length)
              
            }
            <div className={`${searchApps.length ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" : ""}`}>
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <AppNotFound />
              ) : searchApps.length?
              (
                searchApps.map((app) => <Apps app={app} key={app.id}></Apps>)
              ):
              <AppNotFound/>

              }
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default AllApps;
