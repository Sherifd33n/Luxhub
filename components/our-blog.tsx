import React from "react";
import BlogContent from "./blog-content";

const OurBlog = () => {
  return (
    <div className="text-center mt-[40px]">
      <p className="text-[14px] text-button_brown font-semibold">Our Blog</p>
      <p className="text-3xl md:text-4xl  font-semibold text-base my-2">
        Latest Blogs & News
      </p>
      <p className="text-[15px] text-button_brown mx-[5%] md:mx-[20%]">
        Our blog is the perfect place to stay inspired and connected with
        everything happening at our hotel and beyond. Whether you’re planning
        your next vacation, or looking for a taste of luxury living, our
        articles are written to guide and delight you.
      </p>

      <BlogContent />


    
    </div>
  );
};

export default OurBlog;
