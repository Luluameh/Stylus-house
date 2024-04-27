import React, { useState, useEffect } from "react";
import crop from "../../assets/crop.jpeg";
import cloth from "../../assets/cloth2.jpeg";
import clothopen from "../../assets/clothopen.jpeg";
import dinnerdress from "../../assets/dinnerdress.jpeg";
import "../Button.css";
import { FaTwitter, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
const BannerHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 9000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

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
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8  pb-7">
        <div className="flex  justify-between   max-w-6xl mx-auto">
          <div className="relative w-screen h-screen overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute w-full h-full flex items-center justify-center text-white  ${
                  currentSlide === index ? "left-0" : "left-full"
                } transition-transform duration-500`}
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <div className="absolute top-4 left-1">
                  <div className="flex md:space-x-12  md:hidden ">
                    <div className="flex space-x-2">
                      <a
                        href="/"
                        className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-white mr-2"
                      >
                        <div className="icon hover:text-maincolor">
                          <FaTwitter className="text-white hover:text-maincolor" />
                        </div>
                      </a>
                      <a
                        href="/"
                        className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-white mr-2"
                      >
                        <div className="icon hover:text-maincolor">
                          <FaFacebookF className="text-white hover:text-maincolor" />
                        </div>
                      </a>

                      <a
                        href="/"
                        className="flex items-center justify-center w-10 h-10 rounded-full text-sm border border-white mr-2 "
                      >
                        <div className="icon hover:text-maincolor">
                          <FaPinterestP className="text-white  hover:text-maincolor" />
                        </div>
                      </a>
                    </div>
                    <div className=" flex space-x-4  ">
                      <p className="text-base cursor-pointer p-3 float-right bg-neutral-100 rounded-full">
                        <FaSearch className="text-textbody  " />
                      </p>
                      <p className="flex space-x-2  bg-maincolor px-5 py-2 rounded-full cursor-pointer ">
                        <BsBagCheck className="text-white " />
                        <span className="text-white">0</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute  text-white  text-centre   text-transform: uppercase"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h1 className="text-4xl sm:text-3xl md:text-6xl lg:text-8xl">
                    Fashion <br /> Meets Confort and  <br /> Style
                  </h1>
                  <button
                    className="btn absolute sm:relative  left-0 ml-4 mb-4 sm:ml-0 sm:mb-0"
                    style={{ marginTop: "20px" }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}

            <div className="absolute bottom-0 w-full flex space-x-3 justify-center mb-4">
              {[0, 1, 2].map((index) => (
                <div className="border-2 w-8 h-8 rounded-full p-2 flex items-center justify-center">
                  <button
                    key={index}
                    className={`w-3 h-3  rounded-full ${
                      currentSlide === index ? "bg-maincolor" : "bg-white"
                    }`}
                    onClick={() => changeSlide(index)}
                  ></button>
                </div>
              ))}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerHome;
