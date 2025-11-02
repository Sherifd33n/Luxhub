import React from "react";
import CardGrid from "./explore-content";

const Explore = () => {
  return (
    <div className="text-center py-4 mt-[50px]">
      <p className="text-[14px] text-button_brown font-semibold">Explore</p>
      <p className="text-3xl md:text-4xl font-semibold text-base my-2">The Hotel</p>
      <p className="text-[15px] text-button_brown mx-[5%] md:mx-[20%]">
        The LuxHub is strategically located near shopping malls, cultural
        centers, and major transport hubs, making it an ideal choice for both
        tourists and professionals.
      </p>
      <CardGrid />
    </div>
  );
};

export default Explore;
