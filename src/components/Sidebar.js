import React from "react";

function Sidebar({ direction }) {
  return (
    <>
      {direction === "left" ? (
        <>
          <ul className="hidden basis-1/4 lg:grid gap-1 pl-10 lg:pl-20 py-8 shadow-xl rounded-xl">
            <li className="font-bold mb-5">Categories</li>
            <li>Male</li>
            <li>Female</li>
            <li>Anti-Bluelight</li>
          </ul>
        </>
      ) : (
        <>
          <ul className="hidden basis-1/4 gap-1 lg:grid pl-5 lg:pl-14 py-8 shadow-xl rounded-xl">
            <li className="font-bold mb-5">Categories (Coming Soon)</li>
            <li>Kids</li>
            <li>Rimless</li>
            <li>Night Vision</li>
            <li>Luxury</li>
            <li>Fashion</li>
          </ul>
        </>
      )}
    </>
  );
}

export default Sidebar;
