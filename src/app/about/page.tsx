import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <div className="h-[81vh] w-full  rounded-[70px] border-black  border border-solid  flex items-center  justify-center">
              <div className="h-[80vh] w-[90%] bg-amber-100 rounded-[70px] flex items-center flex-row">
                <div className="h-[100%] w-[40%]  rounded-[70px] overflow-hidden flex items-end justify-center ">
                  <Image
                    src="/owne.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="relative top-30 left-10"
                  />
                </div>
                <div className="h-[100%] w-[60%]  rounded-[70px] border-red  flex items-center justify-center">
                  <h2 className="text-4xl font-bold uppercase ">
                    Mohit Ostwal Kumawat
                  </h2>
                </div>
              </div>
            </div>
    </div>
  )
}

export default page
