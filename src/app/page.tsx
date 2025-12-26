import Lines from "../component/Lines";
import ScrambledText from "../components/ScrambledText";
import { PlusIcon } from "../components/ui/plus";
import React from "react";
import SheryEffects from "../component/SheryEffects";
import Eyes from "../component/eyesss";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <>
    <div className="w-full h-dvh flex flex-col justify-center overflow-hidden items-center text-white ">
          
     
        <SheryEffects />
        <h1 className="text-target text-9xl text-black font-bold uppercase">
          {" "}
          Mohit Ostwal
        </h1>
        <Eyes />
        <div className="h-15 w-120 m-10 flex flex-row justify-center items-center overflow-hidden ">
          {/* <PlusIcon className='text-xl z-2'/>
         <div className='w-auto h-11  textanimation'>
          <h5 className='text-5xl uppercase font-bold z-2'>MERN Developer</h5>
          <h5 className='text-5xl uppercase font-bold z-2'>Freelancer</h5>
          <h5 className='text-5xl uppercase font-bold z-2'>UI UX Designer</h5>
         </div> */}
        </div>
        <Lines />
        <div></div>
        <div className="h-20 w-60  flex flex-col absolute bottom-10 right-10">
          <h3 className="capitalize opacity-60 text-black hover:opacity-100 align-right transition-opacity duration-100">
            Helping startups and brands turn ideas into reality. Currently
            available for new projects.{" "}
          </h3>
        </div>
        <div className="flex items-center justify-center h-auto w-auto absolute bottom-10 m-auto ">
          <Link href='/contact'>
          <div className="aminebuttons  w-50 h-11 select-none rounded-full m-3 p-2 flex items-center justify-center uppercase">
            Contact
          </div></Link>
          <div className="aminebuttons  h-11 w-50 rounded-full select-none m-3 p-2 flex items-center justify-center uppercase">
            Hire{" "}
          </div>
        </div>
      </div>
       <div className='h-dvh w-dvw  absolute top-0 -z-1 cover'>
       {/* <img className='h-[100%] w-[100%]' src="/i.avif" alt=""  /> */}
      {/* <img src="/code.jpg" alt="" /> */}
     
  
    </div>      
      
    </>
  );
};

export default page;
