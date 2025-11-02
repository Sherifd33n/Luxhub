import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const brands = [
  {
    image: "/assets/logo1.png",
  },
  {
    image: "/assets/logo2.png",
  },
  {
    image: "/assets/logo3.png",
  },
  {
    image: "/assets/logo4.png",
  },
  {
    image: "/assets/logo5.png",
  },
];

export function Brands() {
  return (
    <div className="bg-[url('/assets/test-bg.png')] bg-cover py-[50px] md:py-[80px]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[70%] mt-[40px] mx-auto items-center">
        <CarouselContent>
          {brands.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="w-full flex items-center justify-between">
                <img
                  src={item.image}
                  alt={""}
                  className="object-center m-auto"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
}
