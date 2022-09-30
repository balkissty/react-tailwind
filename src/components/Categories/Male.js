import React from "react";
import Male1 from "../../assets/male-glasses/1.jpeg";
import Male2 from "../../assets/male-glasses/2.jpeg";
import Male3 from "../../assets/male-glasses/3.jpeg";
import Male4 from "../../assets/male-glasses/4.jpeg";
import Male5 from "../../assets/male-glasses/5.jpeg";
function Male() {
  return (
    <>
      <div className="mt-10 mx-5 md:mx-0 shadow-xl rounded-l-2xl">
        <div className="bg-[#051D4C] rounded-t-2xl md:rounded-tr-none">
          <div className="flex justify-between items-center px-5 md:px-10 lg:px-20 py-5 text-white text-1xl md:text-2xl">
            <p className="flex flex-wrap">Male Glasses</p>
            {/* <div className="flex justify-between items-center space-x-8">
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 px-5 py-6">
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Male1}
              alt="anti-blue light glasses"
            />
            <div className="mt-3">
              <p className="mb-3 flex flex-wrap">
                Anti-blue light blocking Computer glasses
              </p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Male2}
              alt="anti-blue light glasses"
            />

            <div className="mt-3">
              <p className="mb-3 flex flex-wrap">
                Anti-blue light blocking Computer glasses
              </p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Male3}
              alt="anti-blue light glasses"
            />

            <div className="mt-3">
              <p className="mb-3 flex flex-wrap">
                Anti-blue light blocking Computer glasses
              </p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Male4}
              alt="anti-blue light glasses"
            />

            <div className="mt-3">
              <p className="mb-3 flex flex-wrap">
                Anti-blue light blocking Computer glasses
              </p>
              <p className="font-bold">$14</p>
            </div>
          </div>
          <div className="text-left">
            <img
              className="object-cover aspect-square w-full"
              src={Male5}
              alt="anti-blue light glasses"
            />

            <div className="mt-3">
              <p className="mb-3 flex flex-wrap">
                Anti-blue light blocking Computer glasses
              </p>
              <p className="font-bold">$14</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Male;
