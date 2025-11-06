import React from "react";
import Home from "./Home";

const Error404 = () => {

  return (
    <div className="min-h-screen p-20 ">
      <div className="items-center  text-center">
        <img className="mx-auto pb-4" src="/assets/error-404.png" alt="" />
        <h1 className="font-semibold text-5xl">Oops, page not found!</h1>
        <p className="text-xl font-normal py-4">The page you are looking for is not available.</p>
        <a href="/" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</a>
      </div>
    </div>
  );
};

export default Error404;
