import React from "react";
import logo from '../../assets/logo.png';
import '../Loader/Loading.css'
const Loading = () => {
  return (
    <div className="preloader">
      <div className="preloader-circle ">
        <div className="preloader-circle preloader-circle2">
          
        </div>
        
      </div>
      <div className="preloader-img">
        <img src={logo} alt="Loading" />
      </div>
      <div className="pere-text">
        <strong>Loading...</strong>
      </div>
    </div>
  );
};

export default Loading;
