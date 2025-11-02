import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { blogs } from "@/data/rooms";
import { Button } from "./ui/button";

const BlogContent = () => {
  // const cards = [
  //   {
  //     title: "A Culinary Journey",
  //     img: "/assets/blog-1.jpg",
  //     text: "Food is at the heart of every great travel experience.",
  //     link: "/rooms/feature",
  //     date: "24th March, 2025",
  //   },
  //   {
  //     title: "Choose a Seaside Getaway",
  //     img: "/assets/blog-2.jpg",
  //     text: "There’s nothing quite like the calming sound of waves.",
  //     link: "/rooms/feature",
  //     date: "24th March, 2025",
  //   },
  //   {
  //     title: "The Art of Coffee: More Than Just a Drink",
  //     img: "/assets/blog-3.jpg",
  //     text: "At our hotel, coffee is more than just a drink—it’s an experience.",
  //     link: "/rooms/feature",
  //     date: "24th March, 2025",
  //   },
  // ];

  return (
    <div className="mt-[30px] px-4 md:px-[130px]  bg-top-left bg-[length:150px_200px] bg-no-repeat py-[50px] flex-wrap">
      <Container className="flex flex-col lg:flex-row justify-center items-center gap-[30px] mx-auto ">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="text-left shadow-xl w-[280px] hover:border-button_brown hover:border-r hover:border-b-button_brown hover:border-r-button_brown border-b-3 border-r-3 transition-all duration-300">
            <Image
              src={blog.img}
              alt={blog.title}
              width={200}
              height={200}
              className="w-[280px] h-[200px] object-cover"
            />
            <div className="flex bg-button_brown text-white justify-center text-[13px] font-semibold py-[10px] gap-[20px] mx-[30px] -my-[30px] z-10 relative mb-6">
              <p>{blog.date}</p>
            </div>
            <div className="px-4">
              {" "}
              <h3 className="text-[14px] text-base font-semibold my-3">
                {blog.title}
              </h3>
              <p className="text-[12px] text-button_brown truncate">
                {blog.text}
              </p>
              <div className="mt-[20px]">
                <Link
                  href={`/single-blog/${blog.slug}`}
                  className="text-sm text-base font-semibold hover:underline">
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        ))}{" "}
      </Container>{" "}
      <Link href="/blog">
        <Button
          size={"lg"}
          className="text-white bg-button_brown px-[40px] mt-[20px] cursor-pointer">
          VIEW ALL BLOGS
        </Button>
      </Link>
    </div>
  );
};

export default BlogContent;
