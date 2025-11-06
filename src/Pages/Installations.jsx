import React, { useEffect, useState } from "react";
import InstallDesign from "./InstallDesign";
// import { redirectDocument } from "react-router";

const Installations = () => {
  const [sortOrder, setSortOrder] = useState("none");
  const [install, setInstall] = useState([]);
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installed"));
    if (installedList) setInstall(installedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "asc") {
      return [...install].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "dsc") {
      return [...install].sort((a, b) => b.size - a.size);
    } else {
      return install;
    }
  })();


  const handleUninstall = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installed"));
    let updatedList = existingList.filter((a) => a.id !== id);

    // for UI instant update
    setInstall(updatedList)
    localStorage.setItem("installed", JSON.stringify(updatedList));
  };

  return (
    <div className="bg-[#F1F5E8] p-20">
      {
        <div>
          <div className="">
            <h1 className="text-5xl font-bold text-center pb-3">
              Your Installed Apps
            </h1>
            <p className="text-center">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
          <div className="flex items-center gap-4 py-4 justify-between">
            <p className="text-2xl font-semibold flex-[0_0_70%]">
              {sortedItem.length} Apps Found
            </p>
            <label className="form-control">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-4 py-3 bg-white font-bold rounded-sm"
              >
                <option value="none">Sort By Size</option>
                <option value="asc">Low-High</option>
                <option value="dsc">High-Low</option>
              </select>
            </label>
          </div>
        </div>
      }

      <div className="space-y-6">
        {sortedItem.map((p) => (
          <InstallDesign key={p.id} p={p}  handleUninstall={handleUninstall}/>
        ))}
      </div>
    </div>
  );
};

export default Installations;
