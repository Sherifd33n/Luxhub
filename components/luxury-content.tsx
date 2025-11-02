import { BedDouble, CarFront, Coffee, Utensils, Waves } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {rooms} from "../data/rooms";

const LuxuryContent = () => {


  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 mx-auto justify-center items-center gap-[30px] mt-[30px]">
      {rooms.slice(0, 3).map((room, idx) => (
        <div
          key={idx}
          className="text-left shadow-xl w-[350px] hover:border-button_brown hover:border-r hover:border-b-button_brown hover:border-r-button_brown border-b-3 border-r-3 transition-all duration-300">
          <Image
            src={room.img}
            alt={room.title}
            width={350}
            height={300}
            className="w-[350px] h-[200px] object-cover"
          />
          <div className="flex bg-button_brown text-white justify-center text-[13px] font-semibold py-[15px] gap-[20px] mx-[30px] -my-[30px] z-10 relative mb-6">
            <p>{room.price}</p>
            <hr className="h-[20px] w-[1px] bg-black" />
            <Link
              href={`/rooms/${room.slug}`}
              className="cursor-pointer hover:text-red-600">
              Book Now
            </Link>
          </div>
          <div className="px-4">
            {" "}
            <h3 className="text-[14px] text-base font-semibold my-3">
              {room.title}
            </h3>
            <p className="text-[12px] text-button_brown truncate">{room.description}</p>
          </div>

          <div className="flex gap-[20px] mt-4 px-4 justify-center mb-6 text-gray-400">
            <BedDouble />

            <CarFront />
            <Coffee />
            <Utensils />
            <Waves />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LuxuryContent;
