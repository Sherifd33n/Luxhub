"use client";

import React from "react";
import { blogs } from "@/data/rooms";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

import PagesHeader from "@/components/pages-header";
import Link from "next/link";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";

const SingleBlog = ({ params }: { params: { slug: string } }) => {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  // const handleSelect = (value: string) => {
  //   console.log("Selected:", value);
  // };

  return (
    <Container className="pt-[67px]">
      {" "}
      <div className="w-full">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[250px] md:h-[500px]"
        />

        <Link href={"/blog"} className="flex gap-[10px] my-[12px] font-bold hover:text-red-600">
          <ArrowLeft />
          Back to blogs
        </Link>
        <div className="p-2 bg-red-100">
          <p className="leading-8 text-gray-900 font-bold text-[22px] mt-[30px]">
            {blog.date}
          </p>
          <p className="leading-8 text-gray-600">{blog.text}</p>
        </div>
      </div>
    </Container>
  );
};

export default SingleBlog;
