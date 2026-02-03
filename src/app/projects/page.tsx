
"use client"
import React from 'react'
import {  Environment,  ScrollControls,  } from '@react-three/drei'
import * as THREE from "three";
import { Canvas } from '@react-three/fiber'
import Projectlap from '@/component/Projectlap';

const page = () => {
  return (
     <div className='h-screen w-full bg-black  '>
   <Canvas  camera={{ fov: 12, position: [0,-10, 220]}}>
                  <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]}  />  
                  <ScrollControls> 
                    <Projectlap/> 
                 </ScrollControls>  
               </Canvas>
               </div>
  )
}

export default page
