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

const testimonials = [
  {
    name: "Sarah Johnson",
    job: "Travel Blogger",
    quote:
      "The service was exceptional! The staff went above and beyond to make our stay perfect.",
    image: "/assets/test-1.png",
  },
  {
    name: "Michael Lee",
    job: "Business Executive",
    quote:
      "A seamless experience from check-in to check-out. The conference facilities were outstanding.",
    image: "/assets/test-2.png",
  },
  {
    name: "Elena Rossi",
    job: "Designer",
    quote:
      "The private beach and spa were simply breathtaking. A truly relaxing getaway!",
    image: "/assets/test-3.png",
  },
  {
    name: "Elena Rossi",
    job: "Designer",
    quote:
      "The private beach and spa were simply breathtaking. A truly relaxing getaway!",
    image: "/assets/test-1.png",
  },
  {
    name: "Elena Rossi",
    job: "Designer",
    quote:
      "The private beach and spa were simply breathtaking. A truly relaxing getaway!",
    image: "/assets/test-2.png",
  },
  {
    name: "Sarah Johnson",
    job: "Travel Blogger",
    quote:
      "The service was exceptional! The staff went above and beyond to make our stay perfect.",
    image: "/assets/test-1.png",
  },
  {
    name: "Michael Lee",
    job: "Business Executive",
    quote:
      "A seamless experience from check-in to check-out. The conference facilities were outstanding.",
    image: "/assets/test-2.png",
  },
];

export function TestimonialsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-[70%] md:w-[80%]  mt-[30px] mx-auto">
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="">
              <Card className="rounded-xl shadow-md h-full">
                <CardContent className="flex flex-col items-center text-center px-3 md:px-6 gap-4">
                  <div className="w-full flex items-center justify-between">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="h-[35px] w-[35px] md:h-[50px] md:w-[50px] rounded-full"
                    />

                    <div className="text-left">
                      {" "}
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-xs text-muted-foreground">
                        {item.job}
                      </p>
                    </div>

                    <Image
                      src={"/assets/Quote.png"}
                      alt="quote"
                      width={50}
                      height={50}
                      className="h-[20px] w-[30px] md:h-[50px] md:w-[50px] "
                    />
                  </div>
                  <div className="w-full">
                    <Image
                      src={"/assets/stars.png"}
                      alt="line"
                      width={80}
                      height={80}
                    />
                  </div>

                  <p className="italic text-sm text-muted-foreground text-left">
                    “{item.quote}”
                  </p>
                  <div></div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
