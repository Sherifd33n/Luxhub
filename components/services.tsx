import { ChevronRight, CircleCheck } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const Services = () => {
  const range = [
    {
      id: 1,
      title: "Room Cleaning",
      text: "Perfectly clean rooms with every stay",
      price: "$39.99",
    },
    {
      id: 2,
      title: "Drinks Included",
      text: "Enjoy a selection of compliment drinks",
      price: "$59.99",
    },
  ];

  return (
    <div className="flex-col xl:flex-row mx-auto px-4 md:px-[130px] mt-[80px] flex gap-[30px]">
      <div className="w-full xl:w-1/3">
        <p className="text-[14px] text-button_brown font-semibold">
          Best Prices
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-base my-2">Extra Services</p>

        <p className="text-[15px] text-button_brown">
          services are designed to make every guest’s experience seamless,
          personalized, and truly memorable. Whether you’re here for business,
          leisure, or a special occasion, we provide thoughtful additions that
          bring comfort and convenience to your stay.
        </p>

        <p className="text-[15px] text-button_brown mt-[10px]">
          The Deluxe Double Room combines refined style with enhanced comfort,
          offering guests a relaxing retreat with upgraded features. Perfect for
          couples or business travelers, it strikes the ideal balance between
          luxury and practicality.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-[30px] items-center">
        {range.map((item) => (
          <div key={item.id} className="w-[330px] border shadow-xl p-[20px]">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[20px] font-semibold text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 my-[20px]">{item.text}</p>
              </div>

              <div>
                {" "}
                <p className="bg-purple-100 text-gray-800 py-2 rotate-[90deg] font-semibold px-3 text-sm rounded-[3px]">
                  Monthly
                </p>
              </div>
            </div>

            <p className="text-[35px] text-button_brown font-bold">
              {item.price}
            </p>

            <div className="flex flex-col gap-[10px] mt-[10px]">
              <p className="text-[12px] text-lightColor flex items-center gap-[5px]">
                <CircleCheck size={13} /> 24/7 Room Service
              </p>

              <p className="text-[12px] text-lightColor flex items-center gap-[5px]">
                <CircleCheck size={13} /> Airport Transfers
              </p>

              <p className="text-[12px] text-lightColor flex items-center gap-[5px]">
                <CircleCheck size={13} /> Special Requests
              </p>
            </div>

            <Button
              size={"lg"}
              className="w-full bg-button_brown mt-[20px] cursor-pointer">
              GET STARTED <ChevronRight className="ml-2" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
