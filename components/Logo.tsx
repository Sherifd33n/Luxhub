import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <p className="text-white_text text-2xl font-semibold font-serif cursor-pointer">
        Luxe<span className="text-button_brown">Hub</span>
      </p>
    </Link>
  );
};

export default Logo;
