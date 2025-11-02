import Image from "next/image";
import React from "react";

const Tour = () => {
  return (
    <div className="text-center flex flex-col mx-auto gap-[10px] justify-center bg-[url('/assets/video-bg.png')] bg-cover py-[60px] md:py-[80px] mt-[50px]">
      <div>
        {" "}
        <Image src={"/assets/play-btn.png"} alt="" height={100} width={100} className="flex justify-center mx-auto"/>
      </div>

      <p className="text-[30px] md:text-[40px] text-gray-100 font-serif">Take A Tour Of Luxury</p>
    </div>
  );
};

export default Tour;
