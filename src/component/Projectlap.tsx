"use client"
import React from 'react'
import { useGLTF, useScroll, useTexture, Center } from '@react-three/drei'
import * as THREE from "three";
import { useFrame } from '@react-three/fiber'

const Projectlap = () => {
   let model = useGLTF("./mac.glb");
   let tex = useTexture("./laptopw.avif");
   let meshes: any = {};
   
   model.scene.traverse((e: any) => {
       meshes[e.name] = e;  
   });

   if (meshes.screen) {
     meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
   }
   
   if (meshes.matte) {
     meshes.matte.material.map = tex;
     meshes.matte.material.emissiveIntensity = 0;
     meshes.matte.material.metalness = 0;
     meshes.matte.material.roughness = 1;
   }
   
   let data = useScroll();     

   useFrame((state, delta) => {
      if (meshes.screen) {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
      }
   });

   return (
     <group position={[0, -21, 20]}>
       <Center>
         <primitive object={model.scene}/>
       </Center>
     </group>
   )
}

export default Projectlap
