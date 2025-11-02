import Explore from "@/components/explore";
import PagesHeader from "@/components/pages-header";
import React from "react";

const Facilities = () => {
  return (
    <div>
      {" "}
      <PagesHeader label="Facilities" currentPage="Facilities" link="/" title="Home"/>
      <Explore />
    </div>
  );
};

export default Facilities;
