import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import crop from "../../assets/crop.jpeg";
import cloth from "../../assets/cloth2.jpeg";
import dinnerdress from "../../assets/dinnerdress.jpeg";
import "../Button.css";
import ImageWithTextAndButton from "./ImageWithTextAndButton";
import Services from "./Services";

const HomeEnding = () => {

 

  const slides = [
    {
      imageUrl: crop,
    },
    {
      imageUrl: cloth,
    },
    {
      imageUrl: dinnerdress,
    },
  ];

  return (
    <>
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="relative w-screen h-screen overflow-hidden ">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center text-white "
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="absolute text-white text-center text-uppercase"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-base lg:text-6xl">
                  Collection houses our first-ever
                </h1>
                <button
                  className="btn absolute sm:relative left-0 ml-4 mb-4 sm:ml-0 sm:mb-0"
                  style={{ marginTop: "20px" }}
                >
                  About Us
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ImageWithTextAndButton />
      <Services />
      </div>
      </>
  );
};

export default HomeEnding;
