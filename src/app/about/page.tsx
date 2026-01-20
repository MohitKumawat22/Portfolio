import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
   <div className="h-[200vh] w-screen relative flex flex-row ">
           <div className="h-[100vh] w-full absolute flex justify-center items-center ">
             <h1 className="text-[200px] whitespace-nowrap top-1/2 left-1/2  transform -translate-x-1/2 transform -translate-y-1/2 text-center  uppercase z-2  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold opacity-50   absolute">
               About Me{" "}
             </h1>
           </div>
   
           <Image
             className="rounded-lg z-4 sticky top-20 left-1/2  transform -translate-x-1/2 transform translate-y-0 h-[90vh] w-auto top-2 object-content"
             src="/self5.png"
             alt="my profile"
             width={400}
             height={400}
           />
   
           <div className="h-[100vh] w-1/3 flex justify-center items-center "></div>
         </div>
  )
}

export default page
