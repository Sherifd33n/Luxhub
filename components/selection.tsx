import React from "react";
import { Progress } from "./ui/progress";

const Selection = () => {
  return (
    <div className="flex flex-col lg:flex-row my-[80px]">
      <div className="lg:w-1/2 p-[30px] bg-yellow-950">
        <p className="text-[14px] text-gray-200 font-semibold">What We Offer</p>
        <p className="text-3xl md:text-4xl font-semibold text-gray-200 my-2 tracking-wide leading-12">
          We Offer Wide <br />
          Selection Of Rooms
        </p>

        <p className="text-[14px] text-gray-300">
          The hotel offers over 200 well-furnished rooms, ranging from Standard
          Rooms for budget-friendly stays to Executive Suites and a lavish
          Presidential Suite with a panoramic city view.
        </p>

        <div className="mt-4">
          <div>
            <p className="text-sm text-gray-200 font-semibold">
              Quality Production
            </p>
            <Progress value={80} className="h-3 mt-1 mb-4" />
          </div>

          <div>
            <p className="text-sm text-gray-200 font-semibold">
              Maintenance Services
            </p>
            <Progress value={90} className="h-3 mt-1 mb-4" />
          </div>

          <div>
            <p className="text-sm text-gray-200 font-semibold">
              Product Management
            </p>
            <Progress value={75} className="h-3 mt-1 mb-4" />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img
          src="./assets/skills-img.png"
          alt=""
          className="object-cover w-full h-[300px] lg:h-[450px]"
        />
      </div>
    </div>
  );
};

export default Selection;
