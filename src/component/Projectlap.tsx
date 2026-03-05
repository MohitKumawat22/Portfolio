"use client"
import React from 'react'
import { useGLTF, useScroll, useTexture, Center } from '@react-three/drei'
import type { GLTF } from 'three-stdlib';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber'

const Projectlap: React.FC = () => {
   const model = useGLTF("./mac.glb") as GLTF;
   const tex = useTexture("./laptopw.avif");
   const meshesRef = React.useRef<Record<string, THREE.Object3D>>({});
   
   React.useEffect(() => {
     // populate meshes reference once model is loaded
     model.scene.traverse((e) => {
       meshesRef.current[e.name] = e;
     });

     // initial orientation
     const screen = meshesRef.current.screen;
     if (screen) {
       screen.rotation.x = THREE.MathUtils.degToRad(180);
     }

     const matte = meshesRef.current.matte as THREE.Mesh | undefined;
     if (matte && 'material' in matte) {
       // the material types from GLTF can be complex; cast to any for property access
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       const material = matte.material as any;
       material.map = tex;
       material.emissiveIntensity = 0;
       material.metalness = 0;
       material.roughness = 1;
     }
   }, [model, tex]);
   
   const data = useScroll();     

   useFrame(() => {
      const screen = meshesRef.current.screen;
      if (screen) {
        screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
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
