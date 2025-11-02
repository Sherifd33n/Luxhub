"use client";

import { Baby, BedDouble, CircleCheck, CircleUser } from "lucide-react";
import React from "react";
import { DatePicker } from "./components/date-picker";
import { DropDown } from "./components/drop-down";
import { Button } from "./components/ui/button";

const HomeRight = () => {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <div className="bg-white rounded-[10px] p-[30px] w-full">
      <p className="text-[24px] lg:text-[30px] font-semibold mb-2 text-center lg:text-left">
        Book A Room
      </p>
      <div className="space-y-4">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-[15px]">
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
          <div className="mx-auto flex flex-col  justify-center gap-[10px]">
            <p className="flex items-center gap-1.5 text-base text-[12px]">
              {" "}
              <CircleUser size={14} /> Adults
            </p>
            <DropDown
              options={["Men", "Women"]}
              placeholder="Select Gender"
              onSelect={handleSelect}
              buttonClassName="w-[300px] md:w-[450px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[10px] md:gap-0">
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

      <div className="mt-[30px] mx-auto flex justify-center md:justify-start">
        <Button
          size={"lg"}
          className="text-white bg-button_brown w-[300px] md:w-[200px]">
          CHECK AVAILABILITY
        </Button>
      </div>
    </div>
  );
};

export default HomeRight;
