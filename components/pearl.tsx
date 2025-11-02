import React from "react";
import { Button } from "./ui/button";

const Pearl = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[30px] items-center mt-[70px] bg-[url('/assets/bg-2.png')] bg-no-repeat bg-right-top bg-[length:200px_200px] bg-purple-50  px-4 md:px-[130px]">
      {/* <div> */}
      <img src={"/assets/feature.png"} className="w-full lg:w-[50%] h-[250px] md:h-[400px] object-cover rounded-[8px]" alt="" />
      {/* </div> */}

      <div className="mr-[5%] lg:mr-[10%]">
        <p className="text-[14px] text-button_brown font-semibold">
          Luxury Hotel & Resorts
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-base my-2">
          Pearl Of The <br className="hidden lg:block"/> Adriatic
        </p>
        <p className="text-[15px] text-button_brown">
          From intimate rooms to expansive suites, each accommodation is
          designed to provide the perfect balance of relaxation, privacy, and
          luxury.
        </p>
        <p className="text-[15px] text-button_brown my-6">
          The Deluxe Double Room combines refined style with enhanced comfort,
          offering guests a relaxing retreat with upgraded features. Perfect for
          couples or business travelers, it strikes the ideal balance between
          luxury and practicality.
        </p>{" "}
        <Button size={"lg"} className="bg-button_brown px-[30px]">Discover More</Button>
      </div>
    </div>
  );
};

export default Pearl;
