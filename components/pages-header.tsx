import Link from "next/link";
import React from "react";

interface PagesHeaderProps {
  label: string;
  currentPage: string;
  link: string;
  title: string;
}

const PagesHeader: React.FC<PagesHeaderProps> = ({ label, currentPage, link, title }) => {
  return (
    <header className="bg-[url('/assets/section-bg.jpg')] h-[40vh] lg:h-[60vh] bg-cover bg-no-repeat text-center pt-[100px] md:pt-[150px]">
      <h1 className="text-white text-3xl md:text-5xl font-semibold">{label}</h1>

      <nav
        className="flex items-center justify-center text-white gap-[15px] mt-[10px]"
        aria-label="Breadcrumb">
        <Link href={link} className="text-gray-300 hover:text-white">
          {title}
        </Link>
        <span className="bg-white block h-[15px] w-[2px] rotate-[30deg]" />
        <p className="text-white">{currentPage}</p>
      </nav>
    </header>
  );
};

export default PagesHeader;
