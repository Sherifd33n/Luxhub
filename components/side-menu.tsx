"use client";
import React, { FC } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "@/hooks";
import Logo from "./Logo";
import { Button } from "./ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderData = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Our Rooms", href: "/our-rooms" },
  { title: "Facilities", href: "/facilities" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/70 shadow-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}>
      <div
        ref={sidebarRef}
        className="min-w-[200px] max-w-96 bg-black h-screen p-5 border-r border-r-shop_dark_green flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect">
            <X />
          </button>
        </div>
        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {HeaderData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              onClick={onClose}
              className={`hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && "text-shop_light_green"
              }`}>
              {item?.title}
            </Link>
          ))}
        </div>

        <Link href="/booked-rooms" onClick={onClose}>
          {" "}
          <Button className="bg-button_brown px-[30px] cursor-pointer w-full">
            Reservation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
