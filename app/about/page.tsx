import Container from "@/components/Container";
import MiniAbout from "@/components/mini-about";
import PagesHeader from "@/components/pages-header";
import Selection from "@/components/selection";
import React from "react";

const About = () => {
  return (
    <div>
     <PagesHeader label="About Us" currentPage="About" link="/" title="Home"/>

      <Container>
        <MiniAbout />
      </Container>

      <Selection />
    </div>
  );
};

export default About;
