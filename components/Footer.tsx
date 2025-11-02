"use client";

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[url('/assets/footer-bg.png')] bg-cover pt-[50px]">
      <Container className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-between">
          <div>
            <Logo />
            <div className="mt-[10px] flex flex-col gap-[14px]">
              <div className="flex items-center gap-[8px]">
                <div className="bg-white_text rounded-full h-[50px] w-[50px] flex justify-center items-center">
                  <Phone />
                </div>

                <div className="text-white_text text-sm">
                  <p>000-0000-000</p>
                  <p>888-8888-888</p>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                <div className="bg-white_text rounded-full h-[50px] w-[50px] flex justify-center items-center">
                  <Mail />
                </div>

                <div className="text-white_text text-sm">
                  <p>luxhub@gmail.com</p>
                  <p>info@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-[8px]">
                <div className="bg-white_text rounded-full h-[50px] w-[50px] flex justify-center items-center">
                  <MapPin />
                </div>

                <div className="text-white_text text-sm">
                  <p>28, Avenue Close.</p>
                  <p>Block 2, Along Avenue.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[22px] text-white_text font-semibold">
              Our Links
            </p>
            <ul className="flex flex-col gap-[10px] mt-[10px] w-[60px]">
              <Link href={"/"} className="">
                <li className="text-white_text text-sm hover:text-gray-600">
                  Home
                </li>
              </Link>
              <Link href={"/about"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  About Us
                </li>
              </Link>
              {/* <Link href={"/services"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  Services
                </li>
              </Link> */}
              <Link href={"/blog"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  Blog
                </li>
              </Link>
              <Link href={"/contact"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div>
            {" "}
            {/* <p className="text-[22px] text-white_text font-semibold">
              Our Services
            </p> */}
            <ul className="flex flex-col gap-[10px] mt-[10px] w-[60px]">
              <Link href={"/"} className="">
                <li className="text-white_text text-sm hover:text-gray-600">
                  FAQs
                </li>
              </Link>
              <Link href={"/about-us"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  Support
                </li>
              </Link>
              <Link href={"/services"}>
                <li className="text-white_text text-sm hover:text-gray-600">
                  Privacy
                </li>
              </Link>
              <Link href={"/blog"} className="w-[130px]">
                <li className="text-white_text text-sm hover:text-gray-600">
                  Terms & Conditions
                </li>
              </Link>
            </ul>
          </div>
          <div>
            {" "}
            <p className="text-[22px] text-white_text font-semibold">
              Subscribe To Our Newsletter
            </p>
            <div className="flex mt-[10px]">
              <input
                type="email"
                placeholder="Your Email..."
                className="p-3 rounded-l-sm bg-white_text border-none outline-none text-black text-sm"
              />
              <button className="text-black p-3 rounded-r-sm rounded-l-none hover:bg-red-600 bg-gray-600 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>{" "}
      </Container>{" "}
      <div className="flex flex-wrap gap-5 justify-between items-center mt-12 bg-[#181717] px-4 md:px-[130px] py-6">
        <p className="text-sm text-gray-500">
          copyright © 2025 LuxHub. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-gray-500">
          <Link href={"/facebook"} className="hover:text-white_text">
            <Facebook />
          </Link>
          <Link href={"/"} className="hover:text-white_text">
            <Twitter />
          </Link>
          <Link href={"/"} className="hover:text-white_text">
            {" "}
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
