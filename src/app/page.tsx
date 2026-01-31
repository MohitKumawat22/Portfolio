import Lines from "../component/Lines";
import LetterGlitch from '../components/LetterGlitch';
// import ScrambledText from "../components/ScrambledText";
// import { PlusIcon } from "../components/ui/plus";
// import React from "react";
// import SheryEffects from "../component/SheryEffects";
import HoverGrid from "../component/HoverGrid";
import PixelBlast from '../component/PixelBlast';
import Image from "next/image";
import Link from "next/link";
// import Footer from "@/component/Footer";
import "./globals.css";

import Eyes from "@/component/eyesss";

const page = () => {
  return (
    <>
   <main className="min-h-screen  overflow-hidden w-full flex justify-center flex-col items-center ">
      <div className="w-full h-[25vh]   mb-10 flex justify-center  z-10 items-center ">
         <h1 className="text-5xl md:text-8xl lg:text-9xl uppercase flex  font-bold z-20">
         <span className="whitespace-nowrap  ">m</span><Eyes/><span className="whitespace-nowrap">hit</span> &nbsp; <Eyes/><span className="whitespace-nowrap">stwal</span>
         </h1>
        
      </div>
        <div className="w-full h-[27vh]  flex  justify-center  relative items-center overflow-hidden">
        <Lines/>  
      </div>
          <div className="h-20 w-60 z-30 flex flex-col absolute bottom-10 right-10">
          <h3 className="capitalize opacity-60 z-30 text-black hover:opacity-100 align-right transition-opacity duration-100">
            Helping startups and brands turn ideas into reality. Currently
            available for new projects.
          </h3>
        </div>
           <div className="flex items-center  justify-center h-auto w-auto absolute bottom-10 m-auto ">
          <Link href="/contact">
            <div className="aminebuttons z-30 bg-white w-50 h-11 select-none rounded-full m-3 p-2 flex items-center justify-center uppercase">
              Contact
            </div>
          </Link>
          <div className="aminebuttons z-30 bg-whi h-11 w-50 rounded-full select-none m-3 p-2 flex items-center justify-center uppercase">
            Hire{" "}
          </div>
        </div>
           <HoverGrid />

  </main>
     
{/* <div  className="-z-1 h-full bgimg1  opacity-40 absolute  top-0 left-0 w-full"> */}
  {/* <PixelBlast
    variant="square"
    pixelSize={4}
    color="#f4c313ee"
    patternScale={2}
    patternDensity={1}
    pixelSizeJitter={0}
    enableRipples
    rippleSpeed={0.4}
    rippleThickness={0.12}
    rippleIntensityScale={1.5}
    liquid={false}
    liquidStrength={0.12}
    liquidRadius={1.2}
    liquidWobbleSpeed={5}
    speed={0.5}
    edgeFade={0.25}
    transparent
  /> */}
  {/* <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
  
/> */}
{/* </div> */}
 
     
      {/* <div className="h-dvh w-dvw   absolute top-0 -z-1 cover ">
        <Image 
        src="/whitegrid.png" 
        alt="hello"
    
        className="h-[100%]  w-[100%] object-cover " 
        height={900}
        width={900}
      />
        
      </div> */}
{/* <div className="fixed inset-0 w-full h-full bg-white"> */}
      {/* The 'bg-[length:30px_30px]' sets the grid size.
        The linear gradients create the thin lines. 
      */}
      {/* <div 
        className="absolute inset-0 w-full h-full  bg-[length:30px_30px]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            
          `,
        }}
      /> */}
    
    {/* </div> */}
   
  
      <div className="h-[200vh] w-screen relative flex flex-row ">
        <div className="h-[100vh] w-full  absolute flex justify-center items-center ">
          <h1 className="text-[200px] whitespace-nowrap top-1/2 left-1/2  transform -translate-x-1/2 transform -translate-y-1/2 text-center  uppercase z-2  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold opacity-50   absolute">
            About Me
          </h1>
          <span className="absolute top-20 left-30">Aspiring to understand <br />
            what i coded yesterday </span>


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
      <div className="h-dvh w-dvw 
      " >

      </div>
      {/* <Footer/> */}
    </>
  );
};

export default page;
