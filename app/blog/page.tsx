import Container from "@/components/Container";
import PagesHeader from "@/components/pages-header";
import { blogs } from "@/data/rooms";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div>
      {" "}
      <PagesHeader label="Our Blogs" currentPage="Blog" link="/" title="Home" />
      <div className="my-[50px]">
        {" "}
        <Container className="flex flex-col-reverse xl:flex-row gap-[30px]">
          <div className="space-y-5">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="text-left shadow-xl  w-[350px] md:w-[500px] lg:w-[700px] hover:border-button_brown hover:border-r hover:border-b-button_brown hover:border-r-button_brown border-b-3 border-r-3 transition-all duration-300 mx-auto">
                <img
                  src={blog.img}
                  alt={blog.title}
                  // width={300}
                  // height={300}
                  className="w-full h-full object-cover"
                />
                <div className="">
                  <p className="flex w-[200px] bg-button_brown text-white justify-center text-[13px] font-semibold py-[7px] gap-[20px] mx-[30px] -my-[20px] z-10 relative mb-6">
                    {blog.date}
                  </p>
                </div>
                <div className="px-4">
                  {" "}
                  <h3 className="text-[14px] text-base font-semibold my-3">
                    {blog.title}
                  </h3>
                  <p className="text-[12px] text-button_brown truncate">{blog.text}</p>
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
          </div>

          <div>
            <div className="space-y-5 grid md:grid-cols-2 xl:grid-cols-1 gap-[10px]">
              <div className="bg-blue-50 p-[30px]">
                <p className="text-[15px] text-base font-bold">Search</p>
                <div>
                  {" "}
                  <div className="flex mt-[10px]">
                    <input
                      type="email"
                      placeholder="Search"
                      className="px-3 py-2 border border-base bg-white_text text-black text-sm outline-none"
                    />
                    <button className="text-white px-3 py-2 hover:bg-amber-800 text-[13px] bg-button_brown cursor-pointer">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-[30px]">
                <p className="text-[15px] text-base font-bold mb-2">
                  Follow Us
                </p>

                <div className="flex gap-[10px]">
                  <Link href={"/"} className="">
                    <Twitter className="border border-base rounded-full p-[10px] w-[40px] h-[40px] flex items-center hover:bg-base hover:text-white hoverEffect" />
                  </Link>

                  <Link href={"/"} className="">
                    <Facebook className="border border-base rounded-full p-[10px] w-[40px] h-[40px] flex items-center hover:bg-base hover:text-white hoverEffect" />
                  </Link>

                  <Link href={"/"} className="">
                    <Instagram className="border border-base rounded-full p-[10px] w-[40px] h-[40px] flex items-center hover:bg-base hover:text-white hoverEffect" />
                  </Link>
                </div>
              </div>

              <div className="bg-blue-50 p-[30px]">
                <p className="text-[15px] text-base font-bold mb-2">
                  Categories
                </p>
                <div className="space-y-3">
                  <p className="text-sm border-b pb-1 flex justify-between">
                    Branding <span>(4)</span>
                  </p>

                  <p className="text-sm border-b pb-1 flex justify-between">
                    Corporate <span>(3)</span>
                  </p>

                  <p className="text-sm border-b pb-1 flex justify-between">
                    Design <span>(4)</span>
                  </p>

                  <p className="text-sm border-b pb-1 flex justify-between">
                    Gallery <span>(2)</span>
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-[30px]">
                <p className="text-[15px] text-base font-bold mb-2">
                  Recent Posts
                </p>
                <div className="flex flex-col gap-[6px]">
                  {blogs.slice(0, 3).map((blog, id) => (
                    <Link
                      key={id}
                      href={`/single-blog/${blog.slug}`}
                      className="hover:text-red-500">
                      <p className="text-sm truncate">{blog.text}</p>
                      <p className="text-[13px]">{blog.date}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 p-[30px]">
                <p className="text-[15px] text-base font-bold mb-2">Tag</p>
                <div className="flex gap-[6px] flex-wrap">
                  <p className="text-base border border-base p-[10px]">App</p>

                  <p className="text-base border border-base p-[10px]">
                    Branding
                  </p>

                  <p className="text-base border border-base p-[10px]">
                    Corporate
                  </p>
                  <p className="text-base border border-base p-[10px]">
                    Design
                  </p>
                  <p className="text-base border border-base p-[10px]">
                    Gallery
                  </p>
                  <p className="text-base border border-base p-[10px]">Video</p>
                  <p className="text-base border border-base p-[10px]">
                    Web Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Blog;
