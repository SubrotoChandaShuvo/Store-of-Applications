import React from 'react';
import appError from "../assets/App-Error.png";

const AppNotFound = () => {
    return (
        <div>
        <div className='p-20 flex justify-center'>
            <img src={appError} alt=""  className=''/>
        </div> 
        <div className='text-center'>
        <h1 className='font-semibold text-5xl'>OPPS!! APP NOT FOUND</h1>
        <p className=' py-4'>The App you are requesting is not found on our system.  please try another apps</p>
        <a href="/" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">Go Back!</a>

        </div>
        </div>
    );
};

export default AppNotFound;