import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const HomeLeft = () => {
  return (
    <div className="">
      <h1 className="text-5xl lg:text-6xl text-white_text font-bold leading-tight mb-3 lg:mb-5">
        Enjoy a luxury <br /> Experience
      </h1>
      <p className="text-[14px] text-small_text mb-3">
        Welcome to LuxHub — a blend of comfort, style, and warm hospitality.
        Located at the heart of the city, we offer elegant rooms, fine dining,
        and everything you need for an unforgettable stay.
      </p>
      <Link href="/blog">
        {" "}
        <Button className="bg-transparent border border-white text-white px-[60px] cursor-pointer">
          Visit Us
        </Button>
      </Link>
    </div>
  );
};

export default HomeLeft;
