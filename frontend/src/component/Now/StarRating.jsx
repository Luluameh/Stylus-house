import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <svg
          key={i}
          className="w-6 h-6 fill-current text-yellow-500"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1L12.1887 6.47222H18.7549L13.8194 10.5278L16.0081 16L10 12.75L3.99191 16L6.18059 10.5278L1.24507 6.47222H7.8113L10 1Z" />
        </svg>
      );
    } else {
      stars.push(
        <svg
          key={i}
          className="w-6 h-6 fill-current text-gray-300"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 1L12.1887 6.47222H18.7549L13.8194 10.5278L16.0081 16L10 12.75L3.99191 16L6.18059 10.5278L1.24507 6.47222H7.8113L10 1Z" />
        </svg>
      );
    }
  }

  return <div className="flex items-center">{stars}</div>;
};

export default StarRating;
