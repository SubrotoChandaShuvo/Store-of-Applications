import React from "react";

const InstallDesign = ({ p , handleUninstall}) => {
  //  p= JSON.parse(p);
  const { image, downloads, size, ratingAvg, title, id } = p;
  // console.log(p.image);

  return (
    <div>
      <div>
        <div className="p-4  space-y-4 bg-white">
          <div className="flex gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <img src={image} alt="" className="w-20 h-20 rounded-sm" />
              <div>
                <p className="font-medium text-[20px]">{title}</p>
                <div className="flex gap-4 bt-4">
                  <div className="flex gap-1 items-center">
                    <img
                      src="/assets/icon-downloads.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p className="text-[#00D390]">{downloads}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      src="/assets/icon-ratings.png"
                      alt=""
                      className="w-4 h-4"
                    />
                    <p className="text-[#FF8811]">{ratingAvg}</p>
                  </div>
                  <div>
                    <p className="text-[#627382]">{size} MB</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-[#00D390] text-white rounded-sm px-4 py-3 hover:bg-gray-400" onClick={()=>handleUninstall(id)}>
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallDesign;
