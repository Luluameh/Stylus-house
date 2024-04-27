import React from "react";
import crop from "../../assets/crop.jpeg";
const ImageWithTextAndButton = ({ imageUrl, text }) => {
 
  const slides = [
    {
      imageUrl: crop,
      text: "Established fact that by the readable content ",
    },
    {
      imageUrl: crop,
      text: "good to know you baby girl",
    },
  ];

  return (
    <>
      <div className="p-5 md:flex md:justify-between  md:space-x-5 ">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.imageUrl} // Use the imageUrl from the slide
              alt="text"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                padding: "4px",
              }}
              className="w-full h-auto object-cover"
            />

            <div className="absolute  text-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className=" text-3xl font-normal">
                Established fact that by the <br /> readable content
              </h1>
              <button
                className="btn absolute sm:relative left-0 ml-4 mb-4 sm:ml-0 sm:mb-0"
                style={{ marginTop: "20px" }}
              >
                ReadMore
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageWithTextAndButton;
