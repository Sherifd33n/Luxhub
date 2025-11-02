import React from "react";
import { TestimonialsCarousel } from "./testimony";

const Testimonials = () => {
  return (
    <div className="text-center mt-[80px] bg-[url('/assets/test-bg.png')] bg-cover py-[80px]">
      {" "}
      <p className="text-[14px] text-button_brown font-semibold">TESTIMONIAL</p>
      <p className="text-3xl  md:text-4xl font-semibold text-base my-2">
        What Our Clients Says
      </p>
      <p className="text-[15px] text-button_brown mx-[5%] md:mx-[20%]">
        Our guests are at the heart of everything we do. We take pride in
        providing exceptional hospitality, and nothing speaks louder than the
        experiences of those who have stayed with us.
      </p>
      <div className="">
        <TestimonialsCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
