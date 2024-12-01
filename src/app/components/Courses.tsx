import React from "react";
import Image from "next/image";

const CoursesSection = () => {
  return (
    <section className="py-12 h-auto mt-[180] w-full font-roboto">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-black">Courses</h1>
        <p className="text-lg font-normal mt-[30]">Your Ultimate Guide to learning</p>
      </div>

      {/* Header Tabs */}
      <div className="flex justify-center gap-8 mb-8 mt-[50]">
        <div className=" w-[87] h-[40] text-lg font-medium pb-2 border-b-2 border-transparent cursor-pointer  hover:border-black transition-all duration-300">
          Popular
        </div>
        <div className="  w-[87] h-[40] mr-[60] text-lg font-medium pb-2 border-b-2 border-transparent cursor-pointer  hover:border-black transition-all duration-300">
          Recommended
        </div>
        <div className="  w-[87] h-[40] text-lg font-medium pb-2 border-b-2 border-transparent cursor-pointer hover:border-black transition-all duration-300">
          Best Price
        </div>
      </div>

      {/* Courses Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[50] px-4 ">
        {/* Box 1 */}
        <div className="w-[416px] h-[534px] bg-gray-100  ">
          <Image
            src="/images/ui.png"
            alt="Course 1"
            width={416}
            height={300}
          />
          <div className=" flex flex-row m-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Design</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[290] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">UX/UI Design 201</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[416px] h-[534px] bg-gray-100  ">
          <Image
            src="/images/python.png"
            alt="Course 2"
            width={416}
            height={300}
          />
          <div className=" flex flex-row mt-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Programmimg</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[240] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">Introduction to Python</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>

        {/* Box 3 */}
        <div className="w-[416px] h-[534px] bg-gray-100">
          <Image
            src="/images/dataanalysis.png"
            alt="Course 3"
            width={416}
            height={300}
          />
         <div className=" flex flex-row m-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Business</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[270] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">Data Analysis for Beginners</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>

        {/* Box 4 */}
        <div className="w-[416px] h-[534px] bg-gray-100 mt-[30]">
          <Image
            src="/images/art.png"
            alt="Course 4"
            width={416}
            height={300}
          />
          <div className=" flex flex-row m-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Art</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[310] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">Art Specialization</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>

        {/* Box 5 */}
        <div className="w-[416px] h-[534px] bg-gray-100 mt-[30]">
          <Image
            src="/images/law.png"
            alt="Course 5"
            width={416}
            height={300}
          />
          <div className=" flex flex-row m-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Law</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[310] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">Rule of Law</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>
        {/* Box 6 */}
        <div className="w-[416px] h-[534px] bg-gray-100 mt-[30]">
          <Image
            src="/images/webflow.png"
            alt="Course 6"
            width={416}
            height={300}
          />
          <div className=" flex flex-row m-[20] ml-[10] mb-[5] w -[382] gap-2 h-[24] text-sm font-semibold">
            <h6>Tech</h6>
            <Image
            src="/icons/Star 1.png"
            alt="star"
            width={24}
            height={24}
            className="ml-[290] "
          />
            <h6>5.0</h6>
          </div>
          <div className="mt-4 ml-[10]  ">
            <h3 className="text-2xl font-bold mb-[5] ">Introduction to webflow</h3>
            <p className=" mt-2 text-base font-normal mb-[5]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </p>
          </div>
          <div className="flex flex-row w-[382] h-[40px] m-[10]">
              <button className="w-[117] h-[40] rounded-sm border border-black text-base">
              Enroll Now
              </button>
              <button className="w-[77px] h-[40px] text-base font-medium gap-2 pl-[10]">
              $400
              </button>
          </div>
        </div>
        </div>
       {/* Button Section */}
      <div className="flex justify-center items-center mt-8">
        <button className="text-black border border-black my-[70px] mx-auto gap-2 w-[155px] h-[48px] rounded-md text-base font-normal">
    View ALL Courses
        </button>
      </div>

    </section>
  );
};

export default CoursesSection;
