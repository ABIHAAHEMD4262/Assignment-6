import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
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