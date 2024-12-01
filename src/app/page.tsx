import React from "react";
<meta name="viewport" content="width=device-width, initial-scale=1.0">Figma Design</meta>
import Header from "./components/Header";
import Image from "next/image";
import { DM_Sans, Roboto } from '@next/font/google';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Description from "./components/Logo";
import Logo from "./components/Logo";
import ExploreCourses from "./components/ExploreCourses";
import Achivement from "./components/Achivement";
import Courses from "./components/Courses";
import CustomerTestimonials from "./components/CustomerTestemonials";
import OurTeam from "./components/OurTeam";


function Home() {
  return (
    <div className="main h-screen">
      <Header />
      <Hero/>
      <Logo/>
      <ExploreCourses/>
      <Achivement/>
      <Courses/>
      <OurTeam/>
      <CustomerTestimonials/>
      <Footer/>
    </div>
    
   
  );
}

export default Home;