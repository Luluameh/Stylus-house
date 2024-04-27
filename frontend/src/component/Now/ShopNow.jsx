import React from "react";
import crop from "../../assets/crop.jpeg";
import dinnerdress from "../../assets/dinnerdress.jpeg";
import clothopen from "../../assets/clothopen.jpeg";
import "../Button.css";
import "./Shopnow.css";

const ShopNow = () => {
  const Nowshop = [
    {
      imageUrl: crop,
      text: "crop Top ",
    },
    {
      imageUrl: clothopen,
      text: " Jacket ",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg",
      text: " always",
    },
    {
      imageUrl: dinnerdress,
      text: "Dinner Dress ",
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pb-7">
        <div className="flex flex-wrap justify-center">
          {Nowshop.map((now, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 relative"
            >
              <div className="relative">
                <img
                  src={now.imageUrl}
                  alt={now.text}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  className="w-full h-auto object-cover"
                />

                <div className="absolute inset-0 flex flex-col  justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                  <button className="btn mt-3">Shop Now</button>

                  <div className="  absolute  text-transform: uppercase   w-full overlay ">
                    <h1 className="text-center text-2xl  font-normal ">{now.text}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopNow;
