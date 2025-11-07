import React from 'react';
import appError from "../assets/App-Error.png";

const AppNotFound = () => {
    return (
        <div className='p-20'>
            <img src={appError} alt=""  className=''/>
        </div> 
    );
};

export default AppNotFound;