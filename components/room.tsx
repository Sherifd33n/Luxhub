"use client";

import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { DropDown } from "./drop-down";
import { Baby, BedDouble, CircleCheck, CircleUser } from "lucide-react";
import { DatePicker } from "./date-picker";
import Link from "next/link";

const Room = () => {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <Container className="mt-[60px]">
      <div className="flex gap-[10px] lg:gap-[40px] flex-col-reverse lg:flex-row">
        <div className="bg-white rounded-[10px] p-[30px] w-full lg:w-1/2">
          <p className="text-[14px] text-button_brown font-semibold">
            Make Appointment
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-base my-2">
            Book A Room
          </p>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-[10px] items-center justify-between">
              <div>
                <p className="flex items-center gap-1.5 text-base text-[12px]">
                  {" "}
                  <CircleCheck size={14} /> Check In Date
                </p>
                <div className="mt-1.5 md:mt-2.5">
                  <DatePicker />
                </div>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-base text-[12px]">
                  {" "}
                  <CircleCheck size={14} /> Check Out Date
                </p>
                <div className="mt-1.5 md:mt-2.5">
                  <DatePicker />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <p className="flex items-center gap-1.5 text-base text-[12px] mb-2.5">
                  {" "}
                  <CircleUser size={14} /> Adults
                </p>
                <DropDown
                  options={["Men", "Women"]}
                  placeholder="Select Gender"
                  onSelect={handleSelect}
                  buttonClassName="w-[300px] md:w-[350px]"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-[10px] items-center justify-between">
              <div>
                <p className="flex items-center gap-1.5 text-base text-[12px] mb-2.5">
                  {" "}
                  <Baby size={14} /> Child
                </p>
                <DropDown
                  options={["boy", "girl"]}
                  placeholder="Select Gender"
                  onSelect={handleSelect}
                  buttonClassName="w-[300px] md:w-[200px]"
                />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-base text-[12px] mb-2.5">
                  {" "}
                  <BedDouble size={14} /> Rooms
                </p>
                <DropDown
                  buttonClassName="w-[300px] md:w-[200px]"
                  options={["Single Room", "Double Room", "Suite"]}
                  placeholder="Select Room Type"
                  onSelect={handleSelect}
                />
              </div>
            </div>
          </div>

          <div className="mt-[30px] flex w-full justify-center">
            <Button
              size={"lg"}
              className="text-white bg-button_brown w-[300px] md:w-[200px]">
              BOOK TABLE NOW
            </Button>
          </div>
        </div>

        <div>
          <img
            src="/assets/bookings.png"
            alt="Room Image"
            // width={450}
            // height={500}
            className="rounded-[10px] w-full h-[250px] md:h-[400px] object-cover"
          />
        </div>
      </div>

    </Container>
  );
};

export default Room;
