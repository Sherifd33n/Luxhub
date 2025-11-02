"use client";

import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileMenu from "./mobile-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 py-4 transition-colors duration-500 ${
        isScrolled ? "bg-black" : "bg-header_bg/70"
      }`}>
      <Container className="flex justify-between items-center">
        <MobileMenu /> <Logo />
        <ul className="hidden md:flex items-center space-x-4 font-medium text-white_text">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/our-rooms"}>
            <li>Our Rooms</li>
          </Link>
          <Link href={"/facilities"}>
            <li>Facilities</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        <Link href={"/booked-rooms"}>
          <Button className="bg-button_brown px-[30px] cursor-pointer hidden md:block">
            RESERVATION
          </Button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
