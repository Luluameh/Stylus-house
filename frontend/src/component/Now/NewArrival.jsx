import React from "react";
import crop from "../../assets/crop.jpeg";
import dinnerdress from "../../assets/dinnerdress.jpeg";
import clothopen from "../../assets/clothopen.jpeg";
import StarRating from "./StarRating";
import { BsBagCheck } from "react-icons/bs";

const NewArrival = () => {
  const NewArrive = [
    {
      imageUrl: crop,
      price: "29.00 ",
      clothName: "Crop top",
    },
    {
      imageUrl: clothopen,
      price: " 25.00 ",
      clothName: "Up and down",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg",
      price: " 30.00",
      clothName: "Leather jacket",
    },
    {
      imageUrl: dinnerdress,
      price: "40.00",
      clothName: "Dinner Dress",
    },
    {
      imageUrl: crop,
      price: "20.00 ",
      clothName: "crop top",
    },
    {
      imageUrl: clothopen,
      price: " 50.00 ",
      clothName: "up and down",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/black-woman-trendy-grey-leather-jacket-posing-beige-background-studio-winter-autumn-fashion-look_273443-141.jpg",
      price: " 40.00",
      clothName: "Leather jacket",
    },
    {
      imageUrl: dinnerdress,
      price: "30.00 ",
      clothName: "Dinner Dress",
    },
  ];

  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 pb-7">
        <h2 className="text-4xl sm:text-3xl md:text-3xl lg:text-8xl text-center text-textbody">
          New <br /> Arrival
        </h2>
        <div className="flex flex-wrap justify-center  ">
          {NewArrive.map((newItem, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 ">
              <div className=" shadow-sm relative">
                <img
                  src={newItem.imageUrl}
                  alt={newItem.text}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                  className="w-full h-auto object-cover "
                />
                <p className="absolute  p-2 w-8 h-8  text-center top-7 right-1 transform -translate-y-1/2 -translate-x-1/2   bg-white rounded-full  hover:scale-110 transition duration-300">
                  <BsBagCheck className="text-maincolor text-center    " />
                </p>
                <div className="flex flex-col justify-center items-center border-1 border-{#F6F8FE} p-4 ">
                  <h1 className="mt-3">{newItem.clothName}</h1>
                  <StarRating rating={4} />
                  <h1 className="text-center text-base font-normal ">
                    $ {newItem.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center m-10">
          <button className="border-btn hover:text-white">Browse More</button>
        </div>
      </div>
    </>
  );
};

export default NewArrival;
