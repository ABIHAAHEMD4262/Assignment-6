import React from "react";
import Image from "next/image";

const OurTeam = () => {
    return(
        <section className="font-roboto sm:h-681 h-auto">
             {/*our team*/}
      <div className="flex flex-col justify-center items-center md:px-8 lg:px-16 h-auto  ">
        {/* Title Section */}
        <h1 className="text-5xl font-bold text-center text-black mb-10">Our team</h1>
        <p className="text-lg text-center font-normal mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[40px]">
        {/* Box 1 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src='/images/james.png'
            alt='James Nduku'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">James Nduku</h1>
          <p className="text-lg mt-2">Marketing Coordinator</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src='/images/joseph.png'
            alt='Joseph Munyambu'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Joseph Munyambu</h1>
          <p className="text-lg mt-2">Nursing Assistant</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center text-center">
          <Image
            src='/images/medical.png'
            alt='Joseph Ngumbau'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Joseph Ngumbau</h1>
          <p className="text-lg mt-2">Medical Assistant</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 4 */}
        <div className="flex flex-col items-center text-center mt-[30px]">
          <Image
            src='/images/erick.png'
            alt='Erick Kipkemboi'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Erick Kipkemboi</h1>
          <p className="text-lg mt-2">Web Designer</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 5 */}
        <div className="flex flex-col items-center text-center mt-[30px]">
          <Image
            src='/images/stephen.png'
            alt='Stephen Kerubo'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">Stephen Kerubo</h1>
          <p className="text-lg mt-2">President of Sales</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>

        {/* Box 6 */}
        <div className="flex flex-col items-center text-center mt-[30px]">
          <Image
            src='/images/john.png'
            alt='John Leboo'
            width={80}
            height={80}
            className="mx-auto"
          />
          <h1 className="text-xl font-semibold mt-4">John Leboo</h1>
          <p className="text-lg mt-2">Dog Trainer</p>
          <div className="flex flex-row justify-center items-center gap-3 mt-4">
            <Image
              src="/icons/linkdln.svg"
              alt='LinkedIn'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Twitter.svg'
              alt='Twitter'
              width={24}
              height={24}
            />
            <Image
              src='/icons/Dribble.png'
              alt='Dribble'
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

        </section>
    )
}
export default OurTeam;