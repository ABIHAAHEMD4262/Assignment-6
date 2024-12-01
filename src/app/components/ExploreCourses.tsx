import React from "react";
import Image from "next/image";


const ExploreCourses = () => {
  return (
    <div className="main font-roboto py-[112] w-full ">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-0 px-4 py-12 gap-6">
      <h2 className="w-full max-w-[768px] text-5xl font-bold text-center">
          Explore Courses By Category
        </h2>
        <h6 className="text-lg font-normal text-center mt-4 px-4 lg:px-0">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </h6>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 text-xl font-semibold gap-6 pt-[20px]">
        {/* Box 1 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div>
            <Image
              src="/images/Design.png"
              alt="Image 1"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Design & Development</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
           
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/speaker.png"
              alt="Image 2"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
           <h6 className="text-lg font-semibold">Marketing</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/developement.png"
              alt="Image 3"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
            <h6 className="text-lg font-semibold">Development</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>
        
        {/* Box 4 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/voicerecord.png"
              alt="Image 4"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Communication</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 5 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/Digital.png"
              alt="Image 5"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Digital Marketing</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 6 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/arrow.png"
              alt="Image 6"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Self Development</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 7 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/bag.png"
              alt="Image 7"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Business</h6>
            <p className="mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 8 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4">
          <div >
            <Image
              src="/images/book.png"
              alt="Image 8"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Finance</h6>
            <p className=" mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>

        {/* Box 9 */}
        <div className="flex w-full lg:w-[410.67px] h-[132px] p-4 rounded-tl-[5px] bg-gray-100 opacity-100 items-center gap-4 ">
          <div >
            <Image
              src="/images/consulting.png"
              alt="Image 9"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-grow text-center lg:text-left pl-[30]">
          <h6 className="text-lg font-semibold">Consulting</h6>
            <p className=" mt-2 font-normal text-lg">50+ Courses Available</p>
          </div>
        </div>
      </div>
      {/* Button Section */}
      <div className="flex justify-center items-center mt-8">
        <button className="text-black border border-black my-[70px] mx-auto gap-2 w-[155px] h-[48px] rounded-md text-base font-normal">
    View ALL Courses
        </button>
      </div>
    </div>
  );
};

export default ExploreCourses;
