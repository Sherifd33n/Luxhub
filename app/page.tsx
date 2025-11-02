import { Brands } from "@/components/brands";
import Container from "@/components/Container";
import Explore from "@/components/explore";
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
import HomeLeft from "@/components/home-left";
import Luxury from "@/components/luxury";
import MiniAbout from "@/components/mini-about";
import OurBlog from "@/components/our-blog";
// import Pearl from "@/components/pearl";
import Room from "@/components/room";
// import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Tour from "@/components/tour";
import HomeRight from "@/home-right";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-auto lg:h-screen bg-[url('/assets/hero-bg.png')] bg-cover py-[100px] lg:py-0">
        {/* <Header /> */}
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between my-auto h-auto lg:h-[100vh] gap-[50px] lg:gap-[100px]">
            <HomeLeft />
            <HomeRight />
          </div>
        </Container>
      </div>

      <Container>
        <MiniAbout />
      </Container>

      <Explore />

      <Container>
        <Luxury />
      </Container>

      {/* <Pearl /> */}

      {/* <Services /> */}

      <Testimonials />

      <Room />
      <Tour />

      <OurBlog />

      <Brands />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
