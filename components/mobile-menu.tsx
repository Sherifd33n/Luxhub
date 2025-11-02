"use client";
import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import SideMenu from "./side-menu";

const MobileMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button onClick={()=> setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer text-white hover:text-button_brown" />
      </button>
      <div className="md:hidden">
        <SideMenu
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
};

export default MobileMenu;
