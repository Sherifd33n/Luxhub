import React from "react";
import LuxuryContent from "./luxury-content";
import Link from "next/link";
import { Button } from "./ui/button";

const Luxury = () => {
  return (
    <div className="text-center py-4 mt-4">
      <p className="text-[14px] text-button_brown font-semibold">
        The pleasure of luxury
      </p>
      <p className="text-3xl md:text-4xl font-semibold text-base my-2">Rooms & Suits</p>
      <p className="text-[15px] text-button_brown mx-[5%] md:mx-[20%]">
        From intimate rooms to expansive suites, each accommodation is designed
        to provide the perfect balance of relaxation, privacy, and luxury.
      </p>
      <LuxuryContent />

      <Link href="/our-rooms">
        <Button
          size={"lg"}
          className="text-white bg-button_brown px-[40px] mt-[20px] cursor-pointer">
          VIEW ALL ROOMS
        </Button>
      </Link>
    </div>
  );
};

export default Luxury;
