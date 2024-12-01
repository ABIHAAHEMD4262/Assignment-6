import React from "react";
import Image from "next/image";

const CustomerTestimonials = () => {
    return (
        <section className="py-[112px] px-[64px] bg-gray-100 font-roboto h-auto ">
            <div className="flex flex-col pt-[170px] mb-[50px]">
                {/* Heading for larger screens */}
                <h2 className="text-5xl font-bold  mb-4 hidden sm:block mt-[30]">Customer testimonials</h2>

                {/* Heading for smaller screens */}
                <h4 className="text-[32px] font-bold text-left mb-4 block sm:hidden">
                    What Our Students Say
                </h4>

                {/* Paragraph with line break */}
                <p className="text-lg mx-0 sm:mx-0 mb-4 sm:mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Display only Box 1 on smaller screens (below 600px) */}
            <div className="block sm:hidden">
                <div className="p-8 bg-gray-100 border border-black shadow-md rounded-lg mb-6">
                    <Image
                        src="/icons/BlackStars.png"
                        alt="Stars"
                        width={116}
                        height={18.89}
                    />
                    <p className="text-xl pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className="flex items-center pt-4">
                        <Image
                            src="/icons/james.png"
                            alt="James"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-base">
                            <h1 className="font-semibold">James Nduku</h1>
                            <p className="font-normal">Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display all boxes on larger screens */}
            <div className="hidden sm:grid grid-cols-1 sm:grid lg:grid-cols-3 gap-6">
                {/* Box 1 */}
                <div className="p-8 bg-gray-100 border border-black shadow-md rounded-lg">
                    <Image
                        src="/icons/BlackStars.png"
                        alt="Stars"
                        width={116}
                        height={18.89}
                    />
                    <p className="text-xl pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className="flex items-center pt-4">
                        <Image
                            src="/icons/james.png"
                            alt="James"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-base">
                            <h1 className="font-semibold">James Nduku</h1>
                            <p className="font-normal">Software Developer</p>
                        </div>
                    </div>
                </div>

                {/* Box 2 */}
                <div className="p-8 bg-gray-100 border border-black shadow-md rounded-lg">
                    <Image
                        src="/icons/BlackStars.png"
                        alt="Stars"
                        width={116}
                        height={18.89}
                    />
                    <p className="text-xl pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className="flex items-center pt-4">
                        <Image
                            src="/icons/erick.png"
                            alt="Erick"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-base">
                            <h1 className="font-semibold">Erick Kipkemboi</h1>
                            <p className="font-normal">Scrum Master</p>
                        </div>
                    </div>
                </div>

                {/* Box 3 */}
                <div className="p-8 bg-gray-100 border border-black shadow-md rounded-lg">
                    <Image
                        src="/icons/BlackStars.png"
                        alt="Stars"
                        width={116}
                        height={18.89}
                    />
                    <p className="text-xl pt-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                    <div className="flex items-center pt-4">
                        <Image
                            src="/icons/stephen.png"
                            alt="Stephen"
                            width={56}
                            height={56}
                            className="rounded-full"
                        />
                        <div className="ml-4 text-base">
                            <h1 className="font-semibold">Stephen Kerubo</h1>
                            <p className="font-normal">UI/UX Designer</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation for testimonials */}
            <div className="flex justify-between items-center mt-8">
                <Image
                    src="/icons/dots.png"
                    alt="Dots"
                    width={72}
                    height={8}
                />
                <Image
                    src="/icons/sliderbuttons.png"
                    alt="Slider buttons"
                    width={111}
                    height={48}
                />
            </div>
        </section>
    );
};

export default CustomerTestimonials;
