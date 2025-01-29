import React from "react";

const Features = ({ image, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-6 transition-transform duration-300 hover:scale-105">
      {/* Image with a soft shadow & hover effect */}
      <div className="w-24 h-24 p-4 border border-black rounded-full flex items-center justify-center  shadow-md">
        <img src={image} alt={heading} className="w-16 h-16 object-contain" />
      </div>

      {/* Heading */}
      <h1 className="text-xl font-bold text-gray-800">{heading}</h1>

      {/* Description */}
      <p className="text-gray-600 px-4 sm:px-6 text-sm sm:text-base">{paragraph}</p>
    </div>
  );
};

export default Features;
