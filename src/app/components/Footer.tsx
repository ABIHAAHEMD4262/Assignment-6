"use client";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-auto mt-[150px] p-4 lg:p-[80px] gap-y-20 font-roboto bg-white">
      {/* First Section: Newsletter Subscription */}
      <div className="flex flex-col lg:flex-row justify-between gap-4 items-center lg:items-start opacity-100">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h3 className="text-lg font-semibold">
            Subscribe to our Newsletter
          </h3>
          <p className="text-base mt-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center lg:items-start gap-4 mt-4 lg:mt-0 lg:w-1/2">
          <div className="flex flex-col items-center lg:flex-row lg:items-center gap-4 w-full">
            {/* Input Box */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[356px] h-[48px] px-4 border border-black rounded-md text-gray-300 placeholder-gray-500"
            />

            {/* Subscribe Button */}
            <button className="h-[48px] w-[356px] px-4 border border-black text-black rounded-md mt-2 lg:mt-0">
              Subscribe
            </button>
          </div>

          {/* Privacy Policy Text */}
          <p className="text-xs text-black mt-2 text-center">
            By subscribing you agree to with our{" "}
            <a href="#" className="text-black underline">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Second Section: Logo and Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 items-center lg:items-start mt-0 opacity-100">
        {/* Logo Section */}
        <div className="flex flex-col items-center gap-2 leading-8 lg:items-start pr-0 lg:pr-[10px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={32.58}
            height={30.38}
          />
          <div className="text-2xl text-black font-bold leading-8 text-center lg:text-left">
            <h1>Ddsgnr</h1>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 lg:w-2/3 leading-5 text-center lg:text-left">
          <div>
            <h4 className="text-base font-semibold mb-4">Courses</h4>
            <ul className="space-y-5 text-sm text-black">
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">Resources</h4>
            <ul className="space-y-5 text-sm text-black">
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold mb-4">About Us</h4>
            <ul className="space-y-5 text-sm text-black">
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider and Footer Text */}
      <div className="flex flex-col items-center gap-6 mt-10">
        <Image
          src="/icons/Divider.png"
          alt="Divider"
          width={1400}
          height={1}
          className="w-full lg:w-auto"
        />
        <h5 className="text-sm text-center">2023 Ddsgnr. All right reserved.</h5>
        <div className="flex flex-row justify-center gap-6">
          <a href="#" className="text-black underline text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-black underline text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-black underline text-sm">
            Cookies Settings
          </a>
        </div>
        <Image
          src="/icons/Social Links.png"
          alt="Social Links"
          width={132}
          height={24}
          className="mt-4"
        />
      </div>
    </div>
  );
};

export default Footer;
