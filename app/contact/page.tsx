import Container from "@/components/Container";
import PagesHeader from "@/components/pages-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, LocateIcon, Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <PagesHeader label="Contact Us" currentPage="Contact" link="/" title="Home"/>

      <Container className="">
        <div className="flex flex-col md:flex-row items-center gap-[30px] my-[40px]">
          <div className="flex flex-col gap-[15px] md:w-1/3">
            <div className="flex gap-[10px] items-center">
              <div className="bg-base rounded-full h-[50px] w-[50px] flex justify-center items-center">
                <LocateIcon className="text-white" />
              </div>
              <div className="text-sm ">
                <p className="font-semibold text-base">Office Address</p>
                <p className="text-gray-500">
                  350, km 12 Road, Ikeja
                  <br />
                  Lagos, Nigeria.
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] items-center border-t border-b py-[15px]">
              <div className="bg-base rounded-full h-[50px] w-[50px] flex justify-center items-center">
                <Clock className="text-white" />
              </div>
              <div className="text-sm ">
                <p className="font-semibold text-base">Working Hours</p>
                <p className="text-gray-500">
                  Mon-Fri, 09:00 - 18:30
                  <br />
                  Sat, 15:30
                </p>
              </div>
            </div>

            <div className="flex gap-[10px] items-center">
              <div className="bg-base rounded-full h-[50px] w-[50px] flex justify-center items-center">
                <Mail className="text-white" />
              </div>
              <div className="text-sm ">
                <p className="font-semibold text-base">Message Us</p>
                <p className="text-gray-500">
                  luxhub@gmail.com
                  <br />
                  info@example.com
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-3/4 bg-amber-50 p-[30px]">
            <p className="text-[30px] text-center font-bold text-base mb-[30px]">
              Get In Touch
            </p>
            <form>
              <div className="flex flex-col md:flex-row gap-[30px]">
                <Input placeholder="First Name" type="name" />
                <Input placeholder="Email" type="email" />
              </div>
              <div className="flex flex-col md:flex-row gap-[30px] my-[30px]">
                <Input placeholder="Phone No" type="number" />
                <Input placeholder="text" type="subject" />
              </div>
              <Textarea placeholder="Write comments" className="h-[130px]" />
              <Button className="w-full mt-[20px] cursor-pointer py-4 bg-base ">
                SUBMIT NOW
              </Button>
            </form>
          </div>
        </div>
      </Container>
      <div className="text-center bg-amber-50 py-[80px] px-[5%]">
        <p className="text-[14px] text-button_brown font-semibold">
          Newsletter
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-base my-2">
          Subscribe to our Newsletter
        </p>
        <p className="text-sm">
          With the subscription, enjoy your favorite hotels without having to
          think about it
        </p>
        <div className="flex mt-[10px] justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-3 py-2 rounded-l-sm w-[250px] bg-white_text border text-black text-sm"
          />
          <button className="text-white px-7 py-2 rounded-r-sm rounded-l-none hover:bg-red-600 bg-base cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
