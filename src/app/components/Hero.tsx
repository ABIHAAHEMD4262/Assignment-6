import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return(
<div className="flex flex-col lg:flex-row text-black bg-white font-roboto gap-6 items-center mt-0">
   {/* Left Section */}
        <div className="flex flex-col pr-[60px] pl-[80px] justify-center items-start m-12 gap-7 h-[300px] lg:text-left text-center sm:text-center ">
          <h1 className="h-[134px] font-bold w-[500px] text-4xl md:text-5xl lg:text-6xl leading-tight ">
            Learn new skills <br/> online with ease
            </h1>
          <p className="w-[500px] h-[54px]  text-lg pt-[10px]  ">
          Discover a wide range of courses covering a <br/>variety of subjects, taught by expert instructors.
          </p>
          <div className="flex-row sm:flex-row w-[500px] flex justify-center lg:justify-start gap-4 ">
          <button className="  bg-[#121212] w-[190px] sm:w-auto h-[48px] px-[24px] py-[12px] text-white rounded-md 
          mt-[15px] gap-2 font-normal text-base">
            Start Learning now
          </button>
          <button className=" w-[164px]  h-[48px] m-[16] border border-black rounded-md 
           gap-2 font-normal text-base ">
            Explore now
          </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end  "   >
    <Image
      src="/images/bg.png"
      alt="hero image"
      width={640}
      height={900}
      className="w-full h-auto object-cover"
    />
  </div>

 

 
      </div>
    )
};
export default Hero;


