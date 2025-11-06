import React from "react";

const LoadingSpinner = () => {
  return (
    // <div>
    //     <span className="loading loading-spinner text-primary"></span>
    // </div>
    <div className="flex items-center justify-center min-h-screen">
      <span className="loading loading-spinner text-primary text-6xl w-24 h-24"></span>
    </div>
  );
};

export default LoadingSpinner;
