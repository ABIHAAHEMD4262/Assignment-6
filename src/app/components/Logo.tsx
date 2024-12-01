import React from "react";
import Image from "next/image";
const Logo = () => {
    return(
    <div className="main flex font-roboto h-[228]">
        <div className="bg-gray-100 flex flex-col lg:flex-row items-center lg:items-start w-full py-6 lg:py-0">
        <h6 className=" font-bold text-2xl text-center lg:text-left h-[68px] lg:w-[320px] mt-6 lg:mt-[90px] lg:ml-[10px">
          Trusted by 2000+ companies worldwide.
          </h6>
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start items-center lg:items-center
         w-full lg:w-[890px] gap-5 mt-4 lg:mt-[89px] lg:pl-[150px]">
        <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/logoipsum.png"}
         />
       
         <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/LoGo.svg"}
         />
           <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/LOGOIPSUM.svg"}
         />
         <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/go.svg"}
         />
         <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/IPSUM.svg"}
         />

         <Image
         width={123.8}
         height={38.53}
         alt="Logo"
         src={"/icons/Airbnb Logo.svg"}
         />
         
        </div>
        </div>
        
    </div>
    )
}
export default Logo;
  