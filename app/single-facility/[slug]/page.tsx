"use client";

import React from "react";
import { explores } from "@/data/rooms";
import { notFound } from "next/navigation";
import Container from "@/components/Container";

import PagesHeader from "@/components/pages-header";

const SingleFacility = ({ params }: { params: { slug: string } }) => {
  const explore = explores.find((e) => e.slug === params.slug);
  if (!explore) return notFound();

  // const handleSelect = (value: string) => {
  //   console.log("Selected:", value);
  // };

  return (
    <div className="pb-10 gap-[10px] flex flex-col">
      <PagesHeader
        label={explore.title}
        currentPage="Special"
        link="/facilities" title="Facilities"
      />

      <Container>
        {" "}
        <p className="leading-8 text-gray-600">{explore.text}</p>
      </Container>
    </div>
  );
};

export default SingleFacility;
