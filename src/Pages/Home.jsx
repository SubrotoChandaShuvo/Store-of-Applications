import React from "react";
import Apps from "./Apps";
import useApps from "../hooks/useApps";
import { Link } from "react-router";
import { Bounce } from "react-toastify";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "./ErrorPage";
// import AllApps from "./AllApps";

const Home = () => {
  //   const appData = useLoaderData();
  const { apps , loading, error} = useApps();

  if (loading) return <LoadingSpinner/>;
  if (error) return <ErrorPage/>

  const trendingApps = apps.slice(0, 8);
  // console.log(appData);
  return (
    <div className="bg-[#F1F5E8]">
     
      {
        <div className="px-20 pt-20">
          <div>
            <div className=" text-center text-[72px] font-black">
              <p>We Build</p>
              <p>
                <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  Productive
                </span>{" "}
                Apps
              </p>
            </div>
            <p className="text-center">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.
            </p>
            <p className="text-center">
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
          </div>
          <div className="flex gap-4 m-10 justify-center">
            <button className="flex gap-1 border border-[#D2D2D2] px-6 py-3 rounded-sm w-[180px]">
              <img src="/assets/Play Store.jpeg" alt="" className="w-9 h-7" />{" "}
              Google Play
            </button>
            <button className="flex gap-1 border border-[#D2D2D2] px-6 py-3 rounded-sm w-[180px] justify-center">
              <img src="/assets/App Store.jpeg" alt="" className="w-6 h-6" />{" "}
              App Store
            </button>
          </div>
          <div>
            <img src="/assets/hero.png" alt="" className="mx-auto" />
          </div>
        </div>
      }
      {
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-20">
          <p className="text-center font-bold text-5xl pb-10">
            Trusted by Millions, Built for You
          </p>
          <div className="px-[183px] flex justify-between">
            <div>
              <p className="text-center">Total Downloads</p>
              <h1 className="text-[64px] font-bold text-center m-4">29.6M</h1>
              <p className="text-center">21% more than last month</p>
            </div>
            <div>
              <p className="text-center">Total Reviews</p>
              <h1 className="text-[64px] font-bold text-center m-4">906K</h1>
              <p className="text-center">46% more than last month</p>
            </div>
            <div>
              <p className="text-center">Active Apps</p>
              <h1 className="text-[64px] font-bold text-center m-4">132+</h1>
              <p className="text-center">31 more will Launch</p>
            </div>
          </div>
        </div>
      }
      {
        <div className="p-20">
          <div className="p-10">
            <h1 className="text-5xl font-bold text-center pb-3">
              Trending Apps
            </h1>
            <p className="text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {trendingApps.map((app) => (
              <Apps app={app} key={app.id}></Apps>
            ))}
          </div>
          <div className="pt-10 text-center">
            {
              <Link
                className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white 
                py-3.5 px-[39px] rounded-sm"
                to="/AllApps"
              >
                Show All
              </Link>
            }
          </div>
        </div>
      }
    </div>
  );
};

export default Home;
