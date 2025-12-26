import Lines from "@/component/Lines"
import Image from "next/image"


const page = () => {
  return (
    <main className="h-screen w-full   flex flex-col" >
<div className=" w-full h-[180px]  mt-30 flex items-center justify-center">
 
 {/* <p className="font-extrabold font-sekuya text-black text-9xl z-30 uppercase bg-white">Project</p> */}
    <Image
    src='/p2.png'
    height={900}
    width={900}
    alt="hello dear"
    className=" m-80 z-30 invert"
    />
</div>
<div className="absolute h-10 z-20 top-50 w-full bg-amber-400"></div>
  <div className="h-96 w-full  flex items-center justify-center ">
<Image 
src="/laptop2.png"
height={400}
width={400}
alt="" />
  </div>


    </main>
  )
}

export default page
