import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const MiniAbout = () => {
  return (
    <div className="py-[50px] flex gap-8 flex-col lg:flex-row">
      <div className="lg:flex lg:relative">
        <div>
          {" "}
          <Image
            src={"/assets/about-1.png"}
            alt=""
            height={550}
            width={800}
            className="h-[250px] lg:h-[450px] w-[full] object-cover"
          />
        </div>
        <div className="flex items-end -ml-[40%] -mb-[50px]">
          {" "}
          <Image
            src={"/assets/about-2.png"}
            alt=""
            height={400}
            width={550}
            className="border-[15px] border-white border-b-0 hidden lg:block"
          />
        </div>
      </div>
      <div className="mt-[30px]">
        <p className="text-base text-[14px] font-semibold">About Us</p>
        <p className="text-3xl md:text-4xl leading-tight font-bold text-button_brown my-1">
          Most Safe & Rated Hotel <br className="hidden md:block" /> In London
        </p>
        <p className="text-[14px] text-lightColor">
          The LuxHub is a four-star luxury property located in the heart of the
          city, just five minutes from the central business district. Designed
          with both business and leisure travelers in mind, the hotel combines
          modern elegance with warm hospitality.
        </p>

        <p className="text-[14px] text-lightColor my-[20px]">
          The hotel offers over 200 well-furnished rooms, ranging from Standard
          Rooms for budget-friendly stays to Executive Suites and a lavish
          Presidential Suite with a panoramic city view. Each room is equipped
          with high-speed Wi-Fi, smart TVs, ergonomic workspaces, and 24-hour
          room service.
        </p>

        <div className="flex flex-col gap-3 text-[14px] text-base">
          <p className="flex items-center gap-2">
            <Check size={13} /> The Crest Restaurant – international and local
            cuisine buffet.
          </p>

          <p className="flex items-center gap-2">
            <Check size={13} /> Skyline Lounge – rooftop bar with cocktails and
            live music.
          </p>

          <p className="flex items-center gap-2">
            <Check size={13} /> Café Aroma – casual coffee shop serving fresh
            pastries and light meals.
          </p>
        </div>

        <Link href="/about">
          {" "}
          <Button
            size={"lg"}
            className="text-white bg-button_brown px-[40px] mt-[20px] cursor-pointer">
            DISCOVER MORE
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MiniAbout;
