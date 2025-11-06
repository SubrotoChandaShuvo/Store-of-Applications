import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Error404 from "./Error404";

const ErrorPage = () => {
  const error = useRouteError();
  return <div>
    {error.message}
    
      <Navbar/>
      <Error404/>
      <Footer/>
    
    
    </div>;
};

export default ErrorPage;
