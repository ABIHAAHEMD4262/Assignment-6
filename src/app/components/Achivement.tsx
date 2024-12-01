import React from "react";

const Achivement = () =>{
  return (
    <div className="flex flex-col items-center " >
        <div className="text-center mb-10">
           <h2 className=" text-5xl font-bold" > Our Achivements</h2>
           <p className="text-lg mt-4 w-[1200px] hidden sm:block ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          Duis cursus, mi quis viverra. Ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. 
        </p>
        {/*On smaller screens */} 
        <p className="text-lg md:hidden lg:hidden w-[328px] mt-[20px] text-center block sm:hidden">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mt-8">
        {/* Box 1 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-5xl font-bold">+200</h1>
          <p className="font-normal text-base mt-2">courses</p>
        </div>
        
        {/* Box 2 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-5xl font-bold">50K</h1>
          <p className="font-normal text-base mt-2">Mentors</p>
        </div>
        
        {/* Box 3 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-5xl font-bold">370k</h1>
          <p className="font-normal text-base mt-2">Students</p>
        </div>
        
        {/* Box 4 */}
        <div className="flex flex-col items-center justify-center p-4 rounded-lg">
          <h1 className="text-5xl font-bold">100+</h1>
          <p className="font-normal text-base mt-2">Recognition</p>
        </div>
      </div>
</div>
  )
}
export default Achivement;