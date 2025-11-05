import React, { useEffect, useState } from "react";

const Installations = () => {
  const [install, setInstall] = useState([]);
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installed"));
    if(installedList)
        setInstall(installedList)
  }, []);
  return (
    <div className="bg-[#F1F5E8]">
      {
        <div>
          <div className="p-20">
            <h1 className="text-5xl font-bold text-center pb-3">
              Your Installed Apps
            </h1>
            <p className="text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex items-center gap-4 p-4">
            <p className="text-2xl font-semibold flex-[0_0_70%]">
              {install.length} Apps Found
            </p>
          </div>
          <div className="p-4 bg-white">
            <div>
              <img src="" alt="" className="w-20 h-20" />
              <div>
                <p className="font-medium text-[20px]"></p>
                {/* <div className=""> */}
                <img
                  src="/assets/icon-downloads.png"
                  alt=""
                  className="w-10 h-10"
                />
                {/* <h2 className="font-extrabold text-[40px]">{downloads}</h2> */}
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Installations;
