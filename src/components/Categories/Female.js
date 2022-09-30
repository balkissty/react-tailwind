import React from "react";
import Female1 from "../../assets/female-glasses/1.jpeg";
import Female2 from "../../assets/female-glasses/2.jpeg";
import Female3 from "../../assets/female-glasses/3.jpeg";
import Female4 from "../../assets/female-glasses/4.jpeg";
import Female5 from "../../assets/female-glasses/5.jpeg";

function Female() {
  return (
    <>
      <div className="mt-10 mx-5 md:mx-0 shadow-xl rounded-2xl">
        <div className="rounded-t-2xl  bg-[#051D4C]">
          <div className="px-5 md:px-10 lg:px-20 flex justify-between items-center py-5 text-white mt-3 md:text-2xl">
            <parseFloat>Female Glasses</parseFloat>
            {/* <div className="flex justify-between items-center space-x-9">
              <p>See All</p>
              <svg
                className="w-7 h-7 md:w-11 md:h-11"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div> */}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-10 py-12">
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Female1}
              alt="anti-blue light glasses"
            />

            <div className="">
              <div className="mt-3">
                <p className="mb-2">Beehive Female Sunglasses</p>
                <p className="font-bold">&#8358;5000</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Female2}
              alt="anti-blue light glasses"
            />

            <div className="mt-3">
              <p className="mb-2">
                Fashion Steampunk Vintage Sunglasses
              </p>
              <p className="font-bold">&#8358;5000</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Female3}
              alt="anti-blue light glasses"
            />

            <div className="">
              <div className="mt-3">
                <p className=" mb-2">Fashion Square Shades</p>
                <p className="font-bold">&#8358;5000</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Female4}
              alt="anti-blue light glasses"
            />

            <div className="">
              <div className="mt-3">
                <p className="mb-2">Oversized Square Luxury Glasses</p>
                <p className="font-bold">&#8358;5000</p>
              </div>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Female5}
              alt="anti-blue light glasses"
            />

            <div className="">
              <div className="mt-3">
                <p className="mb-2">Jeans Fashion Sunglasses</p>
                <p className="font-bold">&#8358;5000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Female;
