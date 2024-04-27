import React from "react";
import { FaCaravan } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
const Services = () => {
  const iconStyle = {
    strokeWidth: 1, // Adjust the stroke width to make the icons thinner
  };
  return (
    <>
    
    <div className="bg-[#f7f7fd] mx-auto text-textbody min-h-80 flex items-center justify-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="">
            <div className="cat-icon ml-7 ">
              <FaCaravan className="text-6xl " />
            </div>
            <div className="cat-cap ml-7 ">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div
            className="single-cat mb-10 md:mb-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".2s"
          >
            <div className="cat-icon">
              <AiOutlineGlobal className="text-6xl" />{" "}
            </div>
            <div className="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div
            className="single-cat mb-10 md:mb-0 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".4s"
          >
            <div className="cat-icon">
              <AiOutlineShopping className="text-6xl" />
            </div>
            <div className="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
          <div
            className="single-cat wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay=".5s"
          >
            <div className="cat-icon">
              <FaBusinessTime className="text-6xl" />
            </div>
            <div className="cat-cap">
              <h5>Fast & Free Delivery</h5>
              <p>Free delivery on all orders</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
};

export default Services;
