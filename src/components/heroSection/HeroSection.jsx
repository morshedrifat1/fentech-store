import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-140 flex flex-col justify-center items-center p-5">
      <h1
        className="text-4xl sm:text-6xl font-bold text-center leading-12 sm:leading-17 bg-gradient-to-r from-indigo-500 to-fuchsia-500
  bg-clip-text text-transparent"
      >
        Discover the Future <br /> of Gadgets
      </h1>
      <p className="text-lg mt-4 text-center text-gray-500">
        Explore the latest innovative gadgets and cutting-edge technology <br />
        designed to simplify your life, enhance your lifestyle, and fuel your
        passion.
      </p>
      <Link href={'/product'} className="bg-black px-6 py-2 rounded-lg text-white mt-5">Browse Product</Link>
    </div>
  );
};

export default HeroSection;
