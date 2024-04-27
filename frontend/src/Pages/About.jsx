import React from "react";
import crop from "../assets/crop.jpeg";
import cloth from '../assets/clothopen.jpeg';
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import './About.css'
import ShopNow from "../component/Now/ShopNow";
import Services from "../component/Now/Services";
const About = () => {
  return (
    <div className="max-w-full mx-auto  px-4 sm:px-6 lg:px-8 pt-3  ">
      <div className="max-w-6xl  mx-auto ">
        <div className="m-5  p-5  text-center  block">
          <div className="bg-[#EFF5F8] p-2  flex text-[#949EA5]  gap-2 text-center justify-center">
            <Link to="/" className=" ">
              Home
            </Link>

            <FaAngleRight className="mt-1" />

            <Link to="/about" className="">
              About
            </Link>
          </div>
        </div>
        <div className="pb-4 flex flex-col justify-center items-center h-full  ">
          <h1 className="text-center text-5xl font-semibold leading-tight mb-4 text-textbody">
            OUR STORY
          </h1>
          <div className="w-2/3  h-1/2 text-center">
            <p className="text-gray-600 text-lg font-normal leading-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden pb-7 crop-image">
          <img
            className="h-[450px]"
            src={crop}
            alt="Your Image"
            style={{
              width: "95%",
              maxHeight: "20%", // Adjust the maxHeight value as needed
              objectFit: "cover",
              padding: "4px",
            }}
          />
          <div class="third-cut"></div>
        </div>
        <div className="pb-4 flex flex-col justify-center items-center h-full  ">
          <h1 className="text-center text-5xl font-semibold leading-tight mb-4 text-textbody">
            JOURNEY START FROM
          </h1>
          <div className="w-2/3  h-1/2 text-center">
            <p className="text-gray-600 text-lg font-normal leading-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <div className="relative flex justify-center items-center overflow-hidden pb-7 crop-image">
          <img
            className="h-[450px]"
            src="https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg"
            alt="Your Image"
            style={{
              width: "95%",
              maxHeight: "20%", // Adjust the maxHeight value as needed
              objectFit: "cover",
              padding: "4px",
            }}
          />
          <div class="third-cut"></div>
        </div>
        <div className="pb-4 flex flex-col justify-center items-center h-full  ">
          <h1 className="text-center text-5xl font-semibold leading-tight mb-4 text-textbody">
            2024
          </h1>
          <div className="w-2/3  h-1/2 text-center">
            <p className="text-gray-600 text-lg font-normal leading-7 pt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
        <ShopNow />
        <Services/>
      </div>
    </div>
  );
};

export default About;
