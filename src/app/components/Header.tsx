import React from "react";
import Image from "next/image";
const Header: React.FC = () => {

  return (
    <header>
      {/* Top Header */}
      <div className="bg-gray-100 border text-black text-sm py-2  hidden lg:block ">
        <div className="container mx-auto flex justify-between items-center px-4 h-[54px]">
          {/* Contact Info */}
          <div className="flex items-center text-sm font-roboto text-black ">
          <span>Email: info@ddsgnr.com</span>
        <span className="w-[30px] p-[10px]">|</span>
        <span>Phone Number: 956 742 455 678</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4  ">
            <Image src="/icons/Facebook.png" alt="Facebook" width={20} height={20} />
              <Image src="/icons/Instagram.svg" alt="Instagram" width={20} height={20} />
              <Image src="/icons/Twitter.svg" alt="Twitter" width={20} height={20} />
              <Image src="/icons/linkdln.svg" alt="LinkedIn" width={20} height={20} />
          </div>

        </div>
        <Image
          src="/icons/Divider.png"
          alt="Divider"
          width={1400}
          height={1}/>
      </div>

     
      {/* Main Header */}
      <div className="  w-fill py-4 mt-[15] h-[72px] border-1 border-black bg-gray-100 grid w-full border-solid ">
        <div className="container mx-auto flex justify-between items-center ">
      <div className="flex justify-between items-center gap-2 leading-8 pr-[10px]">
      <Image
            src={"/images/logo.png"}
            alt="hero image"
            width={32.58}
            height={30.38}
           />
        
          {/* Website Name */}
          <div className="text-2xl text-black font-bold leading-8 pr-[29px]">
            <h1>
            Ddsgnr
          </h1>
          </div>
         
      </div>
      
          

         
          {/* Navigation Links */}
          <nav className=" hidden lg:flex flex gap-x-8 text-black bg-white w-[687px] h-[44px]
           text-center py-[10px]   text-base underline-offset-8">
          <a href="#courses" className="hover:text-gray-900 hover:underline ">Home</a>
            <a href="#courses" className="hover:text-gray-900 hover:underline">Courses</a>
            <a href="#about-us" className="hover:text-gray-900 hover:underline">About Us</a>
            <a href="#testimonials" className="hover:text-gray-900 hover:underline">Testimonials</a>
            <a href="#services" className="hover:text-gray-900 hover:underline">Services</a>
            <a href="#achievements" className="hover:text-gray-900 hover:underline">Achievements</a>
          </nav>

          {/* Buttons */}
          <div className="hidden lg:flex gap-4 ">
            <button className="px-4 py-2 bg-white rounded-md text-black border border-black font-normal ">
              Log In
            </button>
            <button className="px-4 py-2 bg-black rounded-md text-white rounded">
              Sign Up
            </button>
          </div>
          {/* Burger Icon for Mobile */}
  <div className="lg:hidden">
    <button
      className="text-black focus:outline-none"
      aria-label="Open menu"
    >
      <Image
      src="/icons/icon.png"
      alt="burger icon"
      width={48}
      height={48}
      />
    </button>
  </div>
        </div>
      </div>
      <Image
          src="/icons/Divider.png"
          alt="Divider"
          width={1400}
          height={1}/>
    </header>
  );
};

export default Header;
